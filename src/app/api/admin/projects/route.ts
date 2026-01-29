import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { generateId } from '@/lib/supabase-admin'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const clientId = searchParams.get('client_id')
    const search = searchParams.get('search')

    let query = supabase.from('projects').select('*, clients(company_name)', { count: 'exact' }).order('created_at', { ascending: false })

    if (status && status !== 'all') query = query.eq('status', status)
    if (clientId) query = query.eq('client_id', clientId)
    if (search) query = query.or(`name.ilike.%${search}%,code.ilike.%${search}%`)

    const { data, error, count } = await query
    if (error) throw error
    return NextResponse.json({ data, count })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const projectData = { ...body, code: body.code || generateId('PRJ'), status: body.status || 'planning', priority: body.priority || 'medium', progress: body.progress || 0, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
    const { data, error } = await supabase.from('projects').insert([projectData]).select().single()
    if (error) throw error
    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}
