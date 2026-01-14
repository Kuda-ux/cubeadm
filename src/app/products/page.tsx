'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Sparkles, 
  Monitor, 
  Server, 
  Wifi, 
  HardDrive,
  Cloud,
  Laptop,
  Search,
  Filter,
  ShoppingCart,
  ArrowRight,
  Star,
  Check
} from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Products', icon: Sparkles },
  { id: 'computing', name: 'End-User Computing', icon: Laptop },
  { id: 'networking', name: 'Networking Equipment', icon: Wifi },
  { id: 'servers', name: 'Servers & Storage', icon: Server },
  { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud },
]

const products = [
  // End-User Computing
  {
    id: 1,
    name: 'HP ProBook 450 G10',
    category: 'computing',
    brand: 'HP',
    description: 'Business laptop with Intel Core i7, 16GB RAM, 512GB SSD',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
    price: 1299,
    rating: 4.8,
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: 'Dell OptiPlex 7010',
    category: 'computing',
    brand: 'Dell',
    description: 'Desktop computer for enterprise, Intel Core i5, 8GB RAM',
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80',
    price: 899,
    rating: 4.7,
    inStock: true,
    featured: false,
  },
  {
    id: 3,
    name: 'Lenovo ThinkPad X1 Carbon',
    category: 'computing',
    brand: 'Lenovo',
    description: 'Ultra-thin business laptop, 14" display, Intel Core i7',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80',
    price: 1899,
    rating: 4.9,
    inStock: true,
    featured: true,
  },
  {
    id: 4,
    name: 'Dell UltraSharp 27" Monitor',
    category: 'computing',
    brand: 'Dell',
    description: '4K USB-C Hub Monitor, 27" IPS, 60Hz',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80',
    price: 649,
    rating: 4.8,
    inStock: true,
    featured: false,
  },
  // Networking Equipment
  {
    id: 5,
    name: 'Cisco Catalyst 9200 Switch',
    category: 'networking',
    brand: 'Cisco',
    description: '24-port Gigabit Ethernet switch with PoE+',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    price: 2499,
    rating: 4.9,
    inStock: true,
    featured: true,
  },
  {
    id: 6,
    name: 'Huawei S5735-L24T4S',
    category: 'networking',
    brand: 'Huawei',
    description: '24-port Gigabit managed switch with 4 SFP+ ports',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
    price: 1899,
    rating: 4.7,
    inStock: true,
    featured: false,
  },
  {
    id: 7,
    name: 'Cisco Meraki MR46',
    category: 'networking',
    brand: 'Cisco',
    description: 'Cloud-managed Wi-Fi 6 access point',
    image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&q=80',
    price: 899,
    rating: 4.8,
    inStock: true,
    featured: true,
  },
  {
    id: 8,
    name: 'Fortinet FortiGate 60F',
    category: 'networking',
    brand: 'Fortinet',
    description: 'Next-gen firewall with SD-WAN capabilities',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&q=80',
    price: 1299,
    rating: 4.9,
    inStock: true,
    featured: false,
  },
  // Servers & Storage
  {
    id: 9,
    name: 'Dell PowerEdge R750',
    category: 'servers',
    brand: 'Dell',
    description: '2U rack server, dual Intel Xeon, 64GB RAM',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    price: 8999,
    rating: 4.9,
    inStock: true,
    featured: true,
  },
  {
    id: 10,
    name: 'HPE ProLiant DL380 Gen10',
    category: 'servers',
    brand: 'HPE',
    description: '2U rack server with Intel Xeon Scalable processors',
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80',
    price: 7499,
    rating: 4.8,
    inStock: true,
    featured: false,
  },
  {
    id: 11,
    name: 'Synology DS1821+',
    category: 'servers',
    brand: 'Synology',
    description: '8-bay NAS with AMD Ryzen, 4GB RAM expandable',
    image: 'https://images.unsplash.com/photo-1600267185393-e158a98703de?w=600&q=80',
    price: 1099,
    rating: 4.8,
    inStock: true,
    featured: true,
  },
  {
    id: 12,
    name: 'Dell EMC PowerVault ME5',
    category: 'servers',
    brand: 'Dell',
    description: 'Entry-level SAN storage array, 25 drive bays',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    price: 12999,
    rating: 4.7,
    inStock: false,
    featured: false,
  },
  // Cloud Infrastructure
  {
    id: 13,
    name: 'VMware vSphere Standard',
    category: 'cloud',
    brand: 'VMware',
    description: 'Virtualization platform license per processor',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    price: 1499,
    rating: 4.9,
    inStock: true,
    featured: true,
  },
  {
    id: 14,
    name: 'Nutanix HCI Starter Pack',
    category: 'cloud',
    brand: 'Nutanix',
    description: 'Hyper-converged infrastructure starter bundle',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
    price: 24999,
    rating: 4.8,
    inStock: true,
    featured: false,
  },
  {
    id: 15,
    name: 'Microsoft Azure Stack HCI',
    category: 'cloud',
    brand: 'Microsoft',
    description: 'Hybrid cloud solution with Azure integration',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80',
    price: 19999,
    rating: 4.7,
    inStock: true,
    featured: true,
  },
  {
    id: 16,
    name: 'Veeam Backup & Replication',
    category: 'cloud',
    brand: 'Veeam',
    description: 'Enterprise backup solution for virtual environments',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    price: 2999,
    rating: 4.9,
    inStock: true,
    featured: false,
  },
]

