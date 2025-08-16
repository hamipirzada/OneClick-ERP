import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OneClick ERP - Odoo Implementation & Consulting',
  description: 'Professional Odoo ERP implementation, customization, and consulting services. Transform your business with streamlined operations and accelerated growth.',
  keywords: 'Odoo ERP, ERP implementation, business automation, Odoo consulting, enterprise software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}