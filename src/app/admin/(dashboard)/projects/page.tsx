'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Code2,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Clock,
  Users,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Calendar,
  DollarSign
} from 'lucide-react'

const stats = [
  { title: 'Active Projects', value: '18', change: '+3 this month', icon: Code2, color: 'from-green-500 to-emerald-500' },
  { title: 'In Progress', value: '12', change: '67% of active', icon: Clock, color: 'from-blue-500 to-indigo-500' },
  { title: 'Completed', value: '45', change: '+8 this month', icon: CheckCircle2, color: 'from-purple-500 to-pink-500' },
  { title: 'Total Revenue', value: '$125K', change: '+15% vs last month', icon: DollarSign, color: 'from-emerald-500 to-teal-500' },
]

const projects = [
  {
    id: 1,
    name: 'ZimBank Portal Redesign',
    client: 'ZimBank Ltd',
    status: 'in_progress',
    priority: 'high',
    progress: 75,
    deadline: '2026-02-15',
    budget: '$45,000',
    team: ['JM', 'SC', 'MN'],
    technologies: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    id: 2,
    name: 'EcoBank Mobile App',
    client: 'EcoBank Zimbabwe',
    status: 'in_progress',
    priority: 'high',
    progress: 45,
    deadline: '2026-03-01',
    budget: '$65,000',
    team: ['DZ', 'GM', 'TM'],
    technologies: ['React Native', 'Firebase', 'Node.js']
  },
  {
    id: 3,
    name: 'Ministry of Health System',
    client: 'Ministry of Health',
    status: 'planning',
    priority: 'medium',
    progress: 15,
    deadline: '2026-04-30',
    budget: '$120,000',
    team: ['JM', 'MN'],
    technologies: ['Next.js', 'Python', 'AWS']
  },
  {
    id: 4,
    name: 'TelOne CRM Integration',
    client: 'TelOne',
    status: 'in_progress',
    priority: 'medium',
    progress: 60,
    deadline: '2026-02-28',
    budget: '$35,000',
    team: ['SC', 'GM'],
    technologies: ['Salesforce', 'Node.js', 'REST API']
  },
  {
    id: 5,
    name: 'Econet E-commerce Platform',
    client: 'Econet Wireless',
    status: 'review',
    priority: 'high',
    progress: 90,
    deadline: '2026-02-05',
    budget: '$85,000',
    team: ['JM', 'DZ', 'TM', 'MN'],
    technologies: ['Next.js', 'Stripe', 'PostgreSQL']
  },
  {
    id: 6,
    name: 'ZIMRA Tax Portal',
    client: 'ZIMRA',
    status: 'completed',
    priority: 'high',
    progress: 100,
    deadline: '2026-01-20',
    budget: '$95,000',
    team: ['SC', 'GM', 'MN'],
    technologies: ['Angular', '.NET', 'SQL Server']
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-green-500/10 text-green-500'
    case 'in_progress': return 'bg-blue-500/10 text-blue-500'
    case 'review': return 'bg-purple-500/10 text-purple-500'
    case 'planning': return 'bg-yellow-500/10 text-yellow-500'
    case 'on_hold': return 'bg-gray-500/10 text-gray-500'
    default: return 'bg-gray-500/10 text-gray-500'
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-red-500/10 text-red-500'
    case 'medium': return 'bg-yellow-500/10 text-yellow-500'
    case 'low': return 'bg-green-500/10 text-green-500'
    default: return 'bg-gray-500/10 text-gray-500'
  }
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            Projects
          </h1>
          <p className="text-gray-500 mt-1">Manage IT projects and client deliverables</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/projects/new"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            New Project
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

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
          />
        </div>
        <div className="flex items-center gap-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
          >
            <option value="all">All Status</option>
            <option value="planning">Planning</option>
            <option value="in_progress">In Progress</option>
            <option value="review">Review</option>
            <option value="completed">Completed</option>
            <option value="on_hold">On Hold</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/admin/projects/${project.id}`}
            className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 hover:border-white/10 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold group-hover:text-[#00D4FF] transition-colors">{project.name}</h3>
                <p className="text-sm text-gray-500">{project.client}</p>
              </div>
              <button className="p-1 hover:bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status.replace('_', ' ')}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                {project.priority}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-500">Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="px-2 py-0.5 bg-white/5 rounded text-xs text-gray-400">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-0.5 bg-white/5 rounded text-xs text-gray-400">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">{project.deadline}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-[#00D4FF]">{project.budget}</span>
              </div>
            </div>

            {/* Team */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex -space-x-2">
                {project.team.map((member, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-[#0a0a0f]"
                  >
                    {member}
                  </div>
                ))}
              </div>
              <Users className="w-4 h-4 text-gray-500" />
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: 'All Projects', href: '/admin/projects', count: 63 },
          { name: 'Clients', href: '/admin/projects/clients', count: 28 },
          { name: 'Tasks', href: '/admin/projects/tasks', count: 156 },
          { name: 'Support Tickets', href: '/admin/projects/tickets', count: 12 },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-colors"
          >
            <span className="font-medium">{link.name}</span>
            <span className="text-sm text-gray-500">{link.count}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
