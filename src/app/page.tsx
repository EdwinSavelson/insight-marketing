'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Insight
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI-powered Chrome extension that detects logical fallacies in real-time
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#download" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Download Free
            </a>
            <a 
              href="#demo" 
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              See Demo
            </a>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            See Insight in Action
          </h2>
          <div className="bg-gray-100 rounded-lg p-8 mb-8">
            <p className="text-gray-600 mb-4">Demo GIF will be placed here</p>
            <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Upload your demo GIF here</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Insight?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-600">Uses advanced Gemini AI to identify logical fallacies with high accuracy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time</h3>
              <p className="text-gray-600">Instant analysis as you browse - no waiting, no delays</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🆓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Completely Free</h3>
              <p className="text-gray-600">No subscriptions, no hidden costs - just install and use</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="px-6 py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Improve Your Critical Thinking?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Download Insight now and start detecting fallacies in articles, social media, and debates
          </p>
          <a 
            href="../SeniorExperience/client" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block"
          >
            Download Chrome Extension
          </a>
          <p className="mt-4 text-sm opacity-75">
            Compatible with Chrome and Chromium-based browsers
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 text-white text-center">
        <p>&copy; 2024 Insight. Built for better critical thinking.</p>
        <div className="mt-4">
          <button 
            onClick={() => {
              if (typeof window !== 'undefined' && window.netlifyIdentity) {
                window.netlifyIdentity.open()
              }
            }}
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Admin Login
          </button>
        </div>
      </footer>
    </main>
  )
}
