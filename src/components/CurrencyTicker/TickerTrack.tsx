import React from 'react';
import { TickerItem } from './TickerItem';
import { TickerRate } from '../../types/currency';

interface Props {
  rates: TickerRate[];
}

export function TickerTrack({ rates }: Props) {
  return (
    <div className="flex shrink-0">
      {rates.map((rate) => (
        <TickerItem key={rate.code} rate={rate} />
      ))}
    </div>
  );
}