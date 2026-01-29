'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckSquare, Plus, Search, Clock, User, Flag } from 'lucide-react'

const tasks = [
  { id: 1, title: 'Complete API integration', project: 'ZimBank Portal', assignee: 'David Zimuto', priority: 'high', dueDate: '2026-02-01', status: 'in_progress' },
  { id: 2, title: 'Design user dashboard', project: 'EcoBank Mobile App', assignee: 'Grace Mutasa', priority: 'high', dueDate: '2026-02-03', status: 'in_progress' },
  { id: 3, title: 'Setup CI/CD pipeline', project: 'Ministry of Health System', assignee: 'Michael Ndlovu', priority: 'medium', dueDate: '2026-02-05', status: 'pending' },
  { id: 4, title: 'Database optimization', project: 'TelOne CRM', assignee: 'John Mutasa', priority: 'medium', dueDate: '2026-02-07', status: 'pending' },
  { id: 5, title: 'Security audit', project: 'Econet E-commerce', assignee: 'Sarah Chikwanha', priority: 'high', dueDate: '2026-02-02', status: 'completed' },
  { id: 6, title: 'Payment gateway testing', project: 'Econet E-commerce', assignee: 'Tendai Maposa', priority: 'high', dueDate: '2026-02-04', status: 'in_progress' },
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-red-500/10 text-red-500'
    case 'medium': return 'bg-yellow-500/10 text-yellow-500'
    case 'low': return 'bg-green-500/10 text-green-500'
    default: return 'bg-gray-500/10 text-gray-500'
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-green-500/10 text-green-500'
    case 'in_progress': return 'bg-blue-500/10 text-blue-500'
    case 'pending': return 'bg-gray-500/10 text-gray-500'
    default: return 'bg-gray-500/10 text-gray-500'
  }
}

export default function TasksPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Tasks</h1>
          <p className="text-gray-500 mt-1">Manage project tasks and assignments</p>
        </div>
        <Link
          href="/admin/projects/tasks/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:opacity-90 transition-opacity w-fit"
        >
          <Plus className="w-4 h-4" />
          Add Task
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search tasks..."
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
              <th className="p-4 font-medium">Task</th>
              <th className="p-4 font-medium">Project</th>
              <th className="p-4 font-medium">Assignee</th>
              <th className="p-4 font-medium">Priority</th>
              <th className="p-4 font-medium">Due Date</th>
              <th className="p-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-white/5">
                <td className="p-4">
                  <span className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-green-500" />
                    <span className="font-medium">{task.title}</span>
                  </span>
                </td>
                <td className="p-4 text-gray-400">{task.project}</td>
                <td className="p-4">
                  <span className="flex items-center gap-2 text-gray-400">
                    <User className="w-4 h-4" />
                    {task.assignee}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </td>
                <td className="p-4">
                  <span className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    {task.dueDate}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                    {task.status.replace('_', ' ')}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
