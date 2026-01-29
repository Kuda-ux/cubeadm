import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { data, error } = await supabase.from('leads').select('*').eq('id', params.id).single()
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch lead' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const updateData = { ...body, updated_at: new Date().toISOString() }
    if (body.status === 'won' && body.converted_to_client_id && !body.converted_at) {
      updateData.converted_at = new Date().toISOString()
    }
    const { data, error } = await supabase.from('leads').update(updateData).eq('id', params.id).select().single()
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { error } = await supabase.from('leads').delete().eq('id', params.id)
    if (error) throw error
    return NextResponse.json({ message: 'Lead deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete lead' }, { status: 500 })
  }
}
