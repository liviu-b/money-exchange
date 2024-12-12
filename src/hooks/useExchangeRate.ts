import { useState, useEffect } from 'react';
import { ExchangeRateResponse } from '../types/currency';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

export function useExchangeRate(baseCurrency: string) {
  const [data, setData] = useState<ExchangeRateResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/${API_KEY}/latest/${baseCurrency}`
        );
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError('Failed to fetch exchange rates');
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [baseCurrency]);

  return { data, loading, error };
}