import { Metadata } from 'next'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact CubeADM | IT Training & Solutions Enquiries | Harare, Zimbabwe',
  description: 'Contact CubeADM for IT training enrollment, IT solutions quotes, and consultations. Located in Harare, Zimbabwe. Call +263 78 266 7295 or email info@cubeadm.co.zw. Serving Zimbabwe and Southern Africa.',
  keywords: ['Contact CubeADM', 'IT Training Enquiries Zimbabwe', 'IT Solutions Quote Harare', 'CubeADM Phone Number', 'CubeADM Email', 'CubeADM Location Harare', 'IT Company Contact Zimbabwe'],
  openGraph: {
    title: 'Contact CubeADM | Harare, Zimbabwe',
    description: 'Get in touch with CubeADM for IT training and solutions in Zimbabwe.',
    url: 'https://cubeadm.co.zw/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cubeadm.co.zw/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  )
}
