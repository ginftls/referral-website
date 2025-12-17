export default function HomePage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  
  return (
    <div className="min-h-screen bg-white" data-locale={locale}>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {locale === 'fr' ? 'Code de Parrainage Wealthsimple EYP3LM' : 'Wealthsimple Referral Code EYP3LM'}
          </h1>
          <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 border-2 border-yellow-500 rounded-xl p-4 mb-6 max-w-2xl mx-auto shadow-lg">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                {locale === 'fr' ? '🎯 Code: EYP3LM' : '🎯 Code: EYP3LM'}
              </p>
              <p className="text-lg font-bold text-green-700">
                {locale === 'fr' ? '25$ gratuit avec 1$ de dépôt!' : '$25 FREE with $1 deposit!'}
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {locale === 'fr' ? 'Obtenez des bonus en argent gratuits en vous inscrivant aux meilleurs services canadiens avec mes codes de parrainage.' : 'Get free cash bonuses when you sign up for the best Canadian services using my referral codes.'}
          </p>
          <a 
            href="#featured"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {locale === 'fr' ? 'Parcourir toutes les offres' : 'Browse All Deals'}
          </a>
        </div>
      </section>

      {/* Featured Offers */}
      <section id="featured" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'fr' ? 'Offres en vedette' : 'Featured Offers'}
            </h2>
            <p className="text-lg text-gray-600">
              {locale === 'fr' ? 'Les meilleurs bonus de parrainage disponibles en ce moment' : 'The best referral bonuses available right now'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Wealthsimple Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 via-green-500 to-green-600 rounded-2xl flex items-center justify-center border-4 border-emerald-200 shadow-2xl">
                      <div className="text-center">
                        <div className="font-black text-white text-2xl leading-tight">W</div>
                        <div className="font-black text-white text-sm leading-tight">SIMPLE</div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-black">💰</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 mb-1">
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        WEALTHSIMPLE
                      </span>
                    </h3>
                    <p className="text-lg font-bold text-green-700 flex items-center gap-2">
                      🇨🇦 <span>Canada&apos;s #1 Investing Platform</span>
                    </p>
                    <p className="text-sm font-bold text-emerald-600">⭐ Trusted by 3M+ Canadians</p>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs font-medium rounded-full">
                  {locale === 'fr' ? 'En vedette' : 'Featured'}
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-1">
                  {locale === 'fr' ? 'Votre bonus' : 'Your Bonus'}
                </p>
                <p className="text-lg font-bold text-emerald-600">
                  {locale === 'fr' ? 'jusqu\'à 3 000$' : 'up to $3,000'}
                </p>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                Canada&apos;s most popular investing app. Get $25 free when you sign up and fund your account with just $1.
              </p>
              
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <p className="text-xs text-gray-500 mb-1">{locale === 'fr' ? 'Code de parrainage' : 'Referral Code'}</p>
                <p className="font-mono font-bold text-gray-900">EYP3LM</p>
              </div>
              
              <div className="flex gap-3">
                <a 
                  href={`/${locale}/referral/wealthsimple`}
                  className="flex-1 border border-gray-300 bg-white text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-center"
                >
                  {locale === 'fr' ? 'En savoir plus' : 'Learn More'}
                </a>
                <a 
                  href="https://www.wealthsimple.com/invite/EYP3LM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
                >
                  {locale === 'fr' ? 'S\'inscrire' : 'Sign Up'} →
                </a>
              </div>
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
                    <p className="text-sm text-gray-500">Quebec&apos;s Digital Leader</p>
                  </div>
                </div>
                <span className="bg-amber-100 text-amber-800 px-2 py-1 text-xs font-medium rounded-full">
                  {locale === 'fr' ? 'Bientôt disponible' : 'Coming Soon'}
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-1">
                  {locale === 'fr' ? 'Votre bonus' : 'Your Bonus'}
                </p>
                <p className="text-lg font-bold text-emerald-600">
                  {locale === 'fr' ? 'jusqu\'à 50$' : 'up to $50'}
                </p>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                Quebec&apos;s favorite digital mobile and internet provider. Get $25-$50 credit when you sign up.
              </p>
              
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <p className="text-xs text-gray-500 mb-1">{locale === 'fr' ? 'Code de parrainage' : 'Referral Code'}</p>
                <p className="font-mono font-bold text-gray-400">COMING_SOON</p>
              </div>
              
              <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-semibold cursor-not-allowed">
                {locale === 'fr' ? 'Bientôt disponible' : 'Coming Soon'}
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