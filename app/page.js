'use client';

import { useState } from 'react';

export default function TutorialBlog() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setButtonClicked(true);
    setClickCount(clickCount + 1);
    setTimeout(() => setButtonClicked(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Web Dev Tutorial Hub
          </h1>
          <p className="text-gray-600 text-sm mt-1">Learn to build modern web applications</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Blog Post */}
        <article className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
          <div className="mb-8">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Tutorial
            </span>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              How to Use Tailwind CSS in Your Next.js Project
            </h1>
            
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <span>👤 Raphael Miguel P. Dumdum</span>
            </div>
          </div>

          <div className="prose max-w-none">
            {/* Introduction */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <p className="text-lg text-gray-800 font-medium">
                🎯 <strong>What You'll Learn:</strong> Tailwind CSS is a utility-first CSS framework that revolutionizes 
                how you style web applications. Instead of writing custom CSS files, you apply pre-built utility classes 
                directly to your HTML elements for rapid, consistent styling.
              </p>
            </div>

            {/* Prerequisites */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                ⚠️ Prerequisites
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Node.js installed on your computer</li>
                <li>• Basic understanding of HTML and CSS</li>
                <li>• Familiarity with React/Next.js (helpful but not required)</li>
              </ul>
            </div>

            {/* Step 1 */}
            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
              <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">1</span>
              Installation & Setup
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              First, let's install Tailwind CSS in your Next.js project. Open your terminal and run:
            </p>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-xl mb-6 font-mono text-sm shadow-lg">
              <div className="flex items-center gap-2 mb-3 text-gray-400">
                <span>$</span>
                <span className="text-green-400">Terminal</span>
              </div>
              <code className="text-cyan-300">npm install -D tailwindcss postcss autoprefixer</code>
              <br />
              <code className="text-cyan-300">npx tailwindcss init -p</code>
            </div>

            <p className="text-gray-700 mb-6 text-lg">
              This creates a <code className="bg-gray-200 px-2 py-1 rounded text-sm">tailwind.config.js</code> file 
              where you can customize your Tailwind setup.
            </p>

            {/* Step 2 */}
            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
              <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">2</span>
              Configure Your Template Paths
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Update your <code className="bg-gray-200 px-2 py-1 rounded text-sm">tailwind.config.js</code> to 
              tell Tailwind where to look for your files:
            </p>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-xl mb-6 font-mono text-sm shadow-lg overflow-x-auto">
              <pre className="text-gray-300">{`module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</pre>
            </div>

            {/* Step 3 */}
            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
              <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">3</span>
              Interactive Example
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Here's a live button using Tailwind classes. Try clicking it!
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl mb-6 border-2 border-blue-200">
              <button 
                onClick={handleButtonClick}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                🎨 Click Me!
              </button>
              
              {buttonClicked && (
                <div className="mt-6 p-5 bg-green-100 border-2 border-green-400 text-green-800 rounded-lg animate-pulse">
                  <span className="text-2xl">🎉</span> <strong>Awesome!</strong> You've clicked {clickCount} time{clickCount !== 1 ? 's' : ''}!
                  <p className="text-sm mt-2 text-green-700">This message appears using Tailwind's utility classes!</p>
                </div>
              )}
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <p className="text-gray-800 mb-3 font-semibold">🔍 Class Breakdown:</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><code className="bg-white px-2 py-1 rounded">bg-gradient-to-r from-blue-500 to-purple-600</code> - Gradient background</li>
                <li><code className="bg-white px-2 py-1 rounded">hover:from-blue-600</code> - Changes gradient on hover</li>
                <li><code className="bg-white px-2 py-1 rounded">transform hover:scale-105</code> - Scales up 5% on hover</li>
                <li><code className="bg-white px-2 py-1 rounded">transition-all duration-200</code> - Smooth 200ms transitions</li>
              </ul>
            </div>

            {/* Step 4 */}
            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
              <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">4</span>
              Essential Utility Classes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-400 transition-colors">
                <h4 className="font-bold text-lg mb-3 text-blue-600">🎨 Colors</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <code className="bg-gray-100 px-2 py-0.5 rounded">bg-blue-500</code> - Background color</li>
                  <li>• <code className="bg-gray-100 px-2 py-0.5 rounded">text-white</code> - Text color</li>
                  <li>• <code className="bg-gray-100 px-2 py-0.5 rounded">border-gray-300</code> - Border color</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-400 transition-colors">
                <h4 className="font-bold text-lg mb-3 text-purple-600">📏 Spacing</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <code className="bg-gray-100 px-2 py-0.5 rounded">p-4</code> - Padding (1rem)</li>
                  <li>• <code className="bg-gray-100 px-2 py-0.5 rounded">m-2</code> - Margin (0.5rem)</li>
                  <li>• <code className="bg-gray-100 px-2 py-0.5 rounded">gap-4</code> - Gap between elements</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-400 transition-colors">
                <h4 className="font-bold text-lg mb-3 text-green-600">📐 Layout</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <code className="bg-gray-100 px-2 py-0.5 rounded">flex</code> - Flexbox container</li>
                  <li>• <code className="bg-gray-100 px-2 py-0.5 rounded">grid</code> - Grid container</li>
                  <li>• <code className="bg-gray-100 px-2 py-0.5 rounded">items-center</code> - Align items center</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-orange-400 transition-colors">
                <h4 className="font-bold text-lg mb-3 text-orange-600">✍️ Typography</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <code className="bg-gray-100 px-2 py-0.5 rounded">text-xl</code> - Font size extra large</li>
                  <li>• <code className="bg-gray-100 px-2 py-0.5 rounded">font-bold</code> - Bold font weight</li>
                  <li>• <code className="bg-gray-100 px-2 py-0.5 rounded">text-center</code> - Center text</li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
              <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">5</span>
              Responsive Design
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Tailwind makes responsive design simple with breakpoint prefixes:
            </p>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-xl mb-6 font-mono text-sm shadow-lg">
              <code className="text-cyan-300">
                {`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">`}
              </code>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              This creates a 1-column layout on mobile, 2 columns on tablets (<code className="bg-gray-200 px-2 py-1 rounded text-sm">md:</code>), 
              and 3 columns on desktops (<code className="bg-gray-200 px-2 py-1 rounded text-sm">lg:</code>).
            </p>

            {/* Pro Tips */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                💡 Pro Tips
              </h3>
              <ul className="space-y-2 text-gray-800">
                <li>• Use the <a href="https://tailwindcss.com/docs" className="text-blue-600 hover:underline font-semibold">official docs</a> as your reference guide</li>
                <li>• Install the Tailwind CSS IntelliSense extension for VS Code</li>
                <li>• Combine utilities to create complex designs without custom CSS</li>
                <li>• Use arbitrary values when needed: <code className="bg-white px-2 py-1 rounded text-sm">w-[137px]</code></li>
              </ul>
            </div>

            {/* Try It Yourself */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              🚀 Try It Yourself!
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              The best way to master Tailwind is through experimentation. Start by modifying the button above, 
              then try building your own components. The utility-first approach might feel unusual at first, 
              but you'll soon appreciate how quickly you can build beautiful, responsive interfaces.
            </p>

            {/* Next Steps */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📚 What's Next?</h3>
              <p className="text-gray-700 mb-4">
                Now that you understand the basics, explore these advanced topics:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Customizing your theme in <code className="bg-white px-2 py-1 rounded text-sm">tailwind.config.js</code></li>
                <li>• Using @apply directive for component classes</li>
                <li>• Installing official Tailwind plugins</li>
                <li>• Dark mode with the <code className="bg-white px-2 py-1 rounded text-sm">dark:</code> modifier</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Related Posts Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">📖 Related Tutorials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="font-bold text-xl mb-2 text-gray-900">CSS Flexbox Guide</h4>
              <p className="text-gray-600 text-sm mb-3">Master flexbox layout for modern, responsive designs</p>
              <span className="text-blue-600 text-sm font-semibold hover:underline">Read more →</span>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer">
              <div className="text-4xl mb-3">📱</div>
              <h4 className="font-bold text-xl mb-2 text-gray-900">Responsive Design</h4>
              <p className="text-gray-600 text-sm mb-3">Build sites that work beautifully on all devices</p>
              <span className="text-blue-600 text-sm font-semibold hover:underline">Read more →</span>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer">
              <div className="text-4xl mb-3">⚛️</div>
              <h4 className="font-bold text-xl mb-2 text-gray-900">React Basics</h4>
              <p className="text-gray-600 text-sm mb-3">Get started with React components and hooks</p>
              <span className="text-blue-600 text-sm font-semibold hover:underline">Read more →</span>
            </div>
          </div>
        </div>

        {/* Deploy to Vercel CTA */}
        <div className="mt-16 bg-gradient-to-r from-black to-gray-800 rounded-2xl p-10 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Deploy Your Site?</h3>
          <p className="text-gray-300 mb-6 text-lg">
            Deploy this tutorial blog to Vercel in seconds. It's free and takes just one click!
          </p>
          <a 
            href="https://vercel.com/new" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Deploy to Vercel →
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-3">Web Dev Tutorial Hub</h4>
              <p className="text-slate-400 text-sm">
                Learn modern web development with hands-on tutorials and real examples.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">All Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">Technologies</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Next.js & React</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              Built with ❤️ using Next.js and Tailwind CSS • Deploy on Vercel
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}