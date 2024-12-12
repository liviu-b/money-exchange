import React, { useState, useEffect } from 'react';
import { useExchangeRate } from '../../hooks/useExchangeRate';
import { RateCard } from './RateCard';
import { TickerRate } from '../../types/currency';
import { MAJOR_CURRENCIES } from '../../data/major-currencies';
import { ArrowLeftRight } from 'lucide-react';

export function LiveRates() {
  const { data } = useExchangeRate('USD');
  const [rates, setRates] = useState<TickerRate[]>([]);

  useEffect(() => {
    if (data?.conversion_rates) {
      setRates((prevRates) =>
        MAJOR_CURRENCIES.slice(0, 6).map((currency) => {
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
    <section className="animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <ArrowLeftRight className="text-blue-400" size={20} />
        <h2 className="text-xl font-semibold text-gray-100">Live Exchange Rates</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rates.map((rate) => (
          <RateCard key={rate.code} rate={rate} />
        ))}
      </div>
    </section>
  );
}