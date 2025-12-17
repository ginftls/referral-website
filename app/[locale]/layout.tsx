import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '@/app/globals.css';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta name="keywords" content="wealthsimple referral code, wealthsimple bonus, canadian referral codes, EYP3LM, free money canada, investing bonus" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Wealthsimple Referral Code EYP3LM - Get $3000 Bonus | RefCodes Canada" />
        <meta property="og:description" content="Use Wealthsimple referral code EYP3LM to get up to $3000 bonus! Get $25 free with just $1 deposit. Best Canadian referral codes." />
        <meta property="og:url" content="https://referral-website-eta.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wealthsimple Referral Code EYP3LM - $3000 Bonus" />
        <meta name="twitter:description" content="Use code EYP3LM for Wealthsimple $25-$3000 bonus. Canadian referral codes that actually work!" />
      </head>
      <body className="bg-white text-gray-900">
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
              <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇨🇦</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CR</span>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      {locale === 'fr' ? 'Codes Réf' : 'Ref Codes'}
                    </div>
                    <div className="text-xs text-gray-500">Canada</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <nav className="hidden md:flex items-center space-x-6">
                    <a href={`/${locale}`} className="text-sm font-medium text-gray-600 hover:text-gray-900">
                      {locale === 'fr' ? 'Accueil' : 'Home'}
                    </a>
                    <a href={`/${locale}/banking`} className="text-sm font-medium text-gray-600 hover:text-gray-900">
                      {locale === 'fr' ? 'Banques' : 'Banking'}
                    </a>
                    <a href={`/${locale}/telecom`} className="text-sm font-medium text-gray-600 hover:text-gray-900">
                      {locale === 'fr' ? 'Télécom' : 'Telecom'}
                    </a>
                  </nav>
                  <div className="flex border border-gray-300 rounded-md overflow-hidden">
                    <a href="/en" 
                       className={`px-2 py-1 text-sm font-medium ${locale === 'en' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
                      EN
                    </a>
                    <a href="/fr"
                       className={`px-2 py-1 text-sm font-medium ${locale === 'fr' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
                      FR
                    </a>
                  </div>
                </div>
              </div>
            </header>
            <main className="flex-1">
              {children}
            </main>
            <footer className="bg-gray-50 border-t border-gray-200 py-8">
              <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-sm text-gray-500 mb-4">
                  <strong>
                    {locale === 'fr' ? 'Divulgation d\'affiliation:' : 'Affiliate Disclosure:'}
                  </strong>{' '}
                  {locale === 'fr' 
                    ? 'Ce site contient des liens de parrainage. Lorsque vous vous inscrivez en utilisant mes liens, je peux recevoir une commission sans frais supplémentaires pour vous.'
                    : 'This site contains referral links. When you sign up using my links, I may earn a commission at no extra cost to you.'
                  }
                </p>
                <p className="text-sm text-gray-400">
                  © 2025 {locale === 'fr' ? 'CodesRéf Canada' : 'RefCodes Canada'}. 
                  {locale === 'fr' ? ' Tous droits réservés.' : ' All rights reserved.'}
                </p>
              </div>
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}