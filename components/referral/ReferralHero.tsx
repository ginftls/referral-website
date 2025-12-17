import { CopyButton } from '@/components/ui/CopyButton';
import { CompanyLogo } from '@/components/ui/CompanyLogo';
import { Button } from '@/components/ui/Button';
import { ExternalLink } from 'lucide-react';
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
                  >
                    <Button size="lg" className="gap-2">
                      {t.signUpNow}
                      <ExternalLink className="w-4 h-4" />
                    </Button>
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