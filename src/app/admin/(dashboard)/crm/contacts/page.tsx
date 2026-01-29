'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Users, Plus, Search, Mail, Phone, Building2 } from 'lucide-react'

const contacts = [
  { id: 1, name: 'John Moyo', email: 'john@zimbank.co.zw', phone: '+263 77 123 4567', company: 'ZimBank Ltd', role: 'IT Manager', type: 'client' },
  { id: 2, name: 'Sarah Chikwanha', email: 'sarah@ecobank.co.zw', phone: '+263 78 234 5678', company: 'EcoBank Zimbabwe', role: 'CTO', type: 'client' },
  { id: 3, name: 'Michael Ndlovu', email: 'm.ndlovu@moh.gov.zw', phone: '+263 71 345 6789', company: 'Ministry of Health', role: 'Director', type: 'client' },
  { id: 4, name: 'Grace Mutasa', email: 'grace@telone.co.zw', phone: '+263 77 456 7890', company: 'TelOne', role: 'Procurement', type: 'client' },
  { id: 5, name: 'David Zimuto', email: 'd.zimuto@econet.co.zw', phone: '+263 78 567 8901', company: 'Econet Wireless', role: 'IT Director', type: 'client' },
]

export default function ContactsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Contacts</h1>
          <p className="text-gray-500 mt-1">Manage client and business contacts</p>
        </div>
        <Link
          href="/admin/crm/contacts/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:opacity-90 transition-opacity w-fit"
        >
          <Plus className="w-4 h-4" />
          Add Contact
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-medium">
                {contact.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-semibold">{contact.name}</h3>
                <p className="text-sm text-gray-500">{contact.role}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Building2 className="w-4 h-4" />
                {contact.company}
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                {contact.email}
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                {contact.phone}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
              <Link href={`/admin/crm/contacts/${contact.id}`} className="flex-1 py-2 text-center text-sm bg-white/5 hover:bg-white/10 rounded-lg">View</Link>
              <Link href={`/admin/crm/contacts/${contact.id}/edit`} className="flex-1 py-2 text-center text-sm bg-white/5 hover:bg-white/10 rounded-lg">Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
