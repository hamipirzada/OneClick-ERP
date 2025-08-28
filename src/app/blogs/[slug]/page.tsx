'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Blog data (in a real app, this would come from a CMS or database)
const blogPosts = [
  {
    title: "5 Reasons Why Your Business Needs Odoo ERP in 2025",
    slug: "odoo-erp-business-needs-2025",
    excerpt: "Discover how Odoo ERP can streamline your business operations and boost productivity in the modern digital landscape.",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "ERP Solutions",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    author: "OneClick Team",
    content: `
      <h2>Why Odoo ERP is Essential for Modern Businesses</h2>
      <p>In today's competitive business landscape, companies need robust systems to manage their operations efficiently. Odoo ERP stands out as a comprehensive solution that addresses multiple business needs while remaining cost-effective and scalable.</p>
      
      <h3>1. Streamlined Operations</h3>
      <p>Odoo ERP integrates all your business processes into a single platform. From inventory management to customer relations, everything is centralized, reducing the complexity of managing multiple systems.</p>
      
      <h3>2. Cost-Effective Solution</h3>
      <p>Unlike traditional ERP systems that require substantial upfront investments, Odoo offers flexible pricing models that scale with your business growth. You only pay for the modules you actually use.</p>
      
      <h3>3. Customization and Flexibility</h3>
      <p>Every business is unique, and Odoo recognizes this by offering extensive customization options. Whether you need specific workflows or custom reports, Odoo can be tailored to match your exact requirements.</p>
      
      <h3>4. Real-time Analytics and Reporting</h3>
      <p>Make informed decisions with Odoo's powerful analytics tools. Get real-time insights into your business performance, track KPIs, and generate comprehensive reports with just a few clicks.</p>
      
      <h3>5. Scalability for Growth</h3>
      <p>As your business grows, Odoo grows with you. Add new modules, users, and functionalities seamlessly without disrupting your existing operations.</p>
      
      <h2>Getting Started with Odoo</h2>
      <p>Implementing Odoo ERP doesn't have to be overwhelming. With proper planning and expert guidance, you can transform your business operations and achieve significant improvements in efficiency and productivity.</p>
      
      <p>Contact OneClick today to learn how we can help you implement Odoo ERP and unlock your business's full potential.</p>
    `
  },
  {
    title: "Digital Marketing Trends That Will Dominate 2025",
    slug: "digital-marketing-trends-2025",
    excerpt: "Stay ahead of the competition with these emerging digital marketing strategies and technologies.",
    date: "January 12, 2025",
    readTime: "6 min read",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    author: "Marketing Team",
    content: `
      <h2>The Future of Digital Marketing is Here</h2>
      <p>Digital marketing continues to evolve at a rapid pace, and 2025 promises to bring exciting new opportunities for businesses to connect with their audiences. Here are the key trends that will shape the digital marketing landscape this year.</p>
      
      <h3>1. AI-Powered Personalization</h3>
      <p>Artificial intelligence is revolutionizing how businesses deliver personalized experiences. From dynamic content generation to predictive analytics, AI enables marketers to create highly targeted campaigns that resonate with individual customers.</p>
      
      <h3>2. Voice Search Optimization</h3>
      <p>With the increasing popularity of smart speakers and voice assistants, optimizing for voice search has become crucial. Businesses need to adapt their SEO strategies to capture voice-based queries effectively.</p>
      
      <h3>3. Interactive Content Experiences</h3>
      <p>Static content is being replaced by interactive experiences that engage users actively. Polls, quizzes, augmented reality filters, and interactive videos are driving higher engagement rates and better conversion outcomes.</p>
      
      <h3>4. Privacy-First Marketing</h3>
      <p>With increasing privacy regulations and consumer awareness, marketers must adopt privacy-first approaches. This includes transparent data collection practices and building trust through ethical marketing strategies.</p>
      
      <h3>5. Social Commerce Integration</h3>
      <p>Social media platforms are becoming powerful e-commerce channels. Businesses are leveraging social commerce features to create seamless shopping experiences directly within social apps.</p>
      
      <h2>Preparing Your Strategy for 2025</h2>
      <p>Success in digital marketing requires staying ahead of trends and adapting quickly to new technologies. By embracing these emerging trends, businesses can create more effective campaigns and build stronger customer relationships.</p>
      
      <p>Ready to elevate your digital marketing strategy? Contact OneClick to discover how we can help you leverage these trends for maximum impact.</p>
    `
  },
  {
    title: "How to Choose the Right ERP System for Your Small Business",
    slug: "choose-erp-system-small-business",
    excerpt: "A comprehensive guide to selecting the perfect ERP solution that grows with your business needs.",
    date: "January 10, 2025",
    readTime: "10 min read",
    category: "Business Strategy",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    author: "Business Consultants",
    content: `
      <h2>Finding the Perfect ERP Solution for Your Small Business</h2>
      <p>Choosing an ERP system is one of the most important decisions a small business can make. The right ERP solution can streamline operations, improve efficiency, and support growth, while the wrong choice can lead to wasted resources and operational challenges.</p>
      
      <h3>Understanding Your Business Needs</h3>
      <p>Before evaluating ERP options, it's crucial to understand your specific business requirements. Consider your current pain points, growth projections, and essential business processes that need improvement.</p>
      
      <h3>Key Factors to Consider</h3>
      <h4>1. Scalability</h4>
      <p>Choose an ERP system that can grow with your business. Look for solutions that allow you to add users, modules, and functionality as your needs evolve.</p>
      
      <h4>2. Cost Structure</h4>
      <p>Consider both upfront costs and ongoing expenses. Cloud-based solutions often offer more predictable pricing models compared to on-premise installations.</p>
      
      <h4>3. Ease of Use</h4>
      <p>Your team's ability to adopt and use the system effectively is crucial. Look for intuitive interfaces and comprehensive training resources.</p>
      
      <h4>4. Integration Capabilities</h4>
      <p>Ensure the ERP system can integrate with your existing tools and software to avoid data silos and workflow disruptions.</p>
      
      <h4>5. Support and Maintenance</h4>
      <p>Reliable vendor support is essential for smooth operations. Evaluate the quality of customer service, documentation, and community resources.</p>
      
      <h3>Why Odoo ERP is Ideal for Small Businesses</h3>
      <p>Odoo ERP addresses many of the challenges small businesses face when choosing an ERP system. Its modular approach allows you to start small and expand gradually, while its open-source nature provides flexibility and cost-effectiveness.</p>
      
      <h2>Making the Final Decision</h2>
      <p>Take time to evaluate multiple options, request demonstrations, and consider pilot implementations. The right ERP system will serve as the foundation for your business growth and success.</p>
      
      <p>Need help choosing the right ERP system? Contact OneClick for expert guidance and personalized recommendations based on your business needs.</p>
    `
  },
  {
    title: "The ROI of ERP Implementation: What to Expect",
    slug: "erp-implementation-roi-expectations",
    excerpt: "Learn about the real financial benefits and timeline for return on investment with ERP systems.",
    date: "January 8, 2025",
    readTime: "7 min read",
    category: "ROI Analysis",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&q=80",
    author: "Financial Analysts",
    content: `
      <h2>Understanding ERP ROI: A Comprehensive Analysis</h2>
      <p>Investing in an ERP system represents a significant decision for any business. Understanding the potential return on investment (ROI) and timeline for benefits realization is crucial for making informed decisions and setting realistic expectations.</p>
      
      <h3>Quantifiable Benefits of ERP Implementation</h3>
      <h4>1. Operational Efficiency Gains</h4>
      <p>Most businesses see 20-30% improvement in operational efficiency within the first year of ERP implementation. This translates to reduced labor costs and faster process completion times.</p>
      
      <h4>2. Inventory Management Savings</h4>
      <p>Improved inventory visibility and management typically result in 15-25% reduction in inventory carrying costs while maintaining optimal stock levels.</p>
      
      <h4>3. Error Reduction</h4>
      <p>Automated processes and data validation features significantly reduce manual errors, leading to cost savings and improved customer satisfaction.</p>
      
      <h3>Timeline for ROI Realization</h3>
      <h4>Year 1: Foundation Building</h4>
      <p>Initial benefits include process standardization and improved data visibility. ROI typically ranges from 5-15% in the first year.</p>
      
      <h4>Year 2-3: Optimization Phase</h4>
      <p>As teams become proficient with the system, ROI accelerates to 20-35%. Advanced features and customizations begin delivering significant value.</p>
      
      <h4>Year 3+: Mature Implementation</h4>
      <p>Fully optimized ERP implementations often deliver ROI exceeding 40%, with continuous improvements and strategic insights driving growth.</p>
      
      <h3>Factors Affecting ROI</h3>
      <ul>
        <li>Quality of implementation and change management</li>
        <li>User adoption and training effectiveness</li>
        <li>System customization and configuration</li>
        <li>Integration with existing business processes</li>
        <li>Ongoing system optimization and updates</li>
      </ul>
      
      <h3>Maximizing Your ERP Investment</h3>
      <p>To achieve optimal ROI, businesses should focus on comprehensive planning, thorough user training, and continuous process improvement. Regular system reviews and optimizations ensure long-term value creation.</p>
      
      <h2>Conclusion</h2>
      <p>While ERP implementation requires significant upfront investment, the long-term financial benefits far outweigh the costs. With proper planning and execution, businesses can expect substantial ROI and operational improvements.</p>
      
      <p>Ready to explore the ROI potential for your business? Contact OneClick for a detailed ROI analysis and implementation strategy tailored to your needs.</p>
    `
  },
  {
    title: "Streamlining Your Accounting Process with Modern Tools",
    slug: "streamline-accounting-modern-tools",
    excerpt: "Discover how to automate your financial processes and improve accuracy with the latest accounting software.",
    date: "January 5, 2025",
    readTime: "5 min read",
    category: "Accounting",
    image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=800&q=80",
    author: "Accounting Team",
    content: `
      <h2>Modernizing Your Accounting Operations</h2>
      <p>Traditional accounting processes often involve manual data entry, paper-based workflows, and time-consuming reconciliation procedures. Modern accounting tools can transform these processes, delivering accuracy, efficiency, and valuable insights.</p>
      
      <h3>Key Benefits of Modern Accounting Tools</h3>
      <h4>1. Automation of Routine Tasks</h4>
      <p>Automated data entry, invoice processing, and reconciliation reduce manual work by up to 80%, allowing your team to focus on strategic financial analysis.</p>
      
      <h4>2. Real-time Financial Visibility</h4>
      <p>Get instant access to financial data and performance metrics. Real-time dashboards provide up-to-date insights for better decision-making.</p>
      
      <h4>3. Enhanced Accuracy</h4>
      <p>Reduce human errors with automated calculations and data validation. Modern tools include built-in checks that flag discrepancies and potential issues.</p>
      
      <h4>4. Improved Compliance</h4>
      <p>Stay compliant with tax regulations and accounting standards through automated reporting and audit trails.</p>
      
      <h3>Essential Features to Look For</h3>
      <ul>
        <li>Bank reconciliation automation</li>
        <li>Invoice generation and management</li>
        <li>Expense tracking and approval workflows</li>
        <li>Financial reporting and analytics</li>
        <li>Tax preparation assistance</li>
        <li>Integration with banking and payment systems</li>
      </ul>
      
      <h3>Implementation Best Practices</h3>
      <h4>Start with Data Migration</h4>
      <p>Ensure clean, accurate data migration from existing systems. This foundation is crucial for system effectiveness.</p>
      
      <h4>Train Your Team Thoroughly</h4>
      <p>Comprehensive training ensures smooth adoption and maximizes the benefits of new accounting tools.</p>
      
      <h4>Establish New Workflows</h4>
      <p>Update your accounting processes to leverage automation features and eliminate redundant manual steps.</p>
      
      <h3>Measuring Success</h3>
      <p>Track key metrics such as processing time reduction, error rates, and team productivity to measure the impact of modernization efforts.</p>
      
      <h2>Taking the Next Step</h2>
      <p>Modernizing your accounting processes is an investment in your business's financial health and operational efficiency. The right tools can transform your accounting department from a cost center into a strategic asset.</p>
      
      <p>Ready to streamline your accounting processes? Contact OneClick to learn how we can help you implement modern accounting solutions tailored to your business needs.</p>
    `
  },
  {
    title: "Custom Software Development: Build vs Buy Decision Guide",
    slug: "custom-software-build-vs-buy-guide",
    excerpt: "Navigate the complex decision of whether to build custom software or purchase existing solutions.",
    date: "January 3, 2025",
    readTime: "9 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80",
    author: "Development Team",
    content: `
      <h2>The Build vs Buy Dilemma in Software Development</h2>
      <p>One of the most critical decisions businesses face when addressing software needs is whether to build a custom solution or purchase an existing product. This decision can significantly impact your budget, timeline, and long-term business outcomes.</p>
      
      <h3>When to Build Custom Software</h3>
      <h4>Unique Business Requirements</h4>
      <p>If your business processes are highly specialized and no existing solution adequately addresses your needs, custom development might be the best path forward.</p>
      
      <h4>Competitive Advantage</h4>
      <p>Custom software can provide a competitive edge by enabling unique capabilities that competitors using off-the-shelf solutions cannot match.</p>
      
      <h4>Integration Requirements</h4>
      <p>When seamless integration with existing systems is crucial, custom development often provides better control over data flow and process alignment.</p>
      
      <h4>Long-term Cost Considerations</h4>
      <p>For large organizations with extensive user bases, the long-term cost of licensing commercial software may exceed custom development costs.</p>
      
      <h3>When to Buy Existing Solutions</h3>
      <h4>Time-to-Market Pressure</h4>
      <p>Commercial solutions can be deployed quickly, helping you address urgent business needs without development delays.</p>
      
      <h4>Standard Business Processes</h4>
      <p>If your requirements align with industry standards, existing solutions often provide proven functionality at lower costs.</p>
      
      <h4>Limited Technical Resources</h4>
      <p>Organizations without dedicated development teams may find it more practical to purchase and configure existing solutions.</p>
      
      <h4>Lower Upfront Investment</h4>
      <p>Commercial software typically requires lower initial investment compared to custom development projects.</p>
      
      <h3>Evaluation Framework</h3>
      <h4>1. Requirements Analysis</h4>
      <p>Document your specific needs and evaluate how well existing solutions address them. Create a requirements matrix to compare options objectively.</p>
      
      <h4>2. Total Cost of Ownership</h4>
      <p>Consider all costs including licensing, implementation, customization, training, maintenance, and ongoing support.</p>
      
      <h4>3. Risk Assessment</h4>
      <p>Evaluate risks associated with each approach, including vendor dependency, technical obsolescence, and project failure possibilities.</p>
      
      <h4>4. Timeline Considerations</h4>
      <p>Assess your urgency and available timeframe. Custom development typically takes longer but may provide better long-term value.</p>
      
      <h3>Hybrid Approaches</h3>
      <p>Sometimes the best solution combines elements of both approaches. Consider:</p>
      <ul>
        <li>Customizing existing platforms</li>
        <li>Building integrations between commercial solutions</li>
        <li>Starting with commercial software and transitioning to custom solutions</li>
        <li>Using existing solutions as inspiration for custom development</li>
      </ul>
      
      <h2>Making the Right Decision</h2>
      <p>The build vs buy decision requires careful analysis of your specific situation. Consider your business objectives, technical capabilities, financial resources, and timeline constraints when making this important choice.</p>
      
      <p>Need help making the right decision for your business? Contact OneClick for expert consultation and guidance on software solutions that best fit your needs.</p>
    `
  }
]

