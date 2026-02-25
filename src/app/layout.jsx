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

function CommingSoon() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl text-center px-4">
        <h1 className="font-display text-5xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
          We&apos;re building something great!
        </h1>
        <h3 className="mt-4 text-2xl text-neutral-600">
          Our new site launches soon...
        </h3>
      </div>
    </main>
  )
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full text-base antialiased">
      <body>
        {/* <RootLayout>{children}</RootLayout>
        <CookieBanner/> */}
        <CommingSoon />
      </body>
    </html>
  )
}
