'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section 1 - Transform Your Business with Odoo ERP Solution */}
      <motion.section 
        className="min-h-screen flex items-center pt-20"
        style={{
          background: 'linear-gradient(135deg, #F8FAFE 0%, #E6F3FC 100%)'
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          {/* Centered Main Headline */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="bg-accent-green/10 text-accent-green px-6 py-3 rounded-full text-sm font-semibold border border-accent-green/20">
                🚀 100+ Clients Satisfaction
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary leading-tight">
              Transform Your Business<br />
              <span className="text-accent">with Odoo ERP Solution</span>
            </h1>
          </motion.div>

          {/* Three Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Side - Content */}
            <motion.div
              className="lg:text-left text-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl text-text-light mb-8 leading-relaxed">
                Streamline operations, automate workflows, and strengthen your 
                online presence with <strong className="text-primary">OneClick</strong> as your trusted Odoo consulting 
                partner.
              </p>
              <Link 
                href="/contact"
                className="btn-primary text-lg px-10 py-4 shadow-footer-lg hover:shadow-footer-xl transform hover:scale-105 transition-all duration-300 inline-block text-center"
              >
                Contact Us →
              </Link>
            </motion.div>
            
            {/* Center - Image without background */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/hero.png"
                alt="Professional consultant"
                width={300}
                height={400}
                className="mx-auto object-contain"
              />
            </motion.div>

            {/* Right Side - Odoo Logo and Client Satisfaction */}
            <motion.div 
              className="flex flex-col items-center lg:items-end space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Odoo Logo - Separate from the box with no background */}
              <motion.div
                className="mb-2 bg-transparent"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Image
                  src="/odooimage.jpg"
                  alt="Odoo Logo"
                  width={180}
                  height={65}
                  className="object-contain bg-transparent rounded-lg"
                  style={{ backgroundColor: 'transparent' }}
                />
              </motion.div>

              {/* Client Satisfaction Box */}
              <motion.div 
                className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-6 shadow-footer-lg text-center border border-orange-200/50"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 50%, #FED7AA 100%)'
                }}
              >
                {/* Avatar icons in semi-circle pattern */}
                <div className="relative w-20 h-12 mx-auto mb-3">
                  <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-footer">
                    👤
                  </div>
                  <div className="absolute top-2 left-6 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-footer">
                    👤
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-footer">
                    👤
                  </div>
                  <div className="absolute top-4 left-3 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-footer">
                    👤
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-gray-700 font-medium">Clients Satisfactions</div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Service Tags at bottom with light greenish background */}
          <motion.div 
            className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 py-6 px-8 rounded-2xl border border-green-100/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              background: 'linear-gradient(90deg, #F0FDF4 0%, #ECFDF5 50%, #F0FDF4 100%)'
            }}
          >
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div 
                className="bg-accent-green text-white px-6 py-3 rounded-full text-sm font-semibold shadow-footer-lg"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                ⚙️ Odoo Implementation
              </motion.div>
              <motion.div 
                className="bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold shadow-footer-lg"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                📈 Digital Marketing
              </motion.div>
              <motion.div 
                className="bg-accent text-white px-6 py-3 rounded-full text-sm font-semibold shadow-footer-lg"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                📊 Accounting Management
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section - Helping Businesses Achieve Efficiency */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary font-semibold text-lg">About OneClick</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-4 mb-6 leading-tight">
                Helping Businesses Achieve<br />
                Efficiency and Measurable<br />
                <span className="text-accent">Growth</span>
              </h2>
              <p className="text-text-light mb-8 leading-relaxed text-lg">
                OneStop specializes in delivering powerful Odoo ERP solutions that 
                help businesses simplify processes, improve visibility, and achieve 
                sustainable growth. With certified Odoo consultants and experienced 
                developers, we design and implement ERP systems tailored to your 
                industry and workflows.
              </p>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center shadow-footer">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-text-dark font-medium">30% revenue growth through Odoo implementation & marketing</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center shadow-footer">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-text-dark font-medium">Instant clarity with financial dashboards & reporting</span>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right Side - About Image */}
            <motion.div 
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <Image
                  src="/about.png"
                  alt="About OneClick - Business team collaboration"
                  width={500}
                  height={400}
                  className="object-contain mx-auto"
                />
                
                {/* Floating Elements for Visual Appeal */}
                <motion.div 
                  className="absolute bottom-8 left-8 bg-primary rounded-xl p-3 shadow-footer-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-lg font-bold text-white">ERP</div>
                  <div className="text-xs text-white/80">Solutions</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>





      {/* Services Section - Exact Match from Image */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Services</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark mt-4 mb-6 leading-tight">
              Elevate Your Potential With Our<br />
              <span className="text-primary">Comprehensive Services</span>
            </h2>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20 items-stretch">
            {/* Odoo ERP Solutions */}
            <Link href="/services/odoo">
              <motion.div 
                className="bg-white rounded-3xl overflow-hidden shadow-footer-lg border-2 border-primary/10 hover:shadow-footer-xl transition-shadow cursor-pointer h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-footer-lg">
                  <span className="text-2xl">➡️</span>
                </div>
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-text-dark mb-3">Odoo ERP Solutions</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  We design and implement customized Odoo ERP systems that streamline workflows, improve visibility, enhance efficiency, and support sustainable business growth.
                </p>
              </div>
              </motion.div>
            </Link>

            {/* Accounting & Financial Management */}
            <Link href="/services/accounting">
              <motion.div 
                className="bg-white rounded-3xl overflow-hidden shadow-footer-lg border-2 border-primary/10 hover:shadow-footer-xl transition-shadow cursor-pointer h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=300&fit=crop"
                  alt="Accounting & Financial Management"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-footer-lg">
                  <span className="text-2xl">➡️</span>
                </div>
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-text-dark mb-3">Accounting & Financial Management</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Stay compliant, save time, and gain clarity with remote bookkeeping, tax reporting, and financial dashboards that keep you in control of your business.
                </p>
              </div>
              </motion.div>
            </Link>

            {/* Custom Design & Development */}
            <motion.div 
              className="bg-white rounded-3xl overflow-hidden shadow-footer-lg border-2 border-primary/10 hover:shadow-footer-xl transition-shadow h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop"
                  alt="Custom Design & Development"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-footer-lg">
                  <span className="text-2xl">➡️</span>
                </div>
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-text-dark mb-3">Custom Design & Development</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  We create tailored web and application solutions with modern UI/UX design and robust functionality to meet your business requirements.
                </p>
              </div>
            </motion.div>

            {/* Digital Marketing */}
            <Link href="/services/digital-marketing">
              <motion.div 
                className="bg-white rounded-3xl overflow-hidden shadow-footer-lg border-2 border-primary/10 hover:shadow-footer-xl transition-shadow cursor-pointer h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-footer-lg">
                  <span className="text-2xl">➡️</span>
                </div>
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-text-dark mb-3">Digital Marketing</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Our marketing team builds strong online visibility through SEO, website optimization, and targeted digital campaigns across different platforms.
                </p>
              </div>
              </motion.div>
            </Link>
          </div>

          {/* Testimonials Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Testimonials Header */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">Testimonials</span>
              <h2 className="text-4xl md:text-4xl font-display font-bold text-text-dark mt-4 mb-6 leading-tight">
                Discover the impact we<br />
                have made on our clients<br />
                success.
              </h2>
              <p className="text-text-light mb-8 text-lg">
                We are proud to be a trusted technology partner 
                for organisations across diverse industries.
              </p>
              
              {/* Company Logos */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <motion.div 
                  className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-footer-md transition-shadow h-16 w-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                    alt="Airbnb"
                    width={60}
                    height={30}
                    className="object-contain max-w-full max-h-full"
                  />
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-footer-md transition-shadow h-16 w-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="Amazon"
                    width={60}
                    height={30}
                    className="object-contain max-w-full max-h-full"
                  />
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-footer-md transition-shadow h-16 w-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="Microsoft"
                    width={60}
                    height={30}
                    className="object-contain max-w-full max-h-full"
                  />
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-footer-md transition-shadow h-16 w-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google"
                    width={60}
                    height={30}
                    className="object-contain max-w-full max-h-full"
                  />
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-footer-md transition-shadow h-16 w-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg"
                    alt="FedEx"
                    width={60}
                    height={30}
                    className="object-contain max-w-full max-h-full"
                  />
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-footer-md transition-shadow h-16 w-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="/ola.png"
                    alt="OLA"
                    width={60}
                    height={30}
                    className="object-contain max-w-full max-h-full"
                  />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right Side - Testimonial Card */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-footer-lg border border-gray-100 relative">
                <div className="absolute top-4 right-4">
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <div className="text-4xl text-primary mb-4">&quot;</div>
                <p className="text-text-dark mb-6 italic text-lg leading-relaxed">
                  &quot;Blandit aliquet varius id malesuada nunc euismod id tempor malesuada 
                  sollicitudin sit nisi tellus auctor vitae dignissim tell lacinia convallis 
                  dictum.&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-text-dark text-lg">Ronald Richards</div>
                    <div className="text-text-light">Founder & CEO</div>
                  </div>
                  <div className="absolute -bottom-2 -right-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">&quot;</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 text-white relative"
        style={{ backgroundColor: '#00296b' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-accent font-semibold text-lg">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
                Ready to Transform Your Business<br />
                <span className="text-accent">with Odoo?</span>
              </h2>
              <p className="text-gray-200 mb-8 text-lg">
                Let&apos;s streamline your operations, boost visibility, and accelerate 
                growth, all with one trusted partner.
              </p>
              <Link 
                href="/contact"
                className="bg-accent text-white px-10 py-4 text-lg rounded-lg font-semibold hover:bg-accent/90 transform hover:scale-105 transition-all duration-300 shadow-footer-lg inline-block"
              >
                Get in Touch →
              </Link>
            </motion.div>
            
            <motion.div 
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop"
                  alt="Business professional"
                  width={300}
                  height={400}
                  className="rounded-full"
                />
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/30 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <motion.div 
                  className="absolute -top-4 -left-4 w-16 h-16 bg-green-500/30 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary font-semibold text-lg">FAQs</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-4 mb-6">
                We are always ready to<br />
                <span className="text-accent">answer all your questions</span>
              </h2>
              <p className="text-text-light text-lg">
                Your business transformation journey with Odoo should be simple and clear. 
                Here are answers to the questions we get asked most often.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <FAQ />
            </motion.div>
          </div>
        </div>
      </motion.section>


      <Footer />
    </main>
  )
}
