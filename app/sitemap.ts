import { MetadataRoute } from 'next';
import { getReferrals } from '@/lib/referrals';
import { SITE_CONFIG } from '@/lib/constants';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;
  
  // Get all referrals for both languages
  const [enReferrals, frReferrals] = await Promise.all([
    getReferrals('en'),
    getReferrals('fr')
  ]);

  const routes = [
    // Homepage
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/fr`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    
    // Category pages
    {
      url: `${baseUrl}/en/banking`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr/banking`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/telecom`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr/telecom`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/investing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr/investing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },

    // Static pages
    {
      url: `${baseUrl}/en/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/fr/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/en/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/fr/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ];

  // Add referral pages
  const enReferralRoutes = enReferrals.map(referral => ({
    url: `${baseUrl}/en/referral/${referral.slug}`,
    lastModified: new Date(referral.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: referral.featured ? 0.9 : 0.7,
  }));

  const frReferralRoutes = frReferrals.map(referral => ({
    url: `${baseUrl}/fr/referral/${referral.slug}`,
    lastModified: new Date(referral.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: referral.featured ? 0.9 : 0.7,
  }));

  return [...routes, ...enReferralRoutes, ...frReferralRoutes];
}