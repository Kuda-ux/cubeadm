import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Server, Network, Database, Settings, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Solutions | CubeADM - Enterprise IT Infrastructure Zimbabwe',
  description: 'Enterprise-grade IT solutions including network infrastructure, server solutions, and system integration for businesses in Zimbabwe.',
}

const solutions = [
  { icon: Server, title: 'Server Infrastructure', desc: 'Enterprise server deployment, virtualization, and management' },
  { icon: Network, title: 'Network Design', desc: 'Complete LAN/WAN design and implementation' },
  { icon: Database, title: 'Data Management', desc: 'Database solutions and backup systems' },
  { icon: Settings, title: 'System Integration', desc: 'Seamless integration of IT systems' },
]

export default function ITSolutionsPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#005CFF] font-bold text-sm uppercase tracking-wider">IT Solutions</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">Enterprise IT Infrastructure</h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                CubeADM delivers comprehensive IT solutions designed to optimize your business operations. 
                From network infrastructure to server management, we provide enterprise-grade solutions.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#005CFF] text-white font-bold rounded-full hover:bg-[#0050DD] transition-colors">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" alt="IT Solutions" width={600} height={400} className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our IT Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((item) => (
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Upgrade Your IT Infrastructure?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Contact us today for a free consultation.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#005CFF] font-bold rounded-full hover:bg-gray-100 transition-colors">
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
