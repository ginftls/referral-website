interface CompanyLogoProps {
  company: 'wealthsimple' | 'fizz';
  size?: 'sm' | 'md' | 'lg';
}

const logoConfig = {
  wealthsimple: { bg: 'bg-gray-900', text: 'Wealthsimple' },
  fizz: { bg: 'bg-indigo-500', text: 'Fizz' },
};

const sizeConfig = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
};

export function CompanyLogo({ company, size = 'md' }: CompanyLogoProps) {
  const config = logoConfig[company];
  return (
    <div className={`${config.bg} ${sizeConfig[size]} rounded-lg flex items-center justify-center`}>
      <span className="text-white font-semibold">{config.text}</span>
    </div>
  );
}