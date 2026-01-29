'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Truck, Plus, Search, Mail, Phone, Globe } from 'lucide-react'

const suppliers = [
  { id: 1, name: 'Dell Technologies', contact: 'John Smith', email: 'sales@dell.com', phone: '+1 800 123 4567', products: 15, status: 'active' },
  { id: 2, name: 'HP Inc.', contact: 'Sarah Johnson', email: 'enterprise@hp.com', phone: '+1 800 234 5678', products: 12, status: 'active' },
  { id: 3, name: 'Cisco Systems', contact: 'Michael Brown', email: 'partners@cisco.com', phone: '+1 800 345 6789', products: 8, status: 'active' },
  { id: 4, name: 'Lenovo', contact: 'Grace Lee', email: 'business@lenovo.com', phone: '+1 800 456 7890', products: 10, status: 'active' },
  { id: 5, name: 'Ubiquiti Networks', contact: 'David Chen', email: 'sales@ui.com', phone: '+1 800 567 8901', products: 6, status: 'active' },
]

export default function SuppliersPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Suppliers</h1>
          <p className="text-gray-500 mt-1">Manage hardware suppliers and vendors</p>
        </div>
        <Link
          href="/admin/retail/suppliers/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl hover:opacity-90 transition-opacity w-fit"
        >
          <Plus className="w-4 h-4" />
          Add Supplier
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search suppliers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suppliers.map((supplier) => (
          <div key={supplier.id} className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                {supplier.status}
              </span>
            </div>
            <h3 className="font-semibold text-lg mb-1">{supplier.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{supplier.contact}</p>
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                {supplier.email}
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                {supplier.phone}
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <span className="text-sm text-gray-500">{supplier.products} products</span>
              <Link href={`/admin/retail/suppliers/${supplier.id}`} className="text-sm text-[#00D4FF] hover:underline">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