const brands = ['All', 'Cisco', 'Huawei', 'Dell', 'HP', 'Lenovo', 'HPE', 'Fortinet', 'VMware', 'Microsoft']

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeBrand, setActiveBrand] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory
    const matchesBrand = activeBrand === 'All' || product.brand === activeBrand
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesBrand && matchesSearch
  })

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#01124b] via-[#020c2d] to-[#01124b]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#005CFF]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00D4FF]/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-full mb-6">
            <ShoppingCart className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-[#00D4FF] font-medium text-sm">IT Hardware & Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enterprise IT
            <span className="block bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
              Hardware Store
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            High-quality IT hardware and infrastructure equipment from leading global brands. 
            Serving individuals, SMEs, and enterprises across Zimbabwe and Africa.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#005CFF]/50 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Categories & Products */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[#020c2d]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white shadow-lg shadow-[#005CFF]/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Brand Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Filter className="w-5 h-5 text-gray-500 mr-2 self-center" />
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeBrand === brand
                    ? 'bg-[#005CFF]/20 text-[#00D4FF] border border-[#005CFF]/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-[#005CFF]/30 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01124b] via-transparent to-transparent" />
                  
                  {product.featured && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white text-xs font-bold rounded-full">
                      Featured
                    </div>
                  )}
                  
                  <div className="absolute top-3 right-3 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-medium text-white">{product.brand}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-white">{product.rating}</span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
                        ${product.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {product.inStock ? (
                        <>
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-xs text-green-400 font-medium">In Stock</span>
                        </>
                      ) : (
                        <span className="text-xs text-orange-400 font-medium">Pre-order</span>
                      )}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#005CFF]/10 hover:bg-[#005CFF]/20 border border-[#005CFF]/30 text-[#00D4FF] font-medium rounded-xl transition-all duration-300"
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020c2d] to-[#01124b]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Buy From CubeADM?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We are your trusted partner for enterprise IT hardware solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Genuine Products', desc: 'Authorized dealer for all major brands' },
              { title: 'Expert Support', desc: 'Technical consultation and after-sales service' },
              { title: 'Competitive Pricing', desc: 'Best prices for enterprise customers' },
              { title: 'Fast Delivery', desc: 'Quick delivery across Zimbabwe' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#005CFF] via-[#0070FF] to-[#00D4FF]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Quote?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact our sales team for bulk orders, custom configurations, and enterprise pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#005CFF] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Sales Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
