'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Users,
  Plus,
  Search,
  Filter,
  Download,
  MoreHorizontal,
  Mail,
  Phone,
  Edit,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  Loader2
} from 'lucide-react'

interface Student {
  id: string
  student_number: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  status: string
  created_at: string
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedStudents, setSelectedStudents] = useState<string[]>([])
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    fetchStudents()
  }, [statusFilter])

  const fetchStudents = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (statusFilter !== 'all') params.append('status', statusFilter)
      if (searchQuery) params.append('search', searchQuery)
      
      const response = await fetch(`/api/admin/students?${params}`)
      const result = await response.json()
      
      if (result.data) {
        setStudents(result.data)
        setTotalCount(result.count || result.data.length)
      }
    } catch (error) {
      console.error('Error fetching students:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    fetchStudents()
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this student?')) return
    
    try {
      const response = await fetch(`/api/admin/students/${id}`, { method: 'DELETE' })
      if (response.ok) {
        setStudents(students.filter(s => s.id !== id))
        setSelectedStudents(selectedStudents.filter(s => s !== id))
      }
    } catch (error) {
      console.error('Error deleting student:', error)
    }
  }

  const filteredStudents = students.filter(student => {
    const fullName = `${student.first_name} ${student.last_name}`.toLowerCase()
    const matchesSearch = fullName.includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.student_number?.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  const toggleSelectAll = () => {
    if (selectedStudents.length === filteredStudents.length) {
      setSelectedStudents([])
    } else {
      setSelectedStudents(filteredStudents.map(s => s.id))
    }
  }

  const toggleSelect = (id: string) => {
    if (selectedStudents.includes(id)) {
      setSelectedStudents(selectedStudents.filter(s => s !== id))
    } else {
      setSelectedStudents([...selectedStudents, id])
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Students</h1>
          <p className="text-gray-500 mt-1">Manage student registrations and profiles</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <Link
            href="/admin/training/students/new"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            Add Student
          </Link>
        </div>
      </div>

      {/* Filters */}
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search students..."
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
            <option value="active">Active</option>
            <option value="graduated">Graduated</option>
            <option value="inactive">Inactive</option>
            <option value="suspended">Suspended</option>
          </select>
          <button type="submit" className="flex items-center gap-2 px-4 py-2.5 bg-[#005CFF] rounded-xl hover:bg-[#005CFF]/80 transition-colors">
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>
      </form>

      {/* Bulk Actions */}
      {selectedStudents.length > 0 && (
        <div className="flex items-center gap-4 p-4 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-xl">
          <span className="text-sm">{selectedStudents.length} selected</span>
          <button className="text-sm text-[#00D4FF] hover:underline">Send Email</button>
          <button className="text-sm text-[#00D4FF] hover:underline">Export Selected</button>
          <button className="text-sm text-red-500 hover:underline">Delete Selected</button>
        </div>
      )}

      {/* Table */}
      <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#005CFF]" />
          </div>
        ) : filteredStudents.length === 0 ? (
          <div className="text-center py-12">
            <Users className="w-12 h-12 mx-auto text-gray-500 mb-4" />
            <p className="text-gray-500">No students found</p>
            <Link href="/admin/training/students/new" className="text-[#00D4FF] hover:underline mt-2 inline-block">
              Add your first student
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b border-white/5 bg-white/5">
                  <th className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedStudents.length === filteredStudents.length && filteredStudents.length > 0}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 rounded border-gray-600 bg-transparent text-[#005CFF] focus:ring-[#005CFF]"
                    />
                  </th>
                  <th className="p-4 font-medium">Student</th>
                  <th className="p-4 font-medium">Contact</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Enrolled</th>
                  <th className="p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedStudents.includes(student.id)}
                        onChange={() => toggleSelect(student.id)}
                        className="w-4 h-4 rounded border-gray-600 bg-transparent text-[#005CFF] focus:ring-[#005CFF]"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-medium">
                          {student.first_name?.[0]}{student.last_name?.[0]}
                        </div>
                        <div>
                          <p className="font-medium">{student.first_name} {student.last_name}</p>
                          <p className="text-sm text-gray-500">{student.student_number}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1">
                        <p className="text-sm flex items-center gap-2">
                          <Mail className="w-3 h-3 text-gray-500" />
                          {student.email}
                        </p>
                        {student.phone && (
                          <p className="text-sm flex items-center gap-2 text-gray-500">
                            <Phone className="w-3 h-3" />
                            {student.phone}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        student.status === 'active'
                          ? 'bg-green-500/10 text-green-500'
                          : student.status === 'graduated'
                            ? 'bg-blue-500/10 text-blue-500'
                            : 'bg-gray-500/10 text-gray-500'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400">
                      {new Date(student.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/training/students/${student.id}`}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                          title="View"
                        >
                          <Eye className="w-4 h-4 text-gray-400" />
                        </Link>
                        <Link
                          href={`/admin/training/students/${student.id}/edit`}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4 text-gray-400" />
                        </Link>
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="p-2 hover:bg-red-500/10 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-white/5">
          <p className="text-sm text-gray-500">
            Showing {filteredStudents.length} of {totalCount} students
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1 bg-[#005CFF] rounded-lg text-sm">1</button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
