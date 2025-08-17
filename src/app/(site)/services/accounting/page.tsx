import { Metadata } from 'next'
import { ChevronRight, Calculator, FileText, BarChart3, Shield, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Accounting & Finance Services',
  description: 'Professional accounting and finance services including bookkeeping, financial reporting, tax compliance, and remote team solutions.',
}

const services = [
  {
    icon: <Calculator className="w-8 h-8" />,
    title: 'Bookkeeping & Payroll',
    description: 'Accurate bookkeeping and payroll processing to keep your finances organized.',
    bullets: [
      'Daily transaction recording',
      'Bank reconciliation',
      'Accounts payable/receivable',
      'Payroll processing',
      'Employee benefits management'
    ]
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Financial Reporting',
    description: 'Comprehensive financial reports to track performance and make informed decisions.',
    bullets: [
      'Monthly financial statements',
      'Profit & loss reports',
      'Balance sheet preparation',
      'Cash flow analysis',
      'Custom reporting'
    ]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Real-Time Dashboards',
    description: 'Interactive dashboards providing real-time insights into your financial health.',
    bullets: [
      'KPI tracking',
      'Revenue analytics',
      'Expense monitoring',
      'Budget vs actual',
      'Forecasting tools'
    ]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Tax & Compliance',
    description: 'Expert tax preparation and compliance management to avoid penalties.',
    bullets: [
      'Tax preparation & filing',
      'Sales tax management',
      'Compliance monitoring',
      'Audit support',
      'Regulatory updates'
    ]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Budgeting & Forecasting',
    description: 'Strategic financial planning to help your business grow and prosper.',
    bullets: [
      'Annual budget creation',
      'Financial forecasting',
      'Variance analysis',
      'Investment planning',
      'Growth strategies'
    ]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Remote Team Services',
    description: 'Dedicated accounting professionals working as an extension of your team.',
    bullets: [
      'Dedicated accountants',
      'Regular communication',
      'Flexible engagement models',
      'Scalable solutions',
      'Cost-effective resources'
    ]
  }
]

const whyChooseBenefits = [
  'Certified accounting professionals with industry expertise',
  'Advanced technology and secure cloud-based solutions',
  'Cost-effective alternative to in-house accounting teams',
  'Scalable services that grow with your business',
  'Proactive advice and strategic financial guidance',
  'Timely and accurate financial reporting'
]


const auditBenefits = [
  'Audit-ready financials and reconciliations',
  'Liaison with external auditors and tax authorities',
  'Year-end adjusting entries and compliance checklists'
]

export default function AccountingPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="py-6 bg-bg">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Accounting & Finance' }
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 text-ink mb-6">
              Complete Accounting Solutions
            </h1>
            <p className="text-body text-muted mb-8">
              Professional accounting and finance services to keep your business financially healthy. 
              From bookkeeping to strategic planning, we handle it all.
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
            title="Complete Accounting Solutions"
            description="Comprehensive accounting services designed to streamline your financial operations."
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

      {/* Why Choose Our Accounting Services */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Why Choose Our Accounting Services?"
            description="Experience the benefits of working with certified accounting professionals."
            centered
            className="mb-12"
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
      </section>


      {/* Audit & Year-End Support */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Audit & Year-End Support"
                description="Comprehensive support to ensure your business is audit-ready and compliant."
                className="mb-8"
              />
              <ul className="space-y-4">
                {auditBenefits.map((benefit, index) => (
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
              <div className="text-4xl font-bold text-brand mb-2">100%</div>
              <div className="text-h3 text-ink mb-2">Audit-Ready Reports</div>
              <p className="text-muted">
                Our comprehensive financial reporting ensures your business is always 
                audit-ready with accurate, detailed, and compliant documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-blue-50 border-l-4 border-info">
        <div className="container">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-info rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold text-ink mb-1">Professional Disclaimer</h3>
              <p className="text-sm text-muted">
                Our accounting services are provided by certified professionals. 
                All financial advice and services comply with applicable accounting standards and regulations. 
                We recommend consulting with your legal and tax advisors for specific compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Streamline Your Finances?"
        description="Let our certified accounting professionals handle your financial operations while you focus on growing your business. Get your free consultation today."
        ctaText="Get Your Free Consultation"
        ctaHref="/contact"
      />
    </>
  )
}