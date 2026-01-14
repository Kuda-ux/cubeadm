import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | CubeADM - Technology Insights & News',
  description: 'Stay updated with the latest technology trends, cybersecurity news, and IT insights from CubeADM experts.',
}

const posts = [
  {
    title: 'The Future of Cybersecurity in Zimbabwe: Trends to Watch in 2024',
    excerpt: 'Explore the emerging cybersecurity threats and how businesses in Zimbabwe can prepare for the evolving threat landscape.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    author: 'John Mutasa',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    category: 'Cybersecurity',
  },
  {
    title: 'Cloud Migration: A Step-by-Step Guide for SMEs',
    excerpt: 'Learn how small and medium enterprises can successfully migrate to the cloud without disrupting business operations.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    author: 'Sarah Chikwanha',
    date: 'Dec 10, 2024',
    readTime: '7 min read',
    category: 'Cloud Computing',
  },
  {
    title: 'Why CCNA Certification is Essential for Network Professionals',
    excerpt: 'Discover the benefits of Cisco CCNA certification and how it can accelerate your networking career.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    author: 'Michael Ndlovu',
    date: 'Dec 5, 2024',
    readTime: '4 min read',
    category: 'Networking',
  },
  {
    title: 'AI in Business: Practical Applications for African Enterprises',
    excerpt: 'How African businesses can leverage artificial intelligence to improve efficiency and drive growth.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    author: 'Grace Moyo',
    date: 'Nov 28, 2024',
    readTime: '6 min read',
    category: 'AI & Automation',
  },
  {
    title: 'Building a Career in IT: Tips for Beginners',
    excerpt: 'Essential advice for those starting their journey in the technology industry, from certifications to job hunting.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    author: 'John Mutasa',
    date: 'Nov 20, 2024',
    readTime: '5 min read',
    category: 'Career',
  },
  {
    title: 'Managed IT Services: What Every Business Owner Should Know',
    excerpt: 'Understanding the benefits of outsourcing IT management and how to choose the right provider.',
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80',
    author: 'Sarah Chikwanha',
    date: 'Nov 15, 2024',
    readTime: '4 min read',
    category: 'IT Services',
  },
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="container-custom mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Blog</span>
            <h1 className="heading-xl text-white mt-3 mb-6">Technology Insights & News</h1>
            <p className="text-body text-xl">
              Stay updated with the latest technology trends, cybersecurity news, and IT insights from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="group bg-dark-800 border border-white/5 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-medium rounded-full">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">{post.title}</h2>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-400">{post.author}</span>
                    </div>
                    <span className="text-primary-500 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-dark-800 border-t border-white/5">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-md text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get the latest technology insights delivered directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500" />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}
