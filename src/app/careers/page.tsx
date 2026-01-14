import { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, Users, TrendingUp, Heart, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers | CubeADM - Join Our Team',
  description: 'Join CubeADM and be part of Zimbabwe\'s leading technology training and IT solutions provider. Explore career opportunities.',
}

const benefits = [
  { icon: TrendingUp, title: 'Growth Opportunities', desc: 'Continuous learning and career advancement' },
  { icon: Users, title: 'Great Team', desc: 'Work with passionate tech professionals' },
  { icon: Heart, title: 'Work-Life Balance', desc: 'Flexible working arrangements' },
  { icon: Briefcase, title: 'Competitive Pay', desc: 'Attractive compensation packages' },
]

export default function CareersPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-[#005CFF] font-bold text-sm uppercase tracking-wider">Careers</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">Join Our Team</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Be part of a team that&apos;s shaping Africa&apos;s digital future. We&apos;re always looking for talented 
            individuals who share our passion for technology and innovation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                <div className="w-12 h-12 bg-[#005CFF]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-6 h-6 text-[#005CFF]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>
          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <Briefcase className="w-16 h-16 text-[#005CFF]/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Open Positions</h3>
            <p className="text-gray-600 mb-6">We don&apos;t have any open positions at the moment, but we&apos;re always interested in hearing from talented individuals.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#005CFF] text-white font-bold rounded-full hover:bg-[#0050DD] transition-colors">
              Send Your CV <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#005CFF]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Send us your resume and let&apos;s start a conversation.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#005CFF] font-bold rounded-full hover:bg-gray-100 transition-colors">
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
