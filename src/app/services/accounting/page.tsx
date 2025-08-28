'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AccountingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            {/* Centered Header */}
            <motion.div 
              className="text-center mb-8 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 px-4 md:px-0">
                Accounting & Financial Management
              </h1>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-center">
              {/* Left - Content */}
              <motion.div 
                className="space-y-4 md:space-y-6 flex flex-col items-center lg:items-start order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.h2
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 text-center lg:text-left px-4 md:px-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Empowering Businesses with<br />
                  <span className="text-green-600">Smarter Finances</span>
                </motion.h2>
                
                <motion.p 
                  className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-center lg:text-left max-w-2xl px-4 md:px-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  We offer accounting services with accurate bookkeeping, compliance, 
                  and reporting and helping businesses stay clear, confident, and 
                  financially strong.
                </motion.p>
                
                <motion.div
                  className="flex justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Link 
                    href="/contact"
                    className="bg-green-600 text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 text-base md:text-lg rounded-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-footer-lg inline-block"
                  >
                    Contact us
                  </Link>
                </motion.div>
              </motion.div>

              {/* Center - Image */}
              <motion.div 
                className="flex justify-center order-1 lg:order-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80"
                  alt="Accounting & Financial Management"
                  width={300}
                  height={400}
                  className="w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[400px] object-cover rounded-lg shadow-footer-lg"
                />
              </motion.div>

              {/* Right - Client Satisfaction & Logos */}
              <motion.div 
                className="flex flex-col items-center space-y-4 md:space-y-6 order-3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* Accounting Related Logo/Icon */}
                <motion.div
                  className="mb-2 md:mb-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full p-3 md:p-4"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white text-2xl md:text-3xl">📊</span>
                </motion.div>

                {/* Client Satisfaction Box */}
                <motion.div 
                  className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-footer-lg text-center border border-orange-200/50 max-w-xs lg:max-w-none"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 50%, #FED7AA 100%)'
                  }}
                >
                  {/* Avatar icons in semi-circle pattern */}
                  <div className="relative w-16 h-10 md:w-20 md:h-12 mx-auto mb-2 md:mb-3">
                    <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-footer">
                      👤
                    </div>
                    <div className="absolute top-1 md:top-2 left-4 md:left-6 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-footer">
                      👤
                    </div>
                    <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-footer">
                      👤
                    </div>
                    <div className="absolute top-3 md:top-4 left-2 md:left-3 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-footer">
                      👤
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100+</div>
                  <div className="text-xs md:text-sm text-gray-700 font-medium">Clients Satisfactions</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-slate-800 mb-12 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Our Accounting & Financial Services
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "📊",
                    title: "Bookkeeping Services",
                    description: "Accurate and timely recording of all financial transactions and activities."
                  },
                  {
                    icon: "📋",
                    title: "Tax Compliance",
                    description: "Ensure full compliance with tax regulations and optimize your tax strategy."
                  },
                  {
                    icon: "💼",
                    title: "Financial Reporting",
                    description: "Comprehensive financial statements and reports for informed decision-making."
                  },
                  {
                    icon: "💰",
                    title: "Cash Flow Management",
                    description: "Monitor and optimize cash flow to maintain healthy business operations."
                  },
                  {
                    icon: "📈",
                    title: "Financial Planning",
                    description: "Strategic financial planning to support business growth and expansion."
                  },
                  {
                    icon: "🔍",
                    title: "Financial Analysis",
                    description: "In-depth analysis of financial performance and profitability metrics."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-50 rounded-xl p-6 text-center hover:shadow-footer-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}