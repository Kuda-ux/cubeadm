import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { OrganizationSchema, LocalBusinessSchema, WebsiteSchema } from '@/components/seo/StructuredData'

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebsiteSchema />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
