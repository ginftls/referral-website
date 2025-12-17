export const SITE_CONFIG = {
  name: {
    en: 'RefCodes Canada',
    fr: 'CodesRéf Canada',
  },
  // Replace with actual domain when available
  url: 'https://refcodes.ca', // placeholder
  author: 'RefCodes Canada',
  defaultLocale: 'en' as const,
  locales: ['en', 'fr'] as const,
};

export const REFERRAL_CODES = {
  wealthsimple: {
    code: 'EYP3LM',
    link: 'https://www.wealthsimple.com/invite/EYP3LM',
  },
  fizz: {
    code: 'COMING_SOON', // UPDATE THIS when available
    link: 'https://fizz.ca',
  },
  // Add more as needed
};

export const CATEGORIES = [
  { id: 'banking', icon: 'Wallet', color: 'emerald' },
  { id: 'telecom', icon: 'Smartphone', color: 'blue' },
  { id: 'investing', icon: 'TrendingUp', color: 'purple' },
] as const;