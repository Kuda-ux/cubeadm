import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CubeADM - Technology Training & IT Solutions Zimbabwe',
    short_name: 'CubeADM',
    description: 'Leading provider of technology training, IT solutions, cybersecurity services, and digital transformation in Zimbabwe and Southern Africa. Expert IT training, managed services, and enterprise solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#01124b',
    theme_color: '#005CFF',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo-full.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
