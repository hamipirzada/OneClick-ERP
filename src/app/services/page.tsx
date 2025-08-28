'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Services Header */}
      <motion.section 
        className="pt-24 pb-12 bg-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <span className="text-blue-600 font-semibold">Services</span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mt-4 mb-6">
            Elevate Your Potential With Our<br />
            Comprehensive Services
          </h1>
        </div>
      </motion.section>

      {/* Services Grid - Exact match from Screenshot 1 */}
      <motion.section 
        className="py-8 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {/* Odoo ERP Solutions */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-footer-lg border hover:shadow-footer-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
                  alt="Odoo ERP Solutions"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-footer-lg"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-2xl">⚙️</span>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Odoo ERP Solutions</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We design and implement customized Odoo ERP systems that streamline workflows, 
                  improve visibility, enhance efficiency, and support sustainable business growth.
                </p>
              </div>
            </motion.div>

            {/* Accounting & Financial Management */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-footer-lg border hover:shadow-footer-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=300&fit=crop"
                  alt="Accounting Management"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-footer-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-2xl">📊</span>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Accounting & Financial Management</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Stay compliant, save time, and gain clarity with remote bookkeeping, tax reporting, 
                  and financial dashboards that keep you in control of your business.
                </p>
              </div>
            </motion.div>

            {/* Custom Design & Development */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-footer-lg border hover:shadow-footer-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop"
                  alt="Custom Development"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-footer-lg"
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-2xl">🎨</span>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Custom Design & Development</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We create, launch and scale web application solutions with modern UI/UX design 
                  and robust functionality to meet your business requirements.
                </p>
              </div>
            </motion.div>

            {/* Digital Marketing */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-footer-lg border hover:shadow-footer-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
                  alt="Digital Marketing"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-footer-lg"
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-2xl">📈</span>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Digital Marketing</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our marketing team drives online visibility through SEO, website optimization, 
                  and targeted digital campaigns across different platforms.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}