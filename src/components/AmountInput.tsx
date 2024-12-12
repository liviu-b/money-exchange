import React from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function AmountInput({ value, onChange }: Props) {
  return (
    <div className="relative">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full glass-effect border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        placeholder="Enter amount"
      />
    </div>
  );
}