'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Ticket, Plus, Search, Clock, User, AlertCircle, Loader2, Trash2 } from 'lucide-react'

interface SupportTicket {
  id: string
  ticket_number: string
  subject: string
  client_id?: string
  clients?: { company_name: string }
  priority: string
  assigned_to?: string
  status: string
  created_at: string
}

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
    case 'resolved': case 'closed': return 'bg-green-500/10 text-green-500'
    case 'in_progress': return 'bg-blue-500/10 text-blue-500'
    case 'open': return 'bg-yellow-500/10 text-yellow-500'
    default: return 'bg-gray-500/10 text-gray-500'
  }
}

export default function TicketsPage() {
  const [tickets, setTickets] = useState<SupportTicket[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchTickets()
  }, [])

  const fetchTickets = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/tickets')
      const result = await response.json()
      if (result.data) setTickets(result.data)
    } catch (error) {
      console.error('Error fetching tickets:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this ticket?')) return
    try {
      const response = await fetch(`/api/admin/tickets/${id}`, { method: 'DELETE' })
      if (response.ok) setTickets(tickets.filter(t => t.id !== id))
    } catch (error) {
      console.error('Error deleting ticket:', error)
    }
  }

  const filteredTickets = tickets.filter(ticket =>
    ticket.ticket_number?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.subject?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.clients?.company_name?.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#005CFF]" />
          </div>
        ) : filteredTickets.length === 0 ? (
          <div className="text-center py-12">
            <Ticket className="w-12 h-12 mx-auto text-gray-500 mb-4" />
            <p className="text-gray-500">No tickets found</p>
            <Link href="/admin/projects/tickets/new" className="text-[#00D4FF] hover:underline mt-2 inline-block">
              Create your first ticket
            </Link>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b border-white/5 bg-white/5">
                <th className="p-4 font-medium">Ticket</th>
                <th className="p-4 font-medium">Client</th>
                <th className="p-4 font-medium">Priority</th>
                <th className="p-4 font-medium">Created</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-white/5">
                  <td className="p-4">
                    <div>
                      <span className="text-[#00D4FF] font-medium">{ticket.ticket_number}</span>
                      <p className="text-sm text-gray-400 mt-1">{ticket.subject}</p>
                    </div>
                  </td>
                  <td className="p-4 text-gray-400">{ticket.clients?.company_name || 'N/A'}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="p-4 text-gray-400">{new Date(ticket.created_at).toLocaleDateString()}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                      {ticket.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Link href={`/admin/projects/tickets/${ticket.id}`} className="text-sm text-[#00D4FF] hover:underline">View</Link>
                      <button onClick={() => handleDelete(ticket.id)} className="text-sm text-red-500 hover:underline">Delete</button>
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
