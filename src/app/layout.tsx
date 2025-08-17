import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://oneclickerp.com'),
  title: {
    default: 'OneClick ERP - Leverage Odoo for Your Competitive Advantage',
    template: '%s | OneClick ERP'
  },
  description: 'Professional Odoo ERP implementation, digital marketing, and accounting services. Your trusted partner for comprehensive business solutions.',
  keywords: ['Odoo ERP', 'Digital Marketing', 'Accounting Services', 'Business Solutions', 'ERP Implementation'],
  authors: [{ name: 'OneClick ERP' }],
  creator: 'OneClick ERP',
  publisher: 'OneClick ERP',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oneclickerp.com',
    siteName: 'OneClick ERP',
    title: 'OneClick ERP - Leverage Odoo for Your Competitive Advantage',
    description: 'Professional Odoo ERP implementation, digital marketing, and accounting services. Your trusted partner for comprehensive business solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneClick ERP - Leverage Odoo for Your Competitive Advantage',
    description: 'Professional Odoo ERP implementation, digital marketing, and accounting services. Your trusted partner for comprehensive business solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OneClick ERP',
  url: 'https://oneclickerp.com',
  logo: 'https://oneclickerp.com/logo.png',
  description: 'Professional Odoo ERP implementation, digital marketing, and accounting services.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: '12345',
    streetAddress: '123 Business Ave, Suite 100'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-234-567-890',
    contactType: 'customer service',
    email: 'info@oneclickerp.com'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}