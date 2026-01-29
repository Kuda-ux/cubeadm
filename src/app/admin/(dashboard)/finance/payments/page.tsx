'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CreditCard, Plus, Search, ArrowUpRight, ArrowDownRight, Loader2 } from 'lucide-react'

interface Payment {
  id: string
  payment_number: string
  invoice_id?: string
  invoices?: { invoice_number: string }
  client_id?: string
  clients?: { company_name: string }
  amount: number
  payment_method?: string
  payment_date: string
  payment_type?: string
  created_at: string
}

export default function PaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchPayments()
  }, [])

  const fetchPayments = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/payments')
      const result = await response.json()
      if (result.data) setPayments(result.data)
    } catch (error) {
      console.error('Error fetching payments:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this payment?')) return
    try {
      const response = await fetch(`/api/admin/payments/${id}`, { method: 'DELETE' })
      if (response.ok) setPayments(payments.filter(p => p.id !== id))
    } catch (error) {
      console.error('Error deleting payment:', error)
    }
  }

  const filteredPayments = payments.filter(payment =>
    payment.payment_number?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    payment.clients?.company_name?.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#005CFF]" />
          </div>
        ) : filteredPayments.length === 0 ? (
          <div className="text-center py-12">
            <CreditCard className="w-12 h-12 mx-auto text-gray-500 mb-4" />
            <p className="text-gray-500">No payments found</p>
            <Link href="/admin/finance/payments/new" className="text-[#00D4FF] hover:underline mt-2 inline-block">
              Record your first payment
            </Link>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b border-white/5 bg-white/5">
                <th className="p-4 font-medium">Payment ID</th>
                <th className="p-4 font-medium">Client</th>
                <th className="p-4 font-medium">Invoice</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Method</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-white/5">
                  <td className="p-4">
                    <span className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-emerald-500" />
                      <span className="font-medium text-[#00D4FF]">{payment.payment_number}</span>
                    </span>
                  </td>
                  <td className="p-4">{payment.clients?.company_name || 'N/A'}</td>
                  <td className="p-4 text-gray-400">{payment.invoices?.invoice_number || '-'}</td>
                  <td className="p-4">
                    <span className="font-medium text-green-500">
                      +${payment.amount?.toLocaleString() || '0'}
                    </span>
                  </td>
                  <td className="p-4 text-gray-400">{payment.payment_method || 'N/A'}</td>
                  <td className="p-4 text-gray-400">{payment.payment_date || new Date(payment.created_at).toLocaleDateString()}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Link href={`/admin/finance/payments/${payment.id}`} className="text-sm text-[#00D4FF] hover:underline">View</Link>
                      <button onClick={() => handleDelete(payment.id)} className="text-sm text-red-500 hover:underline">Delete</button>
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
