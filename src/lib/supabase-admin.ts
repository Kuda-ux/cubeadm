import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Admin client with service role for server-side operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

// Types for CIMS tables
export interface Student {
  id: string
  student_number: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  date_of_birth?: string
  gender?: string
  national_id?: string
  address?: string
  city?: string
  country: string
  education_level?: string
  occupation?: string
  employer?: string
  emergency_contact_name?: string
  emergency_contact_phone?: string
  photo_url?: string
  status: 'active' | 'inactive' | 'graduated' | 'suspended'
  notes?: string
  created_at: string
  updated_at: string
}

export interface Course {
  id: string
  name: string
  code?: string
  description?: string
  category?: string
  duration_hours?: number
  duration_weeks?: number
  price?: number
  currency: string
  certification_body?: string
  prerequisites?: string
  max_students?: number
  is_active: boolean
  image_url?: string
  created_at: string
  updated_at: string
}

export interface TrainingClass {
  id: string
  course_id: string
  trainer_id?: string
  name?: string
  start_date: string
  end_date?: string
  room?: string
  max_students?: number
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled'
  notes?: string
  created_at: string
  course?: Course
  trainer?: Trainer
}

export interface Trainer {
  id: string
  employee_id?: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  specializations?: string[]
  bio?: string
  hourly_rate?: number
  photo_url?: string
  status: 'active' | 'inactive'
  created_at: string
}

export interface Certification {
  id: string
  student_id: string
  course_id: string
  certificate_number: string
  issue_date: string
  expiry_date?: string
  grade?: string
  score?: number
  status: 'issued' | 'pending' | 'revoked'
  certificate_url?: string
  created_at: string
  student?: Student
  course?: Course
}

export interface Client {
  id: string
  company_name: string
  contact_person?: string
  email?: string
  phone?: string
  address?: string
  city?: string
  country: string
  industry?: string
  website?: string
  tax_id?: string
  payment_terms?: number
  credit_limit?: number
  status: 'active' | 'inactive'
  notes?: string
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  client_id?: string
  name: string
  code?: string
  description?: string
  type?: string
  status: 'planning' | 'in_progress' | 'on_hold' | 'completed' | 'cancelled'
  priority: 'low' | 'medium' | 'high' | 'critical'
  start_date?: string
  end_date?: string
  deadline?: string
  budget?: number
  actual_cost?: number
  progress: number
  project_manager_id?: string
  technologies?: string[]
  repository_url?: string
  staging_url?: string
  production_url?: string
  created_at: string
  updated_at: string
  client?: Client
}

export interface ProjectTask {
  id: string
  project_id: string
  parent_task_id?: string
  title: string
  description?: string
  assigned_to?: string
  status: 'todo' | 'in_progress' | 'review' | 'completed'
  priority: 'low' | 'medium' | 'high' | 'critical'
  estimated_hours?: number
  actual_hours?: number
  start_date?: string
  due_date?: string
  completed_at?: string
  tags?: string[]
  created_at: string
  updated_at: string
  project?: Project
}

export interface SupportTicket {
  id: string
  ticket_number: string
  client_id?: string
  project_id?: string
  subject: string
  description?: string
  category?: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  status: 'open' | 'in_progress' | 'resolved' | 'closed'
  assigned_to?: string
  sla_deadline?: string
  resolved_at?: string
  resolution?: string
  satisfaction_rating?: number
  created_at: string
  updated_at: string
  client?: Client
  project?: Project
}

