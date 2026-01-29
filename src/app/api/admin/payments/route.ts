import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { generateId } from '@/lib/supabase-admin'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const invoiceId = searchParams.get('invoice_id')

    let query = supabase.from('payments').select('*, invoices(invoice_number), clients(company_name)', { count: 'exact' }).order('created_at', { ascending: false })

    if (status && status !== 'all') query = query.eq('status', status)
    if (invoiceId) query = query.eq('invoice_id', invoiceId)

    const { data, error, count } = await query
    if (error) throw error
    return NextResponse.json({ data, count })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch payments' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const paymentData = { ...body, payment_number: generateId('PAY'), status: body.status || 'completed', currency: body.currency || 'USD', payment_date: body.payment_date || new Date().toISOString().split('T')[0], created_at: new Date().toISOString() }
    const { data, error } = await supabase.from('payments').insert([paymentData]).select().single()
    if (error) throw error
    
    // Update invoice if linked
    if (body.invoice_id) {
      const { data: invoice } = await supabase.from('invoices').select('amount_paid, total').eq('id', body.invoice_id).single()
      if (invoice) {
        const newAmountPaid = (invoice.amount_paid || 0) + body.amount
        const newStatus = newAmountPaid >= invoice.total ? 'paid' : 'sent'
        await supabase.from('invoices').update({ amount_paid: newAmountPaid, balance_due: invoice.total - newAmountPaid, status: newStatus, updated_at: new Date().toISOString() }).eq('id', body.invoice_id)
      }
    }
    
    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create payment' }, { status: 500 })
  }
}
