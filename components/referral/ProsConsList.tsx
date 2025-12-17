import { Check, X } from 'lucide-react';
import type { ReferralProgram } from '@/types';

interface ProsConsListProps {
  referral: ReferralProgram;
  t: {
    title: string;
    pros: string;
    cons: string;
  };
}

export function ProsConsList({ referral, t }: ProsConsListProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.title}</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Pros */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-700 mb-4 flex items-center gap-2">
            <Check className="w-5 h-5" />
            {t.pros}
          </h3>
          <ul className="space-y-3">
            {referral.pros.map((pro, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div>
          <h3 className="text-lg font-semibold text-red-700 mb-4 flex items-center gap-2">
            <X className="w-5 h-5" />
            {t.cons}
          </h3>
          <ul className="space-y-3">
            {referral.cons.map((con, index) => (
              <li key={index} className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}