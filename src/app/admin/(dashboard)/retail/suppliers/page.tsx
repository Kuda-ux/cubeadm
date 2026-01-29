'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Truck, Plus, Search, Mail, Phone, Globe, Loader2 } from 'lucide-react'

interface Supplier {
  id: string
  name: string
  contact_person?: string
  email?: string
  phone?: string
  status: string
  created_at: string
}

export default function SuppliersPage() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchSuppliers()
  }, [])

  const fetchSuppliers = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/suppliers')
      const result = await response.json()
      if (result.data) setSuppliers(result.data)
    } catch (error) {
      console.error('Error fetching suppliers:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this supplier?')) return
    try {
      const response = await fetch(`/api/admin/suppliers/${id}`, { method: 'DELETE' })
      if (response.ok) setSuppliers(suppliers.filter(s => s.id !== id))
    } catch (error) {
      console.error('Error deleting supplier:', error)
    }
  }

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    supplier.contact_person?.toLowerCase().includes(searchQuery.toLowerCase())
  )

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

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-[#005CFF]" />
        </div>
      ) : filteredSuppliers.length === 0 ? (
        <div className="text-center py-12 bg-white/5 border border-white/5 rounded-2xl">
          <Truck className="w-12 h-12 mx-auto text-gray-500 mb-4" />
          <p className="text-gray-500">No suppliers found</p>
          <Link href="/admin/retail/suppliers/new" className="text-[#00D4FF] hover:underline mt-2 inline-block">
            Add your first supplier
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuppliers.map((supplier) => (
            <div key={supplier.id} className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${supplier.status === 'active' ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-500'}`}>
                  {supplier.status}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-1">{supplier.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{supplier.contact_person || 'No contact'}</p>
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  {supplier.email || 'No email'}
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  {supplier.phone || 'No phone'}
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <button onClick={() => handleDelete(supplier.id)} className="text-sm text-red-500 hover:underline">Delete</button>
                <Link href={`/admin/retail/suppliers/${supplier.id}`} className="text-sm text-[#00D4FF] hover:underline">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
