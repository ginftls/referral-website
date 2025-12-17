interface SimpleReferralPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default async function SimpleReferralPage({ params }: SimpleReferralPageProps) {
  const { locale, slug } = params;
  const isEnglish = locale === 'en';

  if (slug === 'wealthsimple') {
    return (
      <div>
        {/* Hero Section */}
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-gray-700">WS</span>
                </div>
                <div className="h-12 px-5 bg-gray-900 rounded-lg flex items-center">
                  <span className="text-white font-semibold">Wealthsimple</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Wealthsimple</h1>
                <p className="text-lg text-gray-600 mb-4">
                  {isEnglish
                    ? "Canada's most popular investing app. Get $25 free when you sign up and fund your account with just $1."
                    : "L'application d'investissement la plus populaire au Canada. Obtenez 25$ gratuits en vous inscrivant et en déposant seulement 1$."
                  }
                </p>
                
                {/* Bonus display */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-2">
                    <span className="text-sm text-emerald-700">
                      {isEnglish ? 'Your Bonus' : 'Votre bonus'}
                    </span>
                    <p className="text-2xl font-bold text-emerald-600">
                      {isEnglish ? 'up to $3,000' : 'jusqu\'à 3 000$'}
                    </p>
                  </div>
                </div>
                
                {/* Referral code + CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">
                      {isEnglish ? 'Referral Code' : 'Code de parrainage'}
                    </span>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg font-mono text-sm font-medium text-gray-800">
                      <span className="select-all">EYP3LM</span>
                      <span>📋</span>
                    </div>
                  </div>
                  
                  <a
                    href="https://www.wealthsimple.com/invite/EYP3LM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    {isEnglish ? 'Sign Up Now' : 'Inscrivez-vous maintenant'} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {isEnglish ? 'How It Works' : 'Comment ça fonctionne'}
          </h2>
          
          <div className="grid gap-6 md:gap-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  {isEnglish
                    ? "Click my referral link or use code EYP3LM when signing up"
                    : "Cliquez sur mon lien de parrainage ou utilisez le code EYP3LM lors de l'inscription"
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  {isEnglish
                    ? "Open a Self-Directed Investing, Crypto, Managed Investing, or Chequing account"
                    : "Ouvrez un compte Placements autogérés, Crypto, Placements gérés ou Chèques"
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  {isEnglish
                    ? "Fund your account with at least $1 within 30 days"
                    : "Approvisionnez votre compte avec au moins 1$ dans les 30 jours"
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  {isEnglish
                    ? "Your $25 bonus is deposited within 24 hours"
                    : "Votre bonus de 25$ est déposé en 24 heures"
                  }
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {isEnglish ? 'Pros & Cons' : 'Avantages et inconvénients'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pros */}
            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-4 flex items-center gap-2">
                ✓ {isEnglish ? 'Pros' : 'Avantages'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="text-gray-700">
                    {isEnglish
                      ? "Lowest minimum deposit ($1) of any major referral program"
                      : "Dépôt minimum le plus bas (1$) de tous les programmes de parrainage majeurs"
                    }
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="text-gray-700">
                    {isEnglish
                      ? "Instant bonus payout (within 24 hours)"
                      : "Paiement instantané du bonus (dans les 24 heures)"
                    }
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="text-gray-700">
                    {isEnglish
                      ? "Commission-free ETF and stock trading"
                      : "Trading d'actions et FNB sans commission"
                    }
                  </span>
                </li>
              </ul>
            </div>

            {/* Cons */}
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-4 flex items-center gap-2">
                ✗ {isEnglish ? 'Cons' : 'Inconvénients'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span className="text-gray-700">
                    {isEnglish
                      ? "180-day hold period on bonus funds"
                      : "Période de rétention de 180 jours sur les fonds bonus"
                    }
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span className="text-gray-700">
                    {isEnglish
                      ? "Bonus is taxable income"
                      : "Le bonus est un revenu imposable"
                    }
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Fizz page
  if (slug === 'fizz') {
    return (
      <div>
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Fizz</h1>
            <p className="text-lg text-gray-600">
              {isEnglish
                ? "Fizz referral code coming soon! Quebec's favorite digital telecom provider."
                : "Code de parrainage Fizz bientôt disponible ! Le fournisseur télécom numérique préféré du Québec."
              }
            </p>
          </div>
        </section>
      </div>
    );
  }

  return <div>Page not found</div>;
}