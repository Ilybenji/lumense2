import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Lumense — Grafisk designstudio',
  description:
    'Lumense är en grafisk designstudio som bygger varumärken, identiteter och digitala upplevelser för företag som vill synas i framtiden.',
  generator: 'Lumense',
  icons: {
    icon: [
      { url: '/logolumense-light.svg', media: '(prefers-color-scheme: light)', type: 'image/svg+xml' },
      { url: '/logolumense-dark.svg', media: '(prefers-color-scheme: dark)', type: 'image/svg+xml' },
      { url: '/logolumense.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
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
    <html lang="sv" className={`${display.variable} ${mono.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground selection:bg-accent selection:text-accent-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
