'use client'

import { useState } from 'react'
import { Clock, Calendar, CheckCircle2, XCircle, AlertCircle } from 'lucide-react'

const attendanceData = [
  { id: 1, name: 'John Mutasa', department: 'Management', checkIn: '08:45 AM', checkOut: '05:30 PM', status: 'present' },
  { id: 2, name: 'Sarah Chikwanha', department: 'Training', checkIn: '08:30 AM', checkOut: '05:15 PM', status: 'present' },
  { id: 3, name: 'Michael Ndlovu', department: 'IT', checkIn: '09:00 AM', checkOut: '-', status: 'present' },
  { id: 4, name: 'Grace Moyo', department: 'Operations', checkIn: '-', checkOut: '-', status: 'leave' },
  { id: 5, name: 'David Zimuto', department: 'IT', checkIn: '08:55 AM', checkOut: '-', status: 'present' },
  { id: 6, name: 'Tendai Maposa', department: 'Sales', checkIn: '-', checkOut: '-', status: 'absent' },
]

export default function AttendancePage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])

  const presentCount = attendanceData.filter(a => a.status === 'present').length
  const absentCount = attendanceData.filter(a => a.status === 'absent').length
  const leaveCount = attendanceData.filter(a => a.status === 'leave').length

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Attendance</h1>
          <p className="text-gray-500 mt-1">Track daily staff attendance</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Present</p>
              <p className="text-2xl font-bold">{presentCount}</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Absent</p>
              <p className="text-2xl font-bold">{absentCount}</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">On Leave</p>
              <p className="text-2xl font-bold">{leaveCount}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b border-white/5 bg-white/5">
              <th className="p-4 font-medium">Employee</th>
              <th className="p-4 font-medium">Department</th>
              <th className="p-4 font-medium">Check In</th>
              <th className="p-4 font-medium">Check Out</th>
              <th className="p-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {attendanceData.map((record) => (
              <tr key={record.id} className="hover:bg-white/5">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-500 rounded-full flex items-center justify-center text-white font-medium">
                      {record.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-medium">{record.name}</span>
                  </div>
                </td>
                <td className="p-4 text-gray-400">{record.department}</td>
                <td className="p-4">
                  <span className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    {record.checkIn}
                  </span>
                </td>
                <td className="p-4">
                  <span className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    {record.checkOut}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    record.status === 'present' ? 'bg-green-500/10 text-green-500' :
                    record.status === 'absent' ? 'bg-red-500/10 text-red-500' :
                    'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
