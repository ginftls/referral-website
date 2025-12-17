'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navigation() {
  const locale = useLocale();
  const t = useTranslations('nav');
  const pathname = usePathname();

  const navItems = [
    { key: 'home', href: `/${locale}` },
    { key: 'banking', href: `/${locale}/banking` },
    { key: 'telecom', href: `/${locale}/telecom` },
    { key: 'investing', href: `/${locale}/investing` },
    { key: 'blog', href: `/${locale}/blog` },
    { key: 'about', href: `/${locale}/about` },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.key}
            href={item.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-gray-900',
              isActive
                ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                : 'text-gray-600'
            )}
          >
            {t(item.key as any)}
          </Link>
        );
      })}
    </nav>
  );
}