'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  Receipt,
  Wallet,
  PieChart,
  BarChart3,
  Plus,
  Download,
  Calendar,
  Filter
} from 'lucide-react'

const stats = [
  { title: 'Total Revenue', value: '$145,280', change: '+12.5%', trend: 'up', icon: DollarSign, color: 'from-emerald-500 to-teal-500' },
  { title: 'Outstanding', value: '$23,450', change: '-8.2%', trend: 'down', icon: Receipt, color: 'from-yellow-500 to-orange-500' },
  { title: 'Expenses', value: '$42,180', change: '+5.1%', trend: 'up', icon: Wallet, color: 'from-red-500 to-pink-500' },
  { title: 'Net Profit', value: '$103,100', change: '+18.3%', trend: 'up', icon: TrendingUp, color: 'from-blue-500 to-indigo-500' },
]

const recentTransactions = [
  { id: 1, type: 'income', description: 'CCNA Training - John Moyo', amount: '+$450', date: '2026-01-29', status: 'completed', category: 'Training' },
  { id: 2, type: 'income', description: 'ZimBank Portal - Milestone 3', amount: '+$15,000', date: '2026-01-28', status: 'completed', category: 'Projects' },
  { id: 3, type: 'expense', description: 'AWS Cloud Services', amount: '-$2,340', date: '2026-01-28', status: 'completed', category: 'Infrastructure' },
  { id: 4, type: 'income', description: 'Dell Laptops - Ministry of Health', amount: '+$8,500', date: '2026-01-27', status: 'pending', category: 'Hardware' },
  { id: 5, type: 'expense', description: 'Staff Salaries - January', amount: '-$18,500', date: '2026-01-25', status: 'completed', category: 'Payroll' },
  { id: 6, type: 'income', description: 'AWS Training - Corporate Batch', amount: '+$3,800', date: '2026-01-24', status: 'completed', category: 'Training' },
]

const pendingInvoices = [
  { id: 'INV-001', client: 'EcoBank Zimbabwe', amount: '$12,500', dueDate: '2026-02-05', daysOverdue: 0 },
  { id: 'INV-002', client: 'Ministry of ICT', amount: '$8,200', dueDate: '2026-01-30', daysOverdue: 0 },
  { id: 'INV-003', client: 'TelOne', amount: '$5,750', dueDate: '2026-01-25', daysOverdue: 4 },
  { id: 'INV-004', client: 'Econet Wireless', amount: '$18,000', dueDate: '2026-02-15', daysOverdue: 0 },
]

const revenueByCategory = [
  { category: 'Training', amount: 45280, percentage: 31 },
  { category: 'Projects', amount: 65000, percentage: 45 },
  { category: 'Hardware', amount: 25000, percentage: 17 },
  { category: 'Support', amount: 10000, percentage: 7 },
]

export default function FinancePage() {
  const [dateRange, setDateRange] = useState('this_month')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            Finance & Accounting
          </h1>
          <p className="text-gray-500 mt-1">Track revenue, expenses, and financial health</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
          >
            <option value="today">Today</option>
            <option value="this_week">This Week</option>
            <option value="this_month">This Month</option>
            <option value="this_quarter">This Quarter</option>
            <option value="this_year">This Year</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <Link
            href="/admin/finance/invoices/new"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            New Invoice
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.title} className="p-6 bg-white/5 border border-white/5 rounded-2xl">
            <div className="flex items-start justify-between">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                stat.trend === 'up' 
                  ? 'bg-green-500/10 text-green-500' 
                  : 'bg-red-500/10 text-red-500'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <div className="lg:col-span-2 bg-white/5 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
            <Link href="/admin/finance/transactions" className="text-sm text-[#00D4FF] hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'income' ? 'bg-green-500/10' : 'bg-red-500/10'
                  }`}>
                    {transaction.type === 'income' ? (
                      <ArrowUpRight className="w-5 h-5 text-green-500" />
                    ) : (
                      <ArrowDownRight className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{transaction.date}</span>
                      <span>•</span>
                      <span>{transaction.category}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {transaction.amount}
                  </p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    transaction.status === 'completed' 
                      ? 'bg-green-500/10 text-green-500' 
                      : 'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue by Category */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Revenue by Category</h2>
            <PieChart className="w-5 h-5 text-gray-500" />
          </div>
          <div className="space-y-4">
            {revenueByCategory.map((item) => (
              <div key={item.category}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">{item.category}</span>
                  <span className="text-sm font-medium">${item.amount.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.percentage}% of total</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pending Invoices */}
      <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Pending Invoices</h2>
          <Link href="/admin/finance/invoices" className="text-sm text-[#00D4FF] hover:underline">
            View All Invoices
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b border-white/5">
                <th className="pb-3 font-medium">Invoice</th>
                <th className="pb-3 font-medium">Client</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Due Date</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {pendingInvoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-white/5">
                  <td className="py-4 font-medium text-[#00D4FF]">{invoice.id}</td>
                  <td className="py-4">{invoice.client}</td>
                  <td className="py-4 font-medium">{invoice.amount}</td>
                  <td className="py-4 text-gray-400">{invoice.dueDate}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      invoice.daysOverdue > 0
                        ? 'bg-red-500/10 text-red-500'
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {invoice.daysOverdue > 0 ? `${invoice.daysOverdue} days overdue` : 'Pending'}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <button className="text-sm text-[#00D4FF] hover:underline">Send Reminder</button>
                      <button className="text-sm text-gray-400 hover:text-white">View</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { name: 'Invoices', href: '/admin/finance/invoices', icon: Receipt },
          { name: 'Payments', href: '/admin/finance/payments', icon: CreditCard },
          { name: 'Expenses', href: '/admin/finance/expenses', icon: Wallet },
          { name: 'Reports', href: '/admin/finance/reports', icon: BarChart3 },
          { name: 'Payroll', href: '/admin/hr/payroll', icon: DollarSign },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-colors"
          >
            <link.icon className="w-5 h-5 text-emerald-500" />
            <span className="font-medium">{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
