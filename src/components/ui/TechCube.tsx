'use client'

import { useEffect, useRef } from 'react'

export default function TechCube() {
  const cubeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cube = cubeRef.current
    if (!cube) return

    let rotateY = 45

    const animate = () => {
      rotateY += 0.3
      cube.style.transform = `rotateX(-20deg) rotateY(${rotateY}deg)`
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  const particles = [
    { size: 8, left: '10%', delay: '0s', duration: '4s' },
    { size: 6, left: '20%', delay: '0.5s', duration: '3.5s' },
    { size: 10, left: '75%', delay: '1s', duration: '4.5s' },
    { size: 5, left: '85%', delay: '1.5s', duration: '3s' },
    { size: 7, left: '60%', delay: '2s', duration: '4s' },
    { size: 4, left: '30%', delay: '0.8s', duration: '3.8s' },
    { size: 9, left: '90%', delay: '1.2s', duration: '4.2s' },
    { size: 6, left: '45%', delay: '0.3s', duration: '3.6s' },
    { size: 5, left: '5%', delay: '1.8s', duration: '3.2s' },
    { size: 8, left: '70%', delay: '2.2s', duration: '4.8s' },
  ]

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-[#005CFF]/20 rounded-full blur-[120px]" />
      </div>

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-sm bg-[#00D4FF] opacity-70"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: '20%',
            animation: `floatUp ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* 3D Cube Container */}
      <div className="relative" style={{ perspective: '1200px' }}>
        <div
          ref={cubeRef}
          className="relative w-64 h-64"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Outer Cube - Front */}
          <div
            className="absolute w-64 h-64 border-2 border-[#00D4FF]/60"
            style={{
              transform: 'translateZ(128px)',
              background: 'linear-gradient(135deg, rgba(0,92,255,0.1) 0%, rgba(0,212,255,0.05) 100%)',
              boxShadow: '0 0 30px rgba(0,212,255,0.3), inset 0 0 30px rgba(0,92,255,0.1)',
            }}
          />
          {/* Outer Cube - Back */}
          <div
            className="absolute w-64 h-64 border-2 border-[#00D4FF]/40"
            style={{
              transform: 'translateZ(-128px)',
              background: 'linear-gradient(135deg, rgba(0,92,255,0.08) 0%, rgba(0,212,255,0.03) 100%)',
              boxShadow: '0 0 20px rgba(0,212,255,0.2), inset 0 0 20px rgba(0,92,255,0.05)',
            }}
          />
          {/* Outer Cube - Right */}
          <div
            className="absolute w-64 h-64 border-2 border-[#00D4FF]/50"
            style={{
              transform: 'rotateY(90deg) translateZ(128px)',
              background: 'linear-gradient(135deg, rgba(0,92,255,0.15) 0%, rgba(0,212,255,0.08) 100%)',
              boxShadow: '0 0 25px rgba(0,212,255,0.25), inset 0 0 25px rgba(0,92,255,0.08)',
            }}
          />
          {/* Outer Cube - Left */}
          <div
            className="absolute w-64 h-64 border-2 border-[#00D4FF]/40"
            style={{
              transform: 'rotateY(-90deg) translateZ(128px)',
              background: 'linear-gradient(135deg, rgba(0,92,255,0.05) 0%, rgba(0,212,255,0.02) 100%)',
              boxShadow: '0 0 15px rgba(0,212,255,0.15), inset 0 0 15px rgba(0,92,255,0.03)',
            }}
          />
          {/* Outer Cube - Top */}
          <div
            className="absolute w-64 h-64 border-2 border-[#00D4FF]/70"
            style={{
              transform: 'rotateX(90deg) translateZ(128px)',
              background: 'linear-gradient(135deg, rgba(0,92,255,0.2) 0%, rgba(0,212,255,0.1) 100%)',
              boxShadow: '0 0 35px rgba(0,212,255,0.4), inset 0 0 35px rgba(0,92,255,0.15)',
            }}
          />
          {/* Outer Cube - Bottom */}
          <div
            className="absolute w-64 h-64 border-2 border-[#00D4FF]/30"
            style={{
              transform: 'rotateX(-90deg) translateZ(128px)',
              background: 'linear-gradient(135deg, rgba(0,92,255,0.03) 0%, rgba(0,212,255,0.01) 100%)',
              boxShadow: '0 0 10px rgba(0,212,255,0.1)',
            }}
          />

          {/* Inner White Cube */}
          <div
            className="absolute left-1/2 top-1/2 w-20 h-20 -ml-10 -mt-10"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Inner Front */}
            <div
              className="absolute w-20 h-20 bg-white/90 border border-white/50"
              style={{
                transform: 'translateZ(40px)',
                boxShadow: '0 0 20px rgba(255,255,255,0.5)',
              }}
            >
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-px p-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-gray-200/50 rounded-sm" />
                ))}
              </div>
            </div>
            {/* Inner Back */}
            <div
              className="absolute w-20 h-20 bg-white/70 border border-white/40"
              style={{ transform: 'translateZ(-40px)' }}
            >
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-px p-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-gray-200/30 rounded-sm" />
                ))}
              </div>
            </div>
            {/* Inner Right */}
            <div
              className="absolute w-20 h-20 bg-white/80 border border-white/45"
              style={{ transform: 'rotateY(90deg) translateZ(40px)' }}
            >
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-px p-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-gray-200/40 rounded-sm" />
                ))}
              </div>
            </div>
            {/* Inner Left */}
            <div
              className="absolute w-20 h-20 bg-white/60 border border-white/35"
              style={{ transform: 'rotateY(-90deg) translateZ(40px)' }}
            />
            {/* Inner Top */}
            <div
              className="absolute w-20 h-20 bg-white/95 border border-white/60"
              style={{
                transform: 'rotateX(90deg) translateZ(40px)',
                boxShadow: '0 0 25px rgba(255,255,255,0.6)',
              }}
            >
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-px p-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-gray-100/60 rounded-sm" />
                ))}
              </div>
            </div>
            {/* Inner Bottom */}
            <div
              className="absolute w-20 h-20 bg-white/50 border border-white/30"
              style={{ transform: 'rotateX(-90deg) translateZ(40px)' }}
            />
          </div>

          {/* Edge Glow Lines */}
          <div
            className="absolute w-64 h-0.5 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-60"
            style={{ transform: 'translateZ(128px) translateY(-1px)' }}
          />
          <div
            className="absolute w-64 h-0.5 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-60"
            style={{ transform: 'translateZ(128px) translateY(255px)' }}
          />
        </div>

        {/* Decorative Corner Brackets */}
        <div className="absolute -top-8 -left-8 w-12 h-12 border-t-2 border-l-2 border-[#00D4FF]/50" />
        <div className="absolute -top-8 -right-8 w-12 h-12 border-t-2 border-r-2 border-[#00D4FF]/50" />
        <div className="absolute -bottom-8 -left-8 w-12 h-12 border-b-2 border-l-2 border-[#005CFF]/50" />
        <div className="absolute -bottom-8 -right-8 w-12 h-12 border-b-2 border-r-2 border-[#005CFF]/50" />

        {/* Tech Lines */}
        <div className="absolute -left-16 top-1/2 w-12 h-px bg-gradient-to-r from-transparent to-[#00D4FF]/50" />
        <div className="absolute -right-16 top-1/2 w-12 h-px bg-gradient-to-l from-transparent to-[#00D4FF]/50" />
      </div>

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-300px) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
