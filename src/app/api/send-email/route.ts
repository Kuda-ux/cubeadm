import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { 
  getConfirmationEmailHtml, 
  getConfirmationEmailText,
  getNotificationEmailHtml,
  getNotificationEmailText,
  ContactFormData
} from '@/lib/email-templates'

const BUSINESS_EMAIL = 'info@cubeadm.co.zw'

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const serviceName = getServiceName(service)
    
    const formData: ContactFormData = {
      name,
      email,
      phone,
      company,
      service,
      message: message || 'No message provided'
    }

    // Send confirmation email to the client
    const { error: clientError } = await resend.emails.send({
      from: 'CubeADM <onboarding@resend.dev>',
      to: [email],
      subject: '✅ We Received Your Message - CubeADM',
      html: getConfirmationEmailHtml(name, serviceName),
      text: getConfirmationEmailText(name, serviceName),
    })

    if (clientError) {
      console.error('Error sending client confirmation email:', clientError)
    }

    // Send notification email to CubeADM business email
    const { data, error: notificationError } = await resend.emails.send({
      from: 'CubeADM Website <onboarding@resend.dev>',
      to: [BUSINESS_EMAIL],
      replyTo: email,
      subject: `📩 New Inquiry: ${serviceName} - ${name}`,
      html: getNotificationEmailHtml(formData, serviceName),
      text: getNotificationEmailText(formData, serviceName),
    })

    if (notificationError) {
      console.error('Error sending notification email:', notificationError)
      return NextResponse.json(
        { error: 'Failed to send notification email' },
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
