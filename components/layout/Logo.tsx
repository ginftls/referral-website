import Link from 'next/link';

interface LogoProps {
  locale: string;
  className?: string;
}

export function Logo({ locale, className = '' }: LogoProps) {
  return (
    <Link 
      href={`/${locale}`}
      className={`flex items-center gap-2 ${className}`}
    >
      {/* Icon placeholder - replace with custom SVG later */}
      <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">CR</span>
      </div>
      
      {/* Text logo */}
      <div className="flex flex-col">
        <span className="text-lg font-bold text-gray-900 leading-tight">
          {locale === 'fr' ? 'Codes Réf' : 'Ref Codes'}
        </span>
        <span className="text-xs text-gray-500 leading-tight">
          Canada
        </span>
      </div>
    </Link>
  );
}

// Alternative: Simple text-only version
export function LogoSimple({ locale, className = '' }: LogoProps) {
  return (
    <Link 
      href={`/${locale}`}
      className={`font-bold text-xl text-gray-900 hover:text-gray-700 transition-colors ${className}`}
    >
      {locale === 'fr' ? 'CodesRéf.ca' : 'RefCodes.ca'}
    </Link>
  );
}