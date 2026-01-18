export function getConfirmationEmailHtml(name: string, service: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting CubeADM</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #005CFF 0%, #00D4FF 100%); padding: 40px 30px; text-align: center;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td align="center">
                    <div style="width: 80px; height: 80px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%; display: inline-block; line-height: 80px;">
                      <span style="font-size: 40px;">✉️</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 20px;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Message Received!</h1>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 10px;">
                    <p style="margin: 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">Thank you for reaching out to CubeADM</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td>
                    <p style="margin: 0 0 20px; color: #1a1a2e; font-size: 18px; font-weight: 600;">
                      Hello ${name}! 👋
                    </p>
                    <p style="margin: 0 0 20px; color: #4a5568; font-size: 16px; line-height: 1.6;">
                      We've successfully received your inquiry about <strong style="color: #005CFF;">${service}</strong>. Our team is already reviewing your message and will get back to you within <strong>24 hours</strong>.
                    </p>
                  </td>
                </tr>

                <!-- Info Box -->
                <tr>
                  <td style="padding: 25px 0;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%); border-radius: 12px; border-left: 4px solid #005CFF;">
                      <tr>
                        <td style="padding: 20px;">
                          <p style="margin: 0 0 10px; color: #005CFF; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                            What happens next?
                          </p>
                          <ul style="margin: 0; padding-left: 20px; color: #4a5568; font-size: 14px; line-height: 1.8;">
                            <li>Our team will review your inquiry</li>
                            <li>A specialist will be assigned to your request</li>
                            <li>You'll receive a detailed response within 24 hours</li>
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- CTA -->
                <tr>
                  <td style="padding: 10px 0 30px;">
                    <p style="margin: 0 0 15px; color: #4a5568; font-size: 16px; line-height: 1.6;">
                      Need immediate assistance? We're here to help!
                    </p>
                    <table role="presentation" style="border-collapse: collapse;">
                      <tr>
                        <td style="padding-right: 10px;">
                          <a href="https://wa.me/263782667295" style="display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #25D366 0%, #128C7E 100%); color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; border-radius: 8px;">
                            💬 Chat on WhatsApp
                          </a>
                        </td>
                        <td>
                          <a href="tel:+263782667295" style="display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #005CFF 0%, #00D4FF 100%); color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; border-radius: 8px;">
                            📞 Call Us Now
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Services -->
                <tr>
                  <td style="padding: 25px 0; border-top: 1px solid #e2e8f0;">
                    <p style="margin: 0 0 15px; color: #1a1a2e; font-size: 16px; font-weight: 600;">
                      Explore Our Services
                    </p>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="width: 50%; padding: 8px 8px 8px 0; vertical-align: top;">
                          <a href="https://cubeadm.co.zw/training" style="color: #005CFF; text-decoration: none; font-size: 14px;">🎓 IT Training Programs</a>
                        </td>
                        <td style="width: 50%; padding: 8px 0 8px 8px; vertical-align: top;">
                          <a href="https://cubeadm.co.zw/services/cybersecurity" style="color: #005CFF; text-decoration: none; font-size: 14px;">🔒 Cybersecurity Services</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 50%; padding: 8px 8px 8px 0; vertical-align: top;">
                          <a href="https://cubeadm.co.zw/services/cloud" style="color: #005CFF; text-decoration: none; font-size: 14px;">☁️ Cloud Solutions</a>
                        </td>
                        <td style="width: 50%; padding: 8px 0 8px 8px; vertical-align: top;">
                          <a href="https://cubeadm.co.zw/services/managed-it" style="color: #005CFF; text-decoration: none; font-size: 14px;">💼 Managed IT Services</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #01124b; padding: 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 5px; color: #ffffff; font-size: 18px; font-weight: 700;">CubeADM</p>
                    <p style="margin: 0 0 15px; color: rgba(255, 255, 255, 0.7); font-size: 12px;">Empowering Africa's Digital Future</p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 15px 0;">
                    <table role="presentation" style="border-collapse: collapse;">
                      <tr>
                        <td style="padding: 0 8px;">
                          <a href="https://cubeadm.co.zw" style="color: #00D4FF; text-decoration: none; font-size: 13px;">Website</a>
                        </td>
                        <td style="color: rgba(255, 255, 255, 0.3);">|</td>
                        <td style="padding: 0 8px;">
                          <a href="mailto:info@cubeadm.co.zw" style="color: #00D4FF; text-decoration: none; font-size: 13px;">Email</a>
                        </td>
                        <td style="color: rgba(255, 255, 255, 0.3);">|</td>
                        <td style="padding: 0 8px;">
                          <a href="tel:+263782667295" style="color: #00D4FF; text-decoration: none; font-size: 13px;">+263 78 266 7295</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <p style="margin: 0; color: rgba(255, 255, 255, 0.5); font-size: 11px;">
                      Harare, Zimbabwe | © ${new Date().getFullYear()} CubeADM. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

export function getConfirmationEmailText(name: string, service: string): string {
  return `
Hello ${name}!

Thank you for contacting CubeADM!

We've successfully received your inquiry about ${service}. Our team is already reviewing your message and will get back to you within 24 hours.

What happens next?
- Our team will review your inquiry
- A specialist will be assigned to your request
- You'll receive a detailed response within 24 hours

Need immediate assistance?
- WhatsApp: https://wa.me/263782667295
- Phone: +263 78 266 7295
- Email: info@cubeadm.co.zw

Visit our website: https://cubeadm.co.zw

---
CubeADM - Empowering Africa's Digital Future
Harare, Zimbabwe
© ${new Date().getFullYear()} CubeADM. All rights reserved.
  `
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  message: string
}

export function getNotificationEmailHtml(data: ContactFormData, serviceName: string): string {
  const timestamp = new Date().toLocaleString('en-ZW', { 
    timeZone: 'Africa/Harare',
    dateStyle: 'full',
    timeStyle: 'short'
  })
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #005CFF 0%, #00D4FF 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">🔔 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">${timestamp}</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 30px;">
              <!-- Contact Details -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 15px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #005CFF;">
                    <h2 style="margin: 0 0 15px; color: #1a1a2e; font-size: 18px; font-weight: 600;">📋 Contact Details</h2>
                    
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 120px;">Name:</td>
                        <td style="padding: 8px 0; color: #1a1a2e; font-size: 14px; font-weight: 600;">${data.name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email:</td>
                        <td style="padding: 8px 0;">
                          <a href="mailto:${data.email}" style="color: #005CFF; text-decoration: none; font-size: 14px; font-weight: 600;">${data.email}</a>
                        </td>
                      </tr>
                      ${data.phone ? `
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Phone:</td>
                        <td style="padding: 8px 0;">
                          <a href="tel:${data.phone}" style="color: #005CFF; text-decoration: none; font-size: 14px; font-weight: 600;">${data.phone}</a>
                        </td>
                      </tr>
                      ` : ''}
                      ${data.company ? `
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Company:</td>
                        <td style="padding: 8px 0; color: #1a1a2e; font-size: 14px; font-weight: 600;">${data.company}</td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Service:</td>
                        <td style="padding: 8px 0;">
                          <span style="display: inline-block; padding: 4px 12px; background: linear-gradient(135deg, #005CFF 0%, #00D4FF 100%); color: #ffffff; font-size: 12px; font-weight: 600; border-radius: 20px;">${serviceName}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 15px; background-color: #fefce8; border-radius: 8px; border-left: 4px solid #eab308;">
                    <h2 style="margin: 0 0 10px; color: #1a1a2e; font-size: 18px; font-weight: 600;">💬 Message</h2>
                    <p style="margin: 0; color: #4a5568; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                  </td>
                </tr>
              </table>

              <!-- Quick Actions -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 25px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${data.email}?subject=Re: Your CubeADM Inquiry - ${serviceName}" style="display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #005CFF 0%, #00D4FF 100%); color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; border-radius: 8px; margin-right: 10px;">
                      ✉️ Reply to ${data.name}
                    </a>
                    ${data.phone ? `
                    <a href="tel:${data.phone}" style="display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #25D366 0%, #128C7E 100%); color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; border-radius: 8px;">
                      📞 Call Now
                    </a>
                    ` : ''}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #01124b; padding: 20px; text-align: center;">
              <p style="margin: 0; color: rgba(255, 255, 255, 0.7); font-size: 12px;">
                This is an automated notification from CubeADM Contact Form
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

export function getNotificationEmailText(data: ContactFormData, serviceName: string): string {
  const timestamp = new Date().toLocaleString('en-ZW', { 
    timeZone: 'Africa/Harare',
    dateStyle: 'full',
    timeStyle: 'short'
  })
  
  return `
🔔 NEW CONTACT FORM SUBMISSION
${timestamp}

📋 CONTACT DETAILS
------------------
Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.company ? `Company: ${data.company}` : ''}
Service: ${serviceName}

💬 MESSAGE
----------
${data.message}

---
Reply to: ${data.email}
${data.phone ? `Call: ${data.phone}` : ''}

This is an automated notification from CubeADM Contact Form.
  `
}
