import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Headphones,
  Bug,
  FileSearch,
  ShieldCheck,
  Fingerprint,
  Network,
  Server
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cybersecurity Services Zimbabwe | Penetration Testing, Security Audits | CubeADM',
  description: 'CubeADM offers comprehensive cybersecurity services in Zimbabwe: penetration testing, security audits, 24/7 SOC monitoring, incident response, and compliance (ISO 27001, GDPR). Protect your business from cyber threats. Serving Harare and Southern Africa.',
  keywords: ['Cybersecurity Services Zimbabwe', 'Penetration Testing Zimbabwe', 'Security Audit Harare', 'SOC Services Zimbabwe', 'Incident Response Zimbabwe', 'Ethical Hacking Zimbabwe', 'Network Security Zimbabwe', 'Cyber Threat Protection Zimbabwe', 'ISO 27001 Compliance Zimbabwe', 'GDPR Compliance Zimbabwe', 'Cybersecurity Company Harare'],
  openGraph: {
    title: 'Cybersecurity Services Zimbabwe | Penetration Testing | CubeADM',
    description: 'Comprehensive cybersecurity services including penetration testing, security audits, and 24/7 monitoring for businesses in Zimbabwe.',
    url: 'https://cubeadm.co.zw/services/cybersecurity',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cubeadm.co.zw/services/cybersecurity',
  },
}

const services = [
  { 
    icon: Bug, 
    title: 'Penetration Testing', 
    desc: 'Identify vulnerabilities before attackers do with comprehensive ethical hacking assessments',
    features: ['Web App Testing', 'Network Penetration', 'Social Engineering', 'Vulnerability Reports']
  },
  { 
    icon: FileSearch, 
    title: 'Security Audits & Compliance', 
    desc: 'Comprehensive security assessments aligned with international standards and regulations',
    features: ['ISO 27001 Audits', 'GDPR Compliance', 'Risk Assessment', 'Policy Review']
  },
  { 
    icon: Eye, 
    title: '24/7 Security Monitoring', 
    desc: 'Round-the-clock security operations center monitoring your infrastructure',
    features: ['SIEM Solutions', 'Threat Detection', 'Log Analysis', 'Real-time Alerts']
  },
  { 
    icon: AlertTriangle, 
    title: 'Incident Response', 
    desc: 'Rapid response to security incidents with expert forensics and recovery',
    features: ['Emergency Response', 'Digital Forensics', 'Malware Analysis', 'Recovery Planning']
  },
]

const additionalServices = [
  { icon: Fingerprint, title: 'Identity & Access Management', desc: 'Secure authentication and authorization solutions' },
  { icon: Network, title: 'Network Security', desc: 'Firewalls, IDS/IPS, and secure network architecture' },
  { icon: Lock, title: 'Data Encryption', desc: 'End-to-end encryption for data at rest and in transit' },
  { icon: ShieldCheck, title: 'Endpoint Protection', desc: 'Advanced endpoint detection and response (EDR)' },
]

const stats = [
  { value: '1000+', label: 'Threats Blocked Daily' },
  { value: '99.9%', label: 'Detection Rate' },
  { value: '<15min', label: 'Response Time' },
  { value: '0', label: 'Breaches on Watch' },
]

const threats = [
  'Ransomware Attacks',
  'Phishing & Social Engineering',
  'Data Breaches',
  'Insider Threats',
  'DDoS Attacks',
  'Zero-Day Exploits',
]

export default function CybersecurityPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
                <Shield className="w-4 h-4 text-red-400" />
                <span className="text-red-400 font-medium text-sm">Cybersecurity Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Protect Your
                <span className="block bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
                  Digital Assets
                </span>
              </h1>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Stay ahead of cyber threats with CubeADM&apos;s comprehensive security solutions. 
                We protect your data, systems, and reputation with enterprise-grade security 
                powered by cutting-edge technology and expert analysts.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#005CFF]/30 transition-all"
                >
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="tel:+263771234567" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-all"
                >
                  <Headphones className="w-5 h-5" />
                  Emergency Hotline
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
                {/* Animated shield rings */}
                <div className="absolute inset-0 border-2 border-red-500/20 rounded-full animate-pulse" />
                <div className="absolute inset-4 border-2 border-[#005CFF]/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-8 border-2 border-[#00D4FF]/40 rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
                
                {/* Center icon */}
                <div className="w-32 h-32 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#005CFF]/30">
                  <Shield className="w-16 h-16 text-white" />
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Threat Detected</div>
                    <div className="text-green-400 text-sm">Blocked & Contained</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Systems Secure</div>
                    <div className="text-gray-400 text-sm">All Clear</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threats We Protect Against */}
      <section className="relative py-12 border-y border-white/10">
        <div className="absolute inset-0 bg-[#020c2d]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-gray-400 font-medium">We Protect Against:</span>
            {threats.map((threat) => (
              <div key={threat} className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
                <Shield className="w-4 h-4 text-red-400" />
                <span className="text-gray-300 text-sm">{threat}</span>
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
              <Lock className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-[#00D4FF] font-medium text-sm">Security Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Cybersecurity Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Multi-layered security approach to protect your organization from evolving cyber threats
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

          {/* Additional Services */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {additionalServices.map((service) => (
              <div 
                key={service.title} 
                className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#005CFF]/30 transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#005CFF]/20 to-[#00D4FF]/20 border border-[#005CFF]/30 rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <h3 className="text-white font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020c2d] to-[#01124b]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Security Operations Center</h3>
                
                <div className="space-y-4">
                  {[
                    { label: 'Threat Detection', value: '99.9%', color: 'from-green-500 to-emerald-500' },
                    { label: 'Response Time', value: '<15 min', color: 'from-[#005CFF] to-[#00D4FF]' },
                    { label: 'Uptime', value: '99.99%', color: 'from-purple-500 to-pink-500' },
                    { label: 'Client Satisfaction', value: '98%', color: 'from-orange-500 to-yellow-500' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-gray-300">{item.label}</span>
                      <span className={`font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-full mb-4">
                <Zap className="w-4 h-4 text-[#00D4FF]" />
                <span className="text-[#00D4FF] font-medium text-sm">Why CubeADM</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Trusted Security Partner
              </h2>
              <p className="text-gray-400 mb-8">
                We combine cutting-edge technology with expert human analysis to provide 
                comprehensive protection against modern cyber threats.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Users, title: 'Certified Experts', desc: 'Team of CISSP, CEH, and OSCP certified professionals' },
                  { icon: Eye, title: '24/7 Monitoring', desc: 'Round-the-clock security operations center' },
                  { icon: Zap, title: 'Rapid Response', desc: 'Average incident response time under 15 minutes' },
                  { icon: Shield, title: 'Proactive Defense', desc: 'Threat hunting and vulnerability management' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#005CFF]/20 to-[#00D4FF]/20 border border-[#005CFF]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
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
            Don&apos;t Wait for a Breach
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get a comprehensive security assessment and discover vulnerabilities 
            before attackers do. Protect your business today.
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
              Emergency Response
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
