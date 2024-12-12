import React from 'react';
import { ArrowRightLeft } from 'lucide-react';
import { ConversionResult } from '../types/currency';

interface Props {
  result: ConversionResult;
}

export function ExchangeCard({ result }: Props) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          {result.fromAmount.toFixed(2)}
        </div>
        <ArrowRightLeft className="text-blue-400 mx-4" />
        <div className="text-2xl font-bold text-white">
          {result.toAmount.toFixed(2)}
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-400">
        <p>Rate: {result.rate.toFixed(4)}</p>
        <p>Last updated: {result.lastUpdate}</p>
      </div>
    </div>
  );
}