interface PageProps {
  params: { slug: string }
}

export default function BlogPost({ params }: PageProps) {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-6 md:mb-8"
              >
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight px-4 md:px-0">
                  {post.title}
                </h1>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-gray-600 text-sm mb-6 md:mb-8">
                  <span>{post.author}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{post.date}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="px-4 md:px-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-48 md:h-64 lg:h-96 rounded-lg shadow-footer-lg mx-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-sm md:prose-lg prose-slate max-w-none px-4 md:px-0
                  prose-headings:text-slate-800 prose-headings:font-bold
                  prose-h2:text-xl md:prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-lg md:prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                  prose-h4:text-base md:prose-h4:text-lg prose-h4:mt-4 prose-h4:mb-2
                  prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:text-gray-600 prose-ul:mb-4
                  prose-li:mb-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 md:mt-12 p-6 md:p-8 bg-slate-50 rounded-xl text-center mx-4 md:mx-0"
              >
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 md:mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                  Get expert consultation and personalized solutions for your business needs.
                </p>
                <Link
                  href="/contact"
                  className="bg-green-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block text-sm md:text-base"
                >
                  Contact Us Today
                </Link>
              </motion.div>

              {/* Back to Blog */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 md:mt-12 text-center"
              >
                <Link
                  href="/blogs"
                  className="text-green-600 hover:text-green-700 font-medium inline-flex items-center gap-2 text-sm md:text-base"
                >
                  ← Back to All Articles
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}