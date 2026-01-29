import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { data, error } = await supabase.from('projects').select('*, clients(*)').eq('id', params.id).single()
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { data, error } = await supabase.from('projects').update({ ...body, updated_at: new Date().toISOString() }).eq('id', params.id).select().single()
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { error } = await supabase.from('projects').delete().eq('id', params.id)
    if (error) throw error
    return NextResponse.json({ message: 'Project deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
  }
}