export interface Product {
  id: string
  category_id?: string
  sku: string
  name: string
  description?: string
  brand?: string
  model?: string
  specifications?: Record<string, unknown>
  cost_price?: number
  selling_price?: number
  currency: string
  quantity_in_stock: number
  reorder_level: number
  unit: string
  warranty_months?: number
  image_url?: string
  images?: string[]
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Supplier {
  id: string
  name: string
  contact_person?: string
  email?: string
  phone?: string
  address?: string
  city?: string
  country?: string
  payment_terms?: number
  tax_id?: string
  bank_details?: Record<string, unknown>
  status: 'active' | 'inactive'
  notes?: string
  created_at: string
  updated_at: string
}

export interface SalesOrder {
  id: string
  order_number: string
  client_id?: string
  order_date: string
  delivery_date?: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  subtotal?: number
  tax?: number
  discount?: number
  total?: number
  payment_status: 'unpaid' | 'partial' | 'paid'
  shipping_address?: string
  notes?: string
  created_by?: string
  created_at: string
  updated_at: string
  client?: Client
  items?: SalesOrderItem[]
}

export interface SalesOrderItem {
  id: string
  sales_order_id: string
  product_id: string
  quantity: number
  unit_price?: number
  discount?: number
  total_price?: number
  created_at: string
  product?: Product
}

export interface Invoice {
  id: string
  invoice_number: string
  client_id?: string
  student_id?: string
  invoice_date: string
  due_date?: string
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled'
  subtotal?: number
  tax?: number
  discount?: number
  total?: number
  amount_paid?: number
  balance_due?: number
  currency: string
  notes?: string
  terms?: string
  reference_type?: string
  reference_id?: string
  created_by?: string
  created_at: string
  updated_at: string
  client?: Client
  student?: Student
}

export interface Payment {
  id: string
  payment_number: string
  invoice_id?: string
  client_id?: string
  student_id?: string
  amount: number
  currency: string
  payment_method?: string
  payment_date: string
  reference?: string
  status: 'pending' | 'completed' | 'failed' | 'refunded'
  notes?: string
  received_by?: string
  created_at: string
}

export interface Expense {
  id: string
  expense_number: string
  category?: string
  description: string
  amount: number
  currency: string
  expense_date: string
  vendor?: string
  payment_method?: string
  receipt_url?: string
  status: 'pending' | 'approved' | 'rejected' | 'paid'
  approved_by?: string
  submitted_by?: string
  project_id?: string
  notes?: string
  created_at: string
  updated_at: string
}

export interface Lead {
  id: string
  source?: string
  first_name?: string
  last_name?: string
  email?: string
  phone?: string
  company?: string
  job_title?: string
  interest?: string
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'won' | 'lost'
  score: number
  assigned_to?: string
  notes?: string
  converted_to_client_id?: string
  converted_to_student_id?: string
  converted_at?: string
  created_at: string
  updated_at: string
}

export interface Employee {
  id: string
  user_id?: string
  employee_number: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  date_of_birth?: string
  gender?: string
  national_id?: string
  address?: string
  city?: string
  country: string
  department?: string
  position?: string
  employment_type?: string
  hire_date?: string
  contract_end_date?: string
  salary?: number
  bank_name?: string
  bank_account?: string
  emergency_contact_name?: string
  emergency_contact_phone?: string
  photo_url?: string
  status: 'active' | 'inactive' | 'on_leave' | 'terminated'
  created_at: string
  updated_at: string
}

export interface LeaveRequest {
  id: string
  employee_id: string
  leave_type: string
  start_date: string
  end_date: string
  days?: number
  reason?: string
  status: 'pending' | 'approved' | 'rejected'
  approved_by?: string
  approved_at?: string
  notes?: string
  created_at: string
  updated_at: string
  employee?: Employee
}

export interface Payroll {
  id: string
  employee_id: string
  pay_period_start: string
  pay_period_end: string
  basic_salary?: number
  allowances?: number
  deductions?: number
  tax?: number
  net_salary?: number
  payment_date?: string
  payment_method?: string
  status: 'pending' | 'processed' | 'paid'
  notes?: string
  created_at: string
  updated_at: string
  employee?: Employee
}

export interface EmployeeAttendance {
  id: string
  employee_id: string
  date: string
  check_in?: string
  check_out?: string
  status: 'present' | 'absent' | 'late' | 'leave'
  notes?: string
  created_at: string
  employee?: Employee
}

// Helper function to generate unique IDs
export function generateId(prefix: string): string {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substring(2, 8)
  return `${prefix}-${timestamp}${random}`.toUpperCase()
}
