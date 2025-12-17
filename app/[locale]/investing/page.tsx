import { useTranslations } from 'next-intl';
import { getReferralsByCategory } from '@/lib/referrals';
import { ReferralCard } from '@/components/referral/ReferralCard';
import type { Locale } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investing Referral Codes Canada | Trading Platform Bonuses',
  description: 'Get sign-up bonuses with Canadian investing and trading platform referral codes. Questrade, Interactive Brokers, and more.',
};

export default async function InvestingPage({
  params: { locale }
}: {
  params: { locale: Locale };
}) {
  const t = useTranslations('common');
  const tReferral = useTranslations('referral');
  
  const referrals = await getReferralsByCategory('investing', locale);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {locale === 'fr' ? 'Codes de Parrainage Investissement' : 'Investing Referral Codes'}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {locale === 'fr' 
            ? 'Obtenez des bonus d\'inscription avec les codes de parrainage des plateformes d\'investissement canadiennes.'
            : 'Get sign-up bonuses with Canadian investing and trading platform referral codes.'
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
              ? 'Les codes de parrainage d\'investissement arrivent bientôt. Questrade sera ajouté prochainement.'
              : 'Investing referral codes coming soon. Questrade will be added shortly.'
            }
          </p>
        </div>
      )}
    </div>
  );
}