import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

const caseStudies = [
  {
    title: 'Enterprise Network Overhaul',
    client: 'Leading Financial Institution',
    category: 'Network Infrastructure',
    description: 'Complete network infrastructure redesign and implementation for a major bank, improving performance by 300%.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    results: ['300% Performance Increase', '99.9% Uptime', '50% Cost Reduction'],
    href: '/portfolio/enterprise-network',
  },
  {
    title: 'Cloud Migration Project',
    client: 'Manufacturing Company',
    category: 'Cloud Services',
    description: 'Seamless migration of legacy systems to AWS cloud infrastructure with zero downtime.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    results: ['Zero Downtime', '40% Cost Savings', 'Scalable Infrastructure'],
    href: '/portfolio/cloud-migration',
  },
  {
    title: 'Cybersecurity Implementation',
    client: 'Healthcare Provider',
    category: 'Cybersecurity',
    description: 'Comprehensive security solution protecting sensitive patient data and ensuring HIPAA compliance.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    results: ['100% Compliance', 'Zero Breaches', '24/7 Monitoring'],
    href: '/portfolio/cybersecurity-healthcare',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-dark-800">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="heading-lg text-white mt-3 mb-4">
            Success Stories & Case Studies
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Discover how we&apos;ve helped organizations transform their IT infrastructure 
            and achieve remarkable results.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group bg-dark-900 border border-white/5 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-medium rounded-full border border-primary-500/30">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-primary-500 text-sm font-medium mb-2">{study.client}</p>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-500 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {study.description}
                </p>

                {/* Results */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.results.map((result) => (
                    <span
                      key={result}
                      className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded"
                    >
                      {result}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={study.href}
                  className="inline-flex items-center gap-2 text-primary-500 text-sm font-medium hover:gap-3 transition-all"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn-secondary inline-flex items-center gap-2">
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
