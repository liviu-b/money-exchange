import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useExchangeRate } from '../hooks/useExchangeRate';

const MAJOR_CURRENCIES = [
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'CAD', name: 'Canadian Dollar' },
];

interface Rate {
  code: string;
  name: string;
  rate: number;
  previous: number;
}

export function CurrencyTicker() {
  const { data } = useExchangeRate('USD');
  const [rates, setRates] = useState<Rate[]>([]);

  useEffect(() => {
    if (data?.conversion_rates) {
      setRates((prevRates) =>
        MAJOR_CURRENCIES.map((currency) => {
          const currentRate = data.conversion_rates[currency.code];
          const previousRate = prevRates.find((r) => r.code === currency.code)?.rate || currentRate;
          return {
            ...currency,
            rate: currentRate,
            previous: previousRate,
          };
        })
      );
    }
  }, [data]);

  return (
    <div className="w-full overflow-hidden bg-gray-800 rounded-lg p-2 mb-8">
      <div className="flex gap-4 animate-scroll">
        {rates.map((rate) => (
          <div
            key={rate.code}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-md animate-fade-in"
          >
            <span className="font-medium text-sm">{rate.code}/USD:</span>
            <span className="text-sm">{rate.rate.toFixed(4)}</span>
            {rate.rate !== rate.previous && (
              <span className={rate.rate > rate.previous ? 'text-green-400' : 'text-red-400'}>
                {rate.rate > rate.previous ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}