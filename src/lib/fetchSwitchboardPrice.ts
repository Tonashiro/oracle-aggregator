import { SymbolType, priceIds } from "@/constants";
import { FetchPriceResponse, SwitchboardResponse } from "@/types";

/**
 * Fetches the price of a symbol from the Switchboard network.
 *
 * @param {string} symbol - The symbol to fetch the price for.
 * @returns {Promise<number | undefined>} - A promise that resolves to the price of the symbol or undefined if not available.
 * @throws {Error} - Throws an error if the symbol is unsupported.
 */
export async function fetchSwitchboardPrice(
  symbol: string
): FetchPriceResponse {
  const switchboardId = priceIds[symbol as SymbolType].switchboard;

  if (!switchboardId) {
    throw new Error(`Unsupported symbol: ${symbol}`);
  }

  try {
    const response = await fetch(
      `https://crossbar.switchboard.xyz/simulate/${switchboardId}`,
      { method: "GET" }
    );
    const data: SwitchboardResponse = await response.json();

    if (!data || !data[0].results || !data[0].results[0]) {
      return undefined;
    }

    return Number(data[0].results[0]);
  } catch (error: any) {
    console.error(`Failed to fetch Switchboard price for ${symbol}:`, error);

    return undefined;
  }
}
