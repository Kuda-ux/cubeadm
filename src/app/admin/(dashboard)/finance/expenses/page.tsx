'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Wallet, Plus, Search, Receipt, Loader2 } from 'lucide-react'

interface Expense {
  id: string
  expense_number: string
  description?: string
  category?: string
  vendor?: string
  amount: number
  expense_date: string
  created_at: string
}

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchExpenses()
  }, [])

  const fetchExpenses = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/expenses')
      const result = await response.json()
      if (result.data) setExpenses(result.data)
    } catch (error) {
      console.error('Error fetching expenses:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this expense?')) return
    try {
      const response = await fetch(`/api/admin/expenses/${id}`, { method: 'DELETE' })
      if (response.ok) setExpenses(expenses.filter(e => e.id !== id))
    } catch (error) {
      console.error('Error deleting expense:', error)
    }
  }

  const filteredExpenses = expenses.filter(expense =>
    expense.expense_number?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    expense.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    expense.vendor?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Expenses</h1>
          <p className="text-gray-500 mt-1">Track and manage business expenses</p>
        </div>
        <Link
          href="/admin/finance/expenses/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:opacity-90 transition-opacity w-fit"
        >
          <Plus className="w-4 h-4" />
          Add Expense
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search expenses..."
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
        ) : filteredExpenses.length === 0 ? (
          <div className="text-center py-12">
            <Wallet className="w-12 h-12 mx-auto text-gray-500 mb-4" />
            <p className="text-gray-500">No expenses found</p>
            <Link href="/admin/finance/expenses/new" className="text-[#00D4FF] hover:underline mt-2 inline-block">
              Add your first expense
            </Link>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b border-white/5 bg-white/5">
                <th className="p-4 font-medium">ID</th>
                <th className="p-4 font-medium">Description</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Vendor</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredExpenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-white/5">
                  <td className="p-4">
                    <span className="flex items-center gap-2">
                      <Wallet className="w-4 h-4 text-red-500" />
                      <span className="font-medium text-[#00D4FF]">{expense.expense_number}</span>
                    </span>
                  </td>
                  <td className="p-4">{expense.description || 'N/A'}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/5">{expense.category || 'N/A'}</span>
                  </td>
                  <td className="p-4 text-gray-400">{expense.vendor || 'N/A'}</td>
                  <td className="p-4 font-medium text-red-500">-${expense.amount?.toLocaleString() || '0'}</td>
                  <td className="p-4 text-gray-400">{expense.expense_date || new Date(expense.created_at).toLocaleDateString()}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Link href={`/admin/finance/expenses/${expense.id}`} className="text-sm text-[#00D4FF] hover:underline">View</Link>
                      <button onClick={() => handleDelete(expense.id)} className="text-sm text-red-500 hover:underline">Delete</button>
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
