export default function HomePage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {locale === 'fr' ? 'Code de Parrainage Wealthsimple EYP3LM' : 'Wealthsimple Referral Code EYP3LM'}
          </h1>
          <a 
            href="https://www.wealthsimple.com/invite/EYP3LM"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 border-4 border-yellow-600 rounded-2xl p-8 mb-6 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-2xl"
          >
            <div className="text-center">
              <p className="text-4xl font-black text-gray-900 mb-4 animate-pulse">
                {locale === 'fr' ? '🎯 CLIQUEZ ICI! Code: EYP3LM 🎯' : '🎯 CLICK HERE! Code: EYP3LM 🎯'}
              </p>
              <p className="text-3xl font-bold text-red-600 mb-3">
                {locale === 'fr' ? '💰 BONUS JUSQU\'À 3 000$! 💰' : '💰 GET UP TO $3,000 BONUS! 💰'}
              </p>
              <p className="text-2xl font-bold text-green-700">
                {locale === 'fr' ? '⚡ 25$ GRATUIT avec 1$ de dépôt! ⚡' : '⚡ $25 FREE with just $1 deposit! ⚡'}
              </p>
              <div className="mt-4 bg-white rounded-xl p-4 inline-block">
                <p className="text-xl font-black text-gray-900">
                  {locale === 'fr' ? '👆 CLIQUEZ POUR VOUS INSCRIRE' : '👆 CLICK TO SIGN UP NOW'}
                </p>
              </div>
            </div>
          </a>
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
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="font-black text-white text-2xl">WS</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900">💰 WEALTHSIMPLE 💰</h3>
                    <p className="text-lg font-bold text-green-600">🇨🇦 Canada&apos;s #1 Investing App</p>
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
              
              <a 
                href="https://www.wealthsimple.com/invite/EYP3LM"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
              >
                {locale === 'fr' ? 'Inscrivez-vous maintenant' : 'Sign Up Now'} →
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