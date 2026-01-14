import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Server, 
  Network, 
  Database, 
  Settings, 
  ArrowRight, 
  CheckCircle,
  Shield,
  Zap,
  Users,
  Headphones,
  Monitor,
  HardDrive,
  Cpu,
  Globe
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Solutions | CubeADM - Enterprise IT Infrastructure Zimbabwe',
  description: 'Enterprise-grade IT solutions including network infrastructure, server solutions, and system integration for businesses in Zimbabwe.',
}

const solutions = [
  { 
    icon: Server, 
    title: 'Server Infrastructure', 
    desc: 'Enterprise server deployment, virtualization, and management with 99.9% uptime guarantee',
    features: ['Dell & HPE Servers', 'VMware Virtualization', 'High Availability Clusters', '24/7 Monitoring']
  },
  { 
    icon: Network, 
    title: 'Network Design & Implementation', 
    desc: 'Complete LAN/WAN design, implementation, and optimization for seamless connectivity',
    features: ['Cisco & Huawei Equipment', 'SD-WAN Solutions', 'Network Security', 'Performance Optimization']
  },
  { 
    icon: Database, 
    title: 'Data Management & Backup', 
    desc: 'Comprehensive database solutions, backup systems, and disaster recovery planning',
    features: ['Automated Backups', 'Disaster Recovery', 'Data Replication', 'Cloud Storage Integration']
  },
  { 
    icon: Settings, 
    title: 'System Integration', 
    desc: 'Seamless integration of IT systems for unified operations and improved efficiency',
    features: ['API Integration', 'Legacy System Migration', 'ERP Implementation', 'Custom Solutions']
  },
]

const benefits = [
  { icon: Zap, title: 'Increased Efficiency', desc: 'Streamline operations with optimized IT infrastructure' },
  { icon: Shield, title: 'Enhanced Security', desc: 'Protect your business with enterprise-grade security' },
  { icon: Users, title: 'Expert Support', desc: 'Access to certified IT professionals 24/7' },
  { icon: Headphones, title: 'Dedicated Service', desc: 'Personalized solutions tailored to your needs' },
]

const technologies = [
  { name: 'Cisco', logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&q=80' },
  { name: 'Dell', logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&q=80' },
  { name: 'HPE', logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&q=80' },
  { name: 'VMware', logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&q=80' },
  { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&q=80' },
  { name: 'Huawei', logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&q=80' },
]

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '24/7', label: 'Support Available' },
  { value: '50+', label: 'Enterprise Clients' },
]

export default function ITSolutionsPage() {
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
                <Server className="w-4 h-4 text-[#00D4FF]" />
                <span className="text-[#00D4FF] font-medium text-sm">Enterprise IT Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
                  IT Infrastructure
                </span>
              </h1>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                CubeADM delivers comprehensive IT solutions designed to optimize your business operations. 
                From network infrastructure to server management, we provide enterprise-grade solutions 
                that drive growth and efficiency.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#005CFF]/30 transition-all"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/products" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-all"
                >
                  View Products
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
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" 
                  alt="IT Solutions" 
                  width={600} 
                  height={400} 
                  className="rounded-3xl shadow-2xl shadow-[#005CFF]/20"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Enterprise Security</div>
                    <div className="text-gray-400 text-sm">ISO 27001 Compliant</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">99.9% Uptime</div>
                    <div className="text-gray-400 text-sm">Guaranteed SLA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[#020c2d]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-full mb-4">
              <Cpu className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-[#00D4FF] font-medium text-sm">Our Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              End-to-end IT infrastructure solutions designed to meet the demands of modern enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div 
                key={solution.title} 
                className="group bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-[#005CFF]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{solution.desc}</p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature) => (
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
                <span className="text-[#00D4FF] font-medium text-sm">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Benefits of Partnering with CubeADM
              </h2>
              <p className="text-gray-400 mb-8">
                We don't just provide IT solutions – we become your strategic technology partner, 
                helping you navigate the complexities of modern IT infrastructure.
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
                <h3 className="text-xl font-bold text-white mb-6">Our Process</h3>
                
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Assessment', desc: 'We analyze your current infrastructure and identify opportunities' },
                    { step: '02', title: 'Planning', desc: 'Custom solution design tailored to your business needs' },
                    { step: '03', title: 'Implementation', desc: 'Expert deployment with minimal disruption to operations' },
                    { step: '04', title: 'Support', desc: 'Ongoing maintenance and 24/7 technical support' },
                  ].map((item, index) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{item.step}</span>
                      </div>
                      <div className="flex-1 pb-6 border-b border-white/10 last:border-0 last:pb-0">
                        <h4 className="text-white font-bold mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[#01124b]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-white mb-2">Technologies We Work With</h3>
            <p className="text-gray-400">Partnered with leading global technology providers</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {['Cisco', 'Dell', 'HPE', 'VMware', 'Microsoft', 'Huawei', 'Fortinet', 'Veeam'].map((tech) => (
              <div 
                key={tech} 
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-gray-300 font-medium hover:bg-white/10 hover:border-[#005CFF]/30 transition-all"
              >
                {tech}
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
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation with our IT experts and discover how we can help 
            optimize your business operations with enterprise-grade solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#005CFF] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="tel:+263771234567" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl hover:bg-white/30 transition-colors"
            >
              <Headphones className="w-5 h-5" />
              Call Us Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
