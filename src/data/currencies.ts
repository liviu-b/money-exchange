import { currencyCategories } from './currency-categories';

export const currencies = [
  // Popular Currencies
  { code: 'USD', name: 'US Dollar', symbol: '$', category: currencyCategories.popular },
  { code: 'EUR', name: 'Euro', symbol: '€', category: currencyCategories.popular },
  { code: 'GBP', name: 'British Pound', symbol: '£', category: currencyCategories.popular },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', category: currencyCategories.popular },
  
  // Americas
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', category: currencyCategories.americas },
  { code: 'MXN', name: 'Mexican Peso', symbol: '$', category: currencyCategories.americas },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', category: currencyCategories.americas },
  { code: 'ARS', name: 'Argentine Peso', symbol: '$', category: currencyCategories.americas },
  { code: 'CLP', name: 'Chilean Peso', symbol: '$', category: currencyCategories.americas },
  
  // Europe
  { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr', category: currencyCategories.europe },
  { code: 'SEK', name: 'Swedish Krona', symbol: 'kr', category: currencyCategories.europe },
  { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr', category: currencyCategories.europe },
  { code: 'DKK', name: 'Danish Krone', symbol: 'kr', category: currencyCategories.europe },
  { code: 'PLN', name: 'Polish Złoty', symbol: 'zł', category: currencyCategories.europe },
  { code: 'CZK', name: 'Czech Koruna', symbol: 'Kč', category: currencyCategories.europe },
  { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft', category: currencyCategories.europe },
  { code: 'RON', name: 'Romanian Leu', symbol: 'lei', category: currencyCategories.europe },
  { code: 'BGN', name: 'Bulgarian Lev', symbol: 'лв', category: currencyCategories.europe },
  { code: 'ISK', name: 'Icelandic Króna', symbol: 'kr', category: currencyCategories.europe },
  
  // Asia & Pacific
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', category: currencyCategories.asiaPacific },
  { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', category: currencyCategories.asiaPacific },
  { code: 'TWD', name: 'Taiwan Dollar', symbol: 'NT$', category: currencyCategories.asiaPacific },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩', category: currencyCategories.asiaPacific },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', category: currencyCategories.asiaPacific },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', category: currencyCategories.asiaPacific },
  { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp', category: currencyCategories.asiaPacific },
  { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', category: currencyCategories.asiaPacific },
  { code: 'THB', name: 'Thai Baht', symbol: '฿', category: currencyCategories.asiaPacific },
  { code: 'VND', name: 'Vietnamese Dong', symbol: '₫', category: currencyCategories.asiaPacific },
  { code: 'PHP', name: 'Philippine Peso', symbol: '₱', category: currencyCategories.asiaPacific },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', category: currencyCategories.asiaPacific },
  { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$', category: currencyCategories.asiaPacific },
  
  // Middle East
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', category: currencyCategories.middleEast },
  { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼', category: currencyCategories.middleEast },
  { code: 'QAR', name: 'Qatari Riyal', symbol: '﷼', category: currencyCategories.middleEast },
  { code: 'ILS', name: 'Israeli Shekel', symbol: '₪', category: currencyCategories.middleEast },
  { code: 'TRY', name: 'Turkish Lira', symbol: '₺', category: currencyCategories.middleEast },
  
  // Africa
  { code: 'ZAR', name: 'South African Rand', symbol: 'R', category: currencyCategories.africa },
  { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£', category: currencyCategories.africa },
  { code: 'NGN', name: 'Nigerian Naira', symbol: '₦', category: currencyCategories.africa },
  { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh', category: currencyCategories.africa },
  { code: 'MAD', name: 'Moroccan Dirham', symbol: 'MAD', category: currencyCategories.africa },
] as const;