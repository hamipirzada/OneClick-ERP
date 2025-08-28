'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const blogPosts = [
    {
      title: "5 Reasons Why Your Business Needs Odoo ERP in 2025",
      slug: "odoo-erp-business-needs-2025",
      excerpt: "Discover how Odoo ERP can streamline your business operations and boost productivity in the modern digital landscape.",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "ERP Solutions",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
      featured: true
    },
    {
      title: "Digital Marketing Trends That Will Dominate 2025",
      slug: "digital-marketing-trends-2025",
      excerpt: "Stay ahead of the competition with these emerging digital marketing strategies and technologies.",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
      featured: false
    },
    {
      title: "How to Choose the Right ERP System for Your Small Business",
      slug: "choose-erp-system-small-business",
      excerpt: "A comprehensive guide to selecting the perfect ERP solution that grows with your business needs.",
      date: "January 10, 2025",
      readTime: "10 min read",
      category: "Business Strategy",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
      featured: false
    },
    {
      title: "The ROI of ERP Implementation: What to Expect",
      slug: "erp-implementation-roi-expectations",
      excerpt: "Learn about the real financial benefits and timeline for return on investment with ERP systems.",
      date: "January 8, 2025",
      readTime: "7 min read",
      category: "ROI Analysis",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&q=80",
      featured: false
    },
    {
      title: "Streamlining Your Accounting Process with Modern Tools",
      slug: "streamline-accounting-modern-tools",
      excerpt: "Discover how to automate your financial processes and improve accuracy with the latest accounting software.",
      date: "January 5, 2025",
      readTime: "5 min read",
      category: "Accounting",
      image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=400&q=80",
      featured: false
    },
    {
      title: "Custom Software Development: Build vs Buy Decision Guide",
      slug: "custom-software-build-vs-buy-guide",
      excerpt: "Navigate the complex decision of whether to build custom software or purchase existing solutions.",
      date: "January 3, 2025",
      readTime: "9 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&q=80",
      featured: false
    }
  ]

  // Filter posts based on active category
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  const categories = ["All", "ERP Solutions", "Digital Marketing", "Business Strategy", "ROI Analysis", "Accounting", "Development"]

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
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              OneClick <span className="text-green-600">Blog</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Stay updated with the latest insights on ERP solutions, digital marketing, 
              and business transformation strategies from our team of experts.
            </motion.p>
          </div>
        </motion.section>

        {/* Blog Categories */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category 
                      ? "bg-green-600 text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-gray-500 text-sm">{blogPosts[0].category}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <span>{blogPosts[0].date}</span>
                      <span>•</span>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <Link 
                      href={`/blogs/${blogPosts[0].slug}`}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
                    >
                      Read Article
                    </Link>
                  </div>
                  <div className="relative">
                    <Image
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      width={500}
                      height={300}
                      className="rounded-xl shadow-footer-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                Latest Articles
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post) => (
                  <Link 
                    key={post.title} 
                    href={`/blogs/${post.slug}`}
                    className="bg-white rounded-xl overflow-hidden shadow-footer-lg hover:shadow-footer-xl transition-shadow block"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-slate-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on ERP solutions, business strategies, and industry trends 
              delivered straight to your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-400 text-sm mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}