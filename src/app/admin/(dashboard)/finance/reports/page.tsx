'use client'

import { useState } from 'react'
import { BarChart3, Download, Calendar, TrendingUp, TrendingDown, DollarSign } from 'lucide-react'

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState('this_month')

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Financial Reports</h1>
          <p className="text-gray-500 mt-1">Generate and view financial reports</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
          >
            <option value="this_week">This Week</option>
            <option value="this_month">This Month</option>
            <option value="this_quarter">This Quarter</option>
            <option value="this_year">This Year</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:opacity-90 transition-opacity">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500">Total Revenue</span>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-3xl font-bold">$145,280</p>
          <p className="text-sm text-green-500 mt-2">+12.5% vs last month</p>
        </div>
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500">Total Expenses</span>
            <TrendingDown className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-3xl font-bold">$42,180</p>
          <p className="text-sm text-red-500 mt-2">+5.1% vs last month</p>
        </div>
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500">Net Profit</span>
            <DollarSign className="w-5 h-5 text-emerald-500" />
          </div>
          <p className="text-3xl font-bold">$103,100</p>
          <p className="text-sm text-green-500 mt-2">+18.3% vs last month</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Revenue by Category</h3>
          <div className="space-y-4">
            {[
              { name: 'Training', amount: 45280, percentage: 31 },
              { name: 'Projects', amount: 65000, percentage: 45 },
              { name: 'Hardware', amount: 25000, percentage: 17 },
              { name: 'Support', amount: 10000, percentage: 7 },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between mb-1">
                  <span>{item.name}</span>
                  <span className="font-medium">${item.amount.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Expenses by Category</h3>
          <div className="space-y-4">
            {[
              { name: 'Payroll', amount: 18500, percentage: 44 },
              { name: 'Infrastructure', amount: 8500, percentage: 20 },
              { name: 'Rent', amount: 7000, percentage: 17 },
              { name: 'Operations', amount: 8180, percentage: 19 },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between mb-1">
                  <span>{item.name}</span>
                  <span className="font-medium">${item.amount.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full" style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Available Reports</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'Profit & Loss Statement', description: 'Monthly P&L report' },
            { name: 'Balance Sheet', description: 'Assets and liabilities' },
            { name: 'Cash Flow Statement', description: 'Cash inflows and outflows' },
            { name: 'Accounts Receivable', description: 'Outstanding invoices' },
            { name: 'Accounts Payable', description: 'Outstanding bills' },
            { name: 'Tax Report', description: 'Tax summary and details' },
          ].map((report) => (
            <button key={report.name} className="p-4 bg-white/5 hover:bg-white/10 rounded-xl text-left transition-colors">
              <p className="font-medium">{report.name}</p>
              <p className="text-sm text-gray-500">{report.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
