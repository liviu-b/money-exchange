import { NewsUpdate } from '../types/news';

const marketPhrases = [
  'USD strengthens against major currencies',
  'EUR shows resilience in morning trading',
  'Asian markets drive currency movements',
  'Central bank decisions impact exchange rates',
  'Market volatility increases in forex trading',
  'Economic data influences currency pairs',
  'Trading volume peaks in European session',
  'Currency correlations shift in major pairs',
];

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
});

export function generateMarketNews(): NewsUpdate[] {
  const currentTime = timeFormatter.format(new Date());
  
  return marketPhrases
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
    .map((message, index) => ({
      id: `news-${Date.now()}-${index}`,
      message,
      time: currentTime,
      type: 'info',
    }));
}