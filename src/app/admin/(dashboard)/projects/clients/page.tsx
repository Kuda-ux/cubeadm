'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Building2, Plus, Search, Mail, Phone, MapPin, Globe, Loader2, Trash2 } from 'lucide-react'

interface Client {
  id: string
  company_name: string
  contact_person?: string
  email?: string
  phone?: string
  industry?: string
  status: string
  created_at: string
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/clients')
      const result = await response.json()
      if (result.data) setClients(result.data)
    } catch (error) {
      console.error('Error fetching clients:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this client?')) return
    try {
      const response = await fetch(`/api/admin/clients/${id}`, { method: 'DELETE' })
      if (response.ok) setClients(clients.filter(c => c.id !== id))
    } catch (error) {
      console.error('Error deleting client:', error)
    }
  }

  const filteredClients = clients.filter(client =>
    client.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.contact_person?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Clients</h1>
          <p className="text-gray-500 mt-1">Manage project clients and contacts</p>
        </div>
        <Link
          href="/admin/projects/clients/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:opacity-90 transition-opacity w-fit"
        >
          <Plus className="w-4 h-4" />
          Add Client
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search clients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-[#005CFF]" />
        </div>
      ) : filteredClients.length === 0 ? (
        <div className="text-center py-12 bg-white/5 rounded-2xl">
          <Building2 className="w-12 h-12 mx-auto text-gray-500 mb-4" />
          <p className="text-gray-500">No clients found</p>
          <Link href="/admin/projects/clients/new" className="text-[#00D4FF] hover:underline mt-2 inline-block">
            Add your first client
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client) => (
            <div key={client.id} className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  client.status === 'active' ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-500'
                }`}>
                  {client.status}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-1">{client.company_name}</h3>
              <p className="text-sm text-gray-500 mb-4">{client.contact_person || 'No contact'}</p>
              <div className="space-y-2 mb-4 text-sm">
                {client.email && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <Mail className="w-4 h-4" />
                    {client.email}
                  </div>
                )}
                {client.phone && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <Phone className="w-4 h-4" />
                    {client.phone}
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-sm text-gray-500">{client.industry || 'N/A'}</span>
                <div className="flex items-center gap-2">
                  <Link href={`/admin/projects/clients/${client.id}`} className="text-sm text-[#00D4FF] hover:underline">View</Link>
                  <button onClick={() => handleDelete(client.id)} className="text-sm text-red-500 hover:underline">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
