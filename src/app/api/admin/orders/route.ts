import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { generateId } from '@/lib/supabase-admin'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const clientId = searchParams.get('client_id')

    let query = supabase.from('sales_orders').select('*, clients(company_name)', { count: 'exact' }).order('created_at', { ascending: false })

    if (status && status !== 'all') query = query.eq('status', status)
    if (clientId) query = query.eq('client_id', clientId)

    const { data, error, count } = await query
    if (error) throw error
    return NextResponse.json({ data, count })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const orderData = { ...body, order_number: generateId('ORD'), status: body.status || 'pending', payment_status: body.payment_status || 'unpaid', order_date: body.order_date || new Date().toISOString().split('T')[0], created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
    const { data, error } = await supabase.from('sales_orders').insert([orderData]).select().single()
    if (error) throw error
    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
  }
}
