'use client'

import Link from 'next/link'
import { ArrowRight, Play, Shield, Cloud, Cpu, Network } from 'lucide-react'
import TechCube from '@/components/ui/TechCube'

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]" />
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-[10%] animate-float opacity-20">
          <Shield className="w-12 h-12 text-primary-500" />
        </div>
        <div className="absolute top-1/3 right-[15%] animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <Cloud className="w-16 h-16 text-accent-blue" />
        </div>
        <div className="absolute bottom-1/3 left-[20%] animate-float opacity-20" style={{ animationDelay: '2s' }}>
          <Cpu className="w-10 h-10 text-primary-400" />
        </div>
        <div className="absolute bottom-1/4 right-[25%] animate-float opacity-20" style={{ animationDelay: '1.5s' }}>
          <Network className="w-14 h-14 text-accent-glow" />
        </div>
      </div>

      <div className="container-custom mx-auto px-4 md:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              Leading Tech Training in Zimbabwe
            </div>
            
            <h1 className="heading-xl mb-6">
              <span className="text-white">Empowering the Future with</span>
              <br />
              <span className="text-gradient">Technology</span>
            </h1>
            
            <p className="text-body max-w-xl mx-auto lg:mx-0 mb-8">
              CubeADM delivers world-class technology training, enterprise IT solutions, 
              and digital transformation services. Build your career or transform your 
              business with cutting-edge skills and solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="/training" className="btn-primary flex items-center justify-center gap-2">
                Explore Training Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="btn-secondary flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                View Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-gray-400">Students Trained</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-400">Business Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Tech Cube Animation */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-[520px] h-[520px]">
              <TechCube />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
