import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'OCR-javascrpipt - AI-powered OCR for Khmer and English',
  description: 'Extract text from images with AI-powered OCR supporting Khmer and English. Fast, accurate, and completely client-side.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: 'https://i.pinimg.com/1200x/ff/b2/6d/ffb26d996c734292f318a390c0308029.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'https://i.pinimg.com/1200x/ff/b2/6d/ffb26d996c734292f318a390c0308029.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'https://i.pinimg.com/1200x/ff/b2/6d/ffb26d996c734292f318a390c0308029.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: 'https://i.pinimg.com/1200x/ff/b2/6d/ffb26d996c734292f318a390c0308029.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
