'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Building2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  Loader2
} from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate authentication - replace with actual auth logic
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Demo credentials check
    if (email === 'admin@cubeadm.co.zw' && password === 'admin123') {
      // Set auth cookie/session
      localStorage.setItem('cims_auth', JSON.stringify({
        user: { email, name: 'Admin User', role: 'super_admin' },
        token: 'demo_token_' + Date.now()
      }))
      router.push('/admin')
    } else {
      setError('Invalid email or password. Try admin@cubeadm.co.zw / admin123')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#005CFF] via-[#0040CC] to-[#00D4FF]" />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">CIMS</h1>
                <p className="text-white/80">CubeADM Integrated Management System</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl xl:text-4xl font-bold text-white mb-6 leading-tight">
            One System.<br />
            One Dashboard.<br />
            <span className="text-white/80">Full Control.</span>
          </h2>

          <p className="text-lg text-white/70 mb-8 max-w-md">
            Manage training, clients, projects, retail, hardware, finance, staff, and operations — all in one powerful platform.
          </p>

          <div className="flex flex-wrap gap-3">
            {['Training', 'Projects', 'Finance', 'CRM', 'HR', 'Retail'].map((module) => (
              <span
                key={module}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium"
              >
                {module}
              </span>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-10 left-12 xl:left-20">
            <p className="text-white/50 text-sm">© 2026 CubeADM. All rights reserved.</p>
          </div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#00D4FF]/20 rounded-full blur-3xl" />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-xl flex items-center justify-center">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">CIMS</h1>
              <p className="text-xs text-gray-500">CubeADM</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-500">Sign in to access your dashboard</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF] focus:ring-1 focus:ring-[#005CFF] transition-all"
                  placeholder="admin@cubeadm.co.zw"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF] focus:ring-1 focus:ring-[#005CFF] transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-600 bg-transparent text-[#005CFF] focus:ring-[#005CFF]"
                />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <Link href="/admin/forgot-password" className="text-sm text-[#00D4FF] hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white font-semibold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm">
            <Shield className="w-4 h-4" />
            <span>Secured with 256-bit encryption</span>
          </div>

          {/* Back to Website */}
          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-gray-500 hover:text-[#00D4FF] transition-colors">
              ← Back to CubeADM Website
            </Link>
          </div>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl">
            <p className="text-xs text-gray-500 text-center mb-2">Demo Credentials</p>
            <p className="text-sm text-gray-400 text-center">
              Email: <span className="text-[#00D4FF]">admin@cubeadm.co.zw</span><br />
              Password: <span className="text-[#00D4FF]">admin123</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
