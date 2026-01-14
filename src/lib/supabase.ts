import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string | null
          company: string | null
          message: string
          status: 'new' | 'read' | 'replied'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone?: string | null
          company?: string | null
          message: string
          status?: 'new' | 'read' | 'replied'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string | null
          company?: string | null
          message?: string
          status?: 'new' | 'read' | 'replied'
        }
      }
      enrollments: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string
          course: string
          message: string | null
          status: 'pending' | 'confirmed' | 'completed'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone: string
          course: string
          message?: string | null
          status?: 'pending' | 'confirmed' | 'completed'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string
          course?: string
          message?: string | null
          status?: 'pending' | 'confirmed' | 'completed'
        }
      }
      newsletter_subscribers: {
        Row: {
          id: string
          created_at: string
          email: string
          subscribed: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          subscribed?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          subscribed?: boolean
        }
      }
      quote_requests: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string | null
          company: string | null
          service: string
          budget: string | null
          message: string
          status: 'new' | 'contacted' | 'quoted' | 'closed'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone?: string | null
          company?: string | null
          service: string
          budget?: string | null
          message: string
          status?: 'new' | 'contacted' | 'quoted' | 'closed'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string | null
          company?: string | null
          service?: string
          budget?: string | null
          message?: string
          status?: 'new' | 'contacted' | 'quoted' | 'closed'
        }
      }
    }
  }
}
