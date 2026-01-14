import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, Lock, Eye, AlertTriangle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cybersecurity Services | CubeADM - Security Solutions Zimbabwe',
  description: 'Comprehensive cybersecurity services including penetration testing, security audits, and 24/7 monitoring for businesses in Zimbabwe.',
}

const services = [
  { icon: Shield, title: 'Penetration Testing', desc: 'Identify vulnerabilities before attackers do' },
  { icon: Lock, title: 'Security Audits', desc: 'Comprehensive security assessments' },
  { icon: Eye, title: '24/7 Monitoring', desc: 'Round-the-clock security monitoring' },
  { icon: AlertTriangle, title: 'Incident Response', desc: 'Rapid response to security incidents' },
]

export default function CybersecurityPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#005CFF] font-bold text-sm uppercase tracking-wider">Cybersecurity</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">Protect Your Business</h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Stay ahead of cyber threats with CubeADM&apos;s comprehensive security solutions. 
                We protect your data, systems, and reputation with enterprise-grade security.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#005CFF] text-white font-bold rounded-full hover:bg-[#0050DD] transition-colors">
                Get Protected <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" alt="Cybersecurity" width={600} height={400} className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Security Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-[#005CFF]/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#005CFF]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#005CFF]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Secure Your Business Today</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Don&apos;t wait for a breach. Contact us for a security assessment.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#005CFF] font-bold rounded-full hover:bg-gray-100 transition-colors">
            Get Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
