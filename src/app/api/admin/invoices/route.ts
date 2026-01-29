import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { generateId } from '@/lib/supabase-admin'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const clientId = searchParams.get('client_id')

    let query = supabase.from('invoices').select('*, clients(company_name)', { count: 'exact' }).order('created_at', { ascending: false })

    if (status && status !== 'all') query = query.eq('status', status)
    if (clientId) query = query.eq('client_id', clientId)

    const { data, error, count } = await query
    if (error) throw error
    return NextResponse.json({ data, count })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch invoices' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const invoiceData = { ...body, invoice_number: generateId('INV'), status: body.status || 'draft', currency: body.currency || 'USD', invoice_date: body.invoice_date || new Date().toISOString().split('T')[0], balance_due: body.total - (body.amount_paid || 0), created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
    const { data, error } = await supabase.from('invoices').insert([invoiceData]).select().single()
    if (error) throw error
    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create invoice' }, { status: 500 })
  }
}
