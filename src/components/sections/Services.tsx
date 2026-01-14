import Link from 'next/link'
import { 
  Shield, 
  Cloud, 
  Server,
  Headphones,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security services to protect your business from cyber threats with 24/7 monitoring.',
    href: '/services/cybersecurity',
    color: 'from-[#005CFF] to-[#00D4FF]',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Seamless cloud migration and management for AWS, Azure, and hybrid environments.',
    href: '/services/cloud',
    color: 'from-[#00D4FF] to-[#005CFF]',
  },
  {
    icon: Server,
    title: 'IT Infrastructure',
    description: 'Complete network setup, server solutions, and optimization for businesses of all sizes.',
    href: '/services/it-solutions',
    color: 'from-[#005CFF] to-[#0070FF]',
  },
  {
    icon: Headphones,
    title: 'Managed IT',
    description: 'Proactive IT support and management to keep your business running smoothly.',
    href: '/services/managed-it',
    color: 'from-[#0070FF] to-[#00D4FF]',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#020c2d]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#005CFF]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-[#00D4FF] font-medium text-sm">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise IT
            <span className="block bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Corporate-grade IT services ensuring reliability, security, 
            and technical excellence for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl hover:border-[#005CFF]/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-[#00D4FF] text-sm font-medium">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#005CFF]/30 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
