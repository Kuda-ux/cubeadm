import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'CubeADM - Technology Training & IT Solutions Zimbabwe'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #01124b 0%, #020c2d 50%, #01124b 100%)',
          position: 'relative',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(0,92,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,92,255,0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(0,92,255,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
          }}
        >
          <div
            style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #005CFF 0%, #00D4FF 100%)',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '60px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            C
          </div>
        </div>

        {/* Company name */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #005CFF 0%, #00D4FF 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '20px',
          }}
        >
          CubeADM
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            color: 'white',
            marginBottom: '10px',
          }}
        >
          Technology Training & IT Solutions
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: '24px',
            color: '#00D4FF',
          }}
        >
          Zimbabwe | Southern Africa
        </div>

        {/* Services */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '40px',
          }}
        >
          {['Cybersecurity', 'Cloud Computing', 'IT Training', 'Managed IT'].map((service) => (
            <div
              key={service}
              style={{
                padding: '10px 20px',
                background: 'rgba(0,92,255,0.2)',
                border: '1px solid rgba(0,92,255,0.3)',
                borderRadius: '20px',
                color: 'white',
                fontSize: '18px',
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
