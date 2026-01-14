import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio | CubeADM - Case Studies & Success Stories',
  description: 'Explore CubeADM case studies and success stories. See how we have helped organizations transform their IT infrastructure.',
}

const projects = [
  {
    title: 'Enterprise Network Overhaul',
    client: 'Leading Financial Institution',
    category: 'Network Infrastructure',
    description: 'Complete network infrastructure redesign and implementation for a major bank, improving performance by 300% and achieving 99.9% uptime.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    results: ['300% Performance Increase', '99.9% Uptime', '50% Cost Reduction'],
  },
  {
    title: 'Cloud Migration Project',
    client: 'Manufacturing Company',
    category: 'Cloud Services',
    description: 'Seamless migration of legacy systems to AWS cloud infrastructure with zero downtime and significant cost savings.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    results: ['Zero Downtime', '40% Cost Savings', 'Scalable Infrastructure'],
  },
  {
    title: 'Cybersecurity Implementation',
    client: 'Healthcare Provider',
    category: 'Cybersecurity',
    description: 'Comprehensive security solution protecting sensitive patient data and ensuring regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    results: ['100% Compliance', 'Zero Breaches', '24/7 Monitoring'],
  },
  {
    title: 'IT Training Program',
    client: 'Government Agency',
    category: 'Training',
    description: 'Customized IT training program for 200+ government employees covering cybersecurity and cloud fundamentals.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    results: ['200+ Trained', '95% Pass Rate', 'Ongoing Partnership'],
  },
  {
    title: 'Digital Transformation',
    client: 'Retail Chain',
    category: 'Digital Transformation',
    description: 'End-to-end digital transformation including POS systems, inventory management, and customer analytics.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    results: ['50% Efficiency Gain', 'Real-time Analytics', 'Unified Systems'],
  },
  {
    title: 'Managed IT Services',
    client: 'Law Firm',
    category: 'Managed IT',
    description: 'Complete IT management including helpdesk, security monitoring, and infrastructure maintenance.',
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80',
    results: ['24/7 Support', '99% SLA', 'Reduced IT Costs'],
  },
]

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="container-custom mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
            <h1 className="heading-xl text-white mt-3 mb-6">Success Stories & Case Studies</h1>
            <p className="text-body text-xl">
              Discover how we have helped organizations across Zimbabwe transform their IT infrastructure and achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group bg-dark-800 border border-white/5 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all">
                <div className="relative h-56 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-medium rounded-full border border-primary-500/30">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-primary-500 text-sm font-medium mb-2">{project.client}</p>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-500 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.results.map((result) => (
                      <span key={result} className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded">{result}</span>
                    ))}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you achieve your technology goals. Contact us today for a free consultation.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
