import type { ReferralProgram, Locale } from '@/types';
import { REFERRAL_CODES } from './constants';

export async function getReferrals(locale: Locale): Promise<ReferralProgram[]> {
  try {
    // Import JSON files dynamically
    const [wealthsimpleModule, fizzModule] = await Promise.all([
      import(`@/content/referrals/${locale}/wealthsimple.json`),
      import(`@/content/referrals/${locale}/fizz.json`)
    ]);
    
    return [wealthsimpleModule.default, fizzModule.default];
  } catch (error) {
    console.error('Failed to load referrals:', error);
    return [];
  }
}

export async function getReferralBySlug(
  slug: string,
  locale: Locale
): Promise<ReferralProgram | null> {
  try {
    const referral = await import(`@/content/referrals/${locale}/${slug}.json`);
    return referral.default;
  } catch (error) {
    console.error(`Failed to load referral ${slug}:`, error);
    return null;
  }
}

export async function getFeaturedReferrals(locale: Locale): Promise<ReferralProgram[]> {
  const referrals = await getReferrals(locale);
  return referrals.filter(referral => referral.featured);
}

export async function getReferralsByCategory(
  category: string,
  locale: Locale
): Promise<ReferralProgram[]> {
  const referrals = await getReferrals(locale);
  return referrals.filter(referral => referral.category === category);
}

export function getReferralCode(referralId: string): string {
  return REFERRAL_CODES[referralId as keyof typeof REFERRAL_CODES]?.code || '';
}

export function getReferralLink(referralId: string): string {
  return REFERRAL_CODES[referralId as keyof typeof REFERRAL_CODES]?.link || '';
}