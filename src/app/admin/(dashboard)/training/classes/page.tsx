'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Plus, Search, Clock, Users, MapPin } from 'lucide-react'

const classes = [
  { id: 1, course: 'CCNA Certification', trainer: 'Michael Ndlovu', date: '2026-02-03', time: '09:00 AM', room: 'Lab A', students: 12, status: 'scheduled' },
  { id: 2, course: 'AWS Cloud Practitioner', trainer: 'Grace Moyo', date: '2026-02-03', time: '11:00 AM', room: 'Lab B', students: 8, status: 'scheduled' },
  { id: 3, course: 'Cybersecurity Fundamentals', trainer: 'David Mutasa', date: '2026-02-03', time: '02:00 PM', room: 'Lab A', students: 15, status: 'scheduled' },
  { id: 4, course: 'Python Programming', trainer: 'Sarah Chikwanha', date: '2026-02-04', time: '09:00 AM', room: 'Lab C', students: 10, status: 'scheduled' },
  { id: 5, course: 'Azure Fundamentals', trainer: 'John Mutasa', date: '2026-02-04', time: '02:00 PM', room: 'Lab B', students: 6, status: 'scheduled' },
]

export default function ClassesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Classes</h1>
          <p className="text-gray-500 mt-1">Schedule and manage training sessions</p>
        </div>
        <Link
          href="/admin/training/classes/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:opacity-90 transition-opacity w-fit"
        >
          <Plus className="w-4 h-4" />
          Schedule Class
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search classes..."
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
              <th className="p-4 font-medium">Course</th>
              <th className="p-4 font-medium">Trainer</th>
              <th className="p-4 font-medium">Date & Time</th>
              <th className="p-4 font-medium">Room</th>
              <th className="p-4 font-medium">Students</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {classes.map((cls) => (
              <tr key={cls.id} className="hover:bg-white/5">
                <td className="p-4 font-medium">{cls.course}</td>
                <td className="p-4 text-gray-400">{cls.trainer}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {cls.date}
                    <Clock className="w-4 h-4 ml-2" />
                    {cls.time}
                  </div>
                </td>
                <td className="p-4">
                  <span className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    {cls.room}
                  </span>
                </td>
                <td className="p-4">
                  <span className="flex items-center gap-2 text-gray-400">
                    <Users className="w-4 h-4" />
                    {cls.students}
                  </span>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500">
                    {cls.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/training/classes/${cls.id}`} className="text-sm text-[#00D4FF] hover:underline">View</Link>
                    <Link href={`/admin/training/classes/${cls.id}/edit`} className="text-sm text-gray-400 hover:text-white">Edit</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
