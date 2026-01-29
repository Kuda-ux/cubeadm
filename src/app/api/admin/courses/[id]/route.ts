import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET - Fetch single course
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) throw error

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error fetching course:', error)
    return NextResponse.json(
      { error: 'Failed to fetch course' },
      { status: 500 }
    )
  }
}

// PUT - Update course
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    
    const { data, error } = await supabase
      .from('courses')
      .update({ ...body, updated_at: new Date().toISOString() })
      .eq('id', params.id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error updating course:', error)
    return NextResponse.json(
      { error: 'Failed to update course' },
      { status: 500 }
    )
  }
}

// DELETE - Delete course
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await supabase
      .from('courses')
      .delete()
      .eq('id', params.id)

    if (error) throw error

    return NextResponse.json({ message: 'Course deleted successfully' })
  } catch (error) {
    console.error('Error deleting course:', error)
    return NextResponse.json(
      { error: 'Failed to delete course' },
      { status: 500 }
    )
  }
}
