import React from 'react';
import { cn } from '../../utils/cn';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string; group?: string }[];
}

export function Select({ label, error, options, className, ...props }: SelectProps) {
  const groupedOptions = options.reduce((acc, option) => {
    const group = option.group || 'default';
    if (!acc[group]) acc[group] = [];
    acc[group].push(option);
    return acc;
  }, {} as Record<string, typeof options>);

  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-1">
          {label}
        </label>
      )}
      <select
        className={cn(
          "w-full glass-effect border border-gray-700 text-white rounded-lg p-3",
          "focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
          "appearance-none cursor-pointer",
          error && "border-red-500",
          className
        )}
        {...props}
      >
        {Object.entries(groupedOptions).map(([group, groupOptions]) => (
          group === 'default' ? (
            groupOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))
          ) : (
            <optgroup key={group} label={group}>
              {groupOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </optgroup>
          )
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}