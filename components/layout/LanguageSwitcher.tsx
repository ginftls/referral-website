'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    // Add new locale
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-500" />
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
        <button
          onClick={() => switchLanguage('en')}
          className={`px-2 py-1 text-sm font-medium transition-colors ${
            locale === 'en'
              ? 'bg-gray-800 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => switchLanguage('fr')}
          className={`px-2 py-1 text-sm font-medium transition-colors ${
            locale === 'fr'
              ? 'bg-gray-800 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          FR
        </button>
      </div>
    </div>
  );
}