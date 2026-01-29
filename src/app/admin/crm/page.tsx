'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Users,
  UserPlus,
  Mail,
  Phone,
  MessageSquare,
  TrendingUp,
  ArrowUpRight,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Calendar,
  Target,
  CheckCircle2
} from 'lucide-react'

const stats = [
  { title: 'Total Leads', value: '156', change: '+24 this month', icon: UserPlus, color: 'from-blue-500 to-indigo-500' },
  { title: 'Active Clients', value: '89', change: '+12 this month', icon: Users, color: 'from-purple-500 to-pink-500' },
  { title: 'Conversion Rate', value: '32%', change: '+5% vs last month', icon: Target, color: 'from-green-500 to-emerald-500' },
  { title: 'Pipeline Value', value: '$245K', change: '+18% growth', icon: TrendingUp, color: 'from-amber-500 to-orange-500' },
]

const recentLeads = [
  { id: 1, name: 'Sarah Chikwanha', email: 'sarah.c@techcorp.co.zw', company: 'TechCorp Ltd', interest: 'Cloud Training', source: 'Website', status: 'new', score: 85, date: '2026-01-29' },
  { id: 2, name: 'Michael Ndlovu', email: 'm.ndlovu@zimbank.co.zw', company: 'ZimBank', interest: 'IT Solutions', source: 'Referral', status: 'contacted', score: 72, date: '2026-01-28' },
  { id: 3, name: 'Grace Mutasa', email: 'grace@econet.co.zw', company: 'Econet Wireless', interest: 'Cybersecurity', source: 'LinkedIn', status: 'qualified', score: 90, date: '2026-01-27' },
  { id: 4, name: 'David Zimuto', email: 'd.zimuto@ministry.gov.zw', company: 'Ministry of ICT', interest: 'Managed IT', source: 'Website', status: 'proposal', score: 95, date: '2026-01-26' },
  { id: 5, name: 'Tendai Maposa', email: 't.maposa@telone.co.zw', company: 'TelOne', interest: 'CCNA Training', source: 'WhatsApp', status: 'new', score: 68, date: '2026-01-25' },
]

const pipelineStages = [
  { name: 'New', count: 24, value: '$48,000', color: 'bg-blue-500' },
  { name: 'Contacted', count: 18, value: '$36,000', color: 'bg-indigo-500' },
  { name: 'Qualified', count: 12, value: '$72,000', color: 'bg-purple-500' },
  { name: 'Proposal', count: 8, value: '$64,000', color: 'bg-pink-500' },
  { name: 'Negotiation', count: 5, value: '$25,000', color: 'bg-amber-500' },
]

const upcomingFollowUps = [
  { id: 1, lead: 'Grace Mutasa', company: 'Econet Wireless', type: 'Call', time: '10:00 AM', date: 'Today' },
  { id: 2, lead: 'David Zimuto', company: 'Ministry of ICT', type: 'Meeting', time: '2:00 PM', date: 'Today' },
  { id: 3, lead: 'Michael Ndlovu', company: 'ZimBank', type: 'Email', time: '9:00 AM', date: 'Tomorrow' },
  { id: 4, lead: 'Sarah Chikwanha', company: 'TechCorp Ltd', type: 'Demo', time: '11:00 AM', date: 'Tomorrow' },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'new': return 'bg-blue-500/10 text-blue-500'
    case 'contacted': return 'bg-indigo-500/10 text-indigo-500'
    case 'qualified': return 'bg-purple-500/10 text-purple-500'
    case 'proposal': return 'bg-pink-500/10 text-pink-500'
    case 'negotiation': return 'bg-amber-500/10 text-amber-500'
    case 'won': return 'bg-green-500/10 text-green-500'
    case 'lost': return 'bg-red-500/10 text-red-500'
    default: return 'bg-gray-500/10 text-gray-500'
  }
}

const getScoreColor = (score: number) => {
  if (score >= 80) return 'text-green-500'
  if (score >= 60) return 'text-yellow-500'
  return 'text-red-500'
}

export default function CRMPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            CRM
          </h1>
          <p className="text-gray-500 mt-1">Manage leads, clients, and sales pipeline</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/crm/leads/new"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            Add Lead
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

      {/* Pipeline */}
      <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Sales Pipeline</h2>
          <Link href="/admin/crm/pipeline" className="text-sm text-[#00D4FF] hover:underline">
            View Pipeline
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {pipelineStages.map((stage) => (
            <div key={stage.name} className="flex-1 min-w-[150px] p-4 bg-white/5 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-3 h-3 ${stage.color} rounded-full`} />
                <span className="font-medium">{stage.name}</span>
              </div>
              <p className="text-2xl font-bold">{stage.count}</p>
              <p className="text-sm text-gray-500">{stage.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Leads */}
        <div className="lg:col-span-2 bg-white/5 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Recent Leads</h2>
            <Link href="/admin/crm/leads" className="text-sm text-[#00D4FF] hover:underline">
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b border-white/5">
                  <th className="pb-3 font-medium">Lead</th>
                  <th className="pb-3 font-medium">Interest</th>
                  <th className="pb-3 font-medium">Source</th>
                  <th className="pb-3 font-medium">Score</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/5">
                    <td className="py-3">
                      <div>
                        <p className="font-medium">{lead.name}</p>
                        <p className="text-sm text-gray-500">{lead.company}</p>
                      </div>
                    </td>
                    <td className="py-3 text-gray-400">{lead.interest}</td>
                    <td className="py-3 text-gray-400">{lead.source}</td>
                    <td className="py-3">
                      <span className={`font-medium ${getScoreColor(lead.score)}`}>
                        {lead.score}
                      </span>
                    </td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Follow-ups */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Follow-ups</h2>
            <Calendar className="w-5 h-5 text-gray-500" />
          </div>
          <div className="space-y-4">
            {upcomingFollowUps.map((followUp) => (
              <div key={followUp.id} className="p-4 bg-white/5 rounded-xl">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">{followUp.lead}</p>
                    <p className="text-sm text-gray-500">{followUp.company}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    followUp.type === 'Call' ? 'bg-green-500/10 text-green-500' :
                    followUp.type === 'Meeting' ? 'bg-blue-500/10 text-blue-500' :
                    followUp.type === 'Email' ? 'bg-purple-500/10 text-purple-500' :
                    'bg-amber-500/10 text-amber-500'
                  }`}>
                    {followUp.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <span>{followUp.date}</span>
                  <span>•</span>
                  <span>{followUp.time}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-sm text-[#00D4FF] hover:bg-[#00D4FF]/10 rounded-lg transition-colors">
            View All Follow-ups
          </button>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: 'Leads', href: '/admin/crm/leads', icon: UserPlus, count: 156 },
          { name: 'Contacts', href: '/admin/crm/contacts', icon: Users, count: 89 },
          { name: 'Pipeline', href: '/admin/crm/pipeline', icon: Target, count: 67 },
          { name: 'Communications', href: '/admin/crm/communications', icon: MessageSquare, count: 234 },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-colors"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center">
              <link.icon className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="font-medium">{link.name}</p>
              <p className="text-sm text-gray-500">{link.count} total</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
