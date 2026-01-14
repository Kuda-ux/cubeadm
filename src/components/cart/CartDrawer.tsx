'use client'

import { useState } from 'react'
import Image from 'next/image'
import { 
  X, 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag,
  ArrowRight,
  Loader2,
  CheckCircle
} from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { user } = useAuth()
  const { items, itemCount, total, removeFromCart, updateQuantity, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [checkoutSuccess, setCheckoutSuccess] = useState(false)
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    phone: '',
    company: '',
    notes: ''
  })

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || items.length === 0) return

    setIsCheckingOut(true)
    try {
      const orderItems = items.map(item => ({
        product_id: item.product_id,
        name: item.product?.name || '',
        price: item.product?.price || 0,
        quantity: item.quantity
      }))

      const { data: orderData, error } = await supabase.from('orders').insert({
        user_id: user.id,
        user_email: user.email!,
        user_name: checkoutForm.name || user.user_metadata?.name || 'Customer',
        user_phone: checkoutForm.phone || null,
        company: checkoutForm.company || null,
        items: orderItems,
        total: total,
        notes: checkoutForm.notes || null
      }).select().single()

      if (error) throw error

      // Send email notification
      await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: orderData?.id || 'N/A',
          userEmail: user.email,
          userName: checkoutForm.name || user.user_metadata?.name || 'Customer',
          userPhone: checkoutForm.phone,
          company: checkoutForm.company,
          items: orderItems,
          total: total,
          notes: checkoutForm.notes
        })
      })

      await clearCart()
      setCheckoutSuccess(true)
      setCheckoutForm({ name: '', phone: '', company: '', notes: '' })
      
      setTimeout(() => {
        setCheckoutSuccess(false)
        onClose()
      }, 3000)
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to place order. Please try again.')
    } finally {
      setIsCheckingOut(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#01124b] z-50 shadow-2xl transform transition-transform duration-300 ease-out overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Your Cart</h2>
              <p className="text-sm text-gray-400">{itemCount} item{itemCount !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(100%-88px)]">
          {checkoutSuccess ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Order Placed!</h3>
              <p className="text-gray-400">
                Your quote request has been sent to our sales team at info@cubeadm.co.zw. 
                We&apos;ll contact you shortly with pricing details.
              </p>
            </div>
          ) : items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-10 h-10 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Your cart is empty</h3>
              <p className="text-gray-400 mb-6">Add some products to get started</p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#005CFF]/30 transition-all"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl"
                  >
                    {/* Product Image */}
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product?.image_url || ''}
                        alt={item.product?.name || ''}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-sm line-clamp-1">
                        {item.product?.name}
                      </h4>
                      <p className="text-xs text-gray-400 mb-2">{item.product?.brand}</p>
                      <p className="text-[#00D4FF] font-bold">
                        ${item.product?.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeFromCart(item.product_id)}
                        className="p-1.5 hover:bg-red-500/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </button>
                      
                      <div className="flex items-center gap-2 bg-white/10 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                          className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <Minus className="w-4 h-4 text-gray-400" />
                        </button>
                        <span className="text-white font-medium w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                          className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Checkout Form */}
              <div className="border-t border-white/10 p-4 space-y-4 bg-[#020c2d]">
                <form onSubmit={handleCheckout} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={checkoutForm.name}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]/50 text-sm"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={checkoutForm.phone}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                      className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]/50 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      value={checkoutForm.company}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, company: e.target.value })}
                      className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]/50 text-sm"
                    />
                  </div>
                  <textarea
                    placeholder="Additional notes (optional)"
                    value={checkoutForm.notes}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, notes: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]/50 text-sm resize-none"
                  />

                  {/* Total */}
                  <div className="flex items-center justify-between py-3 border-t border-white/10">
                    <span className="text-gray-400">Total</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
                      ${total.toLocaleString()}
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isCheckingOut}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#005CFF]/30 transition-all disabled:opacity-50"
                  >
                    {isCheckingOut ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Request Quote
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center">
                  Our sales team will contact you with final pricing and availability
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
