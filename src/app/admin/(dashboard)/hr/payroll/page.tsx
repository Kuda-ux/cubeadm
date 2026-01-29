'use client'

import { useState } from 'react'
import { DollarSign, Download, Calendar, Users } from 'lucide-react'

const payrollData = [
  { id: 1, name: 'John Mutasa', position: 'CEO & Founder', baseSalary: '$5,000', allowances: '$500', deductions: '$250', netSalary: '$5,250', status: 'paid' },
  { id: 2, name: 'Sarah Chikwanha', position: 'Head of Training', baseSalary: '$3,500', allowances: '$300', deductions: '$175', netSalary: '$3,625', status: 'paid' },
  { id: 3, name: 'Michael Ndlovu', position: 'CTO', baseSalary: '$4,000', allowances: '$400', deductions: '$200', netSalary: '$4,200', status: 'paid' },
  { id: 4, name: 'Grace Moyo', position: 'Operations Director', baseSalary: '$3,200', allowances: '$300', deductions: '$160', netSalary: '$3,340', status: 'pending' },
  { id: 5, name: 'David Zimuto', position: 'Senior Developer', baseSalary: '$2,800', allowances: '$250', deductions: '$140', netSalary: '$2,910', status: 'pending' },
  { id: 6, name: 'Tendai Maposa', position: 'Sales Manager', baseSalary: '$2,500', allowances: '$200', deductions: '$125', netSalary: '$2,575', status: 'pending' },
]

export default function PayrollPage() {
  const [selectedMonth, setSelectedMonth] = useState('2026-01')

  const totalPayroll = 21900
  const paidAmount = 13075
  const pendingAmount = 8825

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Payroll</h1>
          <p className="text-gray-500 mt-1">Manage staff salaries and payments</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
          />
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-xl hover:opacity-90 transition-opacity">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Payroll</p>
              <p className="text-2xl font-bold">${totalPayroll.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Paid</p>
              <p className="text-2xl font-bold">${paidAmount.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Pending</p>
              <p className="text-2xl font-bold">${pendingAmount.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b border-white/5 bg-white/5">
              <th className="p-4 font-medium">Employee</th>
              <th className="p-4 font-medium">Position</th>
              <th className="p-4 font-medium">Base Salary</th>
              <th className="p-4 font-medium">Allowances</th>
              <th className="p-4 font-medium">Deductions</th>
              <th className="p-4 font-medium">Net Salary</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {payrollData.map((record) => (
              <tr key={record.id} className="hover:bg-white/5">
                <td className="p-4 font-medium">{record.name}</td>
                <td className="p-4 text-gray-400">{record.position}</td>
                <td className="p-4 text-gray-400">{record.baseSalary}</td>
                <td className="p-4 text-green-500">+{record.allowances}</td>
                <td className="p-4 text-red-500">-{record.deductions}</td>
                <td className="p-4 font-medium text-[#00D4FF]">{record.netSalary}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    record.status === 'paid' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    {record.status}
                  </span>
                </td>
                <td className="p-4">
                  {record.status === 'pending' && (
                    <button className="text-sm text-[#00D4FF] hover:underline">Process</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
