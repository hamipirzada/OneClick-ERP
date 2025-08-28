'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <motion.section 
          className="py-20 bg-gradient-to-b from-slate-50 to-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About <span className="text-green-600">OneClick</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                20+ Years of Excellence in Business Transformation
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Company Story */}
        <motion.section 
          className="py-16 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded over two decades ago, OneClick has been at the forefront of business 
                  transformation through cutting-edge ERP solutions. We specialize in Odoo 
                  implementation, helping businesses streamline their operations and achieve 
                  unprecedented growth.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our journey began with a simple mission: to make powerful business software 
                  accessible to companies of all sizes. Today, we&apos;ve helped over 100+ businesses 
                  transform their operations, achieving an average of 30% revenue growth.
                </p>
              </motion.div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                  alt="Team collaboration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-footer-xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section 
          className="py-16 bg-slate-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-footer-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
                <div className="text-slate-800 font-semibold mb-2">Years Experience</div>
                <div className="text-gray-600 text-sm">In business transformation</div>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-footer-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-slate-800 font-semibold mb-2">Happy Clients</div>
                <div className="text-gray-600 text-sm">Successful implementations</div>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-footer-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
                <div className="text-slate-800 font-semibold mb-2">Revenue Growth</div>
                <div className="text-gray-600 text-sm">Average client increase</div>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-footer-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
                <div className="text-slate-800 font-semibold mb-2">Success Rate</div>
                <div className="text-gray-600 text-sm">Project completion</div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Mission & Values */}
        <motion.section 
          className="py-16 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Our Mission & Values
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-3xl">🎯</span>
                </motion.div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with world-class ERP solutions that streamline operations, 
                  boost productivity, and drive sustainable growth through innovative technology 
                  and expert consulting.
                </p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <span className="text-3xl">💎</span>
                </motion.div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Excellence, integrity, and client success are at the heart of everything we do. 
                  We believe in building long-term partnerships and delivering solutions that 
                  truly transform businesses.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </main>
  )
}