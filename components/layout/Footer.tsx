import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export function Footer() {
  const locale = useLocale();
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-gray-900 mb-4">
              {locale === 'fr' ? 'CodesRéf Canada' : 'RefCodes Canada'}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {locale === 'fr' 
                ? 'Votre source de confiance pour les codes de parrainage et bonus d\'inscription canadiens. Économisez de l\'argent avec les meilleures offres disponibles.'
                : 'Your trusted source for Canadian referral codes and sign-up bonuses. Save money with the best deals available.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              {locale === 'fr' ? 'Liens rapides' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${locale}/banking`}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  {locale === 'fr' ? 'Banques' : 'Banking'}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/telecom`}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  {locale === 'fr' ? 'Télécom' : 'Telecom'}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/blog`}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  {locale === 'fr' ? 'Blogue' : 'Blog'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              {locale === 'fr' ? 'Légal' : 'Legal'}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${locale}/privacy`}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/about`}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  {locale === 'fr' ? 'À propos' : 'About'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              {t('copyright', { year: currentYear })}
            </p>
            <p className="text-gray-500 text-sm text-center md:text-right max-w-md">
              {t('disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}