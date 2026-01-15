import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | CubeADM',
  description: 'CubeADM Cookie Policy - How we use cookies on our website.',
}

export default function CookiesPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2026</p>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. What Are Cookies</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience and understand how you use our site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies to remember your preferences, understand how you interact with our website, 
              and improve our services. We also use cookies for analytics purposes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Types of Cookies We Use</h2>
            <p className="text-gray-600 mb-4">
              <strong>Essential Cookies:</strong> Required for the website to function properly.<br />
              <strong>Analytics Cookies:</strong> Help us understand how visitors use our site.<br />
              <strong>Preference Cookies:</strong> Remember your settings and preferences.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              You can control and manage cookies through your browser settings. 
              Please note that disabling certain cookies may affect the functionality of our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our Cookie Policy, please contact us at:<br />
              Email: info@cubeadm.co.zw<br />
              Phone: +263 78 266 7295
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
