import type { ReferralProgram } from '@/types';

interface JsonLdProps {
  type: 'website' | 'offer' | 'organization';
  data: any;
}

export function JsonLd({ type, data }: JsonLdProps) {
  const jsonLdData = generateStructuredData(type, data);
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}

function generateStructuredData(type: string, data: any) {
  switch (type) {
    case 'website':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: data.name,
        url: data.url,
        description: data.description,
        inLanguage: data.locale === 'fr' ? 'fr-CA' : 'en-CA',
        publisher: {
          '@type': 'Organization',
          name: 'RefCodes Canada',
        },
      };

    case 'offer':
      const referral: ReferralProgram = data;
      return {
        '@context': 'https://schema.org',
        '@type': 'Offer',
        name: `${referral.name} Referral Bonus`,
        description: referral.shortDescription,
        url: `https://refcodes.ca/${data.locale}/referral/${referral.slug}`,
        seller: {
          '@type': 'Organization',
          name: referral.name,
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: referral.yourBonus.min,
          priceCurrency: referral.yourBonus.currency,
        },
        availability: 'https://schema.org/InStock',
        validFrom: new Date().toISOString(),
        category: referral.category,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: referral.rating,
          bestRating: 5,
          worstRating: 1,
          ratingCount: 1,
        },
      };

    case 'organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'RefCodes Canada',
        url: 'https://refcodes.ca',
        description: 'Canada\'s trusted source for referral codes and sign-up bonuses',
        sameAs: [
          // Add social media links when available
        ],
      };

    default:
      return null;
  }
}