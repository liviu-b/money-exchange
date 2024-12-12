import React from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface Props {
  onClick: () => void;
  isSwapping: boolean;
}

export function SwapButton({ onClick, isSwapping }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 
                 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 
                 transform hover:scale-[1.02] active:scale-95 
                 shadow-lg hover:shadow-blue-500/25
                 relative overflow-hidden group"
      disabled={isSwapping}
    >
      <div className="relative flex items-center justify-center gap-2">
        <ArrowLeftRight 
          size={20} 
          className={`transition-transform duration-300 group-hover:rotate-180 ${
            isSwapping ? 'animate-swap' : ''
          }`}
        />
        <span className={`font-medium ${isSwapping ? 'opacity-80' : ''}`}>
          Swap Currencies
        </span>
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
                      transform -skew-x-45 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000" />
    </button>
  );
}