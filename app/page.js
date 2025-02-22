// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">QuickTalk: Instant Communication, Simplified.</h1>
          <p className="text-lg mb-8">Connect with friends, family, and colleagues instantly. Experience seamless communication with QuickTalk.</p>
          <Link href="/signup" className="bg-white text-indigo-600 py-3 px-8 rounded-full font-semibold hover:bg-gray-200">
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Instant Messaging</h3>
              <p className="text-gray-600">Send messages instantly to individuals or groups.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Voice & Video Calls</h3>
              <p className="text-gray-600">Enjoy high-quality voice and video calls.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">File Sharing</h3>
              <p className="text-gray-600">Share documents, images, and videos with ease.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Group Chats</h3>
              <p className="text-gray-600">Create and manage group chats for teams and communities.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">End-to-End Encryption</h3>
              <p className="text-gray-600">Your conversations are secure with end-to-end encryption.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Cross-Platform</h3>
              <p className="text-gray-600">Available on iOS, Android, and Web.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Basic</h3>
              <p className="text-4xl font-bold mb-4 text-indigo-600">$0</p>
              <p className="text-gray-600 mb-6">Free forever.</p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Unlimited messaging</li>
                <li>Basic voice calls</li>
                <li>Up to 5 group chats</li>
              </ul>
              <Link href="/signup" className="bg-indigo-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-indigo-700">
                Get Started
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Pro</h3>
              <p className="text-4xl font-bold mb-4 text-indigo-600">$9.99/month</p>
              <p className="text-gray-600 mb-6">For enhanced communication.</p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Unlimited messaging & calls</li>
                <li>Unlimited group chats</li>
                <li>Advanced file sharing</li>
              </ul>
              <Link href="/signup" className="bg-indigo-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-indigo-700">
                Get Started
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Enterprise</h3>
              <p className="text-4xl font-bold mb-4 text-indigo-600">Contact Us</p>
              <p className="text-gray-600 mb-6">Custom solutions for your team.</p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Dedicated support</li>
                <li>Custom integrations</li>
                <li>Enhanced security</li>
              </ul>
              <Link href="/contact" className="bg-indigo-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-indigo-700">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} QuickTalk. All rights reserved.</p>
      </footer>
    </div>
  );
}

export const metadata = {
  title: 'Home- QuickTalk',
  description: 'Chat with your folks!!',
}