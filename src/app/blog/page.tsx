import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, ArrowRight, Clock, TrendingUp, Sparkles, Search } from 'lucide-react'
import { blogPosts, getFeaturedPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'IT Blog Zimbabwe | Cybersecurity, Cloud, AI & Career Insights | CubeADM',
  description: 'Stay ahead with CubeADM\'s IT blog. Expert insights on cybersecurity threats in Zimbabwe, cloud computing guides, CCNA certification tips, AI trends for African businesses, and IT career advice. Updated weekly.',
  keywords: ['IT Blog Zimbabwe', 'Cybersecurity News Zimbabwe', 'Cloud Computing Blog Africa', 'Tech News Harare', 'IT Career Advice Zimbabwe', 'CCNA Guide Zimbabwe', 'AI Business Africa', 'Technology Trends Zimbabwe'],
  openGraph: {
    title: 'IT Blog Zimbabwe | Technology Insights | CubeADM',
    description: 'Expert IT insights for Zimbabwe and Africa: cybersecurity, cloud, AI, and career advice.',
    url: 'https://cubeadm.co.zw/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cubeadm.co.zw/blog',
  },
}

const categories = [
  { name: 'All', count: blogPosts.length },
  { name: 'Cybersecurity', count: blogPosts.filter(p => p.category === 'Cybersecurity').length },
  { name: 'Cloud Computing', count: blogPosts.filter(p => p.category === 'Cloud Computing').length },
  { name: 'Networking', count: blogPosts.filter(p => p.category === 'Networking').length },
  { name: 'AI & Automation', count: blogPosts.filter(p => p.category === 'AI & Automation').length },
  { name: 'Career', count: blogPosts.filter(p => p.category === 'Career').length },
  { name: 'IT Services', count: blogPosts.filter(p => p.category === 'IT Services').length },
]

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts()
  const latestPosts = blogPosts.slice(0, 6)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d1117] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#005CFF]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container-custom mx-auto relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-[#00D4FF] font-medium text-sm">Zimbabwe&apos;s Leading IT Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Technology Insights for{' '}
              <span className="bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
                African Businesses
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Expert insights on cybersecurity, cloud computing, AI, and IT careers. 
              Stay ahead of the curve with actionable advice from industry professionals.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]/50 transition-colors"
              />
            </div>
            
            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {categories.map((cat) => (
                <button 
                  key={cat.name}
                  className="px-4 py-2 bg-white/5 hover:bg-[#005CFF]/20 border border-white/10 hover:border-[#005CFF]/30 rounded-full text-sm text-gray-300 hover:text-white transition-all"
                >
                  {cat.name} <span className="text-gray-500 ml-1">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container-custom mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <TrendingUp className="w-6 h-6 text-[#005CFF]" />
            <h2 className="text-2xl font-bold text-white">Featured Articles</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Featured Post */}
            {featuredPosts[0] && (
              <Link href={`/blog/${featuredPosts[0].slug}`} className="group relative rounded-2xl overflow-hidden">
                <div className="relative h-[400px] lg:h-full min-h-[400px]">
                  <Image 
                    src={featuredPosts[0].image} 
                    alt={featuredPosts[0].title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block px-3 py-1 bg-[#005CFF] text-white text-xs font-semibold rounded-full mb-4">
                      {featuredPosts[0].category}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                      {featuredPosts[0].title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">{featuredPosts[0].excerpt}</p>
                    <div className="flex items-center gap-4">
                      <Image 
                        src={featuredPosts[0].author.avatar} 
                        alt={featuredPosts[0].author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-white font-medium">{featuredPosts[0].author.name}</p>
                        <p className="text-gray-400 text-sm">{featuredPosts[0].date} · {featuredPosts[0].readTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )}
            
            {/* Secondary Featured Posts */}
            <div className="flex flex-col gap-6">
              {featuredPosts.slice(1, 3).map((post) => (
                <Link 
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex gap-6 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#005CFF]/30 transition-all"
                >
                  <div className="relative w-40 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[#00D4FF] text-xs font-semibold uppercase tracking-wider mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#005CFF] transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <span>{post.author.name}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a0a] to-[#0d1117]">
        <div className="container-custom mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-10">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#005CFF]/30 hover:shadow-xl hover:shadow-[#005CFF]/5 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#005CFF]/90 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
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
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#005CFF] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <Image 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <span className="text-sm text-gray-400">{post.author.name}</span>
                    </div>
                    <span className="text-[#005CFF] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-[#005CFF]/10 via-[#0d1117] to-[#00D4FF]/10 border-t border-white/5">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-[#00D4FF] font-medium text-sm">Join 2,000+ Subscribers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Weekly IT Insights
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Subscribe to our newsletter and receive the latest cybersecurity alerts, 
              cloud computing tips, and career advice directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]/50 transition-colors"
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-gradient-to-r from-[#005CFF] to-[#0046cc] hover:from-[#0046cc] hover:to-[#003399] text-white font-semibold rounded-xl transition-all shadow-lg shadow-[#005CFF]/25"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
