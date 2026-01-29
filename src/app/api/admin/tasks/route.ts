import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const projectId = searchParams.get('project_id')
    const assignedTo = searchParams.get('assigned_to')

    let query = supabase.from('project_tasks').select('*, projects(name)', { count: 'exact' }).order('created_at', { ascending: false })

    if (status && status !== 'all') query = query.eq('status', status)
    if (projectId) query = query.eq('project_id', projectId)
    if (assignedTo) query = query.eq('assigned_to', assignedTo)

    const { data, error, count } = await query
    if (error) throw error
    return NextResponse.json({ data, count })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const taskData = { ...body, status: body.status || 'todo', priority: body.priority || 'medium', created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
    const { data, error } = await supabase.from('project_tasks').insert([taskData]).select().single()
    if (error) throw error
    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 })
  }
}
