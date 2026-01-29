import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { generateId } from '@/lib/supabase-admin'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const isActive = searchParams.get('is_active')
    const search = searchParams.get('search')
    const lowStock = searchParams.get('low_stock')

    let query = supabase.from('products').select('*', { count: 'exact' }).order('created_at', { ascending: false })

    if (category) query = query.eq('category_id', category)
    if (isActive !== null) query = query.eq('is_active', isActive === 'true')
    if (search) query = query.or(`name.ilike.%${search}%,sku.ilike.%${search}%,brand.ilike.%${search}%`)
    if (lowStock === 'true') query = query.lte('quantity_in_stock', supabase.rpc('reorder_level'))

    const { data, error, count } = await query
    if (error) throw error
    return NextResponse.json({ data, count })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const productData = { ...body, sku: body.sku || generateId('SKU'), is_active: body.is_active ?? true, quantity_in_stock: body.quantity_in_stock || 0, reorder_level: body.reorder_level || 5, currency: body.currency || 'USD', unit: body.unit || 'piece', created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
    const { data, error } = await supabase.from('products').insert([productData]).select().single()
    if (error) throw error
    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
  }
}
