'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is Odoo ERP and how can it benefit my business?",
    answer: "Odoo ERP is a comprehensive business management suite that integrates all your business operations including sales, inventory, accounting, HR, and more into one platform. It helps streamline processes, reduce manual work, improve data visibility, and scale your business efficiently."
  },
  {
    question: "How long does it take to implement Odoo ERP?",
    answer: "Implementation time varies based on your business complexity and requirements. Typically, a basic implementation takes 4-8 weeks, while more complex customizations may take 3-6 months. We provide a detailed timeline after analyzing your specific needs."
  },
  {
    question: "Do you provide training and support after implementation?",
    answer: "Yes, we provide comprehensive training for your team and ongoing support to ensure smooth operations. Our support includes system maintenance, updates, troubleshooting, and additional customizations as your business grows."
  },
  {
    question: "Can Odoo integrate with our existing systems?",
    answer: "Absolutely! Odoo has extensive integration capabilities and can connect with most existing systems including CRM, e-commerce platforms, payment gateways, and third-party applications through APIs and connectors."
  },
  {
    question: "What are your digital marketing services?",
    answer: "We offer comprehensive digital marketing services including SEO optimization, social media marketing, content creation, Google Ads management, website design and development, and analytics tracking to help build your online presence and drive conversions."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <motion.div 
          key={index}
          className="border rounded-lg bg-white shadow-footer overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.button 
            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            onClick={() => toggleFAQ(index)}
            whileHover={{ backgroundColor: '#f9fafb' }}
          >
            <h3 className="text-lg font-semibold text-text-dark pr-4">
              Q. {item.question}
            </h3>
            <motion.span 
              className="text-2xl text-primary font-light flex-shrink-0"
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              +
            </motion.span>
          </motion.button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-text-light leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}