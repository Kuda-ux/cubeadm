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
      products: {
        Row: {
          id: string
          created_at: string
          name: string
          category: 'computing' | 'networking' | 'servers' | 'cloud'
          brand: string
          description: string
          image_url: string
          price: number
          rating: number
          in_stock: boolean
          featured: boolean
          specs: Record<string, unknown> | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          category: 'computing' | 'networking' | 'servers' | 'cloud'
          brand: string
          description: string
          image_url: string
          price: number
          rating?: number
          in_stock?: boolean
          featured?: boolean
          specs?: Record<string, unknown> | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          category?: 'computing' | 'networking' | 'servers' | 'cloud'
          brand?: string
          description?: string
          image_url?: string
          price?: number
          rating?: number
          in_stock?: boolean
          featured?: boolean
          specs?: Record<string, unknown> | null
        }
      }
      cart_items: {
        Row: {
          id: string
          created_at: string
          user_id: string
          product_id: string
          quantity: number
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          product_id: string
          quantity?: number
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          product_id?: string
          quantity?: number
        }
      }
      orders: {
        Row: {
          id: string
          created_at: string
          user_id: string
          user_email: string
          user_name: string
          user_phone: string | null
          company: string | null
          items: Array<{ product_id: string; name: string; price: number; quantity: number }>
          total: number
          status: 'pending' | 'confirmed' | 'processing' | 'completed' | 'cancelled'
          notes: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          user_email: string
          user_name: string
          user_phone?: string | null
          company?: string | null
          items: Array<{ product_id: string; name: string; price: number; quantity: number }>
          total: number
          status?: 'pending' | 'confirmed' | 'processing' | 'completed' | 'cancelled'
          notes?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          user_email?: string
          user_name?: string
          user_phone?: string | null
          company?: string | null
          items?: Array<{ product_id: string; name: string; price: number; quantity: number }>
          total?: number
          status?: 'pending' | 'confirmed' | 'processing' | 'completed' | 'cancelled'
          notes?: string | null
        }
      }
    }
  }
}

export type Product = Database['public']['Tables']['products']['Row']
export type CartItem = Database['public']['Tables']['cart_items']['Row'] & { product?: Product }
export type Order = Database['public']['Tables']['orders']['Row']
