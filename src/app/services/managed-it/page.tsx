import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Headphones, 
  Monitor, 
  Settings, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Shield,
  Server,
  Wrench,
  BarChart3,
  PhoneCall,
  Activity
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Managed IT Services | CubeADM - IT Support Zimbabwe',
  description: 'Proactive managed IT services including helpdesk support, remote monitoring, and IT consulting for businesses in Zimbabwe.',
}

const services = [
  { 
    icon: Headphones, 
    title: '24/7 Helpdesk Support', 
    desc: 'Round-the-clock technical support with rapid response times and expert resolution',
    features: ['Multi-channel Support', 'Ticket Management', 'Remote Assistance', 'On-site Support']
  },
  { 
    icon: Activity, 
    title: 'Proactive Monitoring', 
    desc: 'Real-time monitoring of your infrastructure to prevent issues before they impact your business',
    features: ['Server Monitoring', 'Network Monitoring', 'Application Monitoring', 'Alert Management']
  },
  { 
    icon: Wrench, 
    title: 'IT Maintenance', 
    desc: 'Regular maintenance and updates to keep your systems secure and performing optimally',
    features: ['Patch Management', 'System Updates', 'Performance Tuning', 'Health Checks']
  },
  { 
    icon: Settings, 
    title: 'IT Consulting', 
    desc: 'Strategic IT guidance to align technology with your business objectives',
    features: ['IT Strategy', 'Technology Roadmap', 'Vendor Management', 'Budget Planning']
  },
]

const pricingPlans = [
  { name: 'Essential', desc: 'For small businesses', features: ['Business Hours Support', 'Basic Monitoring', 'Monthly Reports', 'Email Support'] },
  { name: 'Professional', desc: 'For growing companies', features: ['24/7 Support', 'Advanced Monitoring', 'Weekly Reports', 'Priority Response'], popular: true },
  { name: 'Enterprise', desc: 'For large organizations', features: ['Dedicated Team', 'Custom SLAs', 'Real-time Reports', 'On-site Support'] },
]

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<15min', label: 'Response Time' },
  { value: '500+', label: 'Devices Managed' },
  { value: '24/7', label: 'Support Available' },
]

const benefits = [
  { icon: Zap, title: 'Reduced Downtime', desc: 'Proactive monitoring prevents issues before they occur' },
  { icon: Shield, title: 'Enhanced Security', desc: 'Regular updates and patches keep systems secure' },
  { icon: BarChart3, title: 'Predictable Costs', desc: 'Fixed monthly fees with no surprise expenses' },
  { icon: Users, title: 'Expert Team', desc: 'Access to certified IT professionals on demand' },
]

export default function ManagedITPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#01124b] via-[#020c2d] to-[#01124b]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#005CFF]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00D4FF]/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-full mb-6">
                <Headphones className="w-4 h-4 text-[#00D4FF]" />
                <span className="text-[#00D4FF] font-medium text-sm">Managed IT Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Focus on Business,
                <span className="block bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
                  We Handle IT
                </span>
              </h1>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Focus on your business while we handle your IT. CubeADM provides comprehensive 
                managed IT services with 24/7 support, proactive monitoring, and guaranteed 
                SLAs to keep your systems running smoothly.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#005CFF]/30 transition-all"
                >
                  Get IT Support
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="tel:+263771234567" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-all"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call Support
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80" 
                  alt="Managed IT" 
                  width={600} 
                  height={400} 
                  className="rounded-3xl shadow-2xl shadow-[#005CFF]/20"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">All Systems</div>
                    <div className="text-green-400 text-sm">Operational</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-xl flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Support Team</div>
                    <div className="text-gray-400 text-sm">Online 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[#020c2d]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-full mb-4">
              <Server className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-[#00D4FF] font-medium text-sm">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive IT Management
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              End-to-end IT management services to keep your business running efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.title} 
                className="group bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-[#005CFF]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{service.desc}</p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#00D4FF]" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020c2d] to-[#01124b]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-full mb-4">
                <Zap className="w-4 h-4 text-[#00D4FF]" />
                <span className="text-[#00D4FF] font-medium text-sm">Why Managed IT</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Benefits of Managed IT Services
              </h2>
              <p className="text-gray-400 mb-8">
                Let us handle the complexity of IT management while you focus on 
                what matters most – growing your business.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#005CFF]/20 to-[#00D4FF]/20 border border-[#005CFF]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Service Level Agreement</h3>
                
                <div className="space-y-4">
                  {[
                    { label: 'Critical Issues', value: '< 15 min', desc: 'Response time' },
                    { label: 'High Priority', value: '< 1 hour', desc: 'Response time' },
                    { label: 'Normal Priority', value: '< 4 hours', desc: 'Response time' },
                    { label: 'System Uptime', value: '99.9%', desc: 'Guaranteed' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <div>
                        <span className="text-white font-medium">{item.label}</span>
                        <span className="text-gray-400 text-sm ml-2">({item.desc})</span>
                      </div>
                      <span className="font-bold bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[#01124b]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-full mb-4">
              <BarChart3 className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-[#00D4FF] font-medium text-sm">Flexible Plans</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Support Plan
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Flexible managed IT plans designed to fit businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.name} 
                className={`relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border rounded-3xl p-8 ${
                  plan.popular ? 'border-[#005CFF] scale-105' : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.desc}</p>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00D4FF]" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact" 
                  className={`block text-center py-3 rounded-xl font-bold transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white hover:shadow-lg hover:shadow-[#005CFF]/30' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#005CFF] via-[#0070FF] to-[#00D4FF]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Reliable IT Support?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get a free IT assessment and discover how our managed services can 
            reduce costs and improve your IT operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#005CFF] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="tel:+263771234567" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl hover:bg-white/30 transition-colors"
            >
              <Headphones className="w-5 h-5" />
              Call Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
