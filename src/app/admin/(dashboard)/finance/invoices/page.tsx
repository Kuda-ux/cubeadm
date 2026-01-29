'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Receipt, Plus, Search, Download, Send, Eye, Loader2, Trash2 } from 'lucide-react'

interface Invoice {
  id: string
  invoice_number: string
  client_id?: string
  clients?: { company_name: string }
  total?: number
  currency: string
  invoice_date: string
  due_date?: string
  status: string
  created_at: string
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'paid': return 'bg-green-500/10 text-green-500'
    case 'sent': return 'bg-blue-500/10 text-blue-500'
    case 'pending': case 'draft': return 'bg-yellow-500/10 text-yellow-500'
    case 'overdue': return 'bg-red-500/10 text-red-500'
    default: return 'bg-gray-500/10 text-gray-500'
  }
}

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchInvoices()
  }, [])

  const fetchInvoices = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/invoices')
      const result = await response.json()
      if (result.data) setInvoices(result.data)
    } catch (error) {
      console.error('Error fetching invoices:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this invoice?')) return
    try {
      const response = await fetch(`/api/admin/invoices/${id}`, { method: 'DELETE' })
      if (response.ok) setInvoices(invoices.filter(i => i.id !== id))
    } catch (error) {
      console.error('Error deleting invoice:', error)
    }
  }

  const filteredInvoices = invoices.filter(invoice =>
    invoice.invoice_number?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.clients?.company_name?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Invoices</h1>
          <p className="text-gray-500 mt-1">Create and manage client invoices</p>
        </div>
        <Link
          href="/admin/finance/invoices/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:opacity-90 transition-opacity w-fit"
        >
          <Plus className="w-4 h-4" />
          New Invoice
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search invoices..."
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
        ) : filteredInvoices.length === 0 ? (
          <div className="text-center py-12">
            <Receipt className="w-12 h-12 mx-auto text-gray-500 mb-4" />
            <p className="text-gray-500">No invoices found</p>
            <Link href="/admin/finance/invoices/new" className="text-[#00D4FF] hover:underline mt-2 inline-block">
              Create your first invoice
            </Link>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b border-white/5 bg-white/5">
                <th className="p-4 font-medium">Invoice</th>
                <th className="p-4 font-medium">Client</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Due Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-white/5">
                  <td className="p-4">
                    <span className="flex items-center gap-2">
                      <Receipt className="w-4 h-4 text-emerald-500" />
                      <span className="font-medium text-[#00D4FF]">{invoice.invoice_number}</span>
                    </span>
                  </td>
                  <td className="p-4">{invoice.clients?.company_name || 'N/A'}</td>
                  <td className="p-4 font-medium">{invoice.currency} {invoice.total?.toLocaleString() || '0'}</td>
                  <td className="p-4 text-gray-400">{invoice.invoice_date}</td>
                  <td className="p-4 text-gray-400">{invoice.due_date || 'N/A'}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Link href={`/admin/finance/invoices/${invoice.id}`} className="p-2 hover:bg-white/10 rounded-lg"><Eye className="w-4 h-4 text-gray-400" /></Link>
                      <button className="p-2 hover:bg-white/10 rounded-lg"><Download className="w-4 h-4 text-gray-400" /></button>
                      <button onClick={() => handleDelete(invoice.id)} className="p-2 hover:bg-red-500/10 rounded-lg"><Trash2 className="w-4 h-4 text-red-500" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
