import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Providers } from '@/components/Providers'
import { OrganizationSchema, LocalBusinessSchema, WebsiteSchema } from '@/components/seo/StructuredData'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const viewport: Viewport = {
  themeColor: '#005CFF',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://cubeadm.co.zw'),
  title: {
    default: 'CubeADM | #1 IT Training & Solutions Provider in Zimbabwe | Cybersecurity, Cloud, Networking',
    template: '%s | CubeADM Zimbabwe',
  },
  description: 'CubeADM is Zimbabwe\'s leading technology training academy and IT solutions provider. We offer cybersecurity training, cloud computing courses (AWS, Azure), Cisco networking certifications, managed IT services, and enterprise solutions. Serving Zimbabwe, South Africa, Botswana, and Southern Africa. Get certified today!',
  keywords: [
    'IT Training Zimbabwe',
    'Cybersecurity Training Zimbabwe',
    'Cybersecurity Training Harare',
    'IT Solutions Zimbabwe',
    'Tech Academy Zimbabwe',
    'Managed IT Services Zimbabwe',
    'Cloud Computing Zimbabwe',
    'Cisco Training Zimbabwe',
    'AWS Training Zimbabwe',
    'Azure Training Zimbabwe',
    'CompTIA Training Zimbabwe',
    'IT Certification Zimbabwe',
    'Network Security Zimbabwe',
    'Penetration Testing Zimbabwe',
    'IT Support Zimbabwe',
    'IT Company Harare',
    'Best IT Training Zimbabwe',
    'Cybersecurity Courses Africa',
    'Cloud Migration Zimbabwe',
    'IT Consulting Zimbabwe',
    'Enterprise IT Solutions Zimbabwe',
    'IT Training Southern Africa',
    'Cybersecurity Services Harare',
    'IT Academy Zimbabwe',
    'Technology Training Africa',
    'IT Infrastructure Zimbabwe',
    'Data Center Solutions Zimbabwe',
    'IT Outsourcing Zimbabwe',
    'Digital Transformation Zimbabwe',
    'IT Skills Training Zimbabwe',
  ],
  authors: [{ name: 'CubeADM', url: 'https://cubeadm.co.zw' }],
  creator: 'CubeADM',
  publisher: 'CubeADM',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: 'Technology',
  classification: 'IT Training and Solutions',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZW',
    url: 'https://cubeadm.co.zw',
    siteName: 'CubeADM',
    title: 'CubeADM | #1 IT Training & Solutions Provider in Zimbabwe',
    description: 'Zimbabwe\'s leading technology training academy. Cybersecurity, Cloud Computing, Networking certifications. Managed IT services for businesses. Serving Southern Africa.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'CubeADM - Technology Training & IT Solutions Zimbabwe',
        type: 'image/png',
      },
    ],
    countryName: 'Zimbabwe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CubeADM | #1 IT Training & Solutions Provider in Zimbabwe',
    description: 'Zimbabwe\'s leading technology training academy. Cybersecurity, Cloud Computing, Networking certifications. Managed IT services.',
    images: ['/opengraph-image'],
    creator: '@cubeadm',
    site: '@cubeadm',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://cubeadm.co.zw',
    languages: {
      'en-ZW': 'https://cubeadm.co.zw',
    },
  },
  other: {
    'geo.region': 'ZW',
    'geo.placename': 'Harare',
    'geo.position': '-17.8292;31.0522',
    'ICBM': '-17.8292, 31.0522',
    'dc.title': 'CubeADM - IT Training & Solutions Zimbabwe',
    'dc.creator': 'CubeADM',
    'dc.subject': 'IT Training, Cybersecurity, Cloud Computing, Managed IT Services',
    'dc.description': 'Leading IT training academy and solutions provider in Zimbabwe',
    'dc.publisher': 'CubeADM',
    'dc.language': 'en',
    'dc.coverage': 'Zimbabwe, Southern Africa',
    'revisit-after': '7 days',
    'rating': 'general',
    'distribution': 'global',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cubeadm.co.zw" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebsiteSchema />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
