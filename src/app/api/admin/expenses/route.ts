import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { generateId } from '@/lib/supabase-admin'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const category = searchParams.get('category')

    let query = supabase.from('expenses').select('*', { count: 'exact' }).order('created_at', { ascending: false })

    if (status && status !== 'all') query = query.eq('status', status)
    if (category) query = query.eq('category', category)

    const { data, error, count } = await query
    if (error) throw error
    return NextResponse.json({ data, count })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch expenses' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const expenseData = { ...body, expense_number: generateId('EXP'), status: body.status || 'pending', currency: body.currency || 'USD', expense_date: body.expense_date || new Date().toISOString().split('T')[0], created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
    const { data, error } = await supabase.from('expenses').insert([expenseData]).select().single()
    if (error) throw error
    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create expense' }, { status: 500 })
  }
}
