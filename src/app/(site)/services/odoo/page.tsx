import { Metadata } from 'next'
import { ChevronRight, Settings, Code, Link as LinkIcon, BarChart3, Database, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Odoo ERP Implementation Services',
  description: 'Comprehensive Odoo ERP implementation, customization, and support services to transform your business operations.',
}

const services = [
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Implementation',
    description: 'Complete Odoo setup and configuration tailored to your business processes.',
    bullets: [
      'Business process analysis',
      'System architecture design',
      'Module configuration',
      'Multi-company, multi-warehouse, and multi-currency architecture',
      'Localization for taxes, chart of accounts, payroll, and regional compliance',
      'Master data structuring — products, customers, vendors, users, etc.',
      'Data migration',
      'Go-live support'
    ]
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Customization & Development',
    description: 'Custom modules and workflows to meet your unique business requirements.',
    bullets: [
      'Custom module development',
      'Workflow automation',
      'Report customization',
      'User interface modifications',
      'Business logic implementation'
    ]
  },
  {
    icon: <LinkIcon className="w-8 h-8" />,
    title: 'Third-Party Integrations',
    description: 'Seamlessly connect Odoo with your existing systems and tools.',
    bullets: [
      'Payment gateways: Stripe, PayPal, Square, etc.',
      'eCommerce platforms: Shopify, WooCommerce, Magento',
      'CRM, HRMS, logistics providers, SMS/email gateways',
      'Marketplace integrations: Amazon, eBay, Etsy'
    ]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Reporting & BI',
    description: 'Advanced reporting and business intelligence solutions for data-driven decisions.',
    bullets: [
      'Dynamic dashboards for Finance, Sales, HR, Inventory, and Operations',
      'Custom KPIs and automated report scheduling',
      'Integration with Power BI, Tableau etc.'
    ]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Data Migration',
    description: 'Secure and accurate migration of your existing data to Odoo.',
    bullets: [
      'Data assessment and cleanup',
      'Migration planning',
      'Safe migration from legacy systems (Excel, QuickBooks, SAP, etc.)',
      'Testing and validation',
      'Rollback procedures',
      'Historical data preservation'
    ]
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Training & Documentation',
    description: 'Comprehensive training programs to ensure your team maximizes Odoo benefits.',
    bullets: [
      'User training sessions',
      'Administrator training',
      'Custom documentation',
      'Video tutorials',
      'Ongoing support'
    ]
  }
]

const whyChooseBenefits = [
  'Certified Odoo consultants with proven expertise',
  'End-to-end implementation and support services',
  'Industry-specific solutions and best practices',
  'Proven track record of successful deployments',
  'Ongoing optimization and enhancement',
  'Dedicated project management and support'
]

export default function OdooServicesPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="py-6 bg-bg">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Odoo ERP' }
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 text-ink mb-6">
              Comprehensive Odoo ERP Services
            </h1>
            <p className="text-body text-muted mb-8">
              Transform your business operations with our expert Odoo implementation, 
              customization, and support services designed to drive growth and efficiency.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Started Today
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing bg-bg">
        <div className="container">
          <SectionHeader
            title="Comprehensive Odoo Services"
            description="From implementation to ongoing support, we provide end-to-end Odoo solutions."
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                bullets={service.bullets}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Odoo ERP */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Why Choose Odoo ERP?"
                description="Discover the advantages that make Odoo the preferred choice for business management."
                className="mb-8"
              />
              <ul className="space-y-4">
                {whyChooseBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-ink">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-card shadow-card p-8 text-center">
              <div className="text-4xl font-bold text-brand mb-2">500+</div>
              <div className="text-h3 text-ink mb-2">Successful Implementations</div>
              <p className="text-muted">
                We've successfully implemented Odoo for over 500 businesses across 
                various industries, delivering measurable results and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Business with Odoo?"
        description="Let our certified consultants help you leverage Odoo's full potential. Get your free consultation and custom implementation plan today."
        ctaText="Get Your Free Consultation"
        ctaHref="/contact"
      />
    </>
  )
}