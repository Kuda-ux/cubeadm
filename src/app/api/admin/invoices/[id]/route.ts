import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { data, error } = await supabase.from('invoices').select('*, clients(*), invoice_items(*)').eq('id', params.id).single()
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch invoice' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const updateData = { ...body, updated_at: new Date().toISOString() }
    if (body.total && body.amount_paid !== undefined) {
      updateData.balance_due = body.total - body.amount_paid
    }
    const { data, error } = await supabase.from('invoices').update(updateData).eq('id', params.id).select().single()
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update invoice' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { error } = await supabase.from('invoices').delete().eq('id', params.id)
    if (error) throw error
    return NextResponse.json({ message: 'Invoice deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete invoice' }, { status: 500 })
  }
}
