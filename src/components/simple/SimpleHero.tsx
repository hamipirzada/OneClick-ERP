'use client'

import React from 'react'
import Image from 'next/image'

export const SimpleHero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-block mb-6">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Odoo Service Provider
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Transform Your Business with{' '}
              <span className="text-green-500">Odoo ERP Solution</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Streamline operations, automate workflows, and strengthen your online presence with OneClick as your trusted Odoo consulting partner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-colors duration-300 text-center"
              >
                Contact us →
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-slate-700">
                <span className="font-bold text-xl">100+</span>
                <span className="font-bold text-xl"> Clients Satisfactions</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
              alt="Professional man with laptop - Odoo ERP solution"
              width={600}
              height={600}
              className="rounded-2xl shadow-footer-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}