# Oracle Aggregator

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Build and Run](#build-and-run)
- [Custom Price Feeds](#custom-price-feeds)

## Introduction

`Oracle Aggregator` is a powerful tool designed to fetch and aggregate price data from Pyth and Switchboard oracles. By averaging the price feeds from these sources, this project aims to provide a more accurate and reliable price.

## Features

- **Data Aggregation**: Collects price feeds from Pyth and Switchboard.
- **Accurate Pricing**: Averages the prices to provide a more precise and dependable value.
- **Modern Stack**: Built with Next.js, React, and TypeScript.

## Technologies

- **Framework**: Next.js
- **Language**: TypeScript
- **Libraries**:
  - React
  - Pyth Network Client
  - TailwindCSS
- **Dev Tools**:
  - ESLint
  - TypeScript
  - PostCSS
  - Lucide React
  - React Spinners

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>= 14.x.x)
- npm (>= 6.x.x) or yarn (>= 1.x.x)

## Installation

To set up your development environment, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Tonashiro/oracle-aggregator.git
    cd oracle-aggregator
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

## Development

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```
This will start the Next.js development server. Open your browser and navigate to http://localhost:3000.

## Build and Run

To build the project for production, run:

```bash
npm run build
# or
yarn build
```

To start the production server, run:
```bash
npm start
# or
yarn start
```

## Custom Price Feeds

To add or remove any price feed, follow these steps:

1. Navigate to the `constants` file located in `src/constants`.

2. Add the name you want for the new price feed in the `symbols` array, for example `BTC/USD`.

3. Add the new value inside the priceIds object. Follow the structure of the existing entries as a guide. For example:

```
"BTC/USD": {
  pyth: "your_pyth_price_feed",
  switchboard: "your_switchboard_feed_hash",
  icon: "/path/to/your/icon.svg"
}
```

4. To get the Pyth price feeds, visit [Pyth Price Feeds](https://docs.pyth.network/price-feeds/sponsored-feeds).

5. To get the Switchboard feed hash, visit [Switchboard Solana Mainnet](https://ondemand.switchboard.xyz/solana/mainnet), click over the feed you want, and copy the "Feed Hash".

6. Finally, add a new icon in the project or use one from the web. Just paste the URL or path to the icon in the icon field.

That's it! You have now added a new price feed to track using both oracle aggregators.