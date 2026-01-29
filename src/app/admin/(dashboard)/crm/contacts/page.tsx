'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Users, Plus, Search, Mail, Phone, Building2, Loader2 } from 'lucide-react'

interface Contact {
  id: string
  name: string
  email?: string
  phone?: string
  company?: string
  role?: string
  contact_type?: string
  created_at: string
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/contacts')
      const result = await response.json()
      if (result.data) setContacts(result.data)
    } catch (error) {
      console.error('Error fetching contacts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return
    try {
      const response = await fetch(`/api/admin/contacts/${id}`, { method: 'DELETE' })
      if (response.ok) setContacts(contacts.filter(c => c.id !== id))
    } catch (error) {
      console.error('Error deleting contact:', error)
    }
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email?.toLowerCase().includes(searchQuery.toLowerCase())
  )

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

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-[#005CFF]" />
        </div>
      ) : filteredContacts.length === 0 ? (
        <div className="text-center py-12 bg-white/5 border border-white/5 rounded-2xl">
          <Users className="w-12 h-12 mx-auto text-gray-500 mb-4" />
          <p className="text-gray-500">No contacts found</p>
          <Link href="/admin/crm/contacts/new" className="text-[#00D4FF] hover:underline mt-2 inline-block">
            Add your first contact
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContacts.map((contact) => (
            <div key={contact.id} className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-medium">
                  {contact.name?.split(' ').map(n => n[0]).join('') || '?'}
                </div>
                <div>
                  <h3 className="font-semibold">{contact.name}</h3>
                  <p className="text-sm text-gray-500">{contact.role || 'No role'}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Building2 className="w-4 h-4" />
                  {contact.company || 'No company'}
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  {contact.email || 'No email'}
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  {contact.phone || 'No phone'}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
                <Link href={`/admin/crm/contacts/${contact.id}`} className="flex-1 py-2 text-center text-sm bg-white/5 hover:bg-white/10 rounded-lg">View</Link>
                <button onClick={() => handleDelete(contact.id)} className="flex-1 py-2 text-center text-sm bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
