export interface ReferralProgram {
  id: string;
  slug: string;
  name: string;
  category: 'banking' | 'telecom' | 'investing' | 'food' | 'other';
  logo: string;
  referralCode: string;
  referralLink: string;
  
  // Bonuses
  yourBonus: {
    min: number;
    max: number;
    currency: string;
    type: 'cash' | 'credit' | 'points';
  };
  theirBonus: {
    min: number;
    max: number;
    currency: string;
    type: 'cash' | 'credit' | 'points';
  };
  
  // Requirements
  minimumDeposit?: number;
  holdPeriod?: number; // days
  expiryDays?: number;
  
  // Limits
  annualLimit?: number | null;
  lifetimeLimit?: number | null;
  
  // Content
  shortDescription: string;
  fullDescription: string;
  howItWorks: string[];
  pros: string[];
  cons: string[];
  tips: string[];
  faqs: { question: string; answer: string }[];
  
  // Bonus tiers (for Wealthsimple-style tiered bonuses)
  bonusTiers?: {
    depositMin: number;
    depositMax: number | null;
    referrerBonus: number;
    refereeBonus: number;
  }[];
  
  // Metadata
  availability: string[]; // province codes
  lastUpdated: string;
  featured: boolean;
  rating: number; // 1-5
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  featuredImage: string;
  category: string;
  tags: string[];
  readingTime: number;
  metaTitle: string;
  metaDescription: string;
}

export type Locale = 'en' | 'fr';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  locale: Locale;
  author: string;
}