# 🚀 Claude Code Prompt: Canadian Referral Code Website

## Project Overview

Build a bilingual (French/English) referral code website targeting Quebec and Canadian users. The site will feature referral programs for Canadian financial and telecom services, starting with **Wealthsimple** and **Fizz**, with Questrade to be added later.

**Primary Goal:** Create a fast, SEO-optimized Next.js website that ranks for referral code searches and converts visitors into referral sign-ups.

**Target Audience:**
- Quebec residents (primary) — French-first
- Canadian residents nationwide — English
- Age 18-45, tech-savvy, value-conscious

---

## My Referral Codes

```
WEALTHSIMPLE
- Code: EYP3LM
- Link: https://www.wealthsimple.com/invite/EYP3LM

FIZZ
- Code: [TO BE ADDED LATER]
- Link: https://fizz.ca
```

**Note:** Replace `[TO BE ADDED LATER]` with actual Fizz code when available. For now, use placeholder text "XXXXX" in the UI.

---

## Tech Stack Requirements

```
Framework: Next.js 14+ (App Router)
Language: TypeScript
Styling: Tailwind CSS
Content: MDX for blog posts, JSON for referral data
Internationalization: next-intl
Deployment: Vercel-ready
Analytics: Vercel Analytics + Google Analytics 4 ready
```

### Key Technical Requirements

1. **Server-Side Rendering (SSR)** for all pages (SEO critical)
2. **Static Site Generation (SSG)** where possible for performance
3. **Bilingual routing:** `/en/...` and `/fr/...` with language detection
4. **Mobile-first responsive design**
5. **Core Web Vitals optimized** (LCP < 2.5s, CLS < 0.1, FID < 100ms)
6. **Structured data (JSON-LD)** for rich search results
7. **Sitemap.xml** and **robots.txt** auto-generation
8. **Open Graph** and **Twitter Card** meta tags

---

## Design System

### Color Palette (Light/Dark Grey + White Theme)

```css
:root {
  /* Primary - Dark Grey */
  --primary: #374151;          /* gray-700 - Main text, headers */
  --primary-dark: #1f2937;     /* gray-800 - Darker elements */
  --primary-darker: #111827;   /* gray-900 - Darkest elements */
  
  /* Secondary - Medium Grey */
  --secondary: #6b7280;        /* gray-500 - Secondary text */
  --secondary-light: #9ca3af;  /* gray-400 - Muted text */
  
  /* Background */
  --bg-white: #ffffff;         /* Pure white - Main background */
  --bg-light: #f9fafb;         /* gray-50 - Section backgrounds */
  --bg-subtle: #f3f4f6;        /* gray-100 - Cards, inputs */
  
  /* Borders */
  --border-light: #e5e7eb;     /* gray-200 */
  --border-medium: #d1d5db;    /* gray-300 */
  
  /* Accent Colors (for CTAs and highlights) */
  --accent-primary: #2563eb;   /* blue-600 - Primary CTAs */
  --accent-hover: #1d4ed8;     /* blue-700 - Hover state */
  --accent-success: #059669;   /* emerald-600 - Success, money */
  --accent-warning: #d97706;   /* amber-600 - Warnings */
  
  /* Semantic */
  --success: #059669;          /* emerald-600 */
  --error: #dc2626;            /* red-600 */
}
```

### Tailwind Config Extension

```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      }
    }
  }
}
```

### Typography

```css
/* Font Stack - Clean, modern, professional */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Heading Sizes */
h1: 2.5rem (40px) - font-bold, text-gray-900
h2: 2rem (32px) - font-semibold, text-gray-800
h3: 1.5rem (24px) - font-semibold, text-gray-800
h4: 1.25rem (20px) - font-medium, text-gray-700
body: 1rem (16px) - font-normal, text-gray-600
small: 0.875rem (14px) - text-gray-500
```

### Design Principles

1. **Clean & Minimal:** Lots of white space, no clutter
2. **Professional:** Trust-building design for financial content
3. **Accessible:** High contrast ratios, clear typography
4. **Fast:** Minimal decorative elements

---

## Logo Component

Create a text-based logo that can be easily replaced with a custom logo later.

### Logo Component (`components/layout/Logo.tsx`)

```tsx
import Link from 'next/link';

interface LogoProps {
  locale: string;
  className?: string;
}

export function Logo({ locale, className = '' }: LogoProps) {
  return (
    <Link 
      href={`/${locale}`}
      className={`flex items-center gap-2 ${className}`}
    >
      {/* Icon placeholder - replace with custom SVG later */}
      <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">CR</span>
      </div>
      
      {/* Text logo */}
      <div className="flex flex-col">
        <span className="text-lg font-bold text-gray-900 leading-tight">
          {locale === 'fr' ? 'Codes Réf' : 'Ref Codes'}
        </span>
        <span className="text-xs text-gray-500 leading-tight">
          Canada
        </span>
      </div>
    </Link>
  );
}

// Alternative: Simple text-only version
export function LogoSimple({ locale, className = '' }: LogoProps) {
  return (
    <Link 
      href={`/${locale}`}
      className={`font-bold text-xl text-gray-900 hover:text-gray-700 transition-colors ${className}`}
    >
      {locale === 'fr' ? 'CodesRéf.ca' : 'RefCodes.ca'}
    </Link>
  );
}
```

