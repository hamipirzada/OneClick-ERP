'use client'

import { ArrowRight, Users, Target, BarChart3 } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with{' '}
              <span className="text-blue-300">Odoo ERP</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Streamline operations, boost productivity, and accelerate growth with our expert Odoo implementation and customization services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Dashboard
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-blue-200 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-blue-200 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-blue-200 text-sm">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Odoo ERP Dashboard</h3>
                
                {/* Mock Chart */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-end space-x-2 h-24">
                    <div className="bg-blue-500 rounded-t w-8 h-16"></div>
                    <div className="bg-blue-400 rounded-t w-8 h-20"></div>
                    <div className="bg-blue-600 rounded-t w-8 h-12"></div>
                    <div className="bg-blue-500 rounded-t w-8 h-18"></div>
                    <div className="bg-blue-700 rounded-t w-8 h-24"></div>
                  </div>
                </div>

                {/* Mock Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-600">Active Users</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">1,247</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="flex items-center">
                      <Target className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm text-gray-600">Efficiency</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">94%</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-2 bg-white rounded-lg shadow-lg p-3">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero