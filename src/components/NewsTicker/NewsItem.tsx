import React, { memo } from 'react';
import { Newspaper } from 'lucide-react';
import { NewsUpdate } from '../../types/news';

interface Props {
  news: NewsUpdate;
}

export const NewsItem = memo(function NewsItem({ news }: Props) {
  return (
    <div className="flex items-center space-x-3 px-6 py-2 whitespace-nowrap">
      <Newspaper size={16} className="text-blue-400" />
      <span className="text-sm text-gray-200">{news.message}</span>
      <span className="text-xs text-gray-400">{news.time}</span>
    </div>
  );
});