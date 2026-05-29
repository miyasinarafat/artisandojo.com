import { RootLayout } from '@/components/RootLayout'
import CookieBanner from '@/components/CookieBanner';

import '@/styles/tailwind.css'

export const metadata = {
  title: 'Artisan Dojo',
  description:
    'We are a software development agency dedicated to helping businesses enhance their marketplace sales through technology and innovation.',
  openGraph: {
    title: 'Artisan Dojo',
    description:
      'We are a software development agency dedicated to helping businesses enhance their marketplace sales through technology and innovation.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Artisan Dojo',
    description:
      'We are a software development agency dedicated to helping businesses enhance their marketplace sales through technology and innovation.',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full text-base antialiased">
      <body>
        <RootLayout>{children}</RootLayout>
        <CookieBanner />
      </body>
    </html>
  )
}
