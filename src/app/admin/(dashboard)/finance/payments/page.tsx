'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CreditCard, Plus, Search, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const payments = [
  { id: 'PAY-001', invoice: 'INV-001', client: 'ZimBank Ltd', amount: '$15,000', method: 'Bank Transfer', date: '2026-01-29', type: 'received' },
  { id: 'PAY-002', invoice: 'INV-005', client: 'Econet Wireless', amount: '$18,000', method: 'Bank Transfer', date: '2026-01-28', type: 'received' },
  { id: 'PAY-003', invoice: 'INV-006', client: 'ZIMRA', amount: '$9,500', method: 'Paynow', date: '2026-01-27', type: 'received' },
  { id: 'PAY-004', invoice: null, client: 'Dell Technologies', amount: '$12,000', method: 'Bank Transfer', date: '2026-01-26', type: 'sent' },
  { id: 'PAY-005', invoice: null, client: 'AWS', amount: '$2,340', method: 'Credit Card', date: '2026-01-25', type: 'sent' },
]

export default function PaymentsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Payments</h1>
          <p className="text-gray-500 mt-1">Track incoming and outgoing payments</p>
        </div>
        <Link
          href="/admin/finance/payments/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:opacity-90 transition-opacity w-fit"
        >
          <Plus className="w-4 h-4" />
          Record Payment
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search payments..."
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
              <th className="p-4 font-medium">Payment ID</th>
              <th className="p-4 font-medium">Client/Vendor</th>
              <th className="p-4 font-medium">Invoice</th>
              <th className="p-4 font-medium">Amount</th>
              <th className="p-4 font-medium">Method</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-white/5">
                <td className="p-4">
                  <span className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-emerald-500" />
                    <span className="font-medium text-[#00D4FF]">{payment.id}</span>
                  </span>
                </td>
                <td className="p-4">{payment.client}</td>
                <td className="p-4 text-gray-400">{payment.invoice || '-'}</td>
                <td className="p-4">
                  <span className={`font-medium ${payment.type === 'received' ? 'text-green-500' : 'text-red-500'}`}>
                    {payment.type === 'received' ? '+' : '-'}{payment.amount}
                  </span>
                </td>
                <td className="p-4 text-gray-400">{payment.method}</td>
                <td className="p-4 text-gray-400">{payment.date}</td>
                <td className="p-4">
                  <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium w-fit ${
                    payment.type === 'received' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                  }`}>
                    {payment.type === 'received' ? <ArrowDownRight className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3" />}
                    {payment.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
