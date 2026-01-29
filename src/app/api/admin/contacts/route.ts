import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search')
    const type = searchParams.get('type')

    let query = supabaseAdmin
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })

    if (search) {
      query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,company.ilike.%${search}%`)
    }

    if (type) {
      query = query.eq('contact_type', type)
    }

    const { data, error } = await query

    if (error) {
      console.error('Error fetching contacts:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error in contacts GET:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { data, error } = await supabaseAdmin
      .from('contacts')
      .insert([{
        name: body.name,
        email: body.email,
        phone: body.phone,
        company: body.company,
        role: body.role,
        contact_type: body.contact_type || 'client',
        notes: body.notes,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
      .single()

    if (error) {
      console.error('Error creating contact:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error in contacts POST:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
