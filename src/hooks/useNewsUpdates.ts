import { useState, useEffect } from 'react';
import { NewsUpdate } from '../types/news';
import { generateMarketNews } from '../utils/newsGenerator';

export function useNewsUpdates() {
  const [news, setNews] = useState<NewsUpdate[]>([]);

  useEffect(() => {
    // Initial news
    setNews(generateMarketNews());

    // Update news every 30 seconds
    const interval = setInterval(() => {
      setNews(generateMarketNews());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return { news };
}