import { Currency, GroupedCurrencies } from '../types/currency';

export function groupCurrenciesByCategory(currencies: Currency[]): GroupedCurrencies {
  return currencies.reduce((acc: GroupedCurrencies, currency) => {
    if (!acc[currency.category]) {
      acc[currency.category] = [];
    }
    acc[currency.category].push(currency);
    return acc;
  }, {});
}