**Note:** The logo uses initials "CR" (Codes Réf / Ref Codes). Replace with actual logo SVG when branding is finalized.

---

## Project Structure

```
/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # Root layout with nav, footer
│   │   ├── page.tsx                # Homepage
│   │   ├── banking/
│   │   │   └── page.tsx            # Banking category page
│   │   ├── telecom/
│   │   │   └── page.tsx            # Telecom category page
│   │   ├── investing/
│   │   │   └── page.tsx            # Investing category (for Questrade later)
│   │   ├── referral/
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Individual referral pages
│   │   ├── blog/
│   │   │   ├── page.tsx            # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Individual blog posts
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   └── privacy/
│   │       └── page.tsx            # Privacy policy & affiliate disclosure
│   ├── api/
│   │   └── og/
│   │       └── route.tsx           # Dynamic OG image generation
│   ├── sitemap.ts                  # Dynamic sitemap
│   └── robots.ts                   # Robots.txt
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── CopyButton.tsx          # Copy referral code with toast
│   │   ├── Toast.tsx
│   │   └── StarRating.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx                # Text-based logo component
│   │   ├── Navigation.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── referral/
│   │   ├── ReferralCard.tsx        # Card for listing pages
│   │   ├── ReferralHero.tsx        # Hero section for individual pages
│   │   ├── BonusTable.tsx          # Bonus structure table
│   │   ├── HowItWorks.tsx          # Step-by-step guide
│   │   ├── ProsConsList.tsx        # Pros and cons
│   │   └── FAQ.tsx                 # Accordion FAQ
│   ├── seo/
│   │   ├── JsonLd.tsx              # Structured data component
│   │   └── MetaTags.tsx            # OG/Twitter meta
│   └── blog/
│       ├── BlogCard.tsx
│       └── TableOfContents.tsx
├── content/
│   ├── referrals/
│   │   ├── en/
│   │   │   ├── wealthsimple.json
│   │   │   └── fizz.json
│   │   └── fr/
│   │       ├── wealthsimple.json
│   │       └── fizz.json
│   └── blog/
│       ├── en/
│       │   └── *.mdx
│       └── fr/
│           └── *.mdx
├── lib/
│   ├── referrals.ts                # Data fetching utilities
│   ├── utils.ts                    # Helper functions
│   └── constants.ts                # Site constants
├── messages/
│   ├── en.json                     # English UI translations
│   └── fr.json                     # French UI translations
├── public/
│   ├── images/
│   │   ├── logos/                  # Company logos (placeholders)
│   │   │   ├── wealthsimple.svg
│   │   │   └── fizz.svg
│   │   └── og/                     # OG images
│   └── fonts/
├── styles/
│   └── globals.css
├── types/
│   └── index.ts                    # TypeScript types
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Placeholder Company Logos

Create simple placeholder SVG logos until real ones are added.

### Wealthsimple Placeholder (`public/images/logos/wealthsimple.svg`)

```svg
<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="120" height="40" rx="4" fill="#1f2937"/>
  <text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Wealthsimple</text>
</svg>
```

### Fizz Placeholder (`public/images/logos/fizz.svg`)

```svg
<svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="80" height="40" rx="4" fill="#6366f1"/>
  <text x="40" y="25" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14" font-weight="bold">Fizz</text>
</svg>
```

**Alternative:** Use a simple colored div with text as component:

```tsx
// components/ui/CompanyLogo.tsx
interface CompanyLogoProps {
  company: 'wealthsimple' | 'fizz';
  size?: 'sm' | 'md' | 'lg';
}

const logoConfig = {
  wealthsimple: { bg: 'bg-gray-900', text: 'Wealthsimple' },
  fizz: { bg: 'bg-indigo-500', text: 'Fizz' },
};

const sizeConfig = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
};

export function CompanyLogo({ company, size = 'md' }: CompanyLogoProps) {
  const config = logoConfig[company];
  return (
    <div className={`${config.bg} ${sizeConfig[size]} rounded-lg flex items-center justify-center`}>
      <span className="text-white font-semibold">{config.text}</span>
    </div>
  );
}
```

---

## Data Structures

### TypeScript Types (`types/index.ts`)

```typescript
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
```

---

## Content Data Files

### Wealthsimple English (`content/referrals/en/wealthsimple.json`)

```json
{
  "id": "wealthsimple",
  "slug": "wealthsimple",
  "name": "Wealthsimple",
  "category": "banking",
  "logo": "/images/logos/wealthsimple.svg",
  "referralCode": "EYP3LM",
  "referralLink": "https://www.wealthsimple.com/invite/EYP3LM",
  
  "yourBonus": {
    "min": 25,
    "max": 3000,
    "currency": "CAD",
    "type": "cash"
  },
  "theirBonus": {
    "min": 25,
    "max": 25,
    "currency": "CAD",
    "type": "cash"
  },
  
  "minimumDeposit": 1,
  "holdPeriod": 180,
  "expiryDays": 30,
  
  "annualLimit": null,
  "lifetimeLimit": null,
  
  "shortDescription": "Canada's most popular investing app. Get $25 free when you sign up and fund your account with just $1.",
  
  "fullDescription": "Wealthsimple is Canada's leading fintech platform with over 3 million users. They offer commission-free stock and ETF trading, cryptocurrency trading, managed investing portfolios, and a high-interest chequing account. Their referral program is one of the most generous in Canada, offering tiered bonuses up to $3,000 depending on how much your referral deposits.",
  
  "howItWorks": [
    "Click my referral link or use code EYP3LM when signing up",
    "Open a Self-Directed Investing, Crypto, Managed Investing, or Chequing account",
    "Fund your account with at least $1 within 30 days",
    "Your $25 bonus is deposited within 24 hours",
    "If you deposit more, you may qualify for higher bonus tiers"
  ],
  
  "pros": [
    "Lowest minimum deposit ($1) of any major referral program",
    "Instant bonus payout (within 24 hours)",
    "Unlimited referrals allowed",
    "Tiered bonuses reward larger deposits",
    "Multiple account types qualify",
    "Fully bilingual platform (French/English)",
    "Commission-free ETF and stock trading"
  ],
  
  "cons": [
    "180-day hold period on bonus funds",
    "Must open Chequing account to receive bonus",
    "Bonus is taxable income",
    "Some features limited outside major provinces"
  ],
  
  "tips": [
    "Even depositing just $1 gets you the $25 bonus — perfect for trying the platform",
    "If you're planning to invest seriously, deposit $1,000+ within 30 days to get the higher tier bonuses",
    "The Chequing account earns high interest on your balance — use it as a savings account too",
    "Set up direct deposit to get the highest interest rate on your Chequing balance"
  ],
  
  "faqs": [
    {
      "question": "How long does it take to receive my bonus?",
      "answer": "The base $25 bonus is deposited within 24 hours of funding your account. If you qualify for additional tier bonuses based on your deposit amount, those are paid within 14 business days after the 30-day funding period ends."
    },
    {
      "question": "What's the minimum deposit required?",
      "answer": "Just $1! Wealthsimple has the lowest minimum deposit of any major Canadian referral program."
    },
    {
      "question": "Can I withdraw my bonus immediately?",
      "answer": "There's a 180-day hold period. If you withdraw before then, the bonus may be deducted from your withdrawal."
    },
    {
      "question": "Is there a limit to how many people I can refer?",
      "answer": "No! Wealthsimple allows unlimited referrals, and you earn a bonus for each unique person who signs up and funds their account."
    },
    {
      "question": "Which accounts qualify for the referral bonus?",
      "answer": "Self-Directed Investing, Crypto, Managed Investing, and Chequing accounts all qualify."
    },
    {
      "question": "Is my bonus taxable?",
      "answer": "Yes, referral bonuses are considered taxable income in Canada. Wealthsimple does not issue tax slips, so you're responsible for reporting it."
    }
  ],
  
  "bonusTiers": [
    { "depositMin": 1, "depositMax": 499, "referrerBonus": 25, "refereeBonus": 25 },
    { "depositMin": 500, "depositMax": 999, "referrerBonus": 50, "refereeBonus": 25 },
    { "depositMin": 1000, "depositMax": 4999, "referrerBonus": 75, "refereeBonus": 25 },
    { "depositMin": 5000, "depositMax": 24999, "referrerBonus": 100, "refereeBonus": 25 },
    { "depositMin": 25000, "depositMax": 99999, "referrerBonus": 250, "refereeBonus": 25 },
    { "depositMin": 100000, "depositMax": 249999, "referrerBonus": 500, "refereeBonus": 25 },
    { "depositMin": 250000, "depositMax": null, "referrerBonus": 3000, "refereeBonus": 25 }
  ],
  
  "availability": ["AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"],
  "lastUpdated": "2025-12-16",
  "featured": true,
  "rating": 4.8,
  
  "metaTitle": "Wealthsimple Referral Code 2025: EYP3LM | Get $25 Free (December)",
  "metaDescription": "Use Wealthsimple referral code EYP3LM to get $25 free when you sign up and deposit just $1. Canada's #1 investing app. Updated December 2025.",
  "keywords": ["wealthsimple referral code", "wealthsimple promo code", "wealthsimple bonus", "wealthsimple sign up bonus", "wealthsimple referral 2025", "wealthsimple free money", "EYP3LM"]
}
```

### Wealthsimple French (`content/referrals/fr/wealthsimple.json`)

```json
{
  "id": "wealthsimple",
  "slug": "wealthsimple",
  "name": "Wealthsimple",
  "category": "banking",
  "logo": "/images/logos/wealthsimple.svg",
  "referralCode": "EYP3LM",
  "referralLink": "https://www.wealthsimple.com/invite/EYP3LM",
  
  "yourBonus": {
    "min": 25,
    "max": 3000,
    "currency": "CAD",
    "type": "cash"
  },
  "theirBonus": {
    "min": 25,
    "max": 25,
    "currency": "CAD",
    "type": "cash"
  },
  
  "minimumDeposit": 1,
  "holdPeriod": 180,
  "expiryDays": 30,
  
  "annualLimit": null,
  "lifetimeLimit": null,
  
  "shortDescription": "L'application d'investissement la plus populaire au Canada. Obtenez 25$ gratuits en vous inscrivant et en déposant seulement 1$.",
  
  "fullDescription": "Wealthsimple est la principale plateforme fintech du Canada avec plus de 3 millions d'utilisateurs. Ils offrent le trading d'actions et de FNB sans commission, le trading de cryptomonnaies, des portefeuilles d'investissement gérés et un compte-chèques à intérêt élevé. Leur programme de parrainage est l'un des plus généreux au Canada, offrant des bonus progressifs jusqu'à 3 000$ selon le montant déposé par votre filleul.",
  
  "howItWorks": [
    "Cliquez sur mon lien de parrainage ou utilisez le code EYP3LM lors de l'inscription",
    "Ouvrez un compte Placements autogérés, Crypto, Placements gérés ou Chèques",
    "Approvisionnez votre compte avec au moins 1$ dans les 30 jours",
    "Votre bonus de 25$ est déposé en 24 heures",
    "Si vous déposez plus, vous pourriez être admissible à des bonus plus élevés"
  ],
  
  "pros": [
    "Dépôt minimum le plus bas (1$) de tous les programmes de parrainage majeurs",
    "Paiement instantané du bonus (dans les 24 heures)",
    "Parrainages illimités permis",
    "Bonus progressifs qui récompensent les dépôts plus importants",
    "Plusieurs types de comptes admissibles",
    "Plateforme entièrement bilingue (français/anglais)",
    "Trading d'actions et FNB sans commission"
  ],
  
  "cons": [
    "Période de rétention de 180 jours sur les fonds bonus",
    "Vous devez ouvrir un compte Chèques pour recevoir le bonus",
    "Le bonus est un revenu imposable",
    "Certaines fonctionnalités limitées hors des grandes provinces"
  ],
  
  "tips": [
    "Même un dépôt de 1$ vous donne le bonus de 25$ — parfait pour essayer la plateforme",
    "Si vous prévoyez investir sérieusement, déposez 1 000$+ dans les 30 jours pour obtenir les bonus de niveau supérieur",
    "Le compte Chèques verse un intérêt élevé sur votre solde — utilisez-le aussi comme compte d'épargne",
    "Configurez le dépôt direct pour obtenir le taux d'intérêt le plus élevé sur votre solde Chèques"
  ],
  
  "faqs": [
    {
      "question": "Combien de temps faut-il pour recevoir mon bonus?",
      "answer": "Le bonus de base de 25$ est déposé dans les 24 heures suivant l'approvisionnement de votre compte. Si vous êtes admissible à des bonus supplémentaires en fonction du montant de votre dépôt, ceux-ci sont versés dans les 14 jours ouvrables suivant la fin de la période de financement de 30 jours."
    },
    {
      "question": "Quel est le dépôt minimum requis?",
      "answer": "Seulement 1$! Wealthsimple a le dépôt minimum le plus bas de tous les grands programmes de parrainage canadiens."
    },
    {
      "question": "Puis-je retirer mon bonus immédiatement?",
      "answer": "Il y a une période de rétention de 180 jours. Si vous retirez avant, le bonus pourrait être déduit de votre retrait."
    },
    {
      "question": "Y a-t-il une limite au nombre de personnes que je peux parrainer?",
      "answer": "Non! Wealthsimple permet des parrainages illimités, et vous gagnez un bonus pour chaque personne unique qui s'inscrit et approvisionne son compte."
    },
    {
      "question": "Quels comptes sont admissibles au bonus de parrainage?",
      "answer": "Les comptes Placements autogérés, Crypto, Placements gérés et Chèques sont tous admissibles."
    },
    {
      "question": "Mon bonus est-il imposable?",
      "answer": "Oui, les bonus de parrainage sont considérés comme un revenu imposable au Canada. Wealthsimple n'émet pas de feuillets d'impôt, vous êtes donc responsable de le déclarer."
    }
  ],
  
  "bonusTiers": [
    { "depositMin": 1, "depositMax": 499, "referrerBonus": 25, "refereeBonus": 25 },
    { "depositMin": 500, "depositMax": 999, "referrerBonus": 50, "refereeBonus": 25 },
    { "depositMin": 1000, "depositMax": 4999, "referrerBonus": 75, "refereeBonus": 25 },
    { "depositMin": 5000, "depositMax": 24999, "referrerBonus": 100, "refereeBonus": 25 },
    { "depositMin": 25000, "depositMax": 99999, "referrerBonus": 250, "refereeBonus": 25 },
    { "depositMin": 100000, "depositMax": 249999, "referrerBonus": 500, "refereeBonus": 25 },
    { "depositMin": 250000, "depositMax": null, "referrerBonus": 3000, "refereeBonus": 25 }
  ],
  
  "availability": ["AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"],
  "lastUpdated": "2025-12-16",
  "featured": true,
  "rating": 4.8,
  
  "metaTitle": "Code de Parrainage Wealthsimple 2025: EYP3LM | Obtenez 25$ Gratuits (Décembre)",
  "metaDescription": "Utilisez le code de parrainage Wealthsimple EYP3LM pour obtenir 25$ gratuits en vous inscrivant et en déposant seulement 1$. L'application d'investissement #1 au Canada. Mis à jour décembre 2025.",
  "keywords": ["code parrainage wealthsimple", "code promo wealthsimple", "bonus wealthsimple", "wealthsimple inscription bonus", "wealthsimple parrainage 2025", "wealthsimple argent gratuit", "EYP3LM"]
}
```

### Fizz English (`content/referrals/en/fizz.json`)

```json
{
  "id": "fizz",
  "slug": "fizz",
  "name": "Fizz",
  "category": "telecom",
  "logo": "/images/logos/fizz.svg",
  "referralCode": "COMING_SOON",
  "referralLink": "https://fizz.ca",
  
  "yourBonus": {
    "min": 25,
    "max": 50,
    "currency": "CAD",
    "type": "credit"
  },
  "theirBonus": {
    "min": 25,
    "max": 50,
    "currency": "CAD",
    "type": "credit"
  },
  
  "minimumDeposit": null,
  "holdPeriod": null,
  "expiryDays": null,
  
  "annualLimit": null,
  "lifetimeLimit": null,
  
  "shortDescription": "Quebec's favorite digital mobile and internet provider. Get $25-$50 credit when you sign up using my referral code.",
  
  "fullDescription": "Fizz is a 100% digital telecom provider launched in 2018 by Videotron. They offer affordable, flexible mobile and internet plans with no contracts and no hidden fees. Fizz is known for their unique 'My Rewards' loyalty program where you earn points for staying with them, and unused data rolls over to the next month. They now serve Quebec, Ontario, British Columbia, Alberta, and Manitoba.",
  
  "howItWorks": [
    "Go to fizz.ca and build your mobile or internet plan",
    "At the Order Summary page (before payment), enter my referral code",
    "Complete your order and activate your service",
    "Your referral bonus is applied after your second monthly payment (~60 days)",
    "The bonus appears as a credit on your bill"
  ],
  
  "pros": [
    "No contracts — cancel or change anytime",
    "Unused data rolls over to next month",
    "100% online — no call centers or waiting on hold",
    "Price lock — your plan price never increases",
    "My Rewards program with free perks",
    "Unlimited referrals allowed",
    "Uses Videotron's reliable network in QC/ON"
  ],
  
  "cons": [
    "No phone support — online chat only",
    "Bonus takes ~60 days to apply",
    "Bonus is bill credit, not cash",
    "Some features limited in newer provinces (BC, AB, MB)"
  ],
  
  "tips": [
    "Enter the referral code at Order Summary BEFORE payment — you cannot add it after",
    "The referral code works for both mobile AND internet plans",
    "Even if you're already a Fizz customer for mobile, you can use a code when adding internet (or vice versa)",
    "Watch for promotional periods when the bonus increases to $50 or even $100",
    "Join the Fizz community forum to earn extra rewards points"
  ],
  
  "faqs": [
    {
      "question": "When do I receive my referral bonus?",
      "answer": "The referral bonus is applied as a credit on your bill after you've made your second monthly payment, which is approximately 60 days after activation."
    },
    {
      "question": "Can I add a referral code after I've already signed up?",
      "answer": "No, unfortunately the referral code must be entered at the Order Summary page before you complete your payment. It cannot be added retroactively."
    },
    {
      "question": "Does the referral work for both mobile and internet?",
      "answer": "Yes! The referral code works for both mobile plans and home internet plans."
    },
    {
      "question": "Is Fizz available in my province?",
      "answer": "Fizz mobile is available in Quebec, Ontario, British Columbia, Alberta, and Manitoba. Home internet is currently available in select areas of Quebec and Ontario."
    },
    {
      "question": "What network does Fizz use?",
      "answer": "Fizz uses Videotron's network in Quebec and Ontario, and extended partner networks in other provinces. Coverage is reliable in urban and suburban areas."
    },
    {
      "question": "Is there a limit to how many people I can refer?",
      "answer": "No limit! You can refer as many friends as you want and earn a bonus for each one who signs up."
    }
  ],
  
  "bonusTiers": null,
  
  "availability": ["QC", "ON", "BC", "AB", "MB"],
  "lastUpdated": "2025-12-16",
  "featured": true,
  "rating": 4.6,
  
  "metaTitle": "Fizz Referral Code 2025 | Get $25-$50 Credit (December)",
  "metaDescription": "Use my Fizz referral code to get $25-$50 off your mobile or internet plan. No contracts, data rollover, and the best prices in Quebec. Updated December 2025.",
  "keywords": ["fizz referral code", "fizz promo code", "fizz discount code", "fizz mobile referral", "fizz internet referral", "code promo fizz", "fizz quebec"]
}
```

### Fizz French (`content/referrals/fr/fizz.json`)

```json
{
  "id": "fizz",
  "slug": "fizz",
  "name": "Fizz",
  "category": "telecom",
  "logo": "/images/logos/fizz.svg",
  "referralCode": "COMING_SOON",
  "referralLink": "https://fizz.ca",
  
  "yourBonus": {
    "min": 25,
    "max": 50,
    "currency": "CAD",
    "type": "credit"
  },
  "theirBonus": {
    "min": 25,
    "max": 50,
    "currency": "CAD",
    "type": "credit"
  },
  
  "minimumDeposit": null,
  "holdPeriod": null,
  "expiryDays": null,
  
  "annualLimit": null,
  "lifetimeLimit": null,
  
  "shortDescription": "Le fournisseur mobile et internet numérique préféré du Québec. Obtenez 25$ à 50$ de crédit en utilisant mon code de parrainage.",
  
  "fullDescription": "Fizz est un fournisseur de télécommunications 100% numérique lancé en 2018 par Vidéotron. Ils offrent des forfaits mobiles et internet abordables et flexibles, sans contrat et sans frais cachés. Fizz est reconnu pour son programme de fidélité unique 'Mes récompenses' où vous accumulez des points en restant client, et les données inutilisées sont reportées au mois suivant. Ils desservent maintenant le Québec, l'Ontario, la Colombie-Britannique, l'Alberta et le Manitoba.",
  
  "howItWorks": [
    "Allez sur fizz.ca et créez votre forfait mobile ou internet",
    "À la page Sommaire de la commande (avant le paiement), entrez mon code de parrainage",
    "Complétez votre commande et activez votre service",
    "Votre bonus de parrainage est appliqué après votre deuxième paiement mensuel (~60 jours)",
    "Le bonus apparaît comme un crédit sur votre facture"
  ],
  
  "pros": [
    "Aucun contrat — annulez ou changez en tout temps",
    "Les données inutilisées sont reportées au mois suivant",
    "100% en ligne — pas de centre d'appels ni d'attente",
    "Prix verrouillé — le prix de votre forfait n'augmente jamais",
    "Programme Mes récompenses avec avantages gratuits",
    "Parrainages illimités permis",
    "Utilise le réseau fiable de Vidéotron au QC/ON"
  ],
  
  "cons": [
    "Pas de support téléphonique — clavardage en ligne seulement",
    "Le bonus prend ~60 jours à être appliqué",
    "Le bonus est un crédit sur facture, pas de l'argent comptant",
    "Certaines fonctionnalités limitées dans les nouvelles provinces (CB, AB, MB)"
  ],
  
  "tips": [
    "Entrez le code de parrainage au Sommaire de la commande AVANT le paiement — vous ne pouvez pas l'ajouter après",
    "Le code de parrainage fonctionne pour les forfaits mobiles ET internet",
    "Même si vous êtes déjà client Fizz pour le mobile, vous pouvez utiliser un code en ajoutant internet (ou vice versa)",
    "Surveillez les périodes promotionnelles quand le bonus augmente à 50$ ou même 100$",
    "Rejoignez le forum communautaire Fizz pour gagner des points de récompenses supplémentaires"
  ],
  
  "faqs": [
    {
      "question": "Quand est-ce que je reçois mon bonus de parrainage?",
      "answer": "Le bonus de parrainage est appliqué comme crédit sur votre facture après que vous ayez effectué votre deuxième paiement mensuel, soit environ 60 jours après l'activation."
    },
    {
      "question": "Puis-je ajouter un code de parrainage après m'être inscrit?",
      "answer": "Non, malheureusement le code de parrainage doit être entré à la page Sommaire de la commande avant de compléter votre paiement. Il ne peut pas être ajouté rétroactivement."
    },
    {
      "question": "Le parrainage fonctionne-t-il pour le mobile et l'internet?",
      "answer": "Oui! Le code de parrainage fonctionne autant pour les forfaits mobiles que pour les forfaits internet résidentiel."
    },
    {
      "question": "Fizz est-il disponible dans ma province?",
      "answer": "Le mobile Fizz est disponible au Québec, en Ontario, en Colombie-Britannique, en Alberta et au Manitoba. L'internet résidentiel est présentement disponible dans certaines régions du Québec et de l'Ontario."
    },
    {
      "question": "Quel réseau Fizz utilise-t-il?",
      "answer": "Fizz utilise le réseau de Vidéotron au Québec et en Ontario, et des réseaux partenaires étendus dans les autres provinces. La couverture est fiable dans les zones urbaines et suburbaines."
    },
    {
      "question": "Y a-t-il une limite au nombre de personnes que je peux parrainer?",
      "answer": "Aucune limite! Vous pouvez parrainer autant d'amis que vous voulez et gagner un bonus pour chacun qui s'inscrit."
    }
  ],
  
  "bonusTiers": null,
  
  "availability": ["QC", "ON", "BC", "AB", "MB"],
  "lastUpdated": "2025-12-16",
  "featured": true,
  "rating": 4.6,
  
  "metaTitle": "Code de Parrainage Fizz 2025 | Obtenez 25$ à 50$ de Crédit (Décembre)",
  "metaDescription": "Utilisez mon code de parrainage Fizz pour obtenir 25$ à 50$ de rabais sur votre forfait mobile ou internet. Sans contrat, données reportées, et les meilleurs prix au Québec. Mis à jour décembre 2025.",
  "keywords": ["code parrainage fizz", "code promo fizz", "code rabais fizz", "fizz mobile parrainage", "fizz internet parrainage", "fizz québec"]
}
```

---

## UI Translations

### English (`messages/en.json`)

```json
{
  "site": {
    "name": "RefCodes Canada",
    "tagline": "Save money with the best Canadian referral codes",
    "description": "Your trusted source for Canadian referral codes and sign-up bonuses"
  },
  "nav": {
    "home": "Home",
    "banking": "Banking",
    "telecom": "Telecom",
    "investing": "Investing",
    "blog": "Blog",
    "about": "About"
  },
  "common": {
    "getBonus": "Get Your Bonus",
    "copyCode": "Copy Code",
    "copied": "Copied!",
    "useMyCode": "Use My Referral Code",
    "signUpNow": "Sign Up Now",
    "learnMore": "Learn More",
    "lastUpdated": "Last updated",
    "readMore": "Read More",
    "viewAll": "View All",
    "featured": "Featured",
    "new": "New",
    "limited": "Limited Time",
    "comingSoon": "Coming Soon"
  },
  "referral": {
    "yourBonus": "Your Bonus",
    "theirBonus": "Their Bonus",
    "upTo": "up to",
    "minimumDeposit": "Minimum Deposit",
    "holdPeriod": "Hold Period",
    "days": "days",
    "annualLimit": "Annual Limit",
    "unlimited": "Unlimited",
    "howItWorks": "How It Works",
    "prosAndCons": "Pros & Cons",
    "pros": "Pros",
    "cons": "Cons",
    "tips": "Pro Tips",
    "faq": "Frequently Asked Questions",
    "bonusTiers": "Bonus Tiers",
    "depositAmount": "Deposit Amount",
    "availability": "Available in",
    "rating": "Rating",
    "referralCode": "Referral Code"
  },
  "home": {
    "hero": {
      "title": "Save Money with Canadian Referral Codes",
      "subtitle": "Get free cash bonuses when you sign up for the best Canadian services using my referral codes.",
      "cta": "Browse All Deals"
    },
    "featured": {
      "title": "Featured Offers",
      "subtitle": "The best referral bonuses available right now"
    },
    "categories": {
      "title": "Browse by Category"
    }
  },
  "footer": {
    "disclaimer": "Affiliate Disclosure: This site contains referral links. When you sign up using my links, I may earn a commission at no extra cost to you. This helps support the site.",
    "copyright": "© {year} RefCodes Canada. All rights reserved.",
    "privacy": "Privacy Policy",
    "terms": "Terms of Use"
  }
}
```

### French (`messages/fr.json`)

```json
{
  "site": {
    "name": "CodesRéf Canada",
    "tagline": "Économisez avec les meilleurs codes de parrainage canadiens",
    "description": "Votre source de confiance pour les codes de parrainage et bonus d'inscription canadiens"
  },
  "nav": {
    "home": "Accueil",
    "banking": "Banques",
    "telecom": "Télécom",
    "investing": "Investissement",
    "blog": "Blogue",
    "about": "À propos"
  },
  "common": {
    "getBonus": "Obtenez votre bonus",
    "copyCode": "Copier le code",
    "copied": "Copié!",
    "useMyCode": "Utilisez mon code de parrainage",
    "signUpNow": "Inscrivez-vous maintenant",
    "learnMore": "En savoir plus",
    "lastUpdated": "Dernière mise à jour",
    "readMore": "Lire la suite",
    "viewAll": "Voir tout",
    "featured": "En vedette",
    "new": "Nouveau",
    "limited": "Durée limitée",
    "comingSoon": "Bientôt disponible"
  },
  "referral": {
    "yourBonus": "Votre bonus",
    "theirBonus": "Leur bonus",
    "upTo": "jusqu'à",
    "minimumDeposit": "Dépôt minimum",
    "holdPeriod": "Période de rétention",
    "days": "jours",
    "annualLimit": "Limite annuelle",
    "unlimited": "Illimité",
    "howItWorks": "Comment ça fonctionne",
    "prosAndCons": "Avantages et inconvénients",
    "pros": "Avantages",
    "cons": "Inconvénients",
    "tips": "Conseils pro",
    "faq": "Questions fréquentes",
    "bonusTiers": "Niveaux de bonus",
    "depositAmount": "Montant du dépôt",
    "availability": "Disponible au",
    "rating": "Note",
    "referralCode": "Code de parrainage"
  },
  "home": {
    "hero": {
      "title": "Économisez avec les codes de parrainage canadiens",
      "subtitle": "Obtenez des bonus en argent gratuits en vous inscrivant aux meilleurs services canadiens avec mes codes de parrainage.",
      "cta": "Parcourir toutes les offres"
    },
    "featured": {
      "title": "Offres en vedette",
      "subtitle": "Les meilleurs bonus de parrainage disponibles en ce moment"
    },
    "categories": {
      "title": "Parcourir par catégorie"
    }
  },
  "footer": {
    "disclaimer": "Divulgation d'affiliation: Ce site contient des liens de parrainage. Lorsque vous vous inscrivez en utilisant mes liens, je peux recevoir une commission sans frais supplémentaires pour vous. Cela aide à soutenir le site.",
    "copyright": "© {year} CodesRéf Canada. Tous droits réservés.",
    "privacy": "Politique de confidentialité",
    "terms": "Conditions d'utilisation"
  }
}
```

---

## Site Constants (`lib/constants.ts`)

```typescript
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
```

---

## Key Components Implementation

### CopyButton Component (`components/ui/CopyButton.tsx`)

```tsx
'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyButtonProps {
  code: string;
  className?: string;
}

