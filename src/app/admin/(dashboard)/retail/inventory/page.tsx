'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BarChart3, Search, AlertTriangle, Package, TrendingUp, TrendingDown, Loader2 } from 'lucide-react'

interface InventoryItem {
  id: string
  name: string
  sku: string
  category?: string
  stock_quantity: number
  reorder_level?: number
  updated_at: string
}

export default function InventoryPage() {
  const [inventory, setInventory] = useState<InventoryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchInventory()
  }, [])

  const fetchInventory = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/products')
      const result = await response.json()
      if (result.data) setInventory(result.data)
    } catch (error) {
      console.error('Error fetching inventory:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredInventory = inventory.filter(item =>
    item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.sku?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const lowStockCount = inventory.filter(i => i.stock_quantity <= (i.reorder_level || 5) && i.stock_quantity > 0).length
  const outOfStockCount = inventory.filter(i => i.stock_quantity === 0).length

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Inventory</h1>
          <p className="text-gray-500 mt-1">Track stock levels and manage inventory</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
              <Package className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Products</p>
              <p className="text-2xl font-bold">{inventory.length}</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Low Stock</p>
              <p className="text-2xl font-bold">{lowStockCount}</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Out of Stock</p>
              <p className="text-2xl font-bold">{outOfStockCount}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search inventory..."
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
        ) : filteredInventory.length === 0 ? (
          <div className="text-center py-12">
            <Package className="w-12 h-12 mx-auto text-gray-500 mb-4" />
            <p className="text-gray-500">No inventory items found</p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b border-white/5 bg-white/5">
                <th className="p-4 font-medium">Product</th>
                <th className="p-4 font-medium">SKU</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">In Stock</th>
                <th className="p-4 font-medium">Reorder Level</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Last Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredInventory.map((item) => {
                const reorderLevel = item.reorder_level || 5
                return (
                  <tr key={item.id} className="hover:bg-white/5">
                    <td className="p-4 font-medium">{item.name}</td>
                    <td className="p-4 text-gray-400 font-mono text-sm">{item.sku}</td>
                    <td className="p-4 text-gray-400">{item.category || 'N/A'}</td>
                    <td className="p-4">
                      <span className={`font-medium ${
                        item.stock_quantity === 0 ? 'text-red-500' : item.stock_quantity <= reorderLevel ? 'text-yellow-500' : 'text-green-500'
                      }`}>
                        {item.stock_quantity}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400">{reorderLevel}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.stock_quantity === 0 ? 'bg-red-500/10 text-red-500' : 
                        item.stock_quantity <= reorderLevel ? 'bg-yellow-500/10 text-yellow-500' : 
                        'bg-green-500/10 text-green-500'
                      }`}>
                        {item.stock_quantity === 0 ? 'Out of Stock' : item.stock_quantity <= reorderLevel ? 'Low Stock' : 'In Stock'}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400">{item.updated_at ? new Date(item.updated_at).toLocaleDateString() : 'N/A'}</td>
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
