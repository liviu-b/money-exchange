import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  isLoading,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "w-full font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 relative overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg hover:shadow-blue-500/25",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      disabled={isLoading}
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
                    transform -skew-x-45 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000" />
    </button>
  );
}