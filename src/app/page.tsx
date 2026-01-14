import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Products from '@/components/sections/Products'
import Training from '@/components/sections/Training'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import { FAQSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'CubeADM | #1 IT Training & Solutions Provider in Zimbabwe | Cybersecurity, Cloud, Networking',
  description: 'CubeADM is Zimbabwe\'s premier IT training academy and solutions provider. We offer world-class cybersecurity training, AWS & Azure cloud certifications, Cisco networking courses, and managed IT services. Serving Harare, Zimbabwe, and Southern Africa. Enroll today and advance your IT career!',
  keywords: ['IT Training Zimbabwe', 'Cybersecurity Training Harare', 'AWS Training Zimbabwe', 'Cisco CCNA Zimbabwe', 'Cloud Computing Courses Zimbabwe', 'IT Solutions Harare', 'Managed IT Services Zimbabwe', 'Best IT Academy Zimbabwe', 'Technology Training Africa'],
  alternates: {
    canonical: 'https://cubeadm.co.zw',
  },
}

const homeFAQs = [
  {
    question: 'What IT training courses does CubeADM offer in Zimbabwe?',
    answer: 'CubeADM offers comprehensive IT training courses including Cybersecurity (CEH, CompTIA Security+), Cloud Computing (AWS, Azure, Google Cloud), Networking (Cisco CCNA, CCNP), Software Engineering, and AI & Automation. All courses are available in Harare with both in-person and online options.',
  },
  {
    question: 'Is CubeADM the best IT training provider in Zimbabwe?',
    answer: 'CubeADM is recognized as Zimbabwe\'s leading IT training academy with certified instructors, hands-on labs, and industry-recognized certifications. We have trained over 500+ professionals and maintain a 95% certification pass rate.',
  },
  {
    question: 'What IT services does CubeADM provide for businesses in Zimbabwe?',
    answer: 'CubeADM provides comprehensive IT services including Managed IT Support (24/7), Cybersecurity Services (penetration testing, security audits), Cloud Migration (AWS, Azure), Network Infrastructure, and IT Consulting for businesses across Zimbabwe and Southern Africa.',
  },
  {
    question: 'Where is CubeADM located in Zimbabwe?',
    answer: 'CubeADM is headquartered in Harare, Zimbabwe, and serves clients throughout Zimbabwe, South Africa, Botswana, Zambia, and the broader Southern African region. We offer both on-site and remote services.',
  },
  {
    question: 'How much do IT training courses cost at CubeADM?',
    answer: 'CubeADM offers competitive pricing for IT training courses in Zimbabwe. Contact us for current pricing on cybersecurity, cloud computing, networking, and other certification courses. We also offer corporate training packages and payment plans.',
  },
]

export default function Home() {
  return (
    <>
      <FAQSchema faqs={homeFAQs} />
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
