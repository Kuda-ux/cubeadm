'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Save, X } from 'lucide-react'

export default function NewCoursePage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    description: '',
    category: '',
    duration_hours: '',
    duration_weeks: '',
    price: '',
    currency: 'USD',
    certification_body: '',
    prerequisites: '',
    max_students: '20',
    is_active: true
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value 
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/admin/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          code: formData.code || null,
          description: formData.description || null,
          category: formData.category || null,
          duration_hours: formData.duration_hours ? parseInt(formData.duration_hours) : null,
          duration_weeks: formData.duration_weeks ? parseInt(formData.duration_weeks) : null,
          price: formData.price ? parseFloat(formData.price) : null,
          currency: formData.currency,
          certification_body: formData.certification_body || null,
          prerequisites: formData.prerequisites || null,
          max_students: formData.max_students ? parseInt(formData.max_students) : 20,
          is_active: formData.is_active
        })
      })
      
      if (!response.ok) throw new Error('Failed to create course')
      router.push('/admin/training/courses')
    } catch (error) {
      console.error('Error creating course:', error)
      alert('Failed to create course. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/training/courses" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Add New Course</h1>
          <p className="text-gray-500 mt-1">Create a new training course</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-500" />
            Course Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-2">Course Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="e.g., CCNA Certification"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Course Code</label>
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="e.g., CCNA-001"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
              >
                <option value="">Select category</option>
                <option value="Networking">Networking</option>
                <option value="Cloud">Cloud Computing</option>
                <option value="Security">Cybersecurity</option>
                <option value="Development">Software Development</option>
                <option value="IT Fundamentals">IT Fundamentals</option>
                <option value="Data Science">Data Science</option>
                <option value="AI & Automation">AI & Automation</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Duration (Hours)</label>
              <input
                type="number"
                name="duration_hours"
                value={formData.duration_hours}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="e.g., 40"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Duration (Weeks)</label>
              <input
                type="number"
                name="duration_weeks"
                value={formData.duration_weeks}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="e.g., 8"
              />
            </div>
            <div className="lg:col-span-3">
              <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF] resize-none"
                placeholder="Course description..."
              />
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-6">Pricing & Capacity</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                step="0.01"
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="e.g., 450"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Currency</label>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
              >
                <option value="USD">USD</option>
                <option value="ZWL">ZWL</option>
                <option value="ZAR">ZAR</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Max Students</label>
              <input
                type="number"
                name="max_students"
                value={formData.max_students}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="e.g., 20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Certification Body</label>
              <input
                type="text"
                name="certification_body"
                value={formData.certification_body}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="e.g., Cisco"
              />
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-6">Prerequisites</h2>
          <textarea
            name="prerequisites"
            value={formData.prerequisites}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF] resize-none"
            placeholder="List any prerequisites for this course..."
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="is_active"
              checked={formData.is_active}
              onChange={handleChange}
              className="w-5 h-5 rounded border-gray-600 bg-transparent text-[#005CFF] focus:ring-[#005CFF]"
            />
            <span className="text-sm">Course is active and visible</span>
          </label>
          <div className="flex items-center gap-4">
            <Link
              href="/admin/training/courses"
              className="flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {isSubmitting ? 'Saving...' : 'Save Course'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
