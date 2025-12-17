import { useTranslations } from 'next-intl';
import { getReferralsByCategory } from '@/lib/referrals';
import { ReferralCard } from '@/components/referral/ReferralCard';
import type { Locale } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Telecom Referral Codes Canada | Mobile & Internet Discounts',
  description: 'Save on mobile and internet plans with Canadian telecom referral codes. Fizz, Koodo, and more. Updated December 2025.',
};

export default async function TelecomPage({
  params: { locale }
}: {
  params: { locale: Locale };
}) {
  const t = useTranslations('common');
  const tReferral = useTranslations('referral');
  
  const referrals = await getReferralsByCategory('telecom', locale);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {locale === 'fr' ? 'Codes de Parrainage Télécom' : 'Telecom Referral Codes'}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {locale === 'fr' 
            ? 'Économisez sur vos forfaits mobiles et internet avec les codes de parrainage télécom canadiens.'
            : 'Save on mobile and internet plans with Canadian telecom referral codes.'
          }
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {referrals.map((referral) => (
          <ReferralCard
            key={referral.id}
            referral={referral}
            t={{
              yourBonus: tReferral('yourBonus'),
              upTo: tReferral('upTo'),
              learnMore: t('learnMore'),
              featured: t('featured'),
              comingSoon: t('comingSoon'),
            }}
          />
        ))}
      </div>

      {referrals.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            {locale === 'fr' 
              ? 'Aucun code de parrainage télécom disponible pour le moment.'
              : 'No telecom referral codes available at the moment.'
            }
          </p>
        </div>
      )}
    </div>
  );
}