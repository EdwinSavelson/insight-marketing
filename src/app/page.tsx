import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import AdminButton from './components/AdminButton'
import LogoTitle from './components/LogoTitle'

async function getHomeContent() {
  const filePath = path.join(process.cwd(), 'content', 'home.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContent)
  return data
}



export default async function Home() {
  const content = await getHomeContent()
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            {content.logo && (
              <img 
                src={content.logo} 
                alt="Logo" 
                className="h-16 w-16 object-contain"
              />
            )}
            <h1 className="text-5xl font-bold text-gray-900">
              {content.title}
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            {content.subtitle}
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href={content.hero_button_url || "#download"} 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {content.hero_button}
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
            {content.demo_title}
          </h2>
          <div className="bg-gray-100 rounded-lg p-8 mb-8">
            {content.demo_gif && (
              <img 
                src={content.demo_gif} 
                alt="Demo GIF" 
                className="w-full max-w-2xl mx-auto rounded-lg"
              />
            )}
            {!content.demo_gif && (
              <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500">Upload your demo GIF here</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {content.features_title}
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
            {content.download_title}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {content.download_description}
          </p>
          <a 
            href={content.download_button_url || "../SeniorExperience/client"} 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block"
          >
            {content.download_button}
          </a>
          <p className="mt-4 text-sm opacity-75">
            Compatible with Chrome and Chromium-based browsers
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 text-white text-center">
        <p>&copy; 2025 Insight. Built for better critical thinking.</p>
        <div className="mt-4">
          <AdminButton />
        </div>
      </footer>
    </main>
  )
}
