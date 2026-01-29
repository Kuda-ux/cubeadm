'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  GraduationCap,
  Code2,
  ShoppingCart,
  DollarSign,
  Users,
  UserCog,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  MoreHorizontal,
  Plus,
  Filter,
  Download,
  RefreshCw
} from 'lucide-react'

const stats = [
  {
    title: 'Active Students',
    value: '247',
    change: '+12%',
    trend: 'up',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500',
    href: '/admin/training/students'
  },
  {
    title: 'Active Projects',
    value: '18',
    change: '+3',
    trend: 'up',
    icon: Code2,
    color: 'from-green-500 to-emerald-500',
    href: '/admin/projects'
  },
  {
    title: 'Monthly Revenue',
    value: '$45,280',
    change: '+8.2%',
    trend: 'up',
    icon: DollarSign,
    color: 'from-emerald-500 to-teal-500',
    href: '/admin/finance'
  },
  {
    title: 'New Leads',
    value: '64',
    change: '-5%',
    trend: 'down',
    icon: Users,
    color: 'from-blue-500 to-indigo-500',
    href: '/admin/crm/leads'
  },
]

const recentActivities = [
  {
    id: 1,
    type: 'student',
    title: 'New student enrolled',
    description: 'John Moyo enrolled in CCNA Certification',
    time: '5 minutes ago',
    icon: GraduationCap,
    color: 'bg-purple-500'
  },
  {
    id: 2,
    type: 'payment',
    title: 'Payment received',
    description: '$2,500 from TechCorp Ltd for IT Support',
    time: '15 minutes ago',
    icon: DollarSign,
    color: 'bg-emerald-500'
  },
  {
    id: 3,
    type: 'project',
    title: 'Project milestone completed',
    description: 'ZimBank Portal - Phase 2 deployed',
    time: '1 hour ago',
    icon: CheckCircle2,
    color: 'bg-green-500'
  },
  {
    id: 4,
    type: 'lead',
    title: 'New lead from website',
    description: 'Sarah Chikwanha - Cloud Training inquiry',
    time: '2 hours ago',
    icon: Users,
    color: 'bg-blue-500'
  },
  {
    id: 5,
    type: 'order',
    title: 'Hardware order placed',
    description: '5x Dell Laptops for Ministry of Health',
    time: '3 hours ago',
    icon: ShoppingCart,
    color: 'bg-orange-500'
  },
]

const upcomingClasses = [
  {
    id: 1,
    course: 'CCNA Certification',
    trainer: 'Michael Ndlovu',
    time: '09:00 AM',
    students: 12,
    room: 'Lab A'
  },
  {
    id: 2,
    course: 'AWS Cloud Practitioner',
    trainer: 'Grace Moyo',
    time: '11:00 AM',
    students: 8,
    room: 'Lab B'
  },
  {
    id: 3,
    course: 'Cybersecurity Fundamentals',
    trainer: 'David Mutasa',
    time: '02:00 PM',
    students: 15,
    room: 'Lab A'
  },
]

const pendingTasks = [
  {
    id: 1,
    title: 'Review project proposal',
    project: 'EcoBank Integration',
    priority: 'high',
    due: 'Today'
  },
  {
    id: 2,
    title: 'Prepare training materials',
    project: 'Azure Fundamentals Course',
    priority: 'medium',
    due: 'Tomorrow'
  },
  {
    id: 3,
    title: 'Client meeting preparation',
    project: 'ZimTech Solutions',
    priority: 'high',
    due: 'Today'
  },
  {
    id: 4,
    title: 'Invoice follow-up',
    project: 'Ministry of ICT',
    priority: 'low',
    due: 'This week'
  },
]

const quickActions = [
  { name: 'Add Student', href: '/admin/training/students/new', icon: GraduationCap, color: 'from-purple-500 to-pink-500' },
  { name: 'New Project', href: '/admin/projects/new', icon: Code2, color: 'from-green-500 to-emerald-500' },
  { name: 'Create Invoice', href: '/admin/finance/invoices/new', icon: DollarSign, color: 'from-emerald-500 to-teal-500' },
  { name: 'Add Lead', href: '/admin/crm/leads/new', icon: Users, color: 'from-blue-500 to-indigo-500' },
]

export default function AdminDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Welcome back! Here&apos;s what&apos;s happening at CubeADM today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-400">
              {currentTime.toLocaleDateString('en-ZW', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-400">
              {currentTime.toLocaleTimeString('en-ZW', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action) => (
          <Link
            key={action.name}
            href={action.href}
            className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all group"
          >
            <div className={`w-10 h-10 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <action.icon className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium text-sm">{action.name}</span>
            <Plus className="w-4 h-4 text-gray-500 ml-auto" />
          </Link>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Link
            key={stat.title}
            href={stat.href}
            className="p-6 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all group"
          >
            <div className="flex items-start justify-between">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                stat.trend === 'up' 
                  ? 'bg-green-500/10 text-green-500' 
                  : 'bg-red-500/10 text-red-500'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white/5 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
              <RefreshCw className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 p-3 hover:bg-white/5 rounded-xl transition-colors">
                <div className={`w-10 h-10 ${activity.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <activity.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-500 truncate">{activity.description}</p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-sm text-[#00D4FF] hover:bg-[#00D4FF]/10 rounded-lg transition-colors">
            View All Activity
          </button>
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
                  <span className="text-sm font-medium text-[#00D4FF]">{cls.time}</span>
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

      {/* Second Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pending Tasks */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Pending Tasks</h2>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gradient-to-r from-[#005CFF] to-[#00D4FF] rounded-lg hover:opacity-90 transition-opacity">
              <Plus className="w-4 h-4" />
              Add Task
            </button>
          </div>
          <div className="space-y-3">
            {pendingTasks.map((task) => (
              <div key={task.id} className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-xl transition-colors">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-600 bg-transparent text-[#005CFF] focus:ring-[#005CFF] focus:ring-offset-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium">{task.title}</p>
                  <p className="text-sm text-gray-500">{task.project}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    task.priority === 'high' 
                      ? 'bg-red-500/10 text-red-500'
                      : task.priority === 'medium'
                        ? 'bg-yellow-500/10 text-yellow-500'
                        : 'bg-gray-500/10 text-gray-500'
                  }`}>
                    {task.priority}
                  </span>
                  <span className="text-xs text-gray-500">{task.due}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Module Overview */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">System Modules</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Training', icon: GraduationCap, students: 247, courses: 12, color: 'from-purple-500 to-pink-500' },
              { name: 'Projects', icon: Code2, active: 18, completed: 45, color: 'from-green-500 to-emerald-500' },
              { name: 'Retail', icon: ShoppingCart, products: 156, orders: 23, color: 'from-orange-500 to-amber-500' },
              { name: 'Finance', icon: DollarSign, invoices: 34, pending: 8, color: 'from-emerald-500 to-teal-500' },
              { name: 'CRM', icon: Users, leads: 64, clients: 89, color: 'from-blue-500 to-indigo-500' },
              { name: 'HR', icon: UserCog, staff: 24, onLeave: 2, color: 'from-rose-500 to-red-500' },
            ].map((module) => (
              <Link
                key={module.name}
                href={`/admin/${module.name.toLowerCase()}`}
                className="p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all group"
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${module.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <module.icon className="w-5 h-5 text-white" />
                </div>
                <p className="font-medium">{module.name}</p>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                  {Object.entries(module).slice(2, 4).map(([key, value]) => (
                    typeof value !== 'string' && (
                      <span key={key}>{value} {key}</span>
                    )
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
