'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-footer-lg backdrop-blur-sm' 
          : 'bg-white/95 backdrop-blur-sm shadow-footer'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/oneclick-logo.png"
              alt="OneClick"
              width={140}
              height={45}
              className="object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-text-dark hover:text-primary transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-text-dark hover:text-primary transition-colors duration-300 font-medium">
              About Us
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link href="/services" className="text-text-dark hover:text-primary transition-colors duration-300 font-medium flex items-center gap-1">
                Services
                <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-footer-lg border border-gray-100 py-2 z-50 transition-all duration-200 ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <Link 
                  href="/services/odoo" 
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  <div className="font-medium">Odoo ERP Solutions</div>
                  <div className="text-xs text-gray-500 mt-1">Business process automation</div>
                </Link>
                <Link 
                  href="/services/digital-marketing" 
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  <div className="font-medium">Digital Marketing</div>
                  <div className="text-xs text-gray-500 mt-1">Online presence & campaigns</div>
                </Link>
                <Link 
                  href="/services/accounting" 
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  <div className="font-medium">Accounting & Financial</div>
                  <div className="text-xs text-gray-500 mt-1">Bookkeeping & compliance</div>
                </Link>
              </div>
            </div>
            <Link href="/blogs" className="text-text-dark hover:text-primary transition-colors duration-300 font-medium">
              Blogs
            </Link>
            <Link href="/contact" className="text-text-dark hover:text-primary transition-colors duration-300 font-medium">
              Contact Us
            </Link>
          </nav>
          <Link href="/contact" className="btn-primary hidden md:block">
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'}`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 py-4 bg-white border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-text-dark hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-text-dark hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div className="flex flex-col">
                <button 
                  className="text-text-dark hover:text-primary transition-colors duration-300 font-medium py-2 flex items-center justify-between"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`ml-4 transition-all duration-200 ${isServicesOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <Link 
                    href="/services/odoo" 
                    className="block py-2 text-sm text-gray-600 hover:text-green-600"
                    onClick={() => {setIsMobileMenuOpen(false); setIsServicesOpen(false);}}
                  >
                    Odoo ERP Solutions
                  </Link>
                  <Link 
                    href="/services/digital-marketing" 
                    className="block py-2 text-sm text-gray-600 hover:text-green-600"
                    onClick={() => {setIsMobileMenuOpen(false); setIsServicesOpen(false);}}
                  >
                    Digital Marketing
                  </Link>
                  <Link 
                    href="/services/accounting" 
                    className="block py-2 text-sm text-gray-600 hover:text-green-600"
                    onClick={() => {setIsMobileMenuOpen(false); setIsServicesOpen(false);}}
                  >
                    Accounting & Financial
                  </Link>
                </div>
              </div>
              
              <Link 
                href="/blogs" 
                className="text-text-dark hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link 
                href="/contact" 
                className="text-text-dark hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              
              {/* Mobile CTA Button */}
              <Link 
                href="/contact" 
                className="btn-primary text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  )
}