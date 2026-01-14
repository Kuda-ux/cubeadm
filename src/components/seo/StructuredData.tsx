export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://cubeadm.co.zw/#organization',
    name: 'CubeADM',
    alternateName: ['CubeADM Zimbabwe', 'CubeADM IT Solutions', 'CubeADM Technology Training'],
    url: 'https://cubeadm.co.zw',
    logo: {
      '@type': 'ImageObject',
      url: 'https://cubeadm.co.zw/logo.png',
      width: 512,
      height: 512,
    },
    image: 'https://cubeadm.co.zw/og-image.png',
    description: 'CubeADM is Zimbabwe\'s leading technology training academy and IT solutions provider. We offer comprehensive cybersecurity training, cloud computing courses, managed IT services, and enterprise solutions for businesses across Southern Africa.',
    foundingDate: '2020',
    founders: [
      {
        '@type': 'Person',
        name: 'CubeADM Founders',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Harare',
      addressLocality: 'Harare',
      addressRegion: 'Harare',
      postalCode: '',
      addressCountry: 'ZW',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -17.8292,
      longitude: 31.0522,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+263-77-123-4567',
        contactType: 'customer service',
        email: 'info@cubeadm.co.zw',
        areaServed: ['ZW', 'ZA', 'BW', 'MZ', 'ZM', 'MW'],
        availableLanguage: ['English', 'Shona', 'Ndebele'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+263-77-123-4567',
        contactType: 'sales',
        email: 'sales@cubeadm.co.zw',
        areaServed: ['ZW', 'ZA', 'BW', 'MZ', 'ZM', 'MW'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+263-77-123-4567',
        contactType: 'technical support',
        email: 'support@cubeadm.co.zw',
        availableLanguage: 'English',
      },
    ],
    sameAs: [
      'https://www.facebook.com/cubeadm',
      'https://www.linkedin.com/company/cubeadm',
      'https://twitter.com/cubeadm',
      'https://www.instagram.com/cubeadm',
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'Zimbabwe',
      },
      {
        '@type': 'Country',
        name: 'South Africa',
      },
      {
        '@type': 'Country',
        name: 'Botswana',
      },
      {
        '@type': 'Country',
        name: 'Mozambique',
      },
      {
        '@type': 'Country',
        name: 'Zambia',
      },
      {
        '@type': 'Country',
        name: 'Malawi',
      },
    ],
    knowsAbout: [
      'Cybersecurity',
      'Cloud Computing',
      'IT Training',
      'Managed IT Services',
      'Network Infrastructure',
      'AWS',
      'Microsoft Azure',
      'Cisco Networking',
      'CompTIA Certifications',
      'Digital Transformation',
      'Enterprise IT Solutions',
      'IT Consulting',
    ],
    slogan: 'Empowering Africa\'s Digital Future',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'CubeADM Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'IT Training Courses',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Course',
                name: 'Cybersecurity Training Zimbabwe',
                description: 'Comprehensive cybersecurity courses including ethical hacking, penetration testing, and security certifications',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Course',
                name: 'Cloud Computing Training',
                description: 'AWS, Azure, and Google Cloud certification training courses',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Course',
                name: 'Networking Training',
                description: 'Cisco CCNA, CCNP, and CompTIA Network+ certification courses',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'IT Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Managed IT Services Zimbabwe',
                description: '24/7 IT support, monitoring, and maintenance services',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Cybersecurity Services',
                description: 'Penetration testing, security audits, and incident response',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Cloud Migration Services',
                description: 'AWS and Azure cloud migration and management',
              },
            },
          ],
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://cubeadm.co.zw/#localbusiness',
    name: 'CubeADM',
    image: 'https://cubeadm.co.zw/logo.png',
    url: 'https://cubeadm.co.zw',
    telephone: '+263-77-123-4567',
    email: 'info@cubeadm.co.zw',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Harare',
      addressLocality: 'Harare',
      addressRegion: 'Harare Province',
      addressCountry: 'ZW',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -17.8292,
      longitude: 31.0522,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://cubeadm.co.zw/#website',
    url: 'https://cubeadm.co.zw',
    name: 'CubeADM',
    description: 'Zimbabwe\'s leading technology training academy and IT solutions provider',
    publisher: {
      '@id': 'https://cubeadm.co.zw/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://cubeadm.co.zw/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-ZW',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({
  name,
  description,
  provider = 'CubeADM',
  areaServed = 'Zimbabwe',
  url,
}: {
  name: string
  description: string
  provider?: string
  areaServed?: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: 'https://cubeadm.co.zw',
    },
    areaServed: {
      '@type': 'Country',
      name: areaServed,
    },
    url,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function CourseSchema({
  name,
  description,
  provider = 'CubeADM',
  url,
}: {
  name: string
  description: string
  provider?: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: 'https://cubeadm.co.zw',
    },
    url,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['onsite', 'online'],
      courseWorkload: 'PT40H',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProductSchema({
  name,
  description,
  image,
  price,
  currency = 'USD',
  availability = 'InStock',
  brand,
  url,
}: {
  name: string
  description: string
  image: string
  price: number
  currency?: string
  availability?: string
  brand: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: currency,
      price,
      availability: `https://schema.org/${availability}`,
      seller: {
        '@type': 'Organization',
        name: 'CubeADM',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
