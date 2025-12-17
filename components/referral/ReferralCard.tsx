import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { StarRating } from '@/components/ui/StarRating';
import { CompanyLogo } from '@/components/ui/CompanyLogo';
import { Button } from '@/components/ui/Button';
import type { ReferralProgram } from '@/types';

interface ReferralCardProps {
  referral: ReferralProgram;
  t: {
    yourBonus: string;
    upTo: string;
    learnMore: string;
    featured: string;
    comingSoon: string;
  };
}

export function ReferralCard({ referral, t }: ReferralCardProps) {
  const locale = useLocale();
  const isComingSoon = referral.referralCode === 'COMING_SOON';

  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <CompanyLogo company={referral.id as any} size="md" />
          <div className="flex flex-col items-end gap-2">
            {referral.featured && <Badge variant="featured">{t.featured}</Badge>}
            {isComingSoon && <Badge variant="warning">{t.comingSoon}</Badge>}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {referral.name}
        </h3>

        <div className="flex items-center gap-4 mb-3">
          <div className="text-center">
            <p className="text-xs text-gray-500">{t.yourBonus}</p>
            <p className="text-lg font-bold text-emerald-600">
              {referral.yourBonus.max > referral.yourBonus.min ? (
                <>{t.upTo} ${referral.yourBonus.max}</>
              ) : (
                <>${referral.yourBonus.min}</>
              )}
            </p>
          </div>
          <StarRating rating={referral.rating} />
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {referral.shortDescription}
        </p>

        <Link href={`/${locale}/referral/${referral.slug}`}>
          <Button variant="outline" className="w-full">
            {t.learnMore}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}