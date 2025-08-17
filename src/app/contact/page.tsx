import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionHeader } from '@/components/SectionHeader'
import { ContactForm } from '@/components/ContactForm'
import { ContactTiles } from '@/components/ContactTiles'

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Free Consultation',
  description: 'Ready to transform your business? Contact our team of experts for a free consultation on Odoo ERP, digital marketing, or accounting services.',
}

export default function ContactPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="py-6 bg-bg">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Contact' }
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 text-ink mb-6">
              Get Your Free Consultation
            </h1>
            <p className="text-body text-muted mb-8">
              Ready to transform your business operations? Our team of certified experts 
              is here to help you achieve your goals with tailored solutions for your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-spacing bg-bg">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Tiles */}
            <div>
              <ContactTiles />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}