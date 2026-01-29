'use client'

import { useState } from 'react'
import Link from 'next/link'
import { UserPlus, Plus, Search, Mail, Phone, Building2 } from 'lucide-react'

const leads = [
  { id: 1, name: 'Sarah Chikwanha', email: 'sarah.c@techcorp.co.zw', company: 'TechCorp Ltd', interest: 'Cloud Training', source: 'Website', status: 'new', score: 85 },
  { id: 2, name: 'Michael Ndlovu', email: 'm.ndlovu@zimbank.co.zw', company: 'ZimBank', interest: 'IT Solutions', source: 'Referral', status: 'contacted', score: 72 },
  { id: 3, name: 'Grace Mutasa', email: 'grace@econet.co.zw', company: 'Econet Wireless', interest: 'Cybersecurity', source: 'LinkedIn', status: 'qualified', score: 90 },
  { id: 4, name: 'David Zimuto', email: 'd.zimuto@ministry.gov.zw', company: 'Ministry of ICT', interest: 'Managed IT', source: 'Website', status: 'proposal', score: 95 },
  { id: 5, name: 'Tendai Maposa', email: 't.maposa@telone.co.zw', company: 'TelOne', interest: 'CCNA Training', source: 'WhatsApp', status: 'new', score: 68 },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'new': return 'bg-blue-500/10 text-blue-500'
    case 'contacted': return 'bg-indigo-500/10 text-indigo-500'
    case 'qualified': return 'bg-purple-500/10 text-purple-500'
    case 'proposal': return 'bg-pink-500/10 text-pink-500'
    case 'won': return 'bg-green-500/10 text-green-500'
    default: return 'bg-gray-500/10 text-gray-500'
  }
}

export default function LeadsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Leads</h1>
          <p className="text-gray-500 mt-1">Manage and track sales leads</p>
        </div>
        <Link
          href="/admin/crm/leads/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:opacity-90 transition-opacity w-fit"
        >
          <Plus className="w-4 h-4" />
          Add Lead
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search leads..."
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
              <th className="p-4 font-medium">Lead</th>
              <th className="p-4 font-medium">Company</th>
              <th className="p-4 font-medium">Interest</th>
              <th className="p-4 font-medium">Source</th>
              <th className="p-4 font-medium">Score</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-white/5">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-medium">
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium">{lead.name}</p>
                      <p className="text-sm text-gray-500">{lead.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-gray-400">{lead.company}</td>
                <td className="p-4 text-gray-400">{lead.interest}</td>
                <td className="p-4 text-gray-400">{lead.source}</td>
                <td className="p-4">
                  <span className={`font-medium ${lead.score >= 80 ? 'text-green-500' : lead.score >= 60 ? 'text-yellow-500' : 'text-red-500'}`}>
                    {lead.score}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                </td>
                <td className="p-4">
                  <Link href={`/admin/crm/leads/${lead.id}`} className="text-sm text-[#00D4FF] hover:underline">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
