'use client'

import React from 'react'

export const SimpleFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-green-400">
                OneClick
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              OneClick specializes in delivering powerful Odoo ERP solutions that transform businesses. 
              We combine deep technical expertise with strategic business insights to drive sustainable growth.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <span>📧</span>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm">Info@oneclick.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <span>📞</span>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-sm">+91 6005227426</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <span>📍</span>
                <div>
                  <div className="font-medium">Address</div>
                  <div className="text-sm">3891 Ranchview Dr.<br />Richardson, California</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Odoo ERP Implementation</span></li>
              <li><span className="text-gray-300">Digital Marketing</span></li>
              <li><span className="text-gray-300">Accounting Management</span></li>
              <li><span className="text-gray-300">Custom Development</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} OneClick. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-gray-400 text-sm">Privacy Policy</span>
            <span className="text-gray-400 text-sm">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
