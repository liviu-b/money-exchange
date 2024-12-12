import React, { useState, useEffect } from 'react';
import { useExchangeRate } from '../../hooks/useExchangeRate';
import { TickerTrack } from './TickerTrack';
import { TickerRate } from '../../types/currency';
import { MAJOR_CURRENCIES } from '../../data/major-currencies';
import { ArrowLeftRight } from 'lucide-react';

export function CurrencyTicker() {
  const { data } = useExchangeRate('USD');
  const [rates, setRates] = useState<TickerRate[]>([]);

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

  if (rates.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-3 mb-8 border border-gray-700/30">
      <div className="flex items-center gap-3 mb-3 px-2">
        <ArrowLeftRight className="text-blue-400" size={18} />
        <h2 className="text-sm font-medium text-gray-300">Live Exchange Rates</h2>
      </div>
      
      <div className="relative">
        <div className="flex animate-ticker hover:pause">
          <TickerTrack rates={rates} />
          <TickerTrack rates={rates} />
        </div>
        
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 via-gray-900/70 to-transparent z-10" />
      </div>
    </div>
  );
}