import type { Metadata } from "next";
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import "./globals.css";
import { House } from "lucide-react";
import { NavItem } from "@/components/NavItem";
import Link from "next/link";
import Image from "next/image";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });
const redHatText = Red_Hat_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oracle Aggregator",
  description:
    "Oracle Aggregator to get the average feed prices using both Pyth Oracle and Switchboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.className} ${redHatText.className}  bg-[rgb(241,234,234)]`}
      >
        <nav className="relative flex px-[5%] py-4 bg-[rgb(37,34,70)] rounded-b-xl after:content-[''] after:absolute after:w-[80%] after:left-[5%] after:bottom-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-purple-300 after:to-transparent">
          <Link href="/">
            <h1 className="font-red-hat-display text-purple-300 text-2xl font-bold whitespace-nowrap">
              Oracle Aggregator
            </h1>
          </Link>

          <div className="flex w-full justify-center">
            <div className="flex gap-6">
              <NavItem href="">Home</NavItem>
              <NavItem href="">About</NavItem>
              <NavItem href="">Services</NavItem>
              <NavItem href="">Contact</NavItem>
            </div>
          </div>
        </nav>
        <header className="relative w-full h-[400px] px-[5%] mt-[-10px] z-[-1] bg-gradient-to-r from-[rgb(37,34,70)] to-[rgb(38,34,70)] flex items-center">
          <div className="flex flex-col text-white gap-3 ">
            <h1 className="font-red-hat-display text-4xl font-bold text-purple-300">
              Real-Time Prices
            </h1>
            <p className="text-xl text-purple-50 max-w-[500px]">
              Get updated price feeds generated using two oracles to achieve the
              most accurate value
            </p>
          </div>
          <Image
            src="/assets/header-oracle.webp"
            alt="Header Oracle Image"
            height={400}
            width={400}
            priority={true}
            className="ml-[10%]"
          />
        </header>
        {children}
      </body>
    </html>
  );
}
