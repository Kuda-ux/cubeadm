import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'CubeADM | Technology Training & IT Solutions Zimbabwe',
  description: 'CubeADM is a leading provider of technology training, IT solutions, cybersecurity services, and digital transformation in Zimbabwe and Africa. Empowering businesses and individuals with cutting-edge tech skills.',
  keywords: 'IT Training Zimbabwe, Cybersecurity Training Zimbabwe, IT Solutions Zimbabwe, Tech Academy Zimbabwe, Managed IT Services Zimbabwe, Cloud Computing Zimbabwe, Cisco Training Zimbabwe, AWS Training Zimbabwe',
  authors: [{ name: 'CubeADM' }],
  creator: 'CubeADM',
  publisher: 'CubeADM',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_ZW',
    url: 'https://cubeadm.co.zw',
    siteName: 'CubeADM',
    title: 'CubeADM | Technology Training & IT Solutions Zimbabwe',
    description: 'Leading provider of technology training, IT solutions, and digital transformation in Zimbabwe.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CubeADM - Technology Training & IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CubeADM | Technology Training & IT Solutions Zimbabwe',
    description: 'Leading provider of technology training, IT solutions, and digital transformation in Zimbabwe.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#005CFF" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
