import Link from 'next/link'
import Image from 'next/image'
import { Clock, Users, Award, ArrowRight, Star } from 'lucide-react'

const courses = [
  {
    title: 'Cybersecurity Fundamentals',
    description: 'Master the essentials of cybersecurity, threat detection, and security best practices.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    duration: '12 Weeks',
    students: '150+',
    level: 'Beginner to Advanced',
    price: '$499',
    rating: 4.9,
    href: '/training/cybersecurity',
    featured: true,
  },
  {
    title: 'Cloud Computing (AWS & Azure)',
    description: 'Learn cloud architecture, deployment, and management on leading platforms.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    duration: '10 Weeks',
    students: '120+',
    level: 'Intermediate',
    price: '$599',
    rating: 4.8,
    href: '/training/cloud',
    featured: true,
  },
  {
    title: 'Cisco Networking (CCNA)',
    description: 'Comprehensive Cisco networking training for CCNA certification preparation.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    duration: '14 Weeks',
    students: '200+',
    level: 'Beginner to Intermediate',
    price: '$549',
    rating: 4.9,
    href: '/training/networking',
    featured: false,
  },
  {
    title: 'Software Engineering Foundations',
    description: 'Build a strong foundation in software development, coding, and best practices.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    duration: '16 Weeks',
    students: '180+',
    level: 'Beginner',
    price: '$449',
    rating: 4.7,
    href: '/training/software',
    featured: false,
  },
  {
    title: 'AI & Automation Skills',
    description: 'Explore artificial intelligence, machine learning, and business automation.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    duration: '8 Weeks',
    students: '90+',
    level: 'Intermediate to Advanced',
    price: '$699',
    rating: 4.8,
    href: '/training/ai-automation',
    featured: true,
  },
  {
    title: 'IT Support & Helpdesk',
    description: 'Develop essential IT support skills for helpdesk and technical support roles.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
    duration: '6 Weeks',
    students: '250+',
    level: 'Beginner',
    price: '$299',
    rating: 4.6,
    href: '/training/it-support',
    featured: false,
  },
]

export default function Training() {
  return (
    <section id="training" className="section-padding bg-dark-800">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Training Programs
          </span>
          <h2 className="heading-lg text-white mt-3 mb-4">
            World-Class Technology Courses
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Gain in-demand skills with our industry-certified training programs. 
            Learn from expert instructors and prepare for globally recognized certifications.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group bg-dark-900 border border-white/5 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
                {course.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium text-white">{course.rating}</span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Course Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-primary-500" />
                  <span className="text-sm text-gray-400">{course.level}</span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="text-xl font-bold text-white">{course.price}</div>
                  <Link
                    href={course.href}
                    className="inline-flex items-center gap-1 text-primary-500 text-sm font-medium hover:gap-2 transition-all"
                  >
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link href="/training" className="btn-primary flex items-center justify-center gap-2">
              Browse All Courses
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-outline flex items-center justify-center gap-2">
              Request Course Brochure
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
