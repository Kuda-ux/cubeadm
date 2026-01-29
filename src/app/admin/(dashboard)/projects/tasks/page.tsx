'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CheckSquare, Plus, Search, Clock, User, Flag, Loader2, Trash2 } from 'lucide-react'

interface Task {
  id: string
  title: string
  project_id?: string
  projects?: { name: string }
  assigned_to?: string
  priority: string
  due_date?: string
  status: string
  created_at: string
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'critical': return 'bg-purple-500/10 text-purple-500'
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
    case 'review': return 'bg-purple-500/10 text-purple-500'
    case 'todo': case 'pending': return 'bg-gray-500/10 text-gray-500'
    default: return 'bg-gray-500/10 text-gray-500'
  }
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/tasks')
      const result = await response.json()
      if (result.data) setTasks(result.data)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this task?')) return
    try {
      const response = await fetch(`/api/admin/tasks/${id}`, { method: 'DELETE' })
      if (response.ok) setTasks(tasks.filter(t => t.id !== id))
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.projects?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#005CFF]" />
          </div>
        ) : filteredTasks.length === 0 ? (
          <div className="text-center py-12">
            <CheckSquare className="w-12 h-12 mx-auto text-gray-500 mb-4" />
            <p className="text-gray-500">No tasks found</p>
            <Link href="/admin/projects/tasks/new" className="text-[#00D4FF] hover:underline mt-2 inline-block">
              Create your first task
            </Link>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b border-white/5 bg-white/5">
                <th className="p-4 font-medium">Task</th>
                <th className="p-4 font-medium">Project</th>
                <th className="p-4 font-medium">Priority</th>
                <th className="p-4 font-medium">Due Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredTasks.map((task) => (
                <tr key={task.id} className="hover:bg-white/5">
                  <td className="p-4">
                    <span className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-green-500" />
                      <span className="font-medium">{task.title}</span>
                    </span>
                  </td>
                  <td className="p-4 text-gray-400">{task.projects?.name || 'N/A'}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      {task.due_date || 'No due date'}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                      {task.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Link href={`/admin/projects/tasks/${task.id}`} className="text-sm text-[#00D4FF] hover:underline">View</Link>
                      <button onClick={() => handleDelete(task.id)} className="text-sm text-red-500 hover:underline">Delete</button>
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
