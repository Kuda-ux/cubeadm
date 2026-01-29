import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const employeeId = searchParams.get('employee_id')
    const month = searchParams.get('month')

    let query = supabase.from('payroll').select('*, employees(first_name, last_name, position)', { count: 'exact' }).order('created_at', { ascending: false })

    if (status && status !== 'all') query = query.eq('status', status)
    if (employeeId) query = query.eq('employee_id', employeeId)
    if (month) query = query.gte('pay_period_start', `${month}-01`).lte('pay_period_end', `${month}-31`)

    const { data, error, count } = await query
    if (error) throw error
    return NextResponse.json({ data, count })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch payroll' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const netSalary = (body.basic_salary || 0) + (body.allowances || 0) - (body.deductions || 0) - (body.tax || 0)
    const payrollData = { ...body, net_salary: netSalary, status: body.status || 'pending', created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
    const { data, error } = await supabase.from('payroll').insert([payrollData]).select().single()
    if (error) throw error
    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create payroll record' }, { status: 500 })
  }
}