export function CopyButton({ code, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        inline-flex items-center gap-2 px-4 py-2 
        bg-gray-100 hover:bg-gray-200 
        border border-gray-300 rounded-lg
        font-mono text-sm font-medium text-gray-800
        transition-all duration-200
        ${copied ? 'bg-emerald-50 border-emerald-300 text-emerald-700' : ''}
        ${className}
      `}
    >
      <span className="select-all">{code}</span>
      {copied ? (
        <Check className="w-4 h-4 text-emerald-600" />
      ) : (
        <Copy className="w-4 h-4 text-gray-500" />
      )}
    </button>
  );
}
```

### ReferralHero Component (`components/referral/ReferralHero.tsx`)

```tsx
import { CopyButton } from '@/components/ui/CopyButton';
import { CompanyLogo } from '@/components/ui/CompanyLogo';
import type { ReferralProgram } from '@/types';

interface ReferralHeroProps {
  referral: ReferralProgram;
  t: {
    yourBonus: string;
    referralCode: string;
    signUpNow: string;
    upTo: string;
  };
}

export function ReferralHero({ referral, t }: ReferralHeroProps) {
  const isComingSoon = referral.referralCode === 'COMING_SOON';
  
  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Logo */}
          <CompanyLogo company={referral.id as any} size="lg" />
          
          {/* Content */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {referral.name}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              {referral.shortDescription}
            </p>
            
            {/* Bonus display */}
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-2">
                <span className="text-sm text-emerald-700">{t.yourBonus}</span>
                <p className="text-2xl font-bold text-emerald-600">
                  {referral.yourBonus.max > referral.yourBonus.min ? (
                    <>{t.upTo} ${referral.yourBonus.max}</>
                  ) : (
                    <>${referral.yourBonus.min}</>
                  )}
                </p>
              </div>
            </div>
            
            {/* Referral code + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {isComingSoon ? (
                <div className="px-4 py-2 bg-gray-200 rounded-lg text-gray-500 font-medium">
                  Code coming soon
                </div>
              ) : (
                <>
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">
                      {t.referralCode}
                    </span>
                    <CopyButton code={referral.referralCode} />
                  </div>
                  
                  <a
                    href={referral.referralLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    {t.signUpNow}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## Implementation Order

### Phase 1: Foundation (Do First)
1. ✅ Create Next.js project with TypeScript
2. ✅ Configure Tailwind with custom grey color palette
3. ✅ Set up next-intl for i18n (EN/FR)
4. ✅ Create Logo component (text-based)
5. ✅ Create basic layout (Header, Footer)
6. ✅ Implement LanguageSwitcher

### Phase 2: Core Components
1. Build CopyButton component
2. Build CompanyLogo placeholder component
3. Build ReferralCard component
4. Build ReferralHero component
5. Build BonusTable component (for Wealthsimple tiers)

### Phase 3: Pages
1. Create Homepage with hero and featured referrals
2. Create Wealthsimple referral page (EN + FR)
3. Create Fizz referral page (EN + FR) - with "coming soon" state
4. Create Banking category page
5. Create Telecom category page

### Phase 4: SEO & Polish
1. Add meta tags and JSON-LD structured data
2. Generate sitemap.xml
3. Generate robots.txt
4. Add privacy policy page
5. Add affiliate disclosure
6. Optimize images and performance

### Phase 5: Deploy
1. Test all pages in both languages
2. Test mobile responsiveness
3. Verify all links work
4. Deploy to Vercel

---

## Commands to Start

```bash
# Create Next.js project
npx create-next-app@latest refcodes-canada --typescript --tailwind --eslint --app --src-dir=false

# Navigate to project
cd refcodes-canada

# Install dependencies
npm install next-intl lucide-react clsx tailwind-merge

# Start development
npm run dev
```

---

## Notes for Claude Code

1. **Wealthsimple code is ready:** Use `EYP3LM` everywhere
2. **Fizz code is TBD:** Use `COMING_SOON` as placeholder, display "Coming Soon" in UI
3. **Domain TBD:** Use placeholder `refcodes.ca` in configs
4. **Color scheme:** Grey/white theme (use Tailwind gray scale)
5. **Logo:** Text-based for now, easily replaceable later
6. **Company logos:** Use placeholder colored divs with text

---

## Success Criteria

- [ ] Site loads in < 3 seconds
- [ ] Both EN and FR work correctly
- [ ] Wealthsimple page shows code EYP3LM with copy button
- [ ] Fizz page shows "Coming Soon" state gracefully
- [ ] Language switcher preserves current page
- [ ] Mobile responsive on all pages
- [ ] Grey/white color scheme applied consistently
- [ ] Affiliate disclosure visible
- [ ] Deploys to Vercel successfully

---

**END OF PROMPT**

Copy this entire file and paste it into Claude Code to build your referral website. When you get your Fizz code, just update the `COMING_SOON` placeholder in the constants and JSON files.

Good luck! 🚀
