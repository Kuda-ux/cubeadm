import Link from 'next/link'
import { ArrowRight, Phone, Calendar } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:60px_60px]" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Technology Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re looking to upskill your team, transform your IT infrastructure, 
            or start a career in technology, CubeADM is here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/training"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Training Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book a Consultation
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-white/80">
            <Phone className="w-5 h-5" />
            <span>Or call us directly: </span>
            <a href="tel:+263771234567" className="font-semibold text-white hover:underline">
              +263 77 123 4567
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
