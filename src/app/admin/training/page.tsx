'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  GraduationCap,
  Users,
  BookOpen,
  Calendar,
  Award,
  TrendingUp,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'

const stats = [
  { title: 'Total Students', value: '247', change: '+12 this month', icon: Users, color: 'from-purple-500 to-pink-500' },
  { title: 'Active Courses', value: '12', change: '3 starting soon', icon: BookOpen, color: 'from-blue-500 to-indigo-500' },
  { title: 'Running Classes', value: '8', change: '2 today', icon: Calendar, color: 'from-green-500 to-emerald-500' },
  { title: 'Certifications', value: '189', change: '+23 this month', icon: Award, color: 'from-amber-500 to-orange-500' },
]

const recentEnrollments = [
  { id: 1, student: 'John Moyo', course: 'CCNA Certification', date: '2026-01-28', status: 'confirmed', amount: '$450' },
  { id: 2, student: 'Sarah Chikwanha', course: 'AWS Cloud Practitioner', date: '2026-01-27', status: 'pending', amount: '$380' },
  { id: 3, student: 'Michael Ndlovu', course: 'Cybersecurity Fundamentals', date: '2026-01-27', status: 'confirmed', amount: '$320' },
  { id: 4, student: 'Grace Mutasa', course: 'Python Programming', date: '2026-01-26', status: 'confirmed', amount: '$280' },
  { id: 5, student: 'David Zimuto', course: 'Azure Fundamentals', date: '2026-01-26', status: 'pending', amount: '$350' },
]

const upcomingClasses = [
  { id: 1, course: 'CCNA Certification', trainer: 'Michael Ndlovu', time: '09:00 AM', students: 12, room: 'Lab A', status: 'starting' },
  { id: 2, course: 'AWS Cloud Practitioner', trainer: 'Grace Moyo', time: '11:00 AM', students: 8, room: 'Lab B', status: 'scheduled' },
  { id: 3, course: 'Cybersecurity Fundamentals', trainer: 'David Mutasa', time: '02:00 PM', students: 15, room: 'Lab A', status: 'scheduled' },
]

const popularCourses = [
  { name: 'CCNA Certification', enrollments: 45, completion: 92, revenue: '$20,250' },
  { name: 'AWS Cloud Practitioner', enrollments: 38, completion: 88, revenue: '$14,440' },
  { name: 'Cybersecurity Fundamentals', enrollments: 32, completion: 95, revenue: '$10,240' },
  { name: 'Python Programming', enrollments: 28, completion: 85, revenue: '$7,840' },
]

export default function TrainingDashboard() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            Training Management
          </h1>
          <p className="text-gray-500 mt-1">Manage students, courses, classes, and certifications</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/training/students/new"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            Add Student
          </Link>
          <Link
            href="/admin/training/classes/new"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Schedule Class
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

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Enrollments */}
        <div className="lg:col-span-2 bg-white/5 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Recent Enrollments</h2>
            <Link href="/admin/training/students" className="text-sm text-[#00D4FF] hover:underline">
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b border-white/5">
                  <th className="pb-3 font-medium">Student</th>
                  <th className="pb-3 font-medium">Course</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentEnrollments.map((enrollment) => (
                  <tr key={enrollment.id} className="hover:bg-white/5">
                    <td className="py-3 font-medium">{enrollment.student}</td>
                    <td className="py-3 text-gray-400">{enrollment.course}</td>
                    <td className="py-3 text-gray-400">{enrollment.date}</td>
                    <td className="py-3 text-gray-400">{enrollment.amount}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        enrollment.status === 'confirmed'
                          ? 'bg-green-500/10 text-green-500'
                          : 'bg-yellow-500/10 text-yellow-500'
                      }`}>
                        {enrollment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Today's Classes */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Today&apos;s Classes</h2>
            <Link href="/admin/training/classes" className="text-sm text-[#00D4FF] hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingClasses.map((cls) => (
              <div key={cls.id} className="p-4 bg-white/5 rounded-xl">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">{cls.course}</p>
                    <p className="text-sm text-gray-500">{cls.trainer}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    cls.status === 'starting'
                      ? 'bg-green-500/10 text-green-500'
                      : 'bg-blue-500/10 text-blue-500'
                  }`}>
                    {cls.time}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {cls.students} students
                  </span>
                  <span>{cls.room}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Courses */}
      <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Popular Courses</h2>
          <Link href="/admin/training/courses" className="text-sm text-[#00D4FF] hover:underline">
            Manage Courses
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularCourses.map((course) => (
            <div key={course.name} className="p-4 bg-white/5 rounded-xl">
              <h3 className="font-medium mb-3">{course.name}</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Enrollments</span>
                  <span className="font-medium">{course.enrollments}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Completion</span>
                  <span className="font-medium text-green-500">{course.completion}%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Revenue</span>
                  <span className="font-medium text-[#00D4FF]">{course.revenue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: 'Students', href: '/admin/training/students', icon: Users, count: 247 },
          { name: 'Courses', href: '/admin/training/courses', icon: BookOpen, count: 12 },
          { name: 'Classes', href: '/admin/training/classes', icon: Calendar, count: 8 },
          { name: 'Certifications', href: '/admin/training/certifications', icon: Award, count: 189 },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-colors"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
              <link.icon className="w-5 h-5 text-purple-400" />
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
