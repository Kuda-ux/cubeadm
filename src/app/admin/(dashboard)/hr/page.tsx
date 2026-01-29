'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  UserCog,
  Users,
  Calendar,
  Clock,
  DollarSign,
  Plus,
  Search,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  AlertCircle
} from 'lucide-react'

const stats = [
  { title: 'Total Staff', value: '24', change: '+2 this month', icon: Users, color: 'from-rose-500 to-red-500' },
  { title: 'Present Today', value: '21', change: '87.5% attendance', icon: CheckCircle2, color: 'from-green-500 to-emerald-500' },
  { title: 'On Leave', value: '2', change: '1 pending approval', icon: Calendar, color: 'from-yellow-500 to-orange-500' },
  { title: 'Payroll Due', value: '$42,500', change: 'Due in 5 days', icon: DollarSign, color: 'from-blue-500 to-indigo-500' },
]

const staffMembers = [
  { id: 1, name: 'John Mutasa', position: 'CEO & Founder', department: 'Management', status: 'present', email: 'john@cubeadm.co.zw' },
  { id: 2, name: 'Sarah Chikwanha', position: 'Head of Training', department: 'Training', status: 'present', email: 'sarah@cubeadm.co.zw' },
  { id: 3, name: 'Michael Ndlovu', position: 'CTO', department: 'IT', status: 'present', email: 'michael@cubeadm.co.zw' },
  { id: 4, name: 'Grace Moyo', position: 'Operations Director', department: 'Operations', status: 'leave', email: 'grace@cubeadm.co.zw' },
  { id: 5, name: 'David Zimuto', position: 'Senior Developer', department: 'IT', status: 'present', email: 'david@cubeadm.co.zw' },
  { id: 6, name: 'Tendai Maposa', position: 'Sales Manager', department: 'Sales', status: 'present', email: 'tendai@cubeadm.co.zw' },
]

const pendingLeaveRequests = [
  { id: 1, employee: 'Rumbidzai Choto', type: 'Annual Leave', days: 5, startDate: '2026-02-03', status: 'pending' },
  { id: 2, employee: 'Tatenda Moyo', type: 'Sick Leave', days: 2, startDate: '2026-01-30', status: 'pending' },
]

const recentAttendance = [
  { date: '2026-01-29', present: 21, absent: 1, leave: 2 },
  { date: '2026-01-28', present: 22, absent: 0, leave: 2 },
  { date: '2026-01-27', present: 20, absent: 2, leave: 2 },
  { date: '2026-01-26', present: 23, absent: 1, leave: 0 },
  { date: '2026-01-25', present: 24, absent: 0, leave: 0 },
]

const departments = [
  { name: 'IT', count: 8, color: 'bg-blue-500' },
  { name: 'Training', count: 6, color: 'bg-purple-500' },
  { name: 'Sales', count: 4, color: 'bg-green-500' },
  { name: 'Operations', count: 3, color: 'bg-orange-500' },
  { name: 'Management', count: 3, color: 'bg-red-500' },
]

export default function HRPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-500 rounded-xl flex items-center justify-center">
              <UserCog className="w-6 h-6 text-white" />
            </div>
            HR & Staff Management
          </h1>
          <p className="text-gray-500 mt-1">Manage employees, attendance, and payroll</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/hr/staff/new"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-xl hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            Add Employee
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
              <ArrowUpRight className="w-4 h-4 text-green-500" />
            </div>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Staff List */}
        <div className="lg:col-span-2 bg-white/5 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Staff Directory</h2>
            <Link href="/admin/hr/staff" className="text-sm text-[#00D4FF] hover:underline">
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b border-white/5">
                  <th className="pb-3 font-medium">Employee</th>
                  <th className="pb-3 font-medium">Position</th>
                  <th className="pb-3 font-medium">Department</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {staffMembers.map((staff) => (
                  <tr key={staff.id} className="hover:bg-white/5">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-500 rounded-full flex items-center justify-center text-white font-medium">
                          {staff.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium">{staff.name}</p>
                          <p className="text-sm text-gray-500">{staff.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-gray-400">{staff.position}</td>
                    <td className="py-3 text-gray-400">{staff.department}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        staff.status === 'present'
                          ? 'bg-green-500/10 text-green-500'
                          : staff.status === 'leave'
                            ? 'bg-yellow-500/10 text-yellow-500'
                            : 'bg-red-500/10 text-red-500'
                      }`}>
                        {staff.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Pending Leave Requests */}
          <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Leave Requests</h2>
              <Link href="/admin/hr/leave" className="text-sm text-[#00D4FF] hover:underline">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {pendingLeaveRequests.map((request) => (
                <div key={request.id} className="p-4 bg-white/5 rounded-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{request.employee}</p>
                      <p className="text-sm text-gray-500">{request.type}</p>
                    </div>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-500/10 text-yellow-500">
                      Pending
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span>{request.days} days</span>
                    <span>From: {request.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <button className="flex-1 py-1.5 text-sm bg-green-500/10 text-green-500 hover:bg-green-500/20 rounded-lg transition-colors">
                      Approve
                    </button>
                    <button className="flex-1 py-1.5 text-sm bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-lg transition-colors">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Departments */}
          <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-6">Departments</h2>
            <div className="space-y-3">
              {departments.map((dept) => (
                <div key={dept.name} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 ${dept.color} rounded-full`} />
                    <span>{dept.name}</span>
                  </div>
                  <span className="text-gray-500">{dept.count} staff</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Overview */}
      <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Attendance Overview (Last 5 Days)</h2>
          <Link href="/admin/hr/attendance" className="text-sm text-[#00D4FF] hover:underline">
            View Full Report
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {recentAttendance.map((day) => (
            <div key={day.date} className="p-4 bg-white/5 rounded-xl text-center">
              <p className="text-sm text-gray-500 mb-2">{day.date}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-500">Present</span>
                  <span className="font-medium">{day.present}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-red-500">Absent</span>
                  <span className="font-medium">{day.absent}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-yellow-500">Leave</span>
                  <span className="font-medium">{day.leave}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: 'Staff', href: '/admin/hr/staff', icon: Users, count: 24 },
          { name: 'Attendance', href: '/admin/hr/attendance', icon: Clock, count: 'Today' },
          { name: 'Payroll', href: '/admin/hr/payroll', icon: DollarSign, count: '$42.5K' },
          { name: 'Leave', href: '/admin/hr/leave', icon: Calendar, count: '2 pending' },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-colors"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500/20 to-red-500/20 rounded-lg flex items-center justify-center">
              <link.icon className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <p className="font-medium">{link.name}</p>
              <p className="text-sm text-gray-500">{link.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
