import Image from 'next/image'
import { Target, Eye, Lightbulb, Users, Award, Globe } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Embracing cutting-edge technologies to deliver forward-thinking solutions.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to the highest standards in training and service delivery.',
  },
  {
    icon: Users,
    title: 'Empowerment',
    description: 'Enabling individuals and businesses to achieve their full potential.',
  },
  {
    icon: Globe,
    title: 'Impact',
    description: 'Creating lasting positive change in Zimbabwe and across Africa.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-800">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            About CubeADM
          </span>
          <h2 className="heading-lg text-white mt-3 mb-4">
            Shaping the Future of Technology in Africa
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            CubeADM is a modern, future-focused technology training and IT solutions company 
            positioned to become a leading provider of advanced digital training and enterprise 
            support solutions in Zimbabwe and across Africa.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="glass-effect rounded-2xl p-8 card-shine">
            <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To empower individuals, SMEs, and corporate institutions with the technical skills 
              and systems required to thrive in today&apos;s digital ecosystem. We combine education, 
              innovation, automation, and hands-on IT delivery to create lasting impact.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-effect rounded-2xl p-8 card-shine">
            <div className="w-14 h-14 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-accent-blue" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be the leading technology training and IT solutions provider in Africa, 
              recognized for excellence, innovation, and our commitment to bridging the 
              digital skills gap while delivering world-class enterprise solutions.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-10">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-xl bg-dark-700/50 border border-white/5 hover:border-primary-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image & Stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="CubeADM Team"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-dark-800 border border-white/10 rounded-xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-primary-500 mb-1">5+</div>
              <div className="text-sm text-gray-400">Years of Excellence</div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Why Organizations Trust CubeADM
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We align our standards with global industry leaders like Cisco, IBM, Oracle, 
              Palo Alto Networks, and AWS. Our approach combines international best practices 
              with deep understanding of local business needs.
            </p>
            <ul className="space-y-4">
              {[
                'Industry-certified instructors and consultants',
                'Hands-on, practical training methodology',
                'Enterprise-grade IT solutions and support',
                'Proven track record with leading organizations',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
