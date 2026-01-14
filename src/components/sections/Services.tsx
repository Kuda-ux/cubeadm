import Link from 'next/link'
import { 
  Server, 
  Shield, 
  Cloud, 
  Settings, 
  Database, 
  Headphones,
  ArrowRight 
} from 'lucide-react'

const services = [
  {
    icon: Server,
    title: 'Network Infrastructure',
    description: 'Complete network setup, configuration, and optimization for businesses of all sizes.',
    features: ['LAN/WAN Setup', 'Network Security', 'Performance Optimization'],
    href: '/services/it-solutions',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your business from cyber threats.',
    features: ['Penetration Testing', 'Security Audits', '24/7 Monitoring'],
    href: '/services/cybersecurity',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Seamless cloud migration and management for AWS, Azure, and hybrid environments.',
    features: ['Cloud Migration', 'Virtualization', 'Cloud Management'],
    href: '/services/cloud',
  },
  {
    icon: Database,
    title: 'Server Solutions',
    description: 'Enterprise server installation, maintenance, and management services.',
    features: ['Server Setup', 'Data Backup', 'Disaster Recovery'],
    href: '/services/it-solutions',
  },
  {
    icon: Settings,
    title: 'Digital Transformation',
    description: 'Modernize your business with process automation and AI integration.',
    features: ['Process Automation', 'AI Integration', 'Workflow Optimization'],
    href: '/services/digital-transformation',
  },
  {
    icon: Headphones,
    title: 'Managed IT Services',
    description: 'Proactive IT support and management to keep your business running smoothly.',
    features: ['Help Desk Support', 'Remote Monitoring', 'IT Consulting'],
    href: '/services/managed-it',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-dark-900">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="heading-lg text-white mt-3 mb-4">
            Enterprise IT Solutions
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            We deliver corporate-grade IT services that ensure reliability, security, 
            and technical excellence for businesses across Zimbabwe and Africa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-dark-800 border border-white/5 rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300 card-shine"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-primary-500 text-sm font-medium hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary inline-flex items-center gap-2">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
