import { Metadata } from 'next'
import { Eye, Target, Award, Lightbulb, Handshake, TrendingUp, Settings, Megaphone, Calculator } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'
import { StatsRow } from '@/components/StatsRow'
import { PillList } from '@/components/PillList'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About OneClick ERP',
  description: 'Learn about OneClick ERP - your trusted partner for Odoo implementation, digital marketing, and accounting services with over 50 successful projects.',
}

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '10+', label: 'Industries Served' },
  { number: '99%', label: 'On-Time Delivery' },
  { number: '20+', label: 'Years of Combined Experience' }
]

const whyChooseItems = [
  'All-in-One Partner (ERP, Marketing & Accounting)',
  'Certified Odoo Consultants with 20+ years combined expertise',
  'Tailored Solutions',
  'Growth-Focused Strategies',
  'Global Reach',
  'Agile and Transparent Process'
]

const coreValues = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive business success.',
    bullets: ['Quality-first approach', 'Attention to detail', 'Continuous improvement', 'Best practices implementation']
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovation',
    description: 'We embrace innovation and leverage cutting-edge technologies to solve complex business challenges.',
    bullets: ['Latest technology adoption', 'Creative problem-solving', 'Future-ready solutions', 'Innovative methodologies']
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: 'Partnership',
    description: 'We build long-term partnerships with our clients, working together to achieve sustainable growth and success.',
    bullets: ['Collaborative approach', 'Long-term relationships', 'Mutual success', 'Trusted advisor role']
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Results',
    description: 'We are committed to delivering measurable results that positively impact our clients\' bottom line.',
    bullets: ['ROI-focused solutions', 'Performance metrics', 'Continuous optimization', 'Success measurement']
  }
]

const expertiseAreas = [
  {
    title: 'Odoo ERP Solutions',
    description: 'Comprehensive Odoo implementation, customization, and support services for businesses of all sizes.',
    bullets: ['Implementation & migration', 'Custom development', 'Integration services', 'Ongoing support']
  },
  {
    title: 'Digital Marketing',
    description: 'Full-service digital marketing to boost your online presence and drive business growth.',
    bullets: ['Website development', 'SEO & content marketing', 'Social media advertising', 'Analytics & reporting']
  },
  {
    title: 'Finance & Accounting',
    description: 'Professional accounting services to keep your finances organized and compliant.',
    bullets: ['Bookkeeping & payroll', 'Financial reporting', 'Tax compliance', 'Remote accounting teams']
  }
]

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="py-6 bg-bg">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'About' }
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 text-ink mb-6">
              About OneClick ERP
            </h1>
            <p className="text-body text-muted mb-8">
              We are a team of certified professionals dedicated to helping businesses 
              leverage technology for competitive advantage. From Odoo ERP implementation 
              to digital marketing and accounting services, we provide comprehensive 
              solutions that drive growth and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing bg-bg">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card
              icon={<Target className="w-8 h-8" />}
              title="Our Mission"
              description="To empower businesses with integrated technology solutions that streamline operations, enhance productivity, and drive sustainable growth through expert consultation and implementation."
            />
            <Card
              icon={<Eye className="w-8 h-8" />}
              title="Our Vision"
              description="To be the leading provider of comprehensive business solutions, helping organizations worldwide achieve operational excellence through innovative technology and strategic guidance."
            />
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Our Track Record"
            description="Numbers that demonstrate our commitment to client success and project excellence."
            centered
            className="mb-12"
          />
          <StatsRow stats={stats} />
        </div>
      </section>

      {/* Why Choose OneClick ERP */}
      <section className="section-spacing bg-bg">
        <div className="container">
          <SectionHeader
            title="Why Choose OneClick ERP"
            description="Discover the key advantages that make us your ideal technology partner."
            centered
            className="mb-12"
          />
          <PillList items={whyChooseItems} className="justify-center" />
        </div>
      </section>

      {/* Core Values */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Our Core Values"
            description="The principles that guide everything we do and shape our approach to client success."
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                bullets={value.bullets}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="section-spacing bg-bg">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Our Expertise"
                description="Comprehensive business solutions spanning technology, marketing, and finance."
                className="mb-8"
              />
              <div className="space-y-6">
                {expertiseAreas.map((area, index) => (
                  <div key={index}>
                    <h3 className="text-h3 text-ink mb-2">{area.title}</h3>
                    <p className="text-muted mb-3">{area.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {area.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-center space-x-2 text-sm text-ink">
                          <div className="w-1.5 h-1.5 bg-brand rounded-full flex-shrink-0"></div>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-card shadow-card p-8 text-center">
              <div className="text-4xl font-bold text-brand mb-2">Certified</div>
              <div className="text-h3 text-ink mb-2">Odoo Partners</div>
              <p className="text-muted">
                Our team holds official Odoo certifications and maintains the highest 
                standards of expertise in ERP implementation and customization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Work with the Experts?"
        description="Let our certified team help you achieve your business goals with comprehensive technology solutions. Get your free consultation today."
        ctaText="Get Your Free Consultation"
        ctaHref="/contact"
      />
    </>
  )
}