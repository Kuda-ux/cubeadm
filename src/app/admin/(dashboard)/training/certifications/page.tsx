'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Award, Plus, Search, Download, Calendar, User } from 'lucide-react'

const certifications = [
  { id: 1, student: 'John Moyo', course: 'CCNA Certification', issueDate: '2026-01-15', certNumber: 'CERT-2026-001', status: 'issued' },
  { id: 2, student: 'Sarah Chikwanha', course: 'AWS Cloud Practitioner', issueDate: '2026-01-18', certNumber: 'CERT-2026-002', status: 'issued' },
  { id: 3, student: 'Michael Ndlovu', course: 'Cybersecurity Fundamentals', issueDate: '2026-01-20', certNumber: 'CERT-2026-003', status: 'issued' },
  { id: 4, student: 'Grace Mutasa', course: 'Python Programming', issueDate: '2026-01-22', certNumber: 'CERT-2026-004', status: 'pending' },
  { id: 5, student: 'David Zimuto', course: 'Azure Fundamentals', issueDate: '2026-01-25', certNumber: 'CERT-2026-005', status: 'issued' },
]

export default function CertificationsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Certifications</h1>
          <p className="text-gray-500 mt-1">Issue and manage student certifications</p>
        </div>
        <Link
          href="/admin/training/certifications/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:opacity-90 transition-opacity w-fit"
        >
          <Plus className="w-4 h-4" />
          Issue Certificate
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search certifications..."
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
              <th className="p-4 font-medium">Certificate #</th>
              <th className="p-4 font-medium">Student</th>
              <th className="p-4 font-medium">Course</th>
              <th className="p-4 font-medium">Issue Date</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {certifications.map((cert) => (
              <tr key={cert.id} className="hover:bg-white/5">
                <td className="p-4">
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span className="font-medium text-[#00D4FF]">{cert.certNumber}</span>
                  </span>
                </td>
                <td className="p-4">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-500" />
                    {cert.student}
                  </span>
                </td>
                <td className="p-4 text-gray-400">{cert.course}</td>
                <td className="p-4">
                  <span className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {cert.issueDate}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'issued' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    {cert.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 text-sm text-[#00D4FF] hover:underline">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
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
