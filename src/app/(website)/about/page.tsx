import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Target, Eye, Lightbulb, Users, Award, Globe, ArrowRight, CheckCircle, Rocket, Shield, Zap, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About CubeADM | Zimbabwe\'s Leading IT Training Academy & Solutions Provider',
  description: 'CubeADM is Zimbabwe\'s premier IT training academy and solutions provider. Founded to empower Africa\'s digital future, we\'ve trained 500+ professionals with 95% certification pass rate. Based in Harare, serving Southern Africa.',
  keywords: ['About CubeADM', 'IT Training Academy Zimbabwe', 'IT Company Harare', 'Technology Training Provider Zimbabwe', 'IT Solutions Company Zimbabwe', 'CubeADM Team', 'IT Training Institute Zimbabwe'],
  openGraph: {
    title: 'About CubeADM | Zimbabwe\'s Leading IT Training Academy',
    description: 'Learn about CubeADM, Zimbabwe\'s premier IT training academy and solutions provider.',
    url: 'https://cubeadm.co.zw/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cubeadm.co.zw/about',
  },
}

const values = [
  { icon: Lightbulb, title: 'Innovation', description: 'Embracing cutting-edge technologies to deliver forward-thinking solutions.' },
  { icon: Award, title: 'Excellence', description: 'Committed to the highest standards in training and service delivery.' },
  { icon: Users, title: 'Empowerment', description: 'Enabling individuals and businesses to achieve their full potential.' },
  { icon: Globe, title: 'Impact', description: 'Creating lasting positive change in Zimbabwe and across Africa.' },
]

const milestones = [
  { year: '2020', title: 'Foundation', description: 'CubeADM was founded with a vision to transform IT education in Zimbabwe.' },
  { year: '2021', title: 'First 100 Graduates', description: 'Celebrated our first 100 certified IT professionals entering the workforce.' },
  { year: '2022', title: 'Enterprise Solutions', description: 'Expanded into enterprise IT solutions, serving major corporations.' },
  { year: '2023', title: 'Regional Expansion', description: 'Extended our reach to serve clients across Southern Africa.' },
  { year: '2024', title: '500+ Professionals', description: 'Trained over 500 IT professionals with 95% certification pass rate.' },
  { year: '2025', title: 'Innovation Hub', description: 'Launching our AI and Cloud Innovation Hub for next-gen training.' },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="container-custom mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">About CubeADM</span>
            <h1 className="heading-xl text-white mt-3 mb-6">Shaping the Future of Technology in Africa</h1>
            <p className="text-body text-xl">
              CubeADM is a modern, future-focused technology training and IT solutions company positioned to become 
              a leading provider of advanced digital training and enterprise support solutions in Zimbabwe and across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-effect rounded-2xl p-8">
              <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-500" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed">
                To empower individuals, SMEs, and corporate institutions with the technical skills and systems required 
                to thrive in today&apos;s digital ecosystem. We combine education, innovation, automation, and hands-on IT 
                delivery to create lasting impact.
              </p>
            </div>
            <div className="glass-effect rounded-2xl p-8">
              <div className="w-14 h-14 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent-blue" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                To be the leading technology training and IT solutions provider in Africa, recognized for excellence, 
                innovation, and our commitment to bridging the digital skills gap while delivering world-class enterprise solutions.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="heading-lg text-white mb-4">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 rounded-xl bg-dark-700/50 border border-white/5 hover:border-primary-500/30 transition-all">
                <div className="w-12 h-12 mx-auto bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story - World Class Design */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#0a0a0a] to-[#0d1117] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#005CFF]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[150px]" />
        
        <div className="container-custom mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-[#00D4FF] font-medium text-sm">Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Building Africa&apos;s{' '}
              <span className="bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
                Digital Future
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              From a bold vision to transform IT education in Zimbabwe, CubeADM has evolved into a comprehensive 
              technology powerhouse. We&apos;re not just teaching technology—we&apos;re shaping the future of Africa&apos;s digital workforce.
            </p>
          </div>

          {/* Story Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left - Image with Stats Overlay */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#005CFF]/10">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="CubeADM Team Collaboration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-[#005CFF] to-[#0046cc] p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-white/80 text-sm">Professionals Trained</div>
              </div>
              <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl">
                <div className="text-2xl font-bold text-white mb-1">95%</div>
                <div className="text-gray-300 text-xs">Pass Rate</div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why We Started</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                Zimbabwe has incredible talent, but limited access to world-class IT training. We saw graduates 
                struggling to find jobs because they lacked practical skills. We saw businesses unable to find 
                qualified IT professionals. We knew there had to be a better way.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                CubeADM was born to bridge this gap—combining international certification standards from Cisco, 
                AWS, Microsoft, and CompTIA with hands-on, practical training that employers actually need.
              </p>
              
              {/* Key Differentiators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-[#005CFF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#005CFF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Industry Certified</h4>
                    <p className="text-gray-400 text-sm">Cisco, AWS, Microsoft partners</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-[#00D4FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Hands-On Labs</h4>
                    <p className="text-gray-400 text-sm">Real equipment, real skills</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-[#005CFF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#005CFF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Career Support</h4>
                    <p className="text-gray-400 text-sm">Job placement assistance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-[#00D4FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Regional Reach</h4>
                    <p className="text-gray-400 text-sm">Serving Southern Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Our Journey So Far</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className="relative group"
                >
                  {/* Connector Line */}
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#005CFF]/50 to-transparent" />
                  )}
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#005CFF]/30 hover:bg-white/10 transition-all h-full">
                    <div className="text-[#00D4FF] font-bold text-2xl mb-2">{milestone.year}</div>
                    <h4 className="text-white font-semibold mb-2">{milestone.title}</h4>
                    <p className="text-gray-400 text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Partner with CubeADM?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need training for your team or IT solutions for your business, we&apos;re here to help.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
