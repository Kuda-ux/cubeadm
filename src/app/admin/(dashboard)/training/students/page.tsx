'use client'

import { useState } from 'react'
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
  ChevronRight
} from 'lucide-react'

const students = [
  { id: 1, studentNumber: 'STU-001', name: 'John Moyo', email: 'john.moyo@email.com', phone: '+263 77 123 4567', course: 'CCNA Certification', status: 'active', enrolledDate: '2026-01-15', paymentStatus: 'paid' },
  { id: 2, studentNumber: 'STU-002', name: 'Sarah Chikwanha', email: 'sarah.c@email.com', phone: '+263 78 234 5678', course: 'AWS Cloud Practitioner', status: 'active', enrolledDate: '2026-01-18', paymentStatus: 'partial' },
  { id: 3, studentNumber: 'STU-003', name: 'Michael Ndlovu', email: 'm.ndlovu@email.com', phone: '+263 71 345 6789', course: 'Cybersecurity Fundamentals', status: 'active', enrolledDate: '2026-01-20', paymentStatus: 'paid' },
  { id: 4, studentNumber: 'STU-004', name: 'Grace Mutasa', email: 'grace.m@email.com', phone: '+263 77 456 7890', course: 'Python Programming', status: 'completed', enrolledDate: '2025-11-10', paymentStatus: 'paid' },
  { id: 5, studentNumber: 'STU-005', name: 'David Zimuto', email: 'd.zimuto@email.com', phone: '+263 78 567 8901', course: 'Azure Fundamentals', status: 'active', enrolledDate: '2026-01-22', paymentStatus: 'pending' },
  { id: 6, studentNumber: 'STU-006', name: 'Tendai Maposa', email: 't.maposa@email.com', phone: '+263 71 678 9012', course: 'CCNA Certification', status: 'active', enrolledDate: '2026-01-25', paymentStatus: 'paid' },
  { id: 7, studentNumber: 'STU-007', name: 'Rumbidzai Choto', email: 'r.choto@email.com', phone: '+263 77 789 0123', course: 'Web Development', status: 'inactive', enrolledDate: '2025-09-05', paymentStatus: 'paid' },
  { id: 8, studentNumber: 'STU-008', name: 'Tatenda Moyo', email: 'tatenda.m@email.com', phone: '+263 78 890 1234', course: 'AWS Cloud Practitioner', status: 'active', enrolledDate: '2026-01-27', paymentStatus: 'partial' },
]

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedStudents, setSelectedStudents] = useState<number[]>([])

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.studentNumber.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || student.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const toggleSelectAll = () => {
    if (selectedStudents.length === filteredStudents.length) {
      setSelectedStudents([])
    } else {
      setSelectedStudents(filteredStudents.map(s => s.id))
    }
  }

  const toggleSelect = (id: number) => {
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
      <div className="flex flex-col md:flex-row gap-4">
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
            <option value="completed">Completed</option>
            <option value="inactive">Inactive</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>
      </div>

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
                <th className="p-4 font-medium">Course</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Payment</th>
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
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-gray-500">{student.studentNumber}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <p className="text-sm flex items-center gap-2">
                        <Mail className="w-3 h-3 text-gray-500" />
                        {student.email}
                      </p>
                      <p className="text-sm flex items-center gap-2 text-gray-500">
                        <Phone className="w-3 h-3" />
                        {student.phone}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 text-gray-400">{student.course}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      student.status === 'active'
                        ? 'bg-green-500/10 text-green-500'
                        : student.status === 'completed'
                          ? 'bg-blue-500/10 text-blue-500'
                          : 'bg-gray-500/10 text-gray-500'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      student.paymentStatus === 'paid'
                        ? 'bg-green-500/10 text-green-500'
                        : student.paymentStatus === 'partial'
                          ? 'bg-yellow-500/10 text-yellow-500'
                          : 'bg-red-500/10 text-red-500'
                    }`}>
                      {student.paymentStatus}
                    </span>
                  </td>
                  <td className="p-4 text-gray-400">{student.enrolledDate}</td>
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

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-white/5">
          <p className="text-sm text-gray-500">
            Showing {filteredStudents.length} of {students.length} students
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1 bg-[#005CFF] rounded-lg text-sm">1</button>
            <button className="px-3 py-1 hover:bg-white/10 rounded-lg text-sm">2</button>
            <button className="px-3 py-1 hover:bg-white/10 rounded-lg text-sm">3</button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
