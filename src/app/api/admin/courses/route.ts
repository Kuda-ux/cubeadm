import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET - Fetch all courses
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const isActive = searchParams.get('is_active')
    const search = searchParams.get('search')

    let query = supabase
      .from('courses')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })

    if (category) {
      query = query.eq('category', category)
    }

    if (isActive !== null) {
      query = query.eq('is_active', isActive === 'true')
    }

    if (search) {
      query = query.or(`name.ilike.%${search}%,code.ilike.%${search}%,description.ilike.%${search}%`)
    }

    const { data, error, count } = await query

    if (error) throw error

    return NextResponse.json({ data, count })
  } catch (error) {
    console.error('Error fetching courses:', error)
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    )
  }
}

// POST - Create new course
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const courseData = {
      ...body,
      is_active: body.is_active ?? true,
      currency: body.currency || 'USD',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    const { data, error } = await supabase
      .from('courses')
      .insert([courseData])
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    console.error('Error creating course:', error)
    return NextResponse.json(
      { error: 'Failed to create course' },
      { status: 500 }
    )
  }
}
