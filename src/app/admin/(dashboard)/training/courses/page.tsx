'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Plus, Search, Filter, Edit, Trash2, Eye, Clock, Users, DollarSign } from 'lucide-react'

const courses = [
  { id: 1, name: 'CCNA Certification', category: 'Networking', duration: '8 weeks', price: '$450', students: 45, status: 'active' },
  { id: 2, name: 'AWS Cloud Practitioner', category: 'Cloud', duration: '6 weeks', price: '$380', students: 38, status: 'active' },
  { id: 3, name: 'Cybersecurity Fundamentals', category: 'Security', duration: '10 weeks', price: '$320', students: 32, status: 'active' },
  { id: 4, name: 'Python Programming', category: 'Development', duration: '8 weeks', price: '$280', students: 28, status: 'active' },
  { id: 5, name: 'Azure Fundamentals', category: 'Cloud', duration: '4 weeks', price: '$350', students: 22, status: 'active' },
  { id: 6, name: 'CompTIA A+', category: 'IT Fundamentals', duration: '6 weeks', price: '$300', students: 18, status: 'draft' },
]

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Courses</h1>
          <p className="text-gray-500 mt-1">Manage training courses and curriculum</p>
        </div>
        <Link
          href="/admin/training/courses/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:opacity-90 transition-opacity w-fit"
        >
          <Plus className="w-4 h-4" />
          Add Course
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                course.status === 'active' ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-500'
              }`}>
                {course.status}
              </span>
            </div>
            <h3 className="font-semibold text-lg mb-1">{course.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{course.category}</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-500"><Clock className="w-4 h-4" /> Duration</span>
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-500"><DollarSign className="w-4 h-4" /> Price</span>
                <span className="text-[#00D4FF]">{course.price}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-500"><Users className="w-4 h-4" /> Students</span>
                <span>{course.students}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-4 border-t border-white/5">
              <Link href={`/admin/training/courses/${course.id}`} className="flex-1 py-2 text-center text-sm bg-white/5 hover:bg-white/10 rounded-lg">View</Link>
              <Link href={`/admin/training/courses/${course.id}/edit`} className="flex-1 py-2 text-center text-sm bg-white/5 hover:bg-white/10 rounded-lg">Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
