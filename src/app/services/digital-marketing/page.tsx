'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DigitalMarketingPage() {
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
                Digital Marketing Services
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
                  Stronger Digital<br />
                  <span className="text-green-600">Presence With OneClick</span>
                </motion.h2>
                
                <motion.p 
                  className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-center lg:text-left max-w-2xl px-4 md:px-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Our digital strategies combine SEO, campaigns, and design to 
                  build strong online presence, attract audiences, and convert 
                  engagement into revenue.
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
                  alt="Digital Marketing Services"
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
                {/* Marketing Related Logo/Icon */}
                <motion.div
                  className="mb-2 md:mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3 md:p-4"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white text-2xl md:text-3xl">📱</span>
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
                Our Digital Marketing Services
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🔍",
                    title: "SEO Optimization",
                    description: "Improve your search rankings and drive organic traffic to your website."
                  },
                  {
                    icon: "📱",
                    title: "Social Media Marketing",
                    description: "Build brand awareness and engage with your audience across all platforms."
                  },
                  {
                    icon: "💰",
                    title: "PPC Campaigns",
                    description: "Targeted advertising campaigns that deliver measurable ROI and conversions."
                  },
                  {
                    icon: "✉️",
                    title: "Email Marketing",
                    description: "Nurture leads and retain customers with personalized email campaigns."
                  },
                  {
                    icon: "🎨",
                    title: "Creative Design",
                    description: "Eye-catching visuals and content that capture attention and drive action."
                  },
                  {
                    icon: "📊",
                    title: "Analytics & Reporting",
                    description: "Data-driven insights to optimize performance and measure success."
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