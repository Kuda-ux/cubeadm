import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Products Zimbabwe | Servers, Networking, Computing Equipment | CubeADM',
  description: 'Buy enterprise IT products in Zimbabwe: Dell & HPE servers, Cisco & Huawei networking equipment, laptops, storage solutions. Authorized reseller with warranty. Free delivery in Harare. CubeADM - your trusted IT partner.',
  keywords: ['IT Products Zimbabwe', 'Buy Servers Zimbabwe', 'Networking Equipment Harare', 'Dell Servers Zimbabwe', 'HPE Servers Zimbabwe', 'Cisco Equipment Zimbabwe', 'Huawei Networking Zimbabwe', 'IT Hardware Zimbabwe', 'Enterprise Computing Zimbabwe', 'Storage Solutions Zimbabwe'],
  openGraph: {
    title: 'IT Products Zimbabwe | Servers & Networking | CubeADM',
    description: 'Enterprise IT products: servers, networking, computing equipment in Zimbabwe.',
    url: 'https://cubeadm.co.zw/products',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cubeadm.co.zw/products',
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
