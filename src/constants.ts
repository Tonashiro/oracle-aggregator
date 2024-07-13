import { PriceServiceConnection as PythConnection } from "@pythnetwork/price-service-client";

const PYTH_HERMES_URL = "https://hermes.pyth.network";
export const PYTH_CONNECTION = new PythConnection(PYTH_HERMES_URL);
export const symbols = [
  "SOL/USD",
  "BTC/USD",
  "INF/USD",
  "JUP/USD",
  "BONK/USD",
] as const;

type SymbolType = (typeof symbols)[number];

export const priceIds: Record<
  SymbolType,
  { pyth: string; switchboard: string; icon: string }
> = {
  "SOL/USD": {
    pyth: "ef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d",
    switchboard:
      "0xda11e2f7cc293f3c133a2662c70d261a03158f1c7ac32079b9bd089e81abcabb",
    icon: "/assets/tokens/sol.svg",
  },
  "BTC/USD": {
    pyth: "e62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
    switchboard:
      "0xe2ba292a366ff6138ea8b66b12e49e74243816ad4edd333884acedcd0e0c2e9d",
    icon: "/assets/tokens/btc.svg",
  },
  "JUP/USD": {
    pyth: "0a0408d619e9380abad35060f9192039ed5042fa6f82301d0e48bb52be830996",
    switchboard:
      "0x7d15fea6a51307c78d6f3c2262c12bfdea3d034c431f3fa5c0d46c897de15853",
    icon: "/assets/tokens/jup.svg",
  },
  "BONK/USD": {
    pyth: "72b021217ca3fe68922a19aaf990109cb9d84e9ad004b4d2025ad6f529314419",
    switchboard:
      "0xce29797789fae4fac9fda6a5b458aa3e25f9adcf9edc5e868217d08ce3561f2f",
    icon: "/assets/tokens/bonk.svg",
  },
  "INF/USD": {
    pyth: "f51570985c642c49c2d6e50156390fdba80bb6d5f7fa389d2f012ced4f7d208f",
    switchboard:
      "0x9449c99961eda217b3becd5e0eb96ce732d1788ea4c019f1a8569feecaa981b5",
    icon: "/assets/tokens/inf.svg",
  },
};
