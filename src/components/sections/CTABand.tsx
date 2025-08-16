'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const CTABand = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Business with Odoo ERP?
        </h2>
        <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
          Take the first step towards streamlined operations and accelerated growth. Our experts are ready to help you succeed.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors group"
        >
          Get a Free Consultation
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}

export default CTABand