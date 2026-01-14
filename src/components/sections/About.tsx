import { Target, Eye, Sparkles } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Students Trained' },
  { value: '50+', label: 'Corporate Clients' },
  { value: '98%', label: 'Success Rate' },
  { value: '15+', label: 'Certifications' },
]

const partners = ['Cisco', 'AWS', 'Microsoft', 'CompTIA', 'Oracle', 'VMware']

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#01124b] via-[#020c2d] to-[#01124b]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#005CFF]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00D4FF]/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-[#00D4FF] font-medium text-sm">About CubeADM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Shaping the Future of
            <span className="block bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
              Technology in Africa
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A modern, future-focused technology training and IT solutions company 
            delivering world-class digital training and enterprise solutions.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Mission */}
          <div className="group p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl hover:border-[#005CFF]/30 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#005CFF]/20">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To empower individuals and organizations with the technical skills 
              and systems required to thrive in today&apos;s digital ecosystem through 
              education, innovation, and hands-on IT delivery.
            </p>
          </div>

          {/* Vision */}
          <div className="group p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl hover:border-[#00D4FF]/30 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-[#00D4FF] to-[#005CFF] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#00D4FF]/20">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be the leading technology training and IT solutions provider in Africa, 
              recognized for excellence and our commitment to bridging the digital skills gap.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="p-8 bg-gradient-to-r from-[#005CFF]/10 via-[#00D4FF]/5 to-[#005CFF]/10 border border-[#005CFF]/20 rounded-3xl mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-8">
            Aligned with Global Technology Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-2xl font-bold text-gray-600 hover:text-[#00D4FF] transition-colors cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
