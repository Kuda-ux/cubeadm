# CubeADM - Technology Training & IT Solutions

A modern, futuristic website for CubeADM - a leading technology training and IT solutions provider in Zimbabwe and Africa.

## 🚀 Features

- **Modern Design**: Futuristic blue and white color palette with glowing neon accents
- **Responsive**: Mobile-first design that works on all devices
- **Fast Loading**: Optimized for Google Lighthouse and Core Web Vitals
- **SEO Optimized**: Built-in metadata, structured data, and semantic HTML
- **Interactive**: Smooth animations powered by CSS and Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: Framer Motion + CSS Animations

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind config
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/
│   ├── layout/
│   │   ├── Header.tsx   # Navigation header
│   │   └── Footer.tsx   # Site footer
│   └── sections/
│       ├── Hero.tsx         # Hero section with 3D cube
│       ├── About.tsx        # About CubeADM
│       ├── Services.tsx     # IT Services
│       ├── Training.tsx     # Training programs
│       ├── WhyChooseUs.tsx  # Why choose us
│       ├── Portfolio.tsx    # Case studies
│       ├── Testimonials.tsx # Client testimonials
│       ├── CTA.tsx          # Call to action
│       └── Contact.tsx      # Contact form
└── lib/
    └── utils.ts         # Utility functions
```

## 🎨 Brand Colors

- **Primary Blue**: #005CFF
- **Accent Blue**: #00D4FF
- **Dark Background**: #0A0E17
- **White**: #FFFFFF

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is optimized for deployment on Vercel:

```bash
npm run build
```

## 📄 License

© 2024 CubeADM. All rights reserved.
