'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Package, Plus, Search, Edit, Trash2, Eye } from 'lucide-react'

const products = [
  { id: 1, name: 'Dell Latitude 5540', sku: 'DELL-LAT-5540', category: 'Laptops', price: '$1,500', stock: 12, status: 'in_stock' },
  { id: 2, name: 'HP ProBook 450 G10', sku: 'HP-PB450-G10', category: 'Laptops', price: '$1,200', stock: 8, status: 'in_stock' },
  { id: 3, name: 'Cisco Catalyst 9200', sku: 'CISCO-CAT-9200', category: 'Networking', price: '$4,000', stock: 3, status: 'low_stock' },
  { id: 4, name: 'HP ProLiant DL380 Gen10', sku: 'HP-DL380-G10', category: 'Servers', price: '$8,500', stock: 0, status: 'out_of_stock' },
  { id: 5, name: 'Ubiquiti UniFi AP AC Pro', sku: 'UBI-UAP-AC', category: 'Networking', price: '$150', stock: 25, status: 'in_stock' },
  { id: 6, name: 'Lenovo ThinkPad T14', sku: 'LEN-TP-T14', category: 'Laptops', price: '$1,400', stock: 6, status: 'in_stock' },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'in_stock': return 'bg-green-500/10 text-green-500'
    case 'low_stock': return 'bg-yellow-500/10 text-yellow-500'
    case 'out_of_stock': return 'bg-red-500/10 text-red-500'
    default: return 'bg-gray-500/10 text-gray-500'
  }
}

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchQuery.toLowerCase())
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
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b border-white/5 bg-white/5">
              <th className="p-4 font-medium">Product</th>
              <th className="p-4 font-medium">SKU</th>
              <th className="p-4 font-medium">Category</th>
              <th className="p-4 font-medium">Price</th>
              <th className="p-4 font-medium">Stock</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredProducts.map((product) => (
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
                <td className="p-4 text-gray-400">{product.category}</td>
                <td className="p-4 font-medium text-[#00D4FF]">{product.price}</td>
                <td className="p-4 text-gray-400">{product.stock}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                    {product.status.replace('_', ' ')}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/retail/products/${product.id}`} className="p-2 hover:bg-white/10 rounded-lg"><Eye className="w-4 h-4 text-gray-400" /></Link>
                    <Link href={`/admin/retail/products/${product.id}/edit`} className="p-2 hover:bg-white/10 rounded-lg"><Edit className="w-4 h-4 text-gray-400" /></Link>
                    <button className="p-2 hover:bg-red-500/10 rounded-lg"><Trash2 className="w-4 h-4 text-red-500" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
