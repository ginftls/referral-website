import { formatCurrency } from '@/lib/utils';
import type { ReferralProgram } from '@/types';

interface BonusTableProps {
  referral: ReferralProgram;
  t: {
    bonusTiers: string;
    depositAmount: string;
    yourBonus: string;
    theirBonus: string;
  };
}

export function BonusTable({ referral, t }: BonusTableProps) {
  if (!referral.bonusTiers) {
    return null;
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.bonusTiers}</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                {t.depositAmount}
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                {t.yourBonus}
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                {t.theirBonus}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {referral.bonusTiers.map((tier, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">
                  {formatCurrency(tier.depositMin)} - {' '}
                  {tier.depositMax ? formatCurrency(tier.depositMax) : '∞'}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-emerald-600">
                  {formatCurrency(tier.referrerBonus)}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-blue-600">
                  {formatCurrency(tier.refereeBonus)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}