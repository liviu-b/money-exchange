import React, { memo } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { TickerRate } from '../../types/currency';
import { cn } from '../../utils/cn';

interface Props {
  rate: TickerRate;
}

export const TickerItem = memo(function TickerItem({ rate }: Props) {
  const trend = rate.rate > rate.previous;
  const percentChange = ((Math.abs(rate.rate - rate.previous) / rate.previous) * 100).toFixed(2);
  
  return (
    <div className="flex items-center space-x-4 px-6 py-3 bg-gray-800/40 backdrop-blur-sm rounded-xl 
                    whitespace-nowrap mx-2 hover:bg-gray-800/60 transition-all duration-300 
                    border border-gray-700/50 hover:border-gray-600/50 group">
      <div className="flex flex-col">
        <span className="font-medium text-sm tracking-wide text-gray-100">{rate.code}/USD</span>
        <span className="text-xs text-gray-400 font-medium">{rate.name}</span>
      </div>
      
      <div className="flex flex-col items-end">
        <span className={cn(
          "text-sm font-mono tabular-nums transition-colors duration-300",
          trend ? "text-green-400" : "text-red-400"
        )}>
          {rate.rate.toFixed(4)}
        </span>
        
        {rate.rate !== rate.previous && (
          <div className={cn(
            "flex items-center gap-1 text-xs",
            trend ? "text-green-400" : "text-red-400"
          )}>
            {trend ? (
              <TrendingUp size={14} className="transition-transform group-hover:scale-110" />
            ) : (
              <TrendingDown size={14} className="transition-transform group-hover:scale-110" />
            )}
            <span className="tabular-nums font-medium">{percentChange}%</span>
          </div>
        )}
      </div>
    </div>
  );
});