import { useLocale } from 'next-intl';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo locale={locale} />

          {/* Navigation */}
          <Navigation />

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}