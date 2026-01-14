import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { orderId, userEmail, userName, userPhone, company, items, total, notes } = body

    const itemsList = items.map((item: { name: string; quantity: number; price: number }) => 
      `- ${item.name} x${item.quantity} - $${item.price.toLocaleString()}`
    ).join('\n')

    const emailContent = `
New Order Request from CubeADM Store

Order ID: ${orderId}
Date: ${new Date().toLocaleString()}

Customer Details:
- Name: ${userName}
- Email: ${userEmail}
- Phone: ${userPhone || 'Not provided'}
- Company: ${company || 'Not provided'}

Order Items:
${itemsList}

Total: $${total.toLocaleString()}

Notes: ${notes || 'None'}

---
This order was placed through the CubeADM online store.
Please contact the customer to confirm pricing and availability.
    `.trim()

    console.log('Order notification email content:')
    console.log(emailContent)
    console.log('Would be sent to: info@cubeadm.co.zw')

    return NextResponse.json({ 
      success: true, 
      message: 'Order notification logged. Email integration pending setup.' 
    })
  } catch (error) {
    console.error('Error processing order notification:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process order notification' },
      { status: 500 }
    )
  }
}
