import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Settings, Megaphone, Calculator } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive business solutions including Odoo ERP implementation, digital marketing, and accounting services.',
}

const services = [
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Odoo ERP Services',
    description: 'Complete Odoo implementation, customization, and support services.',
    href: '/services/odoo',
    bullets: [
      'Implementation & Configuration',
      'Customization & Development', 
      'Third-Party Integrations',
      'Training & Documentation'
    ]
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing solutions to grow your business online.',
    href: '/services/digital-marketing',
    bullets: [
      'Web Design & Development',
      'SEO & Content Marketing',
      'Social Media & PPC',
      'Email/SMS & Analytics'
    ]
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: 'Accounting & Finance',
    description: 'Professional accounting services to keep your finances organized.',
    href: '/services/accounting',
    bullets: [
      'Bookkeeping & Payroll',
      'Financial Reporting',
      'Tax & Compliance',
      'Remote Team & Audit Support'
    ]
  }
]

export default function ServicesPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="py-6 bg-bg">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services' }
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 text-ink mb-6">
              Our Services
            </h1>
            <p className="text-body text-muted mb-8">
              Comprehensive business solutions designed to drive growth and efficiency. 
              From ERP implementation to digital marketing and accounting services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing bg-bg">
        <div className="container">
          <SectionHeader
            title="What We Offer"
            description="End-to-end business solutions tailored to your needs."
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-card shadow-card p-8 text-center group hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand">
                  {service.icon}
                </div>
                <h3 className="text-h3 text-ink mb-4">{service.title}</h3>
                <p className="text-muted mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-center justify-center space-x-2 text-sm text-ink">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full flex-shrink-0"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.href} 
                  className="btn-primary w-full justify-center group-hover:scale-105 transition-transform"
                >
                  Learn More
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}