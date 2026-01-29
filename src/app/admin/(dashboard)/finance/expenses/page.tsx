'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Wallet, Plus, Search, Receipt } from 'lucide-react'

const expenses = [
  { id: 'EXP-001', description: 'AWS Cloud Services', category: 'Infrastructure', amount: '$2,340', date: '2026-01-28', vendor: 'Amazon Web Services' },
  { id: 'EXP-002', description: 'Staff Salaries - January', category: 'Payroll', amount: '$18,500', date: '2026-01-25', vendor: 'Internal' },
  { id: 'EXP-003', description: 'Office Rent - February', category: 'Rent', amount: '$3,500', date: '2026-01-24', vendor: 'Harare Properties' },
  { id: 'EXP-004', description: 'Microsoft 365 Licenses', category: 'Software', amount: '$450', date: '2026-01-22', vendor: 'Microsoft' },
  { id: 'EXP-005', description: 'Training Materials', category: 'Operations', amount: '$800', date: '2026-01-20', vendor: 'Various' },
  { id: 'EXP-006', description: 'Internet & Utilities', category: 'Utilities', amount: '$650', date: '2026-01-18', vendor: 'TelOne' },
]

export default function ExpensesPage() {
  const [searchQuery, setSearchQuery] = useState('')

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
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b border-white/5 bg-white/5">
              <th className="p-4 font-medium">ID</th>
              <th className="p-4 font-medium">Description</th>
              <th className="p-4 font-medium">Category</th>
              <th className="p-4 font-medium">Vendor</th>
              <th className="p-4 font-medium">Amount</th>
              <th className="p-4 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {expenses.map((expense) => (
              <tr key={expense.id} className="hover:bg-white/5">
                <td className="p-4">
                  <span className="flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-red-500" />
                    <span className="font-medium text-[#00D4FF]">{expense.id}</span>
                  </span>
                </td>
                <td className="p-4">{expense.description}</td>
                <td className="p-4">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/5">{expense.category}</span>
                </td>
                <td className="p-4 text-gray-400">{expense.vendor}</td>
                <td className="p-4 font-medium text-red-500">-{expense.amount}</td>
                <td className="p-4 text-gray-400">{expense.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
