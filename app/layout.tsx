import React from "react"
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Akbar Ali | QA Engineer & Software Quality Assurance',
  description:
    'Portfolio of Akbar Ali — Software Engineering graduate from Superior University, Lahore, specializing in Quality Assurance, manual & API testing, and defect management. Open to QA Intern roles.',
  generator: 'v0.app',
  keywords: [
    'Akbar Ali',
    'QA Engineer',
    'Quality Assurance',
    'Software Testing',
    'Manual Testing',
    'API Testing',
    'Superior University',
    'Lahore',
    'QA Intern',
  ],
  openGraph: {
    title: 'Akbar Ali | QA Engineer & Software Quality Assurance',
    description:
      'Software Engineering graduate specializing in Quality Assurance, testing, and defect management. Open to QA Intern roles.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${geistMono.variable} bg-background scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
