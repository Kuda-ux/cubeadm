import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Headphones, Monitor, Settings, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Managed IT Services | CubeADM - IT Support Zimbabwe',
  description: 'Proactive managed IT services including helpdesk support, remote monitoring, and IT consulting for businesses in Zimbabwe.',
}

const services = [
  { icon: Headphones, title: 'Helpdesk Support', desc: '24/7 technical support for your team' },
  { icon: Monitor, title: 'Remote Monitoring', desc: 'Proactive system monitoring' },
  { icon: Settings, title: 'IT Consulting', desc: 'Strategic IT guidance' },
  { icon: Clock, title: 'SLA Guaranteed', desc: '99% uptime guarantee' },
]

export default function ManagedITPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#005CFF] font-bold text-sm uppercase tracking-wider">Managed IT</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">Managed IT Services</h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Focus on your business while we handle your IT. CubeADM provides comprehensive 
                managed IT services to keep your systems running smoothly.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#005CFF] text-white font-bold rounded-full hover:bg-[#0050DD] transition-colors">
                Get Support <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80" alt="Managed IT" width={600} height={400} className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Let Us Manage Your IT</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get reliable IT support with guaranteed SLAs.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#005CFF] font-bold rounded-full hover:bg-gray-100 transition-colors">
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
