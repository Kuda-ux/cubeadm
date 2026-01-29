'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Ticket, Plus, Search, Clock, User, AlertCircle } from 'lucide-react'

const tickets = [
  { id: 'TKT-001', title: 'Login issue on mobile', client: 'ZimBank Ltd', priority: 'high', assignee: 'David Zimuto', created: '2026-01-29', status: 'open' },
  { id: 'TKT-002', title: 'Payment gateway timeout', client: 'Econet Wireless', priority: 'critical', assignee: 'Michael Ndlovu', created: '2026-01-28', status: 'in_progress' },
  { id: 'TKT-003', title: 'Report export not working', client: 'Ministry of Health', priority: 'medium', assignee: 'Grace Mutasa', created: '2026-01-27', status: 'open' },
  { id: 'TKT-004', title: 'Dashboard loading slow', client: 'TelOne', priority: 'low', assignee: 'John Mutasa', created: '2026-01-26', status: 'resolved' },
  { id: 'TKT-005', title: 'Email notifications failing', client: 'EcoBank Zimbabwe', priority: 'high', assignee: 'Sarah Chikwanha', created: '2026-01-25', status: 'in_progress' },
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'critical': return 'bg-red-600/10 text-red-500'
    case 'high': return 'bg-red-500/10 text-red-400'
    case 'medium': return 'bg-yellow-500/10 text-yellow-500'
    case 'low': return 'bg-green-500/10 text-green-500'
    default: return 'bg-gray-500/10 text-gray-500'
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'resolved': return 'bg-green-500/10 text-green-500'
    case 'in_progress': return 'bg-blue-500/10 text-blue-500'
    case 'open': return 'bg-yellow-500/10 text-yellow-500'
    default: return 'bg-gray-500/10 text-gray-500'
  }
}

export default function TicketsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Support Tickets</h1>
          <p className="text-gray-500 mt-1">Manage client support requests</p>
        </div>
        <Link
          href="/admin/projects/tickets/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:opacity-90 transition-opacity w-fit"
        >
          <Plus className="w-4 h-4" />
          New Ticket
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search tickets..."
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
              <th className="p-4 font-medium">Ticket</th>
              <th className="p-4 font-medium">Client</th>
              <th className="p-4 font-medium">Priority</th>
              <th className="p-4 font-medium">Assignee</th>
              <th className="p-4 font-medium">Created</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-white/5">
                <td className="p-4">
                  <div>
                    <span className="text-[#00D4FF] font-medium">{ticket.id}</span>
                    <p className="text-sm text-gray-400 mt-1">{ticket.title}</p>
                  </div>
                </td>
                <td className="p-4 text-gray-400">{ticket.client}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="p-4">
                  <span className="flex items-center gap-2 text-gray-400">
                    <User className="w-4 h-4" />
                    {ticket.assignee}
                  </span>
                </td>
                <td className="p-4 text-gray-400">{ticket.created}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                    {ticket.status.replace('_', ' ')}
                  </span>
                </td>
                <td className="p-4">
                  <Link href={`/admin/projects/tickets/${ticket.id}`} className="text-sm text-[#00D4FF] hover:underline">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
