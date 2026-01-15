import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook, Tag, ChevronRight } from 'lucide-react'
import { blogPosts, getBlogPost, getRelatedPosts } from '@/lib/blog-data'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | CubeADM Blog',
    }
  }

  return {
    title: `${post.title} | CubeADM Blog`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://cubeadm.co.zw/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://cubeadm.co.zw/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(params.slug, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'CubeADM',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cubeadm.co.zw/logo.png',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://cubeadm.co.zw/blog/${post.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d1117] to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          <div className="container-custom mx-auto relative z-10 px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#00D4FF]">{post.category}</span>
            </nav>

            <div className="max-w-4xl">
              {/* Category Badge */}
              <Link 
                href={`/blog?category=${post.category.toLowerCase()}`}
                className="inline-block px-4 py-1.5 bg-[#005CFF]/20 text-[#00D4FF] text-sm font-semibold rounded-full mb-6 hover:bg-[#005CFF]/30 transition-colors"
              >
                {post.category}
              </Link>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              {/* Excerpt */}
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              {/* Author & Meta */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-4">
                  <Image 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    width={56}
                    height={56}
                    className="rounded-full border-2 border-[#005CFF]/30"
                  />
                  <div>
                    <p className="text-white font-semibold">{post.author.name}</p>
                    <p className="text-gray-400 text-sm">{post.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#005CFF]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#005CFF]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="relative -mt-8 mb-12">
          <div className="container-custom mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-[#005CFF]/10">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container-custom mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_280px] gap-12">
                {/* Main Content */}
                <div 
                  className="prose prose-lg prose-invert max-w-none
                    prose-headings:text-white prose-headings:font-bold
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-[#005CFF] prose-h2:pl-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-[#00D4FF]
                    prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                    prose-strong:text-white prose-strong:font-semibold
                    prose-ul:text-gray-300 prose-ul:my-6
                    prose-li:my-2
                    prose-a:text-[#005CFF] prose-a:no-underline hover:prose-a:text-[#00D4FF]
                    prose-blockquote:border-l-4 prose-blockquote:border-[#005CFF] prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                    prose-code:bg-[#005CFF]/10 prose-code:text-[#00D4FF] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                  "
                  dangerouslySetInnerHTML={{ 
                    __html: post.content
                      .split('\n')
                      .map(line => {
                        if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`
                        if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`
                        if (line.startsWith('#### ')) return `<h4>${line.slice(5)}</h4>`
                        if (line.startsWith('- ')) return `<li>${line.slice(2)}</li>`
                        if (line.trim() === '') return ''
                        return `<p>${line}</p>`
                      })
                      .join('\n')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/<p><\/p>/g, '')
                      .replace(/<\/li>\n<li>/g, '</li><li>')
                      .replace(/<li>/g, '<ul><li>')
                      .replace(/<\/li>(?!<li>)/g, '</li></ul>')
                      .replace(/<\/ul>\n<ul>/g, '')
                  }}
                />

                {/* Sidebar */}
                <aside className="lg:sticky lg:top-24 lg:self-start space-y-8">
                  {/* Share */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Share2 className="w-5 h-5 text-[#005CFF]" />
                      Share Article
                    </h3>
                    <div className="flex gap-3">
                      <a 
                        href={`https://twitter.com/intent/tweet?url=https://cubeadm.co.zw/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-[#1DA1F2]/20 border border-white/10 hover:border-[#1DA1F2]/30 rounded-lg transition-all"
                      >
                        <Twitter className="w-5 h-5 text-gray-400 hover:text-[#1DA1F2]" />
                      </a>
                      <a 
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://cubeadm.co.zw/blog/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-[#0A66C2]/20 border border-white/10 hover:border-[#0A66C2]/30 rounded-lg transition-all"
                      >
                        <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#0A66C2]" />
                      </a>
                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=https://cubeadm.co.zw/blog/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-[#1877F2]/20 border border-white/10 hover:border-[#1877F2]/30 rounded-lg transition-all"
                      >
                        <Facebook className="w-5 h-5 text-gray-400 hover:text-[#1877F2]" />
                      </a>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5 text-[#005CFF]" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-white/5 text-gray-400 text-sm rounded-full hover:bg-[#005CFF]/20 hover:text-white transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-br from-[#005CFF]/20 to-[#00D4FF]/10 border border-[#005CFF]/30 rounded-xl p-6">
                    <h3 className="text-white font-semibold mb-2">Ready to Learn More?</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Join CubeADM&apos;s training programs and advance your IT career.
                    </p>
                    <Link 
                      href="/training"
                      className="block w-full py-3 bg-[#005CFF] hover:bg-[#0046cc] text-white text-center font-semibold rounded-lg transition-colors"
                    >
                      View Courses
                    </Link>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gradient-to-b from-transparent to-[#0d1117]">
            <div className="container-custom mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#005CFF]/30 transition-all"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <Image 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-[#00D4FF] text-xs font-semibold">{relatedPost.category}</span>
                        <h3 className="text-white font-semibold mt-2 line-clamp-2 group-hover:text-[#005CFF] transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-2">{relatedPost.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Back to Blog */}
        <section className="py-12 border-t border-white/5">
          <div className="container-custom mx-auto px-4 text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-[#005CFF] hover:text-[#00D4FF] font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Articles
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
