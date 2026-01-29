'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Receipt, Plus, Search, Download, Send, Eye } from 'lucide-react'

const invoices = [
  { id: 'INV-001', client: 'ZimBank Ltd', amount: '$15,000', date: '2026-01-29', dueDate: '2026-02-28', status: 'paid' },
  { id: 'INV-002', client: 'EcoBank Zimbabwe', amount: '$12,500', date: '2026-01-25', dueDate: '2026-02-24', status: 'pending' },
  { id: 'INV-003', client: 'Ministry of ICT', amount: '$8,200', date: '2026-01-20', dueDate: '2026-02-19', status: 'pending' },
  { id: 'INV-004', client: 'TelOne', amount: '$5,750', date: '2026-01-15', dueDate: '2026-02-14', status: 'overdue' },
  { id: 'INV-005', client: 'Econet Wireless', amount: '$18,000', date: '2026-01-10', dueDate: '2026-02-09', status: 'paid' },
  { id: 'INV-006', client: 'ZIMRA', amount: '$9,500', date: '2026-01-05', dueDate: '2026-02-04', status: 'paid' },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'paid': return 'bg-green-500/10 text-green-500'
    case 'pending': return 'bg-yellow-500/10 text-yellow-500'
    case 'overdue': return 'bg-red-500/10 text-red-500'
    default: return 'bg-gray-500/10 text-gray-500'
  }
}

export default function InvoicesPage() {
  const [searchQuery, setSearchQuery] = useState('')

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
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-white/5">
                <td className="p-4">
                  <span className="flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-emerald-500" />
                    <span className="font-medium text-[#00D4FF]">{invoice.id}</span>
                  </span>
                </td>
                <td className="p-4">{invoice.client}</td>
                <td className="p-4 font-medium">{invoice.amount}</td>
                <td className="p-4 text-gray-400">{invoice.date}</td>
                <td className="p-4 text-gray-400">{invoice.dueDate}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/finance/invoices/${invoice.id}`} className="p-2 hover:bg-white/10 rounded-lg"><Eye className="w-4 h-4 text-gray-400" /></Link>
                    <button className="p-2 hover:bg-white/10 rounded-lg"><Download className="w-4 h-4 text-gray-400" /></button>
                    {invoice.status !== 'paid' && <button className="p-2 hover:bg-white/10 rounded-lg"><Send className="w-4 h-4 text-blue-500" /></button>}
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
