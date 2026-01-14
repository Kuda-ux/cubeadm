'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft,
  ShoppingCart,
  Check,
  Star,
  Truck,
  Shield,
  RefreshCw,
  Headphones,
  Plus,
  Minus,
  Heart,
  Share2,
  Loader2,
  Package,
  Cpu,
  HardDrive,
  Wifi,
  Monitor
} from 'lucide-react'
import { supabase, Product } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'
import { useCart } from '@/contexts/CartContext'
import CartDrawer from '@/components/cart/CartDrawer'
import AuthModal from '@/components/auth/AuthModal'

const fallbackProduct: Product = {
  id: '1',
  created_at: new Date().toISOString(),
  name: 'HP ProBook 450 G10',
  category: 'computing',
  brand: 'HP',
  description: 'Business laptop with Intel Core i7, 16GB RAM, 512GB SSD. Perfect for enterprise users who need reliable performance and security features.',
  image_url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
  price: 1299,
  rating: 4.8,
  in_stock: true,
  featured: true,
  specs: {
    processor: 'Intel Core i7-1355U',
    memory: '16GB DDR4',
    storage: '512GB NVMe SSD',
    display: '15.6" FHD IPS',
    graphics: 'Intel Iris Xe',
    battery: 'Up to 10 hours',
    os: 'Windows 11 Pro',
    warranty: '3 Years'
  },
}

const features = [
  { icon: Truck, title: 'Free Delivery', desc: 'On orders over $500' },
  { icon: Shield, title: 'Warranty', desc: 'Manufacturer warranty included' },
  { icon: RefreshCw, title: 'Easy Returns', desc: '30-day return policy' },
  { icon: Headphones, title: 'Expert Support', desc: '24/7 technical assistance' },
]

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const { user } = useAuth()
  const { addToCart, isInCart, updateQuantity, items } = useCart()
  
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [addingToCart, setAddingToCart] = useState(false)
  const [activeTab, setActiveTab] = useState<'specs' | 'description'>('specs')

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', productId)
          .single()
        
        if (error) throw error
        if (data) {
          setProduct(data)
        }
      } catch (error) {
        console.error('Error fetching product:', error)
        setProduct(fallbackProduct)
      } finally {
        setLoading(false)
      }
    }

    if (productId) {
      fetchProduct()
    }
  }, [productId])

  const handleAddToCart = async () => {
    if (!user) {
      setIsAuthOpen(true)
      return
    }

    if (!product) return

    setAddingToCart(true)
    
    if (isInCart(product.id)) {
      const cartItem = items.find(item => item.product_id === product.id)
      if (cartItem) {
        await updateQuantity(cartItem.id, cartItem.quantity + quantity)
      }
    } else {
      await addToCart(product.id)
      if (quantity > 1) {
        const cartItem = items.find(item => item.product_id === product.id)
        if (cartItem) {
          await updateQuantity(cartItem.id, quantity)
        }
      }
    }
    
    setAddingToCart(false)
    setIsCartOpen(true)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'computing': return Monitor
      case 'networking': return Wifi
      case 'servers': return HardDrive
      case 'cloud': return Cpu
      default: return Package
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen pt-32 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#01124b] via-[#020c2d] to-[#01124b]" />
        <Loader2 className="w-12 h-12 text-[#005CFF] animate-spin relative z-10" />
      </main>
    )
  }

  if (!product) {
    return (
      <main className="min-h-screen pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#01124b] via-[#020c2d] to-[#01124b]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
          <Link href="/products" className="text-[#00D4FF] hover:underline">
            ← Back to Products
          </Link>
        </div>
      </main>
    )
  }

  const CategoryIcon = getCategoryIcon(product.category)
  const specs = product.specs as Record<string, string> | null

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#01124b] via-[#020c2d] to-[#01124b]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#005CFF]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00D4FF]/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          {/* Breadcrumb */}
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00D4FF] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                
                {product.featured && (
                  <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white text-sm font-bold rounded-full">
                    Featured Product
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-full">
                  <span className="text-[#00D4FF] text-sm font-medium">{product.brand}</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                  <CategoryIcon className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm capitalize">{product.category}</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                    />
                  ))}
                  <span className="text-white font-medium ml-2">{product.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  {product.in_stock ? (
                    <>
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-medium">In Stock</span>
                    </>
                  ) : (
                    <span className="text-orange-400 font-medium">Pre-order Available</span>
                  )}
                </div>
              </div>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
                  ${product.price.toLocaleString()}
                </span>
                <span className="text-gray-400 ml-2">USD</span>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-6 mb-8">
                <span className="text-white font-medium">Quantity:</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-white font-bold text-xl w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={addingToCart}
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#005CFF]/30 transition-all disabled:opacity-50"
                >
                  {addingToCart ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      {isInCart(product.id) ? 'Update Cart' : 'Add to Cart'}
                    </>
                  )}
                </button>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-all"
                >
                  Get Quote
                </Link>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl">
                    <feature.icon className="w-5 h-5 text-[#00D4FF]" />
                    <div>
                      <div className="text-white text-sm font-medium">{feature.title}</div>
                      <div className="text-gray-400 text-xs">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs & Description Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[#020c2d]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'specs'
                  ? 'bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('description')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'description'
                  ? 'bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              Description
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            {activeTab === 'specs' && specs ? (
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(specs).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-400 capitalize">{key.replace(/_/g, ' ')}</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            ) : activeTab === 'specs' ? (
              <p className="text-gray-400">Specifications not available for this product.</p>
            ) : (
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {product.description}
                </p>
                <p className="text-gray-400 mt-4">
                  This {product.brand} product is designed for enterprise use and comes with 
                  manufacturer warranty. Contact our sales team for bulk pricing and custom 
                  configurations.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#005CFF] via-[#0070FF] to-[#00D4FF]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Our experts can help you find the perfect solution for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#005CFF] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Headphones className="w-5 h-5" />
            Talk to an Expert
          </Link>
        </div>
      </section>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </main>
  )
}
