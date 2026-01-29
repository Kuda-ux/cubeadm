'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  LayoutDashboard,
  GraduationCap,
  Code2,
  ShoppingCart,
  DollarSign,
  Users,
  UserCog,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  LogOut,
  Moon,
  Sun,
  Building2
} from 'lucide-react'

const modules = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
    color: 'from-[#005CFF] to-[#00D4FF]'
  },
  {
    name: 'Training',
    href: '/admin/training',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500',
    submenu: [
      { name: 'Students', href: '/admin/training/students' },
      { name: 'Courses', href: '/admin/training/courses' },
      { name: 'Classes', href: '/admin/training/classes' },
      { name: 'Trainers', href: '/admin/training/trainers' },
      { name: 'Certifications', href: '/admin/training/certifications' },
    ]
  },
  {
    name: 'Projects',
    href: '/admin/projects',
    icon: Code2,
    color: 'from-green-500 to-emerald-500',
    submenu: [
      { name: 'All Projects', href: '/admin/projects' },
      { name: 'Clients', href: '/admin/projects/clients' },
      { name: 'Tasks', href: '/admin/projects/tasks' },
      { name: 'Support Tickets', href: '/admin/projects/tickets' },
    ]
  },
  {
    name: 'Retail',
    href: '/admin/retail',
    icon: ShoppingCart,
    color: 'from-orange-500 to-amber-500',
    submenu: [
      { name: 'Products', href: '/admin/retail/products' },
      { name: 'Inventory', href: '/admin/retail/inventory' },
      { name: 'Orders', href: '/admin/retail/orders' },
      { name: 'Suppliers', href: '/admin/retail/suppliers' },
    ]
  },
  {
    name: 'Finance',
    href: '/admin/finance',
    icon: DollarSign,
    color: 'from-emerald-500 to-teal-500',
    submenu: [
      { name: 'Overview', href: '/admin/finance' },
      { name: 'Invoices', href: '/admin/finance/invoices' },
      { name: 'Payments', href: '/admin/finance/payments' },
      { name: 'Expenses', href: '/admin/finance/expenses' },
      { name: 'Reports', href: '/admin/finance/reports' },
    ]
  },
  {
    name: 'CRM',
    href: '/admin/crm',
    icon: Users,
    color: 'from-blue-500 to-indigo-500',
    submenu: [
      { name: 'Leads', href: '/admin/crm/leads' },
      { name: 'Contacts', href: '/admin/crm/contacts' },
      { name: 'Pipeline', href: '/admin/crm/pipeline' },
      { name: 'Communications', href: '/admin/crm/communications' },
    ]
  },
  {
    name: 'HR',
    href: '/admin/hr',
    icon: UserCog,
    color: 'from-rose-500 to-red-500',
    submenu: [
      { name: 'Staff', href: '/admin/hr/staff' },
      { name: 'Attendance', href: '/admin/hr/attendance' },
      { name: 'Payroll', href: '/admin/hr/payroll' },
      { name: 'Leave', href: '/admin/hr/leave' },
    ]
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings,
    color: 'from-gray-500 to-slate-500'
  },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(true)
  const pathname = usePathname()

  const toggleSubmenu = (name: string) => {
    setExpandedMenu(expandedMenu === name ? null : name)
  }

  const isActive = (href: string) => {
    if (href === '/admin') return pathname === '/admin'
    return pathname.startsWith(href)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-50 h-full transition-all duration-300 ${
        sidebarOpen ? 'w-64' : 'w-20'
      } ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} ${
        darkMode ? 'bg-[#0d0d14] border-r border-white/5' : 'bg-white border-r border-gray-200'
      }`}>
        {/* Logo */}
        <div className={`h-16 flex items-center ${sidebarOpen ? 'px-4' : 'justify-center'} border-b ${
          darkMode ? 'border-white/5' : 'border-gray-200'
        }`}>
          {sidebarOpen ? (
            <Link href="/admin" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>CIMS</span>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>CubeADM</p>
              </div>
            </Link>
          ) : (
            <div className="w-10 h-10 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
          {modules.map((module) => (
            <div key={module.name}>
              <button
                onClick={() => module.submenu ? toggleSubmenu(module.name) : null}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                  isActive(module.href)
                    ? `bg-gradient-to-r ${module.color} text-white shadow-lg`
                    : darkMode 
                      ? 'text-gray-400 hover:text-white hover:bg-white/5'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {!module.submenu ? (
                  <Link href={module.href} className="flex items-center gap-3 w-full">
                    <module.icon className="w-5 h-5 flex-shrink-0" />
                    {sidebarOpen && <span className="font-medium">{module.name}</span>}
                  </Link>
                ) : (
                  <>
                    <module.icon className="w-5 h-5 flex-shrink-0" />
                    {sidebarOpen && (
                      <>
                        <span className="font-medium flex-1 text-left">{module.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          expandedMenu === module.name ? 'rotate-180' : ''
                        }`} />
                      </>
                    )}
                  </>
                )}
              </button>
              
              {/* Submenu */}
              {module.submenu && sidebarOpen && expandedMenu === module.name && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-white/10 pl-4">
                  {module.submenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        pathname === item.href
                          ? 'text-[#00D4FF] bg-[#00D4FF]/10'
                          : darkMode
                            ? 'text-gray-500 hover:text-white hover:bg-white/5'
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
        {/* Top Header */}
        <header className={`sticky top-0 z-30 h-16 flex items-center justify-between px-4 lg:px-6 ${
          darkMode ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5' : 'bg-white/80 backdrop-blur-xl border-b border-gray-200'
        }`}>
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`}
            >
              {mobileMenuOpen ? (
                <X className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
              )}
            </button>

            {/* Sidebar Toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`hidden lg:block p-2 rounded-lg ${darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`}
            >
              <Menu className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
            </button>

            {/* Search */}
            <div className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-xl ${
              darkMode ? 'bg-white/5' : 'bg-gray-100'
            }`}>
              <Search className={`w-4 h-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              <input
                type="text"
                placeholder="Search..."
                className={`bg-transparent border-none outline-none text-sm w-64 ${
                  darkMode ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'
                }`}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Notifications */}
            <button className={`relative p-2 rounded-lg ${darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`}>
              <Bell className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* User Menu */}
            <div className="flex items-center gap-3 pl-3 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Admin User</p>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Super Admin</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AU</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className={`p-4 lg:p-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {children}
        </main>
      </div>
    </div>
  )
}
