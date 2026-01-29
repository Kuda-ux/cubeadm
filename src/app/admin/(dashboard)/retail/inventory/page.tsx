'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BarChart3, Search, AlertTriangle, Package, TrendingUp, TrendingDown } from 'lucide-react'

const inventory = [
  { id: 1, name: 'Dell Latitude 5540', sku: 'DELL-LAT-5540', category: 'Laptops', inStock: 12, reorderLevel: 5, lastUpdated: '2026-01-29' },
  { id: 2, name: 'HP ProBook 450 G10', sku: 'HP-PB450-G10', category: 'Laptops', inStock: 8, reorderLevel: 5, lastUpdated: '2026-01-28' },
  { id: 3, name: 'Cisco Catalyst 9200', sku: 'CISCO-CAT-9200', category: 'Networking', inStock: 3, reorderLevel: 5, lastUpdated: '2026-01-27' },
  { id: 4, name: 'HP ProLiant DL380 Gen10', sku: 'HP-DL380-G10', category: 'Servers', inStock: 0, reorderLevel: 2, lastUpdated: '2026-01-26' },
  { id: 5, name: 'Ubiquiti UniFi AP AC Pro', sku: 'UBI-UAP-AC', category: 'Networking', inStock: 25, reorderLevel: 10, lastUpdated: '2026-01-29' },
  { id: 6, name: 'Lenovo ThinkPad T14', sku: 'LEN-TP-T14', category: 'Laptops', inStock: 6, reorderLevel: 5, lastUpdated: '2026-01-28' },
]

export default function InventoryPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const lowStockCount = inventory.filter(i => i.inStock <= i.reorderLevel).length
  const outOfStockCount = inventory.filter(i => i.inStock === 0).length

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
            {inventory.map((item) => (
              <tr key={item.id} className="hover:bg-white/5">
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4 text-gray-400 font-mono text-sm">{item.sku}</td>
                <td className="p-4 text-gray-400">{item.category}</td>
                <td className="p-4">
                  <span className={`font-medium ${
                    item.inStock === 0 ? 'text-red-500' : item.inStock <= item.reorderLevel ? 'text-yellow-500' : 'text-green-500'
                  }`}>
                    {item.inStock}
                  </span>
                </td>
                <td className="p-4 text-gray-400">{item.reorderLevel}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.inStock === 0 ? 'bg-red-500/10 text-red-500' : 
                    item.inStock <= item.reorderLevel ? 'bg-yellow-500/10 text-yellow-500' : 
                    'bg-green-500/10 text-green-500'
                  }`}>
                    {item.inStock === 0 ? 'Out of Stock' : item.inStock <= item.reorderLevel ? 'Low Stock' : 'In Stock'}
                  </span>
                </td>
                <td className="p-4 text-gray-400">{item.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
