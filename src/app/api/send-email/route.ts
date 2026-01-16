import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { getConfirmationEmailHtml, getConfirmationEmailText } from '@/lib/email-templates'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, service } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const serviceName = getServiceName(service)

    const { data, error } = await resend.emails.send({
      from: 'CubeADM <noreply@cubeadm.co.zw>',
      to: [email],
      subject: '✅ We Received Your Message - CubeADM',
      html: getConfirmationEmailHtml(name, serviceName),
      text: getConfirmationEmailText(name, serviceName),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Email API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function getServiceName(service: string): string {
  const serviceMap: Record<string, string> = {
    'training': 'Technology Training',
    'it-solutions': 'IT Solutions',
    'cybersecurity': 'Cybersecurity Services',
    'cloud': 'Cloud Services',
    'managed-it': 'Managed IT Services',
    'consulting': 'IT Consulting',
    'other': 'General Inquiry',
  }
  return serviceMap[service] || 'our services'
}
