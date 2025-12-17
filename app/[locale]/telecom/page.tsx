export default async function TelecomPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {locale === 'fr' ? 'Codes de Parrainage Télécom' : 'Telecom Referral Codes'}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {locale === 'fr' 
            ? 'Économisez sur vos forfaits mobiles et internet avec les codes de parrainage télécom canadiens.'
            : 'Save on mobile and internet plans with Canadian telecom referral codes.'
          }
        </p>
      </div>

      {/* Fizz Card */}
      <div className="max-w-2xl mx-auto">
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
            {locale === 'fr'
              ? 'Le fournisseur mobile et internet numérique préféré du Québec. Obtenez 25$ à 50$ de crédit avec mon code.'
              : 'Quebec\'s favorite digital mobile and internet provider. Get $25-$50 credit when you sign up using my referral code.'
            }
          </p>
          
          <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-semibold cursor-not-allowed">
            {locale === 'fr' ? 'Bientôt disponible' : 'Coming Soon'}
          </button>
        </div>
      </div>
    </div>
  );
}