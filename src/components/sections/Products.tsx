import Link from 'next/link'
import Image from 'next/image'
import { 
  Laptop, 
  Wifi, 
  Server, 
  Cloud,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const categories = [
  {
    icon: Laptop,
    title: 'End-User Computing',
    description: 'Laptops, desktops, workstations & accessories from HP, Dell, Lenovo',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
    href: '/products?category=computing',
  },
  {
    icon: Wifi,
    title: 'Networking Equipment',
    description: 'Cisco & Huawei routers, switches, firewalls & wireless access points',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    href: '/products?category=networking',
  },
  {
    icon: Server,
    title: 'Servers & Storage',
    description: 'Enterprise servers, NAS, SAN & backup solutions from Dell, HPE',
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80',
    href: '/products?category=servers',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Virtualization, hybrid cloud & disaster recovery solutions',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    href: '/products?category=cloud',
  },
]

export default function Products() {
  return (
    <section id="products" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#01124b] via-[#020c2d] to-[#01124b]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#005CFF]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00D4FF]/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-[#00D4FF] font-medium text-sm">IT Hardware Store</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise
            <span className="block bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
              Hardware Solutions
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Premium IT hardware from Cisco, Huawei, Dell, HP, and more. 
            Serving individuals, SMEs, and enterprises across Africa.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-[#005CFF]/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01124b] via-[#01124b]/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-xl flex items-center justify-center shadow-lg">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-[#00D4FF] text-sm font-medium">
                  Browse Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#005CFF]/30 transition-all duration-300"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
