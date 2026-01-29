'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Building2, Plus, Search, Mail, Phone, MapPin, Globe } from 'lucide-react'

const clients = [
  { id: 1, name: 'ZimBank Ltd', contact: 'John Moyo', email: 'john@zimbank.co.zw', phone: '+263 77 123 4567', projects: 3, status: 'active' },
  { id: 2, name: 'EcoBank Zimbabwe', contact: 'Sarah Chikwanha', email: 'sarah@ecobank.co.zw', phone: '+263 78 234 5678', projects: 2, status: 'active' },
  { id: 3, name: 'Ministry of Health', contact: 'Michael Ndlovu', email: 'm.ndlovu@moh.gov.zw', phone: '+263 71 345 6789', projects: 1, status: 'active' },
  { id: 4, name: 'TelOne', contact: 'Grace Mutasa', email: 'grace@telone.co.zw', phone: '+263 77 456 7890', projects: 2, status: 'active' },
  { id: 5, name: 'Econet Wireless', contact: 'David Zimuto', email: 'd.zimuto@econet.co.zw', phone: '+263 78 567 8901', projects: 4, status: 'active' },
  { id: 6, name: 'ZIMRA', contact: 'Tendai Maposa', email: 't.maposa@zimra.co.zw', phone: '+263 71 678 9012', projects: 1, status: 'completed' },
]

export default function ClientsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.contact.toLowerCase().includes(searchQuery.toLowerCase())
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
            <h3 className="font-semibold text-lg mb-1">{client.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{client.contact}</p>
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                {client.email}
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                {client.phone}
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <span className="text-sm text-gray-500">{client.projects} projects</span>
              <Link href={`/admin/projects/clients/${client.id}`} className="text-sm text-[#00D4FF] hover:underline">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
