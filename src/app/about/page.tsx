import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Target, Eye, Lightbulb, Users, Award, Globe, ArrowRight, CheckCircle } from 'lucide-react'

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

const team = [
  { name: 'John Mutasa', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Sarah Chikwanha', role: 'Head of Training', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
  { name: 'Michael Ndlovu', role: 'CTO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
  { name: 'Grace Moyo', role: 'Operations Director', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
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

      {/* Story */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="CubeADM Team"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="heading-lg text-white mb-6">Our Story</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Founded with a vision to bridge the technology skills gap in Zimbabwe and Africa, CubeADM has grown 
                from a small training center to a comprehensive technology solutions provider.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We align our standards with global industry leaders like Cisco, IBM, Oracle, Palo Alto Networks, and AWS. 
                Our approach combines international best practices with deep understanding of local business needs.
              </p>
              <ul className="space-y-3">
                {['Industry-certified instructors and consultants', 'Hands-on, practical training methodology', 'Enterprise-grade IT solutions', 'Proven track record with leading organizations'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-primary-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-white mb-4">Our Leadership Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Meet the experts driving CubeADM&apos;s mission forward.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary-500/50 transition-colors">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-primary-500 text-sm">{member.role}</p>
              </div>
            ))}
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
