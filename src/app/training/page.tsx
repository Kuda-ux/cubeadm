import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Users, Award, ArrowRight, Star, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Training Courses Zimbabwe | Cybersecurity, Cloud, Networking Certifications | CubeADM',
  description: 'CubeADM offers world-class IT training courses in Zimbabwe: Cybersecurity (CompTIA Security+, CEH), Cloud Computing (AWS, Azure), Cisco Networking (CCNA, CCNP), Software Engineering, and AI. Industry-certified instructors, hands-on labs, 95% pass rate. Enroll in Harare today!',
  keywords: ['IT Training Zimbabwe', 'Cybersecurity Training Harare', 'AWS Training Zimbabwe', 'Azure Training Zimbabwe', 'CCNA Training Zimbabwe', 'CompTIA Training Zimbabwe', 'IT Certification Courses Zimbabwe', 'Technology Training Africa', 'IT Academy Zimbabwe', 'Cloud Computing Courses Harare', 'Networking Courses Zimbabwe'],
  openGraph: {
    title: 'IT Training Courses Zimbabwe | CubeADM Academy',
    description: 'World-class IT training: Cybersecurity, Cloud Computing, Networking certifications in Zimbabwe.',
    url: 'https://cubeadm.co.zw/training',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cubeadm.co.zw/training',
  },
}

const courses = [
  {
    title: 'Cybersecurity Fundamentals & Certification',
    description: 'Master the essentials of cybersecurity, threat detection, incident response, and security best practices. Prepare for CompTIA Security+ certification.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    duration: '12 Weeks',
    students: '150+',
    level: 'Beginner to Advanced',
    price: '$499',
    rating: 4.9,
    modules: ['Network Security', 'Threat Analysis', 'Incident Response', 'Security Tools', 'Compliance'],
  },
  {
    title: 'Cloud Computing (AWS & Azure)',
    description: 'Learn cloud architecture, deployment, and management on leading platforms. Prepare for AWS Solutions Architect and Azure Administrator certifications.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    duration: '10 Weeks',
    students: '120+',
    level: 'Intermediate',
    price: '$599',
    rating: 4.8,
    modules: ['Cloud Fundamentals', 'AWS Services', 'Azure Services', 'Cloud Security', 'Cost Management'],
  },
  {
    title: 'Cisco Networking (CCNA Preparation)',
    description: 'Comprehensive Cisco networking training covering routing, switching, and network fundamentals. Full CCNA certification preparation.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    duration: '14 Weeks',
    students: '200+',
    level: 'Beginner to Intermediate',
    price: '$549',
    rating: 4.9,
    modules: ['Network Fundamentals', 'Routing', 'Switching', 'IP Services', 'Security Basics'],
  },
  {
    title: 'Software Engineering Foundations',
    description: 'Build a strong foundation in software development with modern programming languages, version control, and development best practices.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    duration: '16 Weeks',
    students: '180+',
    level: 'Beginner',
    price: '$449',
    rating: 4.7,
    modules: ['Programming Basics', 'Web Development', 'Databases', 'Version Control', 'Agile Methods'],
  },
  {
    title: 'AI & Automation Skills',
    description: 'Explore artificial intelligence, machine learning fundamentals, and business process automation. Learn to leverage AI for business efficiency.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    duration: '8 Weeks',
    students: '90+',
    level: 'Intermediate to Advanced',
    price: '$699',
    rating: 4.8,
    modules: ['AI Fundamentals', 'Machine Learning', 'Process Automation', 'AI Tools', 'Business Applications'],
  },
  {
    title: 'IT Support & Helpdesk Professional',
    description: 'Develop essential IT support skills for helpdesk and technical support roles. Prepare for CompTIA A+ certification.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
    duration: '6 Weeks',
    students: '250+',
    level: 'Beginner',
    price: '$299',
    rating: 4.6,
    modules: ['Hardware Basics', 'Operating Systems', 'Troubleshooting', 'Customer Service', 'Documentation'],
  },
]

export default function TrainingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="container-custom mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Training Programs
            </span>
            <h1 className="heading-xl text-white mt-3 mb-6">
              World-Class Technology Training
            </h1>
            <p className="text-body text-xl mb-8">
              Gain in-demand skills with our industry-certified training programs. 
              Learn from expert instructors and prepare for globally recognized certifications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#courses" className="btn-primary inline-flex items-center gap-2">
                View All Courses
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="btn-outline inline-flex items-center gap-2">
                Request Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-dark-800 border-y border-white/5">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-400">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-gray-400">Certifications</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-gray-400">Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
              <div className="text-gray-400">Corporate Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="section-padding bg-dark-900">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-white mb-4">Our Training Programs</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose from our comprehensive range of technology courses designed to advance your career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.title}
                className="group bg-dark-800 border border-white/5 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium text-white">{course.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>

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

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-primary-500" />
                      <span className="text-sm text-gray-400">Key Modules:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {course.modules.slice(0, 3).map((module) => (
                        <span key={module} className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded">
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="text-xl font-bold text-white">{course.price}</div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-primary-500 text-sm font-medium hover:gap-2 transition-all"
                    >
                      Enroll Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Tech Career?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Enroll today and join hundreds of successful graduates who have transformed their careers with CubeADM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Request Course Brochure
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
