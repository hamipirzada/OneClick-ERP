import { Metadata } from 'next'
import { ChevronRight, Globe, Search, Share2, PenTool, MousePointer, BarChart3, Mail } from 'lucide-react'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'
import { StatsRow } from '@/components/StatsRow'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Digital Marketing Services',
  description: 'Comprehensive digital marketing solutions including web design, SEO, social media, and analytics to grow your business online.',
}

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Design',
    description: 'Modern, responsive websites that convert visitors into customers.',
    bullets: [
      'Responsive design',
      'User experience optimization',
      'E-commerce development',
      'CMS integration',
      'Mobile optimization',
      'SEO-optimized, fast-loading pages for higher conversions',
      'Custom forms and lead-capture integrations'
    ]
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'SEO & Content',
    description: 'Search engine optimization and content strategies to improve your visibility.',
    bullets: [
      'Keyword research',
      'On-page optimization',
      'Content strategy',
      'Technical SEO',
      'Local SEO'
    ]
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: 'Social Media Ads',
    description: 'Targeted social media advertising campaigns across all major platforms.',
    bullets: [
      'Facebook & Instagram ads',
      'LinkedIn advertising',
      'Twitter campaigns',
      'Audience targeting',
      'Creative development'
    ]
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Content Creation',
    description: 'Engaging content that tells your brand story and drives engagement.',
    bullets: [
      'Blog writing',
      'Video production',
      'Graphic design',
      'Brand storytelling',
      'Content calendars'
    ]
  },
  {
    icon: <MousePointer className="w-8 h-8" />,
    title: 'PPC',
    description: 'Pay-per-click advertising campaigns that deliver immediate results.',
    bullets: [
      'Google Ads management',
      'Bing advertising',
      'Campaign optimization',
      'Landing page design',
      'Conversion tracking'
    ]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Analytics & Reporting',
    description: 'Comprehensive tracking and reporting to measure your marketing success.',
    bullets: [
      'Google Analytics setup',
      'Conversion tracking',
      'Performance reporting',
      'ROI analysis',
      'Data visualization',
      'Meta Pixel and multi-platform tracking setup',
      'UTM strategy and campaign tagging',
      'A/B testing and conversion optimization'
    ]
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: 'Email & SMS Marketing',
    description: 'Automated email workflows for nurturing leads and personalized campaigns for engagement.',
    bullets: [
      'Automated email workflows for nurturing leads',
      'Personalized campaigns for engagement and retention',
      'Compliance with spam and privacy laws'
    ]
  }
]

const results = [
  { number: '+150%', label: 'Average Sales Increase' },
  { number: '+300%', label: 'Lead Generation Growth' },
  { number: '+80%', label: 'Website Traffic Boost' },
  { number: '4.2x', label: 'Average ROI' }
]

const whyChooseBenefits = [
  'Data-driven strategies backed by proven results',
  'Full-service team of marketing specialists',
  'Transparent reporting and regular communication',
  'Industry expertise across multiple sectors',
  'Integrated approach aligning with your business goals',
  'Continuous optimization for maximum ROI'
]

export default function DigitalMarketingPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="py-6 bg-bg">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Digital Marketing' }
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 text-ink mb-6">
              Complete Digital Marketing Solutions
            </h1>
            <p className="text-body text-muted mb-8">
              Drive growth and increase revenue with our comprehensive digital marketing services. 
              From web design to analytics, we help businesses thrive online.
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
            title="Complete Digital Marketing Solutions"
            description="From strategy to execution, we provide all the digital marketing services your business needs."
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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

      {/* Proven Results */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Proven Results"
            description="Our digital marketing strategies deliver measurable results for businesses of all sizes."
            centered
            className="mb-12"
          />
          <StatsRow stats={results} />
        </div>
      </section>

      {/* Why Choose Our Digital Marketing */}
      <section className="section-spacing bg-bg">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Why Choose Our Digital Marketing?"
                description="Experience the difference that expert digital marketing can make for your business."
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
              <div className="text-4xl font-bold text-brand mb-2">250%</div>
              <div className="text-h3 text-ink mb-2">Average ROI</div>
              <p className="text-muted">
                Our clients see an average return on investment of 250% within the 
                first 12 months of working with our digital marketing team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-8 bg-yellow-50 border-l-4 border-yellow-400">
        <div className="container">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold text-ink mb-1">Compliance Notice</h3>
              <p className="text-sm text-muted">
                All our digital marketing campaigns comply with industry standards and regulations, 
                including GDPR, CCPA, and platform-specific advertising policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Accelerate Your Digital Growth?"
        description="Let our digital marketing experts create a custom strategy that drives real results for your business. Get your free consultation today."
        ctaText="Get Your Free Consultation"
        ctaHref="/contact"
      />
    </>
  )
}