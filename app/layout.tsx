import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = 'https://ernestniiquao.up.railway.app/'
const imageUrl = `${siteUrl}/professional-african-man-headshot-business.jpg`

export const metadata: Metadata = {
  title: 'Ernest Nii Quao - ATS CV Writing & LinkedIn Optimization Expert | Get Hired',
  description: 'Transform your career with expert CV writing and LinkedIn optimization by Ernest Nii Quao. ATS-friendly resumes, strategic positioning, and 89% interview success rate. 9,500+ clients hired.',
  keywords: ['CV writing', 'resume writing', 'LinkedIn optimization', 'ATS resume', 'career coaching', 'job search help'],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Ernest Nii Quao | CV & LinkedIn Expert',
    title: 'Ernest Nii Quao - Get Your Dream Job With a Professional CV',
    description: 'Expert CV writing and LinkedIn optimization. 89% interview rate. 9,500+ successful clients. ATS-friendly resumes that get you noticed.',
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: 'Ernest Nii Quao - Professional CV Writer & Career Coach',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ernest Nii Quao - Professional CV Writing & LinkedIn Optimization',
    description: 'Transform your career with expert CV writing. 89% interview success rate. Get hired faster.',
    images: [imageUrl],
    creator: '@ernestniiquao',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased dark">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
