export default function WorkingPage() {
  return (
    <html lang="en">
      <head>
        <title>RefCodes Canada - Canadian Referral Codes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-white text-gray-900">
        <div className="min-h-screen">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src="/images/logos/Canada flag.png" alt="Canada" className="w-8 h-6 rounded" />
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CR</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">Ref Codes</div>
                  <div className="text-xs text-gray-500">Canada</div>
                </div>
              </div>
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <span className="px-2 py-1 text-sm font-medium bg-gray-800 text-white">EN</span>
                <span className="px-2 py-1 text-sm font-medium bg-white text-gray-700">FR</span>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Save Money with Canadian Referral Codes
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Get free cash bonuses when you sign up for the best Canadian services using my referral codes.
              </p>
            </div>

            {/* Wealthsimple Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <img src="/images/logos/Wealthsimple.png" alt="Wealthsimple" className="w-16 h-16 rounded-lg" />
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
          </main>

          {/* Footer */}
          <footer className="bg-gray-50 border-t border-gray-200 py-8">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <p className="text-sm text-gray-500">
                © 2025 RefCodes Canada. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}