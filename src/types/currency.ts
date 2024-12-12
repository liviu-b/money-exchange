export interface ExchangeRateResponse {
  result: string;
  base_code: string;
  conversion_rates: {
    [key: string]: number;
  };
  time_last_update_utc: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  category: string;
}

export interface ConversionResult {
  fromAmount: number;
  toAmount: number;
  rate: number;
  lastUpdate: string;
}

export interface GroupedCurrencies {
  [key: string]: Currency[];
}

export interface TickerRate {
  code: string;
  name: string;
  rate: number;
  previous: number;
}