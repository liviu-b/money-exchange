import React, { memo } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { TickerRate } from '../../types/currency';
import { cn } from '../../utils/cn';

interface Props {
  rate: TickerRate;
}

export const RateCard = memo(function RateCard({ rate }: Props) {
  const trend = rate.rate > rate.previous;
  const percentChange = ((Math.abs(rate.rate - rate.previous) / rate.previous) * 100).toFixed(2);
  
  return (
    <div className="glass-effect border border-gray-700/50 rounded-xl p-4 hover:border-gray-600/50 
                    transition-all duration-300 group">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-100">{rate.code}/USD</h3>
          <p className="text-sm text-gray-400">{rate.name}</p>
        </div>
        {rate.rate !== rate.previous && (
          <div className={cn(
            "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
            trend ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
          )}>
            {trend ? (
              <TrendingUp size={14} className="transition-transform group-hover:scale-110" />
            ) : (
              <TrendingDown size={14} className="transition-transform group-hover:scale-110" />
            )}
            {percentChange}%
          </div>
        )}
      </div>
      
      <div className="flex items-baseline gap-2">
        <span className={cn(
          "text-2xl font-mono font-semibold tabular-nums transition-colors duration-300",
          trend ? "text-green-400" : "text-red-400"
        )}>
          {rate.rate.toFixed(4)}
        </span>
      </div>
    </div>
  );
});