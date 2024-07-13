export interface PriceData {
  symbol: string;
  price: number;
  icon: string;
}

export type FetchPriceResponse = Promise<number | undefined>;
export type SwitchboardResponse = Array<{
  feedHash: string;
  results: Array<number>;
}>;
