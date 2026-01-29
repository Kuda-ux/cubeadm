'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building2,
  GraduationCap,
  CreditCard,
  Save,
  X
} from 'lucide-react'

export default function NewStudentPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    nationalId: '',
    address: '',
    city: '',
    country: 'Zimbabwe',
    educationLevel: '',
    occupation: '',
    employer: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    courseId: '',
    paymentPlan: 'full',
    notes: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/admin/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          date_of_birth: formData.dateOfBirth || null,
          gender: formData.gender || null,
          national_id: formData.nationalId || null,
          address: formData.address || null,
          city: formData.city || null,
          country: formData.country,
          education_level: formData.educationLevel || null,
          occupation: formData.occupation || null,
          employer: formData.employer || null,
          emergency_contact_name: formData.emergencyContactName || null,
          emergency_contact_phone: formData.emergencyContactPhone || null,
          notes: formData.notes || null,
          status: 'active'
        })
      })
      
      if (!response.ok) {
        throw new Error('Failed to create student')
      }
      
      router.push('/admin/training/students')
    } catch (error) {
      console.error('Error creating student:', error)
      alert('Failed to create student. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/training/students"
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Add New Student</h1>
          <p className="text-gray-500 mt-1">Register a new student in the system</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <User className="w-5 h-5 text-purple-500" />
            Personal Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="Enter last name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">National ID</label>
              <input
                type="text"
                name="nationalId"
                value={formData.nationalId}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="e.g., 63-123456-A-78"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-500" />
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="student@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="+263 77 123 4567"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="Street address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="e.g., Harare"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
              >
                <option value="Zimbabwe">Zimbabwe</option>
                <option value="South Africa">South Africa</option>
                <option value="Botswana">Botswana</option>
                <option value="Zambia">Zambia</option>
                <option value="Mozambique">Mozambique</option>
              </select>
            </div>
          </div>
        </div>

        {/* Education & Employment */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-green-500" />
            Education & Employment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Education Level</label>
              <select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
              >
                <option value="">Select level</option>
                <option value="high_school">High School</option>
                <option value="diploma">Diploma</option>
                <option value="bachelors">Bachelor&apos;s Degree</option>
                <option value="masters">Master&apos;s Degree</option>
                <option value="phd">PhD</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Occupation</label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="e.g., IT Support"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Employer</label>
              <input
                type="text"
                name="employer"
                value={formData.employer}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="Company name"
              />
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Phone className="w-5 h-5 text-red-500" />
            Emergency Contact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Contact Name</label>
              <input
                type="text"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Contact Phone</label>
              <input
                type="tel"
                name="emergencyContactPhone"
                value={formData.emergencyContactPhone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
                placeholder="+263 77 123 4567"
              />
            </div>
          </div>
        </div>

        {/* Course Enrollment */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-purple-500" />
            Course Enrollment
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Select Course *</label>
              <select
                name="courseId"
                value={formData.courseId}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
              >
                <option value="">Select a course</option>
                <option value="ccna">CCNA Certification - $450</option>
                <option value="aws">AWS Cloud Practitioner - $380</option>
                <option value="cybersecurity">Cybersecurity Fundamentals - $320</option>
                <option value="python">Python Programming - $280</option>
                <option value="azure">Azure Fundamentals - $350</option>
                <option value="web">Web Development - $400</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Payment Plan</label>
              <select
                name="paymentPlan"
                value={formData.paymentPlan}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
              >
                <option value="full">Full Payment</option>
                <option value="installment">Installment (2 payments)</option>
                <option value="monthly">Monthly (3 payments)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-6">Additional Notes</h2>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF] resize-none"
            placeholder="Any additional information about the student..."
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4">
          <Link
            href="/admin/training/students"
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
            {isSubmitting ? 'Saving...' : 'Save Student'}
          </button>
        </div>
      </form>
    </div>
  )
}
