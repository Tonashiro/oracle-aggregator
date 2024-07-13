"use client";

import { useState, useEffect } from "react";
import { Loader } from "@/components/Loader";
import Image from "next/image";
import { PYTH_CONNECTION, priceIds } from "@/constants";
import { PriceData } from "@/types";
import { fetchSwitchboardPrice } from "@/lib/fetchSwitchboardPrice";

/**
 * PriceDataTable component for displaying price data in a table format.
 *
 * @component
 * @returns {JSX.Element} The rendered PriceDataTable component.
 */
const PriceDataTable: React.FC = () => {
  const [feedData, setFeedData] = useState<PriceData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const symbols = ["SOL/USD", "BTC/USD", "INF/USD", "JUP/USD", "BONK/USD"];

  useEffect(() => {
    async function fetchPrices() {
      try {
        // Fetch Pyth prices
        const pythIds = symbols.map((symbol) => priceIds[symbol].pyth);
        const priceFeeds = await PYTH_CONNECTION.getLatestPriceFeeds(pythIds);

        const pythPrices: { [key: string]: number } = {};
        priceFeeds?.forEach((priceFeed: any, index) => {
          if (priceFeed && priceFeed.price) {
            pythPrices[symbols[index]] =
              Number(priceFeed.price.price) /
              Math.pow(10, -priceFeed.price.expo);
          }
        });

        // Fetch Switchboard prices
        const switchboardPrices = await Promise.all(
          symbols.map((symbol) => fetchSwitchboardPrice(symbol))
        );

        // Calculate average prices
        const newFeedData = symbols.map((symbol, index) => {
          const pythPrice = pythPrices[symbol];
          const switchboardPrice = switchboardPrices[index];
          const averagePrice =
            pythPrice !== undefined && switchboardPrice !== undefined
              ? (pythPrice + switchboardPrice) / 2
              : pythPrice ?? switchboardPrice;

          return {
            symbol,
            price: averagePrice,
            icon: priceIds[symbol].icon,
          };
        });

        setFeedData(newFeedData);
      } catch (error) {
        console.error("Failed to fetch prices:", error);
      } finally {
        setLoading(false);
      }
    }

    // Initial fetch
    fetchPrices();

    // Fetch every 5 seconds
    const intervalId = setInterval(fetchPrices, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="w-full flex flex-col items-center mb-10">
      <h1 className="font-red-hat-display text-4xl mb-6 mt-6">Price Feeds</h1>
      <table className="text-left border-collapse">
        <thead>
          <tr className="border-y-[0.5px] border-purple-900 bg-[rgb(223,220,220)]">
            <th className="p-2 border-r-[0.5px] border-purple-900">
              Price Feed
            </th>
            <th className="p-2">Average Price</th>
          </tr>
        </thead>
        <tbody>
          {feedData.map((feed) => (
            <tr
              key={feed.symbol}
              className="border-b-[0.5px] border-purple-900"
            >
              <td className="flex items-center gap-2 py-5 px-2">
                <Image
                  src={feed.icon}
                  alt={`${feed.symbol}-icon`}
                  width={32}
                  height={32}
                />
                {feed.symbol}
              </td>
              <td className="w-[200px] px-2">
                {feed.price !== undefined
                  ? `$${
                      feed.price > 100
                        ? feed.price.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })
                        : feed.price.toFixed(10)
                    }`
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceDataTable;
