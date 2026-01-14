import { Metadata } from 'next'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact Us | CubeADM - Technology Training & IT Solutions Zimbabwe',
  description: 'Get in touch with CubeADM for technology training, IT solutions, and consultations. Located in Harare, Zimbabwe.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  )
}
