import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Server, 
  Shield, 
  Cloud, 
  Settings, 
  Database, 
  Headphones,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Services Zimbabwe | Cybersecurity, Cloud, Managed IT | CubeADM',
  description: 'CubeADM offers comprehensive IT services in Zimbabwe: Cybersecurity (penetration testing, SOC), Cloud Services (AWS, Azure), Managed IT Support (24/7), Network Infrastructure, and Digital Transformation. Serving Harare and Southern Africa.',
  keywords: ['IT Services Zimbabwe', 'Cybersecurity Services Harare', 'Cloud Services Zimbabwe', 'Managed IT Zimbabwe', 'IT Solutions Harare', 'Network Infrastructure Zimbabwe', 'IT Support Zimbabwe', 'Enterprise IT Services Zimbabwe'],
  openGraph: {
    title: 'IT Services Zimbabwe | CubeADM',
    description: 'Comprehensive IT services: Cybersecurity, Cloud, Managed IT in Zimbabwe.',
    url: 'https://cubeadm.co.zw/services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cubeadm.co.zw/services',
  },
}

const services = [
  {
    icon: Server,
    title: 'Network Infrastructure',
    description: 'Complete network design, setup, and optimization for businesses of all sizes. We deliver reliable, high-performance network solutions.',
    features: [
      'LAN/WAN Design & Implementation',
      'Network Security Configuration',
      'Performance Optimization',
      'Wireless Network Solutions',
      'Network Monitoring & Management',
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your business from evolving cyber threats. Stay secure with our expert security team.',
    features: [
      'Penetration Testing',
      'Security Audits & Assessments',
      '24/7 Security Monitoring',
      'Incident Response',
      'Security Awareness Training',
    ],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Seamless cloud migration and management for AWS, Azure, and hybrid environments. Transform your infrastructure with the cloud.',
    features: [
      'Cloud Migration Strategy',
      'AWS & Azure Deployment',
      'Hybrid Cloud Solutions',
      'Cloud Security',
      'Cost Optimization',
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  {
    icon: Database,
    title: 'Server Solutions',
    description: 'Enterprise server installation, configuration, and maintenance services. Keep your critical systems running smoothly.',
    features: [
      'Server Installation & Setup',
      'Data Backup Solutions',
      'Disaster Recovery Planning',
      'Virtualization (VMware, Hyper-V)',
      'Server Monitoring',
    ],
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80',
  },
  {
    icon: Settings,
    title: 'Digital Transformation',
    description: 'Modernize your business with process automation and AI integration. Drive efficiency and innovation.',
    features: [
      'Process Automation',
      'AI Integration',
      'Workflow Optimization',
      'Digital Strategy Consulting',
      'Legacy System Modernization',
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    icon: Headphones,
    title: 'Managed IT Services',
    description: 'Proactive IT support and management to keep your business running smoothly. Focus on your business while we handle IT.',
    features: [
      'Help Desk Support',
      'Remote Monitoring',
      'IT Consulting',
      'Vendor Management',
      'IT Strategy Planning',
    ],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="container-custom mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="heading-xl text-white mt-3 mb-6">
              Enterprise IT Solutions for Modern Business
            </h1>
            <p className="text-body text-xl mb-8">
              We deliver corporate-grade IT services that ensure reliability, security, 
              and technical excellence for businesses across Zimbabwe and Africa.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <h2 className="heading-md text-white mb-4">{service.title}</h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Request Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how CubeADM can help your business thrive.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
