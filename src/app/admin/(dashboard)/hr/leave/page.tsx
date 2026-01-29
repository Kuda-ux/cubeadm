'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, Plus, Search, CheckCircle2, XCircle, Clock, Loader2 } from 'lucide-react'

interface LeaveRequest {
  id: string
  employee_id?: string
  employees?: { first_name: string; last_name: string }
  leave_type: string
  start_date: string
  end_date: string
  days: number
  reason?: string
  status: string
  created_at: string
}

export default function LeavePage() {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchLeaveRequests()
  }, [])

  const fetchLeaveRequests = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/leave')
      const result = await response.json()
      if (result.data) setLeaveRequests(result.data)
    } catch (error) {
      console.error('Error fetching leave requests:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusUpdate = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/admin/leave/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      })
      if (response.ok) fetchLeaveRequests()
    } catch (error) {
      console.error('Error updating leave status:', error)
    }
  }

  const filteredRequests = leaveRequests.filter(req => {
    const employeeName = `${req.employees?.first_name || ''} ${req.employees?.last_name || ''}`.toLowerCase()
    const matchesSearch = employeeName.includes(searchQuery.toLowerCase())
    const matchesFilter = filter === 'all' || req.status === filter
    return matchesSearch && matchesFilter
  })

  const pendingCount = leaveRequests.filter(r => r.status === 'pending').length
  const approvedCount = leaveRequests.filter(r => r.status === 'approved').length
  const rejectedCount = leaveRequests.filter(r => r.status === 'rejected').length

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Leave Management</h1>
          <p className="text-gray-500 mt-1">Manage employee leave requests</p>
        </div>
        <Link
          href="/admin/hr/leave/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-xl hover:opacity-90 transition-opacity w-fit"
        >
          <Plus className="w-4 h-4" />
          New Request
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Pending</p>
              <p className="text-2xl font-bold">{pendingCount}</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Approved</p>
              <p className="text-2xl font-bold">{approvedCount}</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Rejected</p>
              <p className="text-2xl font-bold">{rejectedCount}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search by employee..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
          />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#005CFF]" />
          </div>
        ) : filteredRequests.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 mx-auto text-gray-500 mb-4" />
            <p className="text-gray-500">No leave requests found</p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b border-white/5 bg-white/5">
                <th className="p-4 font-medium">Employee</th>
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium">Duration</th>
                <th className="p-4 font-medium">Days</th>
                <th className="p-4 font-medium">Reason</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredRequests.map((request) => (
                <tr key={request.id} className="hover:bg-white/5">
                  <td className="p-4 font-medium">{request.employees?.first_name} {request.employees?.last_name}</td>
                  <td className="p-4 text-gray-400">{request.leave_type}</td>
                  <td className="p-4 text-gray-400">{request.start_date} - {request.end_date}</td>
                  <td className="p-4 text-gray-400">{request.days}</td>
                  <td className="p-4 text-gray-400">{request.reason || 'N/A'}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      request.status === 'approved' ? 'bg-green-500/10 text-green-500' :
                      request.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-red-500/10 text-red-500'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {request.status === 'pending' && (
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleStatusUpdate(request.id, 'approved')} className="text-sm text-green-500 hover:underline">Approve</button>
                        <button onClick={() => handleStatusUpdate(request.id, 'rejected')} className="text-sm text-red-500 hover:underline">Reject</button>
                      </div>
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
