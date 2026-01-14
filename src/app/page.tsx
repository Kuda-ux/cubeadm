import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Training from '@/components/sections/Training'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Portfolio from '@/components/sections/Portfolio'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Training />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  )
}
