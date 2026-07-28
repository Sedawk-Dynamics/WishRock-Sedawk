import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Wishrock Infratech LLP | Real Estate & Infrastructure Solutions',
  description:
    'Wishrock Infratech LLP is a Hyderabad-based premium real estate and infrastructure company offering property consulting, open plot sales, residential apartments, land development, excavation, and civil contracting services. Your Vision. Our Commitment.',
  keywords: [
    'Wishrock Infratech',
    'real estate Hyderabad',
    'open plots Telangana',
    'residential apartments',
    'civil contracting',
    'excavation services',
    'land development',
    'infrastructure solutions',
    'property investment',
  ],
  authors: [{ name: 'Wishrock Infratech LLP' }],
  creator: 'Wishrock Infratech LLP',
  publisher: 'Wishrock Infratech LLP',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.wishrockinfratech.com',
    siteName: 'Wishrock Infratech LLP',
    title: 'Wishrock Infratech LLP | Real Estate & Infrastructure Solutions',
    description:
      'Premium real estate and infrastructure solutions in Hyderabad. Building Trust. Creating Value. Delivering Excellence.',
    images: [
      {
        url: '/images/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Wishrock Infratech LLP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wishrock Infratech LLP',
    description: 'Premium real estate and infrastructure solutions in Hyderabad.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#D42B2B',
  width: 'device-width',
  initialScale: 1,
}

export const icon = '/favicon.ico'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${_inter.variable} ${_playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
