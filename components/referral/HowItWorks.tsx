import type { ReferralProgram } from '@/types';

interface HowItWorksProps {
  referral: ReferralProgram;
  title: string;
}

export function HowItWorks({ referral, title }: HowItWorksProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      
      <div className="grid gap-6 md:gap-8">
        {referral.howItWorks.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              {index + 1}
            </div>
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">{step}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}