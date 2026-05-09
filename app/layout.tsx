import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScroll } from '@/components/ui/smooth-scroll'
import './globals.css'

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-tech',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lumense | Webbyrå & Designbyrå i Sverige – Web & Graphic Design',
  description:
    'Lumense är en designbyrå och webbyrå i Sverige. Vi skapar varumärkesidentitet, webbdesign, grafisk design och motion design som gör avtryck. Kontakta oss idag.',
  keywords: [
    'webbyrå',
    'designbyrå',
    'grafisk design',
    'motion design',
    'varumärkesidentitet',
    'web design Sweden',
    'graphic design agency Sweden',
    'motion design studio Sweden',
  ],
  generator: 'Lumense',
  alternates: {
    canonical: 'https://lumense.xyz/',
    languages: {
      sv: 'https://lumense.xyz/',
      en: 'https://lumense.xyz/',
      'x-default': 'https://lumense.xyz/',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Lumense | Webbyrå & Designbyrå i Sverige',
    description:
      'Lumense är en designbyrå och webbyrå i Sverige. Vi skapar varumärkesidentitet, webbdesign, grafisk design och motion design som gör avtryck.',
    url: 'https://lumense.xyz',
    siteName: 'Lumense',
    images: [{ url: 'https://lumense.xyz/og-image.png' }],
    locale: 'sv_SE',
    alternateLocale: ['en_US'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumense | Webbyrå & Designbyrå i Sverige',
    description:
      'Designbyrå och webbyrå i Sverige. Varumärkesidentitet, webbdesign, grafisk design och motion design.',
    images: ['https://lumense.xyz/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/logolumense-light.svg', media: '(prefers-color-scheme: light)', type: 'image/svg+xml' },
      { url: '/logolumense-dark.svg', media: '(prefers-color-scheme: dark)', type: 'image/svg+xml' },
      { url: '/logolumense.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lumense',
  url: 'https://lumense.xyz',
  logo: 'https://lumense.xyz/logolumense.svg',
  description:
    'Designbyrå och webbyrå i Sverige specialiserad på varumärkesidentitet, webbdesign, grafisk design och motion design.',
  address: { '@type': 'PostalAddress', addressCountry: 'SE' },
  sameAs: [],
  serviceArea: { '@type': 'Country', name: 'Sweden' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Design Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Webbdesign',
          description: 'Professionell webbdesign och webbutveckling för företag i Sverige',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Grafisk Design',
          description: 'Grafisk design och visuell kommunikation för varumärken',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Motion Design',
          description: 'Motion design och animerat innehåll för digitala plattformar',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Varumärkesidentitet',
          description: 'Komplett varumärkesidentitet inklusive logotyp, färgpalett och grafisk profil',
        },
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#0c0b09',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground selection:bg-accent selection:text-accent-foreground">
        <SmoothScroll>{children}</SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
