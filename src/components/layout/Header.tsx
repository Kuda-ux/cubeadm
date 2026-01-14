'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'HOME', href: '/' },
  { 
    name: 'SERVICES', 
    href: '/services',
    submenu: [
      { name: 'IT Solutions', href: '/services/it-solutions' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'Cloud Services', href: '/services/cloud' },
      { name: 'Managed IT', href: '/services/managed-it' },
    ]
  },
  { 
    name: 'TRAINING', 
    href: '/training',
    submenu: [
      { name: 'Cybersecurity', href: '/training/cybersecurity' },
      { name: 'Cloud Computing', href: '/training/cloud' },
      { name: 'Networking', href: '/training/networking' },
      { name: 'Software Engineering', href: '/training/software' },
      { name: 'AI & Automation', href: '/training/ai-automation' },
    ]
  },
  { 
    name: 'PRODUCTS', 
    href: '/products',
    submenu: [
      { name: 'End-User Computing', href: '/products?category=computing' },
      { name: 'Networking Equipment', href: '/products?category=networking' },
      { name: 'Servers & Storage', href: '/products?category=servers' },
      { name: 'Cloud Infrastructure', href: '/products?category=cloud' },
    ]
  },
  { name: 'ABOUT', href: '/about' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-[#FFFFFF] shadow-[0_2px_20px_rgba(0,92,255,0.08)]'
          : 'bg-[#FFFFFF]'
      )}
    >
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-[#005CFF] via-[#0070FF] to-[#00D4FF] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-8 text-xs">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 font-medium">
                <Phone className="w-3 h-3" />
                +263 77 123 4567
              </span>
              <span className="font-medium">info@cubeadm.co.zw</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Empowering Africa&apos;s Digital Future</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/while background logo.jpg"
                alt="CubeADM Logo"
                width={200}
                height={60}
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
                quality={100}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'relative px-3 py-2 text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-1',
                    'text-[#005CFF] hover:text-[#0070FF]',
                    'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-[#005CFF] after:transition-all after:duration-300',
                    'hover:after:w-3/4'
                  )}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-[#FFFFFF] rounded-xl shadow-[0_10px_40px_rgba(0,92,255,0.12)] border border-gray-100 overflow-hidden animate-fade-in">
                    <div className="p-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#005CFF] hover:bg-[#005CFF]/5 rounded-lg transition-all duration-200 group/item font-semibold"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#005CFF] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="relative px-5 py-2 text-sm font-bold text-[#005CFF] border-2 border-[#005CFF] rounded-full overflow-hidden group transition-all duration-300 hover:text-white"
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-[#005CFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
            <Link
              href="/training"
              className="relative px-5 py-2 text-sm font-bold text-white rounded-full overflow-hidden group bg-[#005CFF] hover:bg-[#0050DD] transition-colors duration-300"
            >
              <span className="relative z-10">Enroll Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 text-[#005CFF] hover:bg-[#005CFF]/10 rounded-xl transition-all duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FFFFFF] border-t border-gray-100 animate-slide-up rounded-b-2xl shadow-lg">
            <div className="py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-[#005CFF] font-bold hover:bg-[#005CFF]/5 rounded-xl mx-2 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-6 space-y-1 mt-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-[#005CFF] font-semibold hover:bg-[#005CFF]/5 rounded-lg mx-2 transition-all duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 text-sm font-bold text-[#005CFF] border-2 border-[#005CFF] rounded-full hover:bg-[#005CFF]/5 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get a Quote
                </Link>
                <Link
                  href="/training"
                  className="block w-full text-center py-3 text-sm font-bold text-white bg-[#005CFF] rounded-full hover:bg-[#0050DD] transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
