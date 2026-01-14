import Link from 'next/link'
import Image from 'next/image'
import { Clock, Users, ArrowRight, Sparkles, Star } from 'lucide-react'

const courses = [
  {
    title: 'Cybersecurity Fundamentals',
    description: 'Master cybersecurity essentials, threat detection, and security best practices.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    duration: '12 Weeks',
    students: '150+',
    rating: 4.9,
    href: '/training/cybersecurity',
  },
  {
    title: 'Cloud Computing',
    description: 'Learn cloud architecture and deployment on AWS and Azure platforms.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    duration: '10 Weeks',
    students: '120+',
    rating: 4.8,
    href: '/training/cloud',
  },
  {
    title: 'Cisco Networking',
    description: 'Comprehensive CCNA certification preparation with hands-on labs.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    duration: '14 Weeks',
    students: '200+',
    rating: 4.9,
    href: '/training/networking',
  },
]

export default function Training() {
  return (
    <section id="training" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020c2d] via-[#01124b] to-[#020c2d]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#005CFF]/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-[#00D4FF] font-medium text-sm">Training Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            World-Class
            <span className="block bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
              Technology Courses
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-certified training programs with expert instructors 
            preparing you for globally recognized certifications.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <Link
              key={course.title}
              href={course.href}
              className="group bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-[#005CFF]/30 transition-all duration-300"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01124b] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-white">{course.rating}</span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Course Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#00D4FF]" />
                    <span className="text-gray-400">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#00D4FF]" />
                    <span className="text-gray-400">{course.students}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[#00D4FF] text-sm font-medium pt-4 border-t border-white/10">
                  View Course
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/training" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#005CFF]/30 transition-all duration-300"
          >
            Browse All Courses
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
