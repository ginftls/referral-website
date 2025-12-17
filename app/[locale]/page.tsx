import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          <a 
            href="#featured"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {t('home.hero.cta')}
          </a>
        </div>
      </section>

      {/* Featured Offers */}
      <section id="featured" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('home.featured.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('home.featured.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Wealthsimple Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <img src="/images/logos/Wealthsimple.png" alt="Wealthsimple" className="w-12 h-12 rounded-lg" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Wealthsimple</h3>
                    <p className="text-sm text-gray-500">Canada's #1 Investing App</p>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs font-medium rounded-full">
                  {t('common.featured')}
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-1">
                  {t('referral.yourBonus')}
                </p>
                <p className="text-lg font-bold text-emerald-600">
                  {t('referral.upTo')} $3,000
                </p>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                Canada's most popular investing app. Get $25 free when you sign up and fund your account with just $1.
              </p>
              
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <p className="text-xs text-gray-500 mb-1">{t('referral.referralCode')}</p>
                <p className="font-mono font-bold text-gray-900">EYP3LM</p>
              </div>
              
              <a 
                href="https://www.wealthsimple.com/invite/EYP3LM"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
              >
                {t('common.signUpNow')} →
              </a>
            </div>

            {/* Fizz Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">F</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Fizz</h3>
                    <p className="text-sm text-gray-500">Quebec's Digital Leader</p>
                  </div>
                </div>
                <span className="bg-amber-100 text-amber-800 px-2 py-1 text-xs font-medium rounded-full">
                  {t('common.comingSoon')}
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-1">
                  {t('referral.yourBonus')}
                </p>
                <p className="text-lg font-bold text-emerald-600">
                  {t('referral.upTo')} $50
                </p>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                Quebec's favorite digital mobile and internet provider. Get $25-$50 credit when you sign up.
              </p>
              
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <p className="text-xs text-gray-500 mb-1">{t('referral.referralCode')}</p>
                <p className="font-mono font-bold text-gray-400">COMING_SOON</p>
              </div>
              
              <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-semibold cursor-not-allowed">
                {t('common.comingSoon')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Banking & Investing
          </h2>
          <div className="text-center">
            <a 
              href="/en/banking"
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              View All Banking Offers →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}