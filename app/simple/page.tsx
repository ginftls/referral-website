export default function SimplePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="/images/logos/Canada flag.png" 
              alt="Canada" 
              className="w-12 h-9 rounded" 
            />
            <h1 className="text-4xl font-bold text-gray-900">
              RefCodes Canada 🇨🇦
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Save money with Canadian referral codes and sign-up bonuses!
          </p>
        </header>

        {/* Wealthsimple Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <img 
              src="/images/logos/Wealthsimple.png" 
              alt="Wealthsimple" 
              className="w-16 h-16 rounded-lg" 
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Wealthsimple</h2>
              <p className="text-gray-600">Canada's #1 Investing App</p>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-green-700 mb-1">Your Bonus</p>
            <p className="text-3xl font-bold text-green-600">Up to $3,000!</p>
          </div>

          <p className="text-gray-700 mb-6">
            Get $25 FREE when you sign up and fund your account with just $1. 
            Canada's most popular investing app with commission-free trading.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-500 mb-1">Referral Code</p>
            <p className="text-xl font-mono font-bold text-gray-900">EYP3LM</p>
          </div>

          <a 
            href="https://www.wealthsimple.com/invite/EYP3LM" 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            Sign Up Now & Get $25 Free →
          </a>
        </div>

        {/* How it works */}
        <div className="mt-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
              <p className="text-gray-700">Use code EYP3LM when signing up for Wealthsimple</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
              <p className="text-gray-700">Open any account and deposit just $1 within 30 days</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
              <p className="text-gray-700">Get your $25 bonus within 24 hours!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}