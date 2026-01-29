import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { data, error } = await supabase.from('clients').select('*').eq('id', params.id).single()
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch client' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { data, error } = await supabase.from('clients').update({ ...body, updated_at: new Date().toISOString() }).eq('id', params.id).select().single()
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update client' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { error } = await supabase.from('clients').delete().eq('id', params.id)
    if (error) throw error
    return NextResponse.json({ message: 'Client deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete client' }, { status: 500 })
  }
}
