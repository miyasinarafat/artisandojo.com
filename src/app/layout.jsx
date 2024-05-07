import { RootLayout } from '@/components/RootLayout'
import CookieBanner from '@/components/CookieBanner';

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - ArtisanDojo',
    default: 'ArtisanDojo - Custom Solutions for your Ecommerce Marketplace Business',
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
