'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface User {
  email: string
  name: string
  role: 'super_admin' | 'admin' | 'manager' | 'staff'
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check for existing auth on mount
    const checkAuth = () => {
      try {
        const authData = localStorage.getItem('cims_auth')
        if (authData) {
          const parsed = JSON.parse(authData)
          setUser(parsed.user)
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  useEffect(() => {
    // Redirect logic for admin routes
    if (!isLoading && pathname?.startsWith('/admin') && pathname !== '/admin/login') {
      if (!user) {
        router.push('/admin/login')
      }
    }
  }, [user, isLoading, pathname, router])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Demo authentication - replace with actual API call
    if (email === 'admin@cubeadm.co.zw' && password === 'admin123') {
      const userData: User = {
        email,
        name: 'Admin User',
        role: 'super_admin'
      }
      
      localStorage.setItem('cims_auth', JSON.stringify({
        user: userData,
        token: 'demo_token_' + Date.now()
      }))
      
      setUser(userData)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem('cims_auth')
    setUser(null)
    router.push('/admin/login')
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      isAuthenticated: !!user,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
