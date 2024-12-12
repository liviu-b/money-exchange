import React from 'react';
import { Currency } from '../types/currency';
import { groupCurrenciesByCategory } from '../utils/currency';

interface Props {
  currencies: Currency[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  className?: string;
}

export function CurrencySelect({ currencies, value, onChange, label, className = '' }: Props) {
  const groupedCurrencies = groupCurrenciesByCategory(currencies);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-gray-300 text-sm font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="glass-effect border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
      >
        {Object.entries(groupedCurrencies).map(([category, categoryCurrencies]) => (
          <optgroup key={category} label={category}>
            {categoryCurrencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.code} - {currency.name} ({currency.symbol})
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}