import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const search = searchParams.get('search')

    let query = supabase.from('suppliers').select('*', { count: 'exact' }).order('created_at', { ascending: false })

    if (status && status !== 'all') query = query.eq('status', status)
    if (search) query = query.or(`name.ilike.%${search}%,contact_person.ilike.%${search}%,email.ilike.%${search}%`)

    const { data, error, count } = await query
    if (error) throw error
    return NextResponse.json({ data, count })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch suppliers' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { data, error } = await supabase.from('suppliers').insert([{ ...body, status: body.status || 'active', created_at: new Date().toISOString(), updated_at: new Date().toISOString() }]).select().single()
    if (error) throw error
    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create supplier' }, { status: 500 })
  }
}
