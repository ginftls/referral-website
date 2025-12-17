import Link from 'next/link';

export default async function BankingPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const isEnglish = locale === 'en';

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {isEnglish ? 'Banking Referral Codes' : 'Codes de Parrainage Bancaires'}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {isEnglish 
            ? 'Get free cash bonuses with the best Canadian banking referral codes.'
            : 'Obtenez des bonus en argent gratuits avec les meilleurs codes de parrainage bancaires canadiens.'
          }
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Wealthsimple Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <img src="/images/logos/Wealthsimple.png" alt="Wealthsimple" className="w-10 h-10 rounded-lg" />
              <div className="h-10 px-4 bg-gray-900 rounded-lg flex items-center">
                <span className="text-white font-semibold text-sm">Wealthsimple</span>
              </div>
            </div>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs font-medium rounded-full">
              {isEnglish ? 'Featured' : 'En vedette'}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Wealthsimple</h3>
          
          <div className="mb-3">
            <p className="text-xs text-gray-500">
              {isEnglish ? 'Your Bonus' : 'Votre bonus'}
            </p>
            <p className="text-lg font-bold text-emerald-600">
              {isEnglish ? 'up to $3000' : 'jusqu\'à 3000$'}
            </p>
          </div>
          
          <p className="text-gray-600 text-sm mb-4">
            {isEnglish
              ? "Canada's most popular investing app. Get $25 free when you sign up and fund your account with just $1."
              : "L'application d'investissement la plus populaire au Canada. Obtenez 25$ gratuits en vous inscrivant et en déposant seulement 1$."
            }
          </p>
          
          <Link href={`/${locale}/referral/wealthsimple`}>
            <button className="w-full border border-gray-300 bg-white text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              {isEnglish ? 'Learn More' : 'En savoir plus'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}