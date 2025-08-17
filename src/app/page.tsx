import Link from 'next/link'
import { ChevronRight, Users, BarChart3, DollarSign, FolderOpen, Briefcase, Target } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'
import { StatsRow } from '@/components/StatsRow'
import { PillList } from '@/components/PillList'
import { CTASection } from '@/components/CTASection'
import { AnimatedSection, FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection'

// Data
const businessApplications = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Sales & CRM',
    description: 'Manage leads, opportunities, and customer relationships with powerful CRM tools.',
    bullets: ['Lead management', 'Pipeline tracking', 'Customer portal', 'Sales automation']
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Accounting',
    description: 'Complete financial management with automated bookkeeping and reporting.',
    bullets: ['Multi-currency support', 'Automated invoicing', 'Financial reporting', 'Tax management']
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: 'Inventory',
    description: 'Track stock levels, manage warehouses, and optimize supply chain operations.',
    bullets: ['Real-time tracking', 'Multi-warehouse', 'Barcode scanning', 'Automated reordering']
  },
  {
    icon: <FolderOpen className="w-8 h-8" />,
    title: 'Project',
    description: 'Plan, track, and deliver projects on time with comprehensive project management.',
    bullets: ['Task management', 'Time tracking', 'Resource planning', 'Gantt charts']
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'HR',
    description: 'Streamline human resources with employee management and payroll processing.',
    bullets: ['Employee records', 'Payroll management', 'Leave tracking', 'Performance reviews']
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Marketing',
    description: 'Create campaigns, track performance, and nurture leads through automated workflows.',
    bullets: ['Email campaigns', 'Lead scoring', 'Marketing automation', 'Analytics dashboard']
  }
]

const whyOdooPoints = [
  'All-in-One Solution',
  'Scalable & Flexible',
  'Cost-Effective',
  'Open Source',
  'Easy Integration',
  'User-Friendly Interface'
]

const partnershipBenefits = [
  'Certified Odoo consultants with proven expertise',
  'End-to-end implementation and support services',
  'Customization to fit your unique business needs',
  'Comprehensive training for your team',
  'Ongoing support and maintenance',
  'Proven track record of successful deployments'
]

const methodologySteps = [
  {
    number: '01',
    title: 'Discovery & Analysis',
    description: 'We analyze your current processes and identify improvement opportunities.'
  },
  {
    number: '02',
    title: 'Planning & Design',
    description: 'Create a detailed implementation plan tailored to your business requirements.'
  },
  {
    number: '03',
    title: 'Configuration & Development',
    description: 'Configure Odoo modules and develop custom solutions as needed.'
  },
  {
    number: '04',
    title: 'Testing & Training',
    description: 'Thorough testing and comprehensive training for your team.'
  },
  {
    number: '05',
    title: 'Go-Live & Support',
    description: 'Smooth deployment with ongoing support and optimization.'
  }
]


const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
  { number: '20+', label: 'Years Combined Experience' }
]


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative section-spacing min-h-[600px] flex items-center bg-gray-50">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero.png')",
          }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gray-50/85"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection delay={0.2}>
              <h1 className="text-h1 text-ink mb-6">
                Leverage Odoo for Your{' '}
                <span className="text-brand">Competitive Advantage</span>
              </h1>
            </AnimatedSection>
            <FadeInUp delay={0.4}>
              <p className="text-body text-muted mb-8 max-w-2xl mx-auto">
                Transform your business operations with comprehensive Odoo ERP solutions, 
                digital marketing services, and accounting expertise from certified professionals.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="btn-primary w-full sm:w-auto justify-center">
                  Get a Free Consultation
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/services/odoo" className="btn-secondary w-full sm:w-auto justify-center">
                  See Services
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>


      {/* Odoo Business Applications */}
      <section className="section-spacing">
        <div className="container">
          <AnimatedSection>
            <SectionHeader
              title="Odoo Business Applications"
              description="Comprehensive suite of integrated business applications to manage every aspect of your company."
              centered
              className="mb-12"
            />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {businessApplications.map((app, index) => (
              <StaggerItem key={index}>
                <Card
                  icon={app.icon}
                  title={app.title}
                  description={app.description}
                  bullets={app.bullets}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Odoo */}
      <section className="section-spacing bg-bg">
        <div className="container">
          <AnimatedSection>
            <SectionHeader
              title="Why Choose Odoo?"
              description="Discover the key advantages that make Odoo the preferred choice for businesses worldwide."
              centered
              className="mb-12"
            />
          </AnimatedSection>
          <FadeInUp delay={0.2}>
            <PillList items={whyOdooPoints} className="justify-center" />
          </FadeInUp>
        </div>
      </section>

      {/* Why Partner with OneClick ERP */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <SectionHeader
                  title="Why Partner with OneClick ERP?"
                  description="We bring expertise, dedication, and proven results to every Odoo implementation."
                  className="mb-8"
                />
                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                  {partnershipBenefits.map((benefit, index) => (
                    <StaggerItem key={index}>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-ink">{benefit}</span>
                      </li>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </AnimatedSection>
            <FadeInUp delay={0.2}>
              <div className="bg-card border border-border rounded-card shadow-card p-8 text-center">
                <div className="text-4xl font-bold text-brand mb-2">99%</div>
                <div className="text-h3 text-ink mb-2">Client Satisfaction</div>
                <p className="text-muted">
                  Our clients consistently rate our services as excellent, 
                  with most projects delivered on time and within budget.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="section-spacing bg-bg">
        <div className="container">
          <AnimatedSection>
            <SectionHeader
              title="Implementation Methodology"
              description="Our proven 5-step process ensures successful Odoo implementations every time."
              centered
              className="mb-12"
            />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-8" staggerDelay={0.15}>
            {methodologySteps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-h3 text-ink mb-2">{step.title}</h3>
                  <p className="text-sm text-muted">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>



      {/* Stats */}
      <section className="section-spacing">
        <div className="container">
          <AnimatedSection>
            <StatsRow stats={stats} />
          </AnimatedSection>
        </div>
      </section>


      {/* CTA */}
      <FadeInUp>
        <CTASection
          title="Ready to Transform Your Business?"
          description="Join hundreds of successful businesses that have leveraged Odoo for their competitive advantage. Get your free consultation today."
          ctaText="Get Started Now"
          ctaHref="/contact"
        />
      </FadeInUp>
    </>
  )
}