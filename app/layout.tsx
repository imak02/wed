import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Tangerine, Tiro_Devanagari_Hindi, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-tangerine',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
})

const tiroDevanagari = Tiro_Devanagari_Hindi({
  subsets: ['devanagari'],
  weight: ['400'],
  variable: '--font-devanagari',
})

export const metadata: Metadata = {
  title: 'Smriti & Asbin | Wedding Invitation',
  description: 'You are cordially invited to celebrate the sacred union of Smriti Khatiwada and Asbin Khanal. Join us for a beautiful Hindu Nepali wedding celebration.',
  keywords: ['wedding', 'invitation', 'Smriti', 'Asbin', 'Hindu wedding', 'Nepali wedding'],
  authors: [{ name: 'Smriti & Asbin' }],
  openGraph: {
    title: 'Smriti & Asbin | Wedding Invitation',
    description: 'Two Souls, One Sacred Journey - Join us for our wedding celebration',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#8B1A1A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${tangerine.variable} ${cinzel.variable} ${tiroDevanagari.variable} bg-background`}>
      <body className="font-serif antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
