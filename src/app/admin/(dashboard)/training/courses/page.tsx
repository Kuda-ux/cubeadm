'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, Plus, Search, Filter, Edit, Trash2, Eye, Clock, Users, DollarSign, Loader2 } from 'lucide-react'

interface Course {
  id: string
  name: string
  code?: string
  category?: string
  duration_weeks?: number
  price?: number
  currency: string
  max_students?: number
  is_active: boolean
  created_at: string
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/courses')
      const result = await response.json()
      if (result.data) {
        setCourses(result.data)
      }
    } catch (error) {
      console.error('Error fetching courses:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this course?')) return
    try {
      const response = await fetch(`/api/admin/courses/${id}`, { method: 'DELETE' })
      if (response.ok) {
        setCourses(courses.filter(c => c.id !== id))
      }
    } catch (error) {
      console.error('Error deleting course:', error)
    }
  }

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

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-[#005CFF]" />
        </div>
      ) : filteredCourses.length === 0 ? (
        <div className="text-center py-12 bg-white/5 rounded-2xl">
          <BookOpen className="w-12 h-12 mx-auto text-gray-500 mb-4" />
          <p className="text-gray-500">No courses found</p>
          <Link href="/admin/training/courses/new" className="text-[#00D4FF] hover:underline mt-2 inline-block">
            Add your first course
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  course.is_active ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-500'
                }`}>
                  {course.is_active ? 'active' : 'inactive'}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-1">{course.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{course.category || 'Uncategorized'}</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-gray-500"><Clock className="w-4 h-4" /> Duration</span>
                  <span>{course.duration_weeks ? `${course.duration_weeks} weeks` : 'N/A'}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-gray-500"><DollarSign className="w-4 h-4" /> Price</span>
                  <span className="text-[#00D4FF]">{course.price ? `${course.currency} ${course.price}` : 'N/A'}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-gray-500"><Users className="w-4 h-4" /> Max Students</span>
                  <span>{course.max_students || 20}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                <Link href={`/admin/training/courses/${course.id}`} className="flex-1 py-2 text-center text-sm bg-white/5 hover:bg-white/10 rounded-lg">View</Link>
                <Link href={`/admin/training/courses/${course.id}/edit`} className="flex-1 py-2 text-center text-sm bg-white/5 hover:bg-white/10 rounded-lg">Edit</Link>
                <button onClick={() => handleDelete(course.id)} className="py-2 px-3 text-sm bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
