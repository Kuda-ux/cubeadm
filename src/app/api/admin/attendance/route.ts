import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')
    const employeeId = searchParams.get('employee_id')
    const status = searchParams.get('status')

    let query = supabase.from('employee_attendance').select('*, employees(first_name, last_name, department)', { count: 'exact' }).order('date', { ascending: false })

    if (date) query = query.eq('date', date)
    if (employeeId) query = query.eq('employee_id', employeeId)
    if (status && status !== 'all') query = query.eq('status', status)

    const { data, error, count } = await query
    if (error) throw error
    return NextResponse.json({ data, count })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch attendance' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const attendanceData = { ...body, date: body.date || new Date().toISOString().split('T')[0], status: body.status || 'present', created_at: new Date().toISOString() }
    const { data, error } = await supabase.from('employee_attendance').insert([attendanceData]).select().single()
    if (error) throw error
    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to record attendance' }, { status: 500 })
  }
}
