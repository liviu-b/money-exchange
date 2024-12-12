import React, { useState, useEffect } from 'react';
import { currencies } from './data/currencies';
import { useExchangeRate } from './hooks/useExchangeRate';
import { CurrencySelect } from './components/CurrencySelect';
import { AmountInput } from './components/AmountInput';
import { SwapButton } from './components/SwapButton';
import { ExchangeCard } from './components/ExchangeCard';
import { LiveRates } from './components/LiveRates';
import { Attribution } from './components/Attribution';
import { ConversionResult } from './types/currency';

export default function App() {
  const [amount, setAmount] = useState<string>('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [isSwapping, setIsSwapping] = useState(false);
  const { data, loading, error } = useExchangeRate(fromCurrency);
  const [result, setResult] = useState<ConversionResult | null>(null);

  useEffect(() => {
    if (data && data.conversion_rates) {
      const rate = data.conversion_rates[toCurrency];
      const fromAmount = parseFloat(amount) || 0;
      setResult({
        fromAmount,
        toAmount: fromAmount * rate,
        rate,
        lastUpdate: data.time_last_update_utc,
      });
    }
  }, [data, amount, toCurrency]);

  const handleSwap = () => {
    setIsSwapping(true);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setTimeout(() => setIsSwapping(false), 500);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Currency Exchange
        </h1>

        <div className="space-y-6">
          <AmountInput value={amount} onChange={setAmount} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CurrencySelect
              currencies={currencies}
              value={fromCurrency}
              onChange={setFromCurrency}
              label="From Currency"
            />
            <CurrencySelect
              currencies={currencies}
              value={toCurrency}
              onChange={setToCurrency}
              label="To Currency"
            />
          </div>

          <SwapButton onClick={handleSwap} isSwapping={isSwapping} />

          {loading && (
            <div className="text-center text-gray-400">Loading rates...</div>
          )}
          {error && <div className="text-red-500 text-center">{error}</div>}
          {result && <ExchangeCard result={result} />}
        </div>

        <div className="mt-12">
          <LiveRates />
        </div>

        <Attribution />
      </div>
    </div>
  );
}