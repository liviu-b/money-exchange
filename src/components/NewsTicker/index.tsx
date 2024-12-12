import React from 'react';
import { NewsItem } from './NewsItem';
import { useNewsUpdates } from '../../hooks/useNewsUpdates';

export function NewsTicker() {
  const { news } = useNewsUpdates();
  const repeatedNews = [...news, ...news, ...news]; // For seamless loop

  return (
    <div className="relative w-full h-10 overflow-hidden glass-effect rounded-lg mb-2">
      <div className="absolute inset-0 flex items-center">
        <div className="flex animate-news-ticker group-hover:pause">
          {repeatedNews.map((item, index) => (
            <NewsItem key={`${item.id}-${index}`} news={item} />
          ))}
        </div>
      </div>
      
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-900 via-gray-900/70 to-transparent z-10" />
    </div>
  );
}