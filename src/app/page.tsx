import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Products from '@/components/sections/Products'
import Training from '@/components/sections/Training'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Training />
      <Testimonials />
      <CTA />
    </>
  )
}
