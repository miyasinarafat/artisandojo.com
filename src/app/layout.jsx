import { RootLayout } from '@/components/RootLayout'
import CookieBanner from '@/components/CookieBanner';

import '@/styles/tailwind.css'

export const metadata = {
  title: 'Artisan Dojo | Under Development',
  description: 'We’re building something great. Our new site launches soon.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Artisan Dojo | Under Development',
    description: 'We’re building something great. Our new site launches soon.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Artisan Dojo | Under Development',
    description: 'We’re building something great. Our new site launches soon.',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <CookieBanner/>
      </body>
    </html>
  )
}
