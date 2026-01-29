'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Users, Plus, Search, Mail, Phone, Edit, Trash2 } from 'lucide-react'

const staff = [
  { id: 1, name: 'John Mutasa', email: 'john@cubeadm.co.zw', phone: '+263 77 123 4567', position: 'CEO & Founder', department: 'Management', status: 'active' },
  { id: 2, name: 'Sarah Chikwanha', email: 'sarah@cubeadm.co.zw', phone: '+263 78 234 5678', position: 'Head of Training', department: 'Training', status: 'active' },
  { id: 3, name: 'Michael Ndlovu', email: 'michael@cubeadm.co.zw', phone: '+263 71 345 6789', position: 'CTO', department: 'IT', status: 'active' },
  { id: 4, name: 'Grace Moyo', email: 'grace@cubeadm.co.zw', phone: '+263 77 456 7890', position: 'Operations Director', department: 'Operations', status: 'leave' },
  { id: 5, name: 'David Zimuto', email: 'david@cubeadm.co.zw', phone: '+263 78 567 8901', position: 'Senior Developer', department: 'IT', status: 'active' },
  { id: 6, name: 'Tendai Maposa', email: 'tendai@cubeadm.co.zw', phone: '+263 71 678 9012', position: 'Sales Manager', department: 'Sales', status: 'active' },
]

export default function StaffPage() {
  const [searchQuery, setSearchQuery] = useState('')

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
            {staff.map((employee) => (
              <tr key={employee.id} className="hover:bg-white/5">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-500 rounded-full flex items-center justify-center text-white font-medium">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium">{employee.name}</p>
                      <p className="text-sm text-gray-500">{employee.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-gray-400">{employee.position}</td>
                <td className="p-4 text-gray-400">{employee.department}</td>
                <td className="p-4 text-gray-400">{employee.phone}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    employee.status === 'active' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    {employee.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/hr/staff/${employee.id}`} className="text-sm text-[#00D4FF] hover:underline">View</Link>
                    <Link href={`/admin/hr/staff/${employee.id}/edit`} className="p-2 hover:bg-white/10 rounded-lg"><Edit className="w-4 h-4 text-gray-400" /></Link>
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
