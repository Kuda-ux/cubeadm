'use client'

import { useState, useEffect } from 'react'
import { DollarSign, Download, Calendar, Users, Loader2 } from 'lucide-react'

interface PayrollRecord {
  id: string
  employee_id?: string
  employees?: { first_name: string; last_name: string; position?: string }
  pay_period: string
  base_salary: number
  allowances: number
  deductions: number
  net_salary: number
  status: string
  created_at: string
}

export default function PayrollPage() {
  const [payrollData, setPayrollData] = useState<PayrollRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMonth, setSelectedMonth] = useState('2026-01')

  useEffect(() => {
    fetchPayroll()
  }, [selectedMonth])

  const fetchPayroll = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/payroll?period=${selectedMonth}`)
      const result = await response.json()
      if (result.data) setPayrollData(result.data)
    } catch (error) {
      console.error('Error fetching payroll:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleProcessPayment = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/payroll/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'paid', paid_at: new Date().toISOString() })
      })
      if (response.ok) fetchPayroll()
    } catch (error) {
      console.error('Error processing payment:', error)
    }
  }

  const totalPayroll = payrollData.reduce((sum, r) => sum + (r.net_salary || 0), 0)
  const paidAmount = payrollData.filter(r => r.status === 'paid').reduce((sum, r) => sum + (r.net_salary || 0), 0)
  const pendingAmount = payrollData.filter(r => r.status === 'pending').reduce((sum, r) => sum + (r.net_salary || 0), 0)

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
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#005CFF]" />
          </div>
        ) : payrollData.length === 0 ? (
          <div className="text-center py-12">
            <DollarSign className="w-12 h-12 mx-auto text-gray-500 mb-4" />
            <p className="text-gray-500">No payroll records found for this period</p>
          </div>
        ) : (
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
                  <td className="p-4 font-medium">{record.employees?.first_name} {record.employees?.last_name}</td>
                  <td className="p-4 text-gray-400">{record.employees?.position || 'N/A'}</td>
                  <td className="p-4 text-gray-400">${record.base_salary?.toLocaleString() || '0'}</td>
                  <td className="p-4 text-green-500">+${record.allowances?.toLocaleString() || '0'}</td>
                  <td className="p-4 text-red-500">-${record.deductions?.toLocaleString() || '0'}</td>
                  <td className="p-4 font-medium text-[#00D4FF]">${record.net_salary?.toLocaleString() || '0'}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      record.status === 'paid' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {record.status === 'pending' && (
                      <button onClick={() => handleProcessPayment(record.id)} className="text-sm text-[#00D4FF] hover:underline">Process</button>
                    )}
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
