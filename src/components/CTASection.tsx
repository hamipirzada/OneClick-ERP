import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface CTASectionProps {
  title: string
  description: string
  ctaText: string
  ctaHref: string
  className?: string
}

export function CTASection({ 
  title, 
  description, 
  ctaText, 
  ctaHref,
  className 
}: CTASectionProps) {
  return (
    <section className={`bg-brand text-white section-spacing ${className || ''}`}>
      <div className="container text-center">
        <h2 className="text-h2 mb-4">{title}</h2>
        <p className="text-body mb-8 max-w-2xl mx-auto opacity-90">
          {description}
        </p>
        <Link 
          href={ctaHref}
          className="inline-flex items-center space-x-2 bg-white text-brand font-bold py-3 px-6 rounded-button hover:bg-gray-100 transition-colors"
        >
          <span>{ctaText}</span>
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}