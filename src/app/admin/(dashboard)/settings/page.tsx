'use client'

import { useState } from 'react'
import {
  Settings,
  Building2,
  Mail,
  Phone,
  MapPin,
  Globe,
  CreditCard,
  Bell,
  Shield,
  Palette,
  Database,
  Save,
  RefreshCw
} from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('company')
  const [isSaving, setIsSaving] = useState(false)

  const [companySettings, setCompanySettings] = useState({
    name: 'CubeADM',
    email: 'info@cubeadm.co.zw',
    phone: '+263 78 266 7295',
    address: 'Harare, Zimbabwe',
    website: 'https://cubeadm.co.zw',
    taxId: '',
    currency: 'USD',
    timezone: 'Africa/Harare',
    invoicePrefix: 'INV-',
    studentPrefix: 'STU-',
    orderPrefix: 'ORD-',
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    newLeadAlert: true,
    paymentReceived: true,
    lowStockAlert: true,
    newEnrollment: true,
    projectUpdates: true,
  })

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

  const tabs = [
    { id: 'company', name: 'Company', icon: Building2 },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'integrations', name: 'Integrations', icon: Database },
    { id: 'appearance', name: 'Appearance', icon: Palette },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-gray-500 to-slate-500 rounded-xl flex items-center justify-center">
            <Settings className="w-6 h-6 text-white" />
          </div>
          Settings
        </h1>
        <p className="text-gray-500 mt-1">Manage system configuration and preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white/5 border border-white/5 rounded-2xl p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Company Settings */}
          {activeTab === 'company' && (
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-6">Company Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      value={companySettings.name}
                      onChange={(e) => setCompanySettings({ ...companySettings, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      value={companySettings.email}
                      onChange={(e) => setCompanySettings({ ...companySettings, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="tel"
                      value={companySettings.phone}
                      onChange={(e) => setCompanySettings({ ...companySettings, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      value={companySettings.address}
                      onChange={(e) => setCompanySettings({ ...companySettings, address: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Website</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="url"
                      value={companySettings.website}
                      onChange={(e) => setCompanySettings({ ...companySettings, website: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Default Currency</label>
                  <select
                    value={companySettings.currency}
                    onChange={(e) => setCompanySettings({ ...companySettings, currency: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
                  >
                    <option value="USD">USD - US Dollar</option>
                    <option value="ZWL">ZWL - Zimbabwe Dollar</option>
                    <option value="ZAR">ZAR - South African Rand</option>
                    <option value="BWP">BWP - Botswana Pula</option>
                  </select>
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-8 mb-6">Document Prefixes</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Invoice Prefix</label>
                  <input
                    type="text"
                    value={companySettings.invoicePrefix}
                    onChange={(e) => setCompanySettings({ ...companySettings, invoicePrefix: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Student Prefix</label>
                  <input
                    type="text"
                    value={companySettings.studentPrefix}
                    onChange={(e) => setCompanySettings({ ...companySettings, studentPrefix: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Order Prefix</label>
                  <input
                    type="text"
                    value={companySettings.orderPrefix}
                    onChange={(e) => setCompanySettings({ ...companySettings, orderPrefix: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005CFF]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Notification Settings */}
          {activeTab === 'notifications' && (
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-6">Notification Preferences</h2>
              <div className="space-y-4">
                {[
                  { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email' },
                  { key: 'newLeadAlert', label: 'New Lead Alerts', description: 'Get notified when a new lead is captured' },
                  { key: 'paymentReceived', label: 'Payment Received', description: 'Get notified when a payment is received' },
                  { key: 'lowStockAlert', label: 'Low Stock Alerts', description: 'Get notified when inventory is low' },
                  { key: 'newEnrollment', label: 'New Enrollment', description: 'Get notified when a student enrolls' },
                  { key: 'projectUpdates', label: 'Project Updates', description: 'Get notified about project milestones' },
                ].map((setting) => (
                  <div key={setting.key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div>
                      <p className="font-medium">{setting.label}</p>
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationSettings[setting.key as keyof typeof notificationSettings]}
                        onChange={(e) => setNotificationSettings({
                          ...notificationSettings,
                          [setting.key]: e.target.checked
                        })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#005CFF]"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-6">Security Settings</h2>
              <div className="space-y-6">
                <div className="p-4 bg-white/5 rounded-xl">
                  <h3 className="font-medium mb-2">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-500 mb-4">Add an extra layer of security to your account</p>
                  <button className="px-4 py-2 bg-[#005CFF] text-white rounded-lg hover:bg-[#0050DD] transition-colors">
                    Enable 2FA
                  </button>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <h3 className="font-medium mb-2">Password Requirements</h3>
                  <p className="text-sm text-gray-500 mb-4">Set minimum password requirements for all users</p>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-600 bg-transparent text-[#005CFF]" />
                      <span className="text-sm">Minimum 8 characters</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-600 bg-transparent text-[#005CFF]" />
                      <span className="text-sm">Require uppercase letters</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-600 bg-transparent text-[#005CFF]" />
                      <span className="text-sm">Require numbers</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-transparent text-[#005CFF]" />
                      <span className="text-sm">Require special characters</span>
                    </label>
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <h3 className="font-medium mb-2">Session Management</h3>
                  <p className="text-sm text-gray-500 mb-4">Manage active sessions and session timeout</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400">Session timeout:</span>
                    <select className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm">
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="120">2 hours</option>
                      <option value="480">8 hours</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Integrations */}
          {activeTab === 'integrations' && (
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-6">Integrations</h2>
              <div className="space-y-4">
                {[
                  { name: 'WhatsApp Business', description: 'Connect WhatsApp for customer communication', status: 'connected', color: 'bg-green-500' },
                  { name: 'Paynow', description: 'Accept payments via Paynow', status: 'connected', color: 'bg-green-500' },
                  { name: 'Supabase', description: 'Database and authentication', status: 'connected', color: 'bg-green-500' },
                  { name: 'Resend', description: 'Email delivery service', status: 'connected', color: 'bg-green-500' },
                  { name: 'Google Calendar', description: 'Sync classes and appointments', status: 'not_connected', color: 'bg-gray-500' },
                  { name: 'Zoom', description: 'Online training sessions', status: 'not_connected', color: 'bg-gray-500' },
                ].map((integration) => (
                  <div key={integration.name} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 ${integration.color} rounded-full`} />
                      <div>
                        <p className="font-medium">{integration.name}</p>
                        <p className="text-sm text-gray-500">{integration.description}</p>
                      </div>
                    </div>
                    <button className={`px-4 py-1.5 rounded-lg text-sm font-medium ${
                      integration.status === 'connected'
                        ? 'bg-white/5 text-gray-400 hover:bg-white/10'
                        : 'bg-[#005CFF] text-white hover:bg-[#0050DD]'
                    }`}>
                      {integration.status === 'connected' ? 'Configure' : 'Connect'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Appearance */}
          {activeTab === 'appearance' && (
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-6">Appearance</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-4">Theme</label>
                  <div className="flex gap-4">
                    <button className="flex-1 p-4 bg-[#0a0a0f] border-2 border-[#005CFF] rounded-xl text-center">
                      <div className="w-full h-20 bg-gradient-to-br from-[#0d0d14] to-[#0a0a0f] rounded-lg mb-2" />
                      <span className="text-sm font-medium">Dark</span>
                    </button>
                    <button className="flex-1 p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:border-white/20">
                      <div className="w-full h-20 bg-gradient-to-br from-gray-100 to-white rounded-lg mb-2" />
                      <span className="text-sm font-medium">Light</span>
                    </button>
                    <button className="flex-1 p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:border-white/20">
                      <div className="w-full h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-2" />
                      <span className="text-sm font-medium">System</span>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-4">Accent Color</label>
                  <div className="flex gap-3">
                    {['#005CFF', '#00D4FF', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B'].map((color) => (
                      <button
                        key={color}
                        className={`w-10 h-10 rounded-full border-2 ${
                          color === '#005CFF' ? 'border-white' : 'border-transparent'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
