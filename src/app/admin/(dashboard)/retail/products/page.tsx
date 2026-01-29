'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Package, Plus, Search, Edit, Trash2, Eye, Loader2 } from 'lucide-react'

interface Product {
  id: string
  name: string
  sku: string
  brand?: string
  selling_price?: number
  currency: string
  quantity_in_stock: number
  reorder_level: number
  is_active: boolean
  created_at: string
}

const getStockStatus = (stock: number, reorderLevel: number) => {
  if (stock === 0) return { status: 'out_of_stock', color: 'bg-red-500/10 text-red-500' }
  if (stock <= reorderLevel) return { status: 'low_stock', color: 'bg-yellow-500/10 text-yellow-500' }
  return { status: 'in_stock', color: 'bg-green-500/10 text-green-500' }
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/products')
      const result = await response.json()
      if (result.data) setProducts(result.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return
    try {
      const response = await fetch(`/api/admin/products/${id}`, { method: 'DELETE' })
      if (response.ok) setProducts(products.filter(p => p.id !== id))
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.sku?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Products</h1>
          <p className="text-gray-500 mt-1">Manage hardware products catalog</p>
        </div>
        <Link
          href="/admin/retail/products/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl hover:opacity-90 transition-opacity w-fit"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
          />
        </div>
      </div>

      <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#005CFF]" />
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <Package className="w-12 h-12 mx-auto text-gray-500 mb-4" />
            <p className="text-gray-500">No products found</p>
            <Link href="/admin/retail/products/new" className="text-[#00D4FF] hover:underline mt-2 inline-block">
              Add your first product
            </Link>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b border-white/5 bg-white/5">
                <th className="p-4 font-medium">Product</th>
                <th className="p-4 font-medium">SKU</th>
                <th className="p-4 font-medium">Brand</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Stock</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredProducts.map((product) => {
                const stockInfo = getStockStatus(product.quantity_in_stock, product.reorder_level)
                return (
                  <tr key={product.id} className="hover:bg-white/5">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                          <Package className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-400 font-mono text-sm">{product.sku}</td>
                    <td className="p-4 text-gray-400">{product.brand || 'N/A'}</td>
                    <td className="p-4 font-medium text-[#00D4FF]">{product.currency} {product.selling_price?.toLocaleString() || '0'}</td>
                    <td className="p-4 text-gray-400">{product.quantity_in_stock}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${stockInfo.color}`}>
                        {stockInfo.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Link href={`/admin/retail/products/${product.id}`} className="p-2 hover:bg-white/10 rounded-lg"><Eye className="w-4 h-4 text-gray-400" /></Link>
                        <Link href={`/admin/retail/products/${product.id}/edit`} className="p-2 hover:bg-white/10 rounded-lg"><Edit className="w-4 h-4 text-gray-400" /></Link>
                        <button onClick={() => handleDelete(product.id)} className="p-2 hover:bg-red-500/10 rounded-lg"><Trash2 className="w-4 h-4 text-red-500" /></button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
