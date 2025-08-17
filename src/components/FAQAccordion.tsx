'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
  className?: string
}

export function FAQAccordion({ faqs, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn('space-y-4', className)}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-card shadow-card"
        >
          <button
            className="w-full flex items-center justify-between p-6 text-left"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <span className="text-h3 text-ink pr-4">{faq.question}</span>
            <ChevronDown 
              className={cn(
                'w-5 h-5 text-muted transition-transform flex-shrink-0',
                openIndex === index && 'rotate-180'
              )}
            />
          </button>
          
          {openIndex === index && (
            <div className="px-6 pb-6">
              <p className="text-body text-muted">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}