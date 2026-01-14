import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Users,
  Headphones,
  Database,
  Globe,
  RefreshCw,
  BarChart3,
  Lock,
  Layers
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cloud Services | CubeADM - AWS & Azure Solutions Zimbabwe',
  description: 'Cloud migration, AWS, Azure, and hybrid cloud solutions for businesses in Zimbabwe. Transform your infrastructure with CubeADM.',
}

const services = [
  { 
    icon: RefreshCw, 
    title: 'Cloud Migration', 
    desc: 'Seamless migration to cloud platforms with zero downtime and data integrity',
    features: ['Assessment & Planning', 'Data Migration', 'Application Refactoring', 'Post-Migration Support']
  },
  { 
    icon: Layers, 
    title: 'Multi-Cloud Management', 
    desc: 'Expert deployment and management across AWS, Azure, and Google Cloud',
    features: ['AWS Solutions', 'Microsoft Azure', 'Google Cloud', 'Hybrid Cloud']
  },
  { 
    icon: Shield, 
    title: 'Cloud Security', 
    desc: 'Comprehensive security for your cloud infrastructure and applications',
    features: ['Identity Management', 'Data Encryption', 'Compliance', 'Threat Protection']
  },
  { 
    icon: BarChart3, 
    title: 'Cost Optimization', 
    desc: 'Maximize ROI with intelligent resource management and cost controls',
    features: ['Resource Rightsizing', 'Reserved Instances', 'Spot Instances', 'Cost Monitoring']
  },
]

const cloudPlatforms = [
  { name: 'AWS', desc: 'Amazon Web Services' },
  { name: 'Azure', desc: 'Microsoft Azure' },
  { name: 'GCP', desc: 'Google Cloud Platform' },
  { name: 'VMware', desc: 'VMware Cloud' },
]

const stats = [
  { value: '40%', label: 'Cost Reduction' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '100+', label: 'Cloud Projects' },
  { value: '24/7', label: 'Support' },
]

const benefits = [
  { icon: Zap, title: 'Scalability', desc: 'Scale resources up or down based on demand' },
  { icon: Shield, title: 'Security', desc: 'Enterprise-grade security and compliance' },
  { icon: Globe, title: 'Global Reach', desc: 'Deploy applications worldwide instantly' },
  { icon: Database, title: 'Reliability', desc: 'Built-in redundancy and disaster recovery' },
]

export default function CloudServicesPage() {
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
                <Cloud className="w-4 h-4 text-[#00D4FF]" />
                <span className="text-[#00D4FF] font-medium text-sm">Cloud Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Accelerate with
                <span className="block bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
                  Cloud Solutions
                </span>
              </h1>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Transform your business with CubeADM&apos;s cloud services. We help you migrate, 
                manage, and optimize your cloud infrastructure on AWS, Azure, and hybrid 
                environments for maximum performance and cost efficiency.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#005CFF]/30 transition-all"
                >
                  Start Cloud Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/products" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-all"
                >
                  View Solutions
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

            {/* Animated Graphics */}
            <div className="relative flex items-center justify-center">
              {/* Central Icon */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Animated cloud rings */}
                <div className="absolute inset-0 border-2 border-[#005CFF]/20 rounded-full animate-pulse" />
                <div className="absolute inset-4 border-2 border-[#00D4FF]/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-8 border-2 border-[#005CFF]/40 rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
                
                {/* Center icon */}
                <div className="w-32 h-32 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#005CFF]/30">
                  <Cloud className="w-16 h-16 text-white" />
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">40% Faster</div>
                    <div className="text-gray-400 text-sm">Performance Boost</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">99.99% Uptime</div>
                    <div className="text-gray-400 text-sm">Guaranteed SLA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="relative py-12 border-y border-white/10">
        <div className="absolute inset-0 bg-[#020c2d]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <span className="text-gray-400 font-medium">Certified Partners:</span>
            {cloudPlatforms.map((platform) => (
              <div key={platform.name} className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl">
                <Cloud className="w-5 h-5 text-[#00D4FF]" />
                <div>
                  <span className="text-white font-bold">{platform.name}</span>
                  <span className="text-gray-400 text-sm ml-2">{platform.desc}</span>
                </div>
              </div>
            ))}
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
              Comprehensive Cloud Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              End-to-end cloud services to help you build, migrate, and optimize your cloud infrastructure
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
                <span className="text-[#00D4FF] font-medium text-sm">Why Cloud</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Benefits of Cloud Computing
              </h2>
              <p className="text-gray-400 mb-8">
                Unlock the full potential of your business with cloud infrastructure 
                that scales with your needs and reduces operational costs.
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
                <h3 className="text-xl font-bold text-white mb-6">Migration Process</h3>
                
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Assessment', desc: 'Analyze current infrastructure and workloads' },
                    { step: '02', title: 'Planning', desc: 'Design cloud architecture and migration strategy' },
                    { step: '03', title: 'Migration', desc: 'Execute migration with zero downtime approach' },
                    { step: '04', title: 'Optimization', desc: 'Fine-tune performance and reduce costs' },
                  ].map((item) => (
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

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#005CFF] via-[#0070FF] to-[#00D4FF]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get a free cloud readiness assessment and discover how we can help 
            transform your infrastructure for the digital age.
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
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
