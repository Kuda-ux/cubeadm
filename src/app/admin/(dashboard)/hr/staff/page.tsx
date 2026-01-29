'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Users, Plus, Search, Mail, Phone, Edit, Trash2, Loader2 } from 'lucide-react'

interface Employee {
  id: string
  employee_number: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  position?: string
  department?: string
  status: string
  created_at: string
}

export default function StaffPage() {
  const [staff, setStaff] = useState<Employee[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchStaff()
  }, [])

  const fetchStaff = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/employees')
      const result = await response.json()
      if (result.data) setStaff(result.data)
    } catch (error) {
      console.error('Error fetching staff:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this employee?')) return
    try {
      const response = await fetch(`/api/admin/employees/${id}`, { method: 'DELETE' })
      if (response.ok) setStaff(staff.filter(s => s.id !== id))
    } catch (error) {
      console.error('Error deleting employee:', error)
    }
  }

  const filteredStaff = staff.filter(employee => {
    const name = `${employee.first_name} ${employee.last_name}`.toLowerCase()
    return name.includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.department?.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Staff Directory</h1>
          <p className="text-gray-500 mt-1">Manage employee profiles and information</p>
        </div>
        <Link
          href="/admin/hr/staff/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-xl hover:opacity-90 transition-opacity w-fit"
        >
          <Plus className="w-4 h-4" />
          Add Employee
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search staff..."
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
        ) : filteredStaff.length === 0 ? (
          <div className="text-center py-12">
            <Users className="w-12 h-12 mx-auto text-gray-500 mb-4" />
            <p className="text-gray-500">No employees found</p>
            <Link href="/admin/hr/staff/new" className="text-[#00D4FF] hover:underline mt-2 inline-block">
              Add your first employee
            </Link>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b border-white/5 bg-white/5">
                <th className="p-4 font-medium">Employee</th>
                <th className="p-4 font-medium">Position</th>
                <th className="p-4 font-medium">Department</th>
                <th className="p-4 font-medium">Contact</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredStaff.map((employee) => (
                <tr key={employee.id} className="hover:bg-white/5">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-500 rounded-full flex items-center justify-center text-white font-medium">
                        {employee.first_name?.[0]}{employee.last_name?.[0]}
                      </div>
                      <div>
                        <p className="font-medium">{employee.first_name} {employee.last_name}</p>
                        <p className="text-sm text-gray-500">{employee.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-400">{employee.position || 'N/A'}</td>
                  <td className="p-4 text-gray-400">{employee.department || 'N/A'}</td>
                  <td className="p-4 text-gray-400">{employee.phone || 'N/A'}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      employee.status === 'active' ? 'bg-green-500/10 text-green-500' : 
                      employee.status === 'on_leave' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-gray-500/10 text-gray-500'
                    }`}>
                      {employee.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Link href={`/admin/hr/staff/${employee.id}`} className="text-sm text-[#00D4FF] hover:underline">View</Link>
                      <button onClick={() => handleDelete(employee.id)} className="text-sm text-red-500 hover:underline">Delete</button>
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
