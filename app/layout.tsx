import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import  { Toaster } from 'react-hot-toast';

    export const metadata: Metadata = {
      title: 'Gulshan Ads',
      description: 'Gulshan Ads is a modern advertising platform for managing and showcasing ads efficiently.',
      applicationName: 'Gulshan Ads',
      authors: [{ name: 'Gulshan', url: 'https://gulshan.dev' }],
      keywords: ['ads', 'gulshan', 'advertising', 'nextjs', 'marketing', 'platform', 'digital ads'],
      creator: 'Gulshan',
      publisher: 'Gulshan',
      robots: 'index, follow',
      viewport: 'width=device-width, initial-scale=1',
      icons: [
        { rel: 'icon', url: '/favicon.ico' },
        { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' }
      ],
      openGraph: {
        title: 'Gulshan Ads',
        description: 'Gulshan Ads is a modern advertising platform for managing and showcasing ads efficiently.',
        url: 'https://gulshan.dev',
        siteName: 'Gulshan Ads',
        images: [
          {
            url: '/og-image.png',
            width: 1200,
            height: 630,
            alt: 'Gulshan Ads'
          }
        ],
        locale: 'en_US',
        type: 'website'
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Gulshan Ads',
        description: 'Gulshan Ads is a modern advertising platform for managing and showcasing ads efficiently.',
        creator: '@gulshan',
        images: ['/og-image.png']
      },
      metadataBase: new URL('https://gulshan.dev'),
      alternates: {
        canonical: 'https://gulshan.dev',
      },
      category: 'Advertising',
      themeColor: '#ffffff',
      colorScheme: 'light',
      referrer: 'origin-when-cross-origin',
      manifest: '/site.webmanifest',
    }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />{children}</body>
    </html>
  )
}
