'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function OdooServicePage() {
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
                Odoo Service Provider
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
                  Transform Your Business<br />
                  <span className="text-green-600">with Odoo ERP Solutions</span>
                </motion.h2>
                
                <motion.p 
                  className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-center lg:text-left max-w-2xl px-4 md:px-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  We design tailored Odoo systems that automate workflows, optimize 
                  operations, improve visibility, and drive long-term, scalable business 
                  growth effortlessly.
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
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80"
                  alt="Odoo ERP Solutions"
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
                {/* Odoo Logo */}
                <motion.div
                  className="mb-2 md:mb-4"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Image
                    src="/odooimage.jpg"
                    alt="Odoo Logo"
                    width={100}
                    height={50}
                    className="w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12 object-contain"
                  />
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
                Why Choose Our Odoo Services?
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "⚙️",
                    title: "Custom Implementation",
                    description: "Tailored Odoo solutions designed specifically for your business needs and processes."
                  },
                  {
                    icon: "📊",
                    title: "Process Optimization",
                    description: "Streamline workflows and automate repetitive tasks to boost productivity."
                  },
                  {
                    icon: "📈",
                    title: "Scalable Growth",
                    description: "Build systems that grow with your business and adapt to changing requirements."
                  },
                  {
                    icon: "🔧",
                    title: "Expert Support",
                    description: "Ongoing maintenance and support to keep your Odoo system running smoothly."
                  },
                  {
                    icon: "🔒",
                    title: "Data Security",
                    description: "Enterprise-grade security measures to protect your valuable business data."
                  },
                  {
                    icon: "📱",
                    title: "Mobile Access",
                    description: "Access your business data anywhere, anytime with mobile-optimized interfaces."
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