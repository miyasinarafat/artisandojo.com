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

function CommingSoon({ children, client, className }) {
    return (
         <div className="max-w-2xl text-center">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
                We&apos;re building something great
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
                Our new site launches soon...
            </p>
      </div>
    )
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        {/* <RootLayout>{children}</RootLayout>
        <CookieBanner/> */}
        <CommingSoon />
      </body>
    </html>
  )
}
