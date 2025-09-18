'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Get in <span className="text-green-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Ready to transform your business? Let&apos;s discuss how OneClick can help 
              you achieve your goals with our comprehensive ERP and digital solutions.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option value="">Select a service</option>
                      <option value="odoo">Odoo ERP Implementation</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="accounting">Accounting Management</option>
                      <option value="development">Custom Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Tell us about your project and how we can help..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Email Us</h3>
                      <p className="text-gray-600">Info@oneclick.com</p>
                      <p className="text-gray-500 text-sm mt-1">We&apos;ll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Call Us</h3>
                      <p className="text-gray-600">+91 7051294074</p>
                      <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am-6pm PST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Visit Us</h3>
                      <p className="text-gray-600">
                        3891 Ranchview Dr.<br />
                        Richardson, California
                      </p>
                      <p className="text-gray-500 text-sm mt-1">By appointment only</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-12 bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Quick Questions?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">How long does implementation take?</h4>
                      <p className="text-gray-600 text-sm">Typically 2-6 months depending on complexity.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">Do you offer free consultations?</h4>
                      <p className="text-gray-600 text-sm">Yes! We provide free initial consultations.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">What&apos;s your success rate?</h4>
                      <p className="text-gray-600 text-sm">We maintain a 99% project success rate.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 100+ satisfied clients who have transformed their businesses with OneClick.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:Info@oneclick.com"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Email Us Now
              </a>
              <a 
                href="tel:+13075550133"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
