import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | CubeADM',
  description: 'CubeADM Terms of Service - Terms and conditions for using our services.',
}

export default function TermsPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2026</p>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using CubeADM&apos;s services, you accept and agree to be bound by these 
              Terms of Service and our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services</h2>
            <p className="text-gray-600 mb-4">
              CubeADM provides technology training programs and IT solutions services. 
              We reserve the right to modify or discontinue any service at any time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              You are responsible for maintaining the confidentiality of your account information 
              and for all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              Payment for training programs and services must be made according to the agreed terms. 
              Refund policies vary by program and are specified at the time of enrollment.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All content, materials, and intellectual property provided through our services 
              remain the property of CubeADM and may not be reproduced without permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              CubeADM shall not be liable for any indirect, incidental, special, or consequential 
              damages arising from the use of our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contact</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms, contact us at:<br />
              Email: info@cubeadm.co.zw<br />
              Phone: +263 78 266 7295
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
