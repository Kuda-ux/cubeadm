'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

const footerLinks = {
  services: [
    { name: 'IT Solutions', href: '/services/it-solutions' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'Cloud Services', href: '/services/cloud' },
    { name: 'Managed IT', href: '/services/managed-it' },
  ],
  products: [
    { name: 'End-User Computing', href: '/products?category=computing' },
    { name: 'Networking Equipment', href: '/products?category=networking' },
    { name: 'Servers & Storage', href: '/products?category=servers' },
    { name: 'Cloud Infrastructure', href: '/products?category=cloud' },
  ],
  training: [
    { name: 'Cybersecurity Training', href: '/training/cybersecurity' },
    { name: 'Cloud Computing', href: '/training/cloud' },
    { name: 'Networking (Cisco)', href: '/training/networking' },
    { name: 'Software Engineering', href: '/training/software' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/cubeadm' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/cubeadm' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/cubeadm' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/cubeadm' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/cubeadm' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    try {
      const { error } = await supabase.from('newsletter_subscribers').insert({ email })
      if (error) throw error
      setSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Newsletter subscription error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-[#01124b]">
      <div>
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="bg-gradient-to-r from-[#005CFF]/20 to-[#00D4FF]/20 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Stay Ahead in Tech
                  </h3>
                  <p className="text-gray-300 text-lg max-w-md">
                    Get exclusive insights, training updates, and industry news delivered to your inbox.
                  </p>
                </div>
                {subscribed ? (
                  <div className="flex items-center gap-3 text-green-400">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-medium">Thanks for subscribing!</span>
                  </div>
                ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 lg:w-80 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#005CFF] focus:ring-2 focus:ring-[#005CFF]/20 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#005CFF]/30 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap group disabled:opacity-50"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6 group">
                <Image
                  src="/blue background logo.jpg"
                  alt="CubeADM Logo"
                  width={240}
                  height={80}
                  className="h-20 w-auto rounded-lg group-hover:scale-105 transition-transform duration-300"
                  quality={100}
                />
              </Link>
              <p className="text-gray-300 mb-8 leading-relaxed text-base">
                Africa&apos;s premier technology training and IT solutions provider, 
                empowering the next generation of tech leaders.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <a href="mailto:info@cubeadm.co.zw" className="flex items-center gap-4 text-gray-300 hover:text-[#00D4FF] transition-colors group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#005CFF]/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">info@cubeadm.co.zw</span>
                </a>
                <a href="tel:+263782667295" className="flex items-center gap-4 text-gray-300 hover:text-[#00D4FF] transition-colors group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#005CFF]/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-medium">+263 78 266 7295</span>
                </a>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Harare, Zimbabwe</span>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#005CFF] rounded-full" />
                Services
              </h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00D4FF] rounded-full" />
                Products
              </h4>
              <ul className="space-y-4">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Training Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#005CFF] rounded-full" />
                Training
              </h4>
              <ul className="space-y-4">
                {footerLinks.training.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00D4FF] rounded-full" />
                Company
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} CubeADM. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Empowering Africa&apos;s Digital Future
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-gradient-to-br hover:from-[#005CFF] hover:to-[#00D4FF] rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#005CFF]/20"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
