import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { generateId } from '@/lib/supabase-admin'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const priority = searchParams.get('priority')
    const clientId = searchParams.get('client_id')

    let query = supabase.from('support_tickets').select('*, clients(company_name)', { count: 'exact' }).order('created_at', { ascending: false })

    if (status && status !== 'all') query = query.eq('status', status)
    if (priority) query = query.eq('priority', priority)
    if (clientId) query = query.eq('client_id', clientId)

    const { data, error, count } = await query
    if (error) throw error
    return NextResponse.json({ data, count })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tickets' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const ticketData = { ...body, ticket_number: generateId('TKT'), status: body.status || 'open', priority: body.priority || 'medium', created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
    const { data, error } = await supabase.from('support_tickets').insert([ticketData]).select().single()
    if (error) throw error
    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create ticket' }, { status: 500 })
  }
}
