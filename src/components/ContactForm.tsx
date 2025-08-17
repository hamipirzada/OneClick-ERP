'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, CheckCircle } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '@/lib/schemas'

const services = [
  'Odoo ERP Implementation',
  'Accounting & Finance',
  'Support & Maintenance', 
  'Digital Marketing',
  'Custom Development'
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-card border border-border rounded-card shadow-card p-8 text-center">
        <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
        <h3 className="text-h3 text-ink mb-2">Thank you for your message!</h3>
        <p className="text-body text-muted mb-6">
          We'll get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="bg-card border border-border rounded-card shadow-card p-8 space-y-6"
    >
      <div>
        <label htmlFor="fullName" className="block text-ink font-medium mb-2">
          Full Name *
        </label>
        <input
          {...register('fullName')}
          type="text"
          id="fullName"
          className="w-full px-4 py-3 border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
          placeholder="Your full name"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-ink font-medium mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-ink font-medium mb-2">
            Company *
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="w-full px-4 py-3 border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            placeholder="Your company name"
          />
          {errors.company && (
            <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-ink font-medium mb-2">
          Phone *
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          className="w-full px-4 py-3 border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
          placeholder="+1 (555) 123-4567"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-ink font-medium mb-3">
          Services Interested In *
        </label>
        <div className="space-y-2">
          {services.map((service) => (
            <label key={service} className="flex items-center space-x-3">
              <input
                {...register('servicesInterested')}
                type="checkbox"
                value={service}
                className="w-4 h-4 text-brand border-border rounded focus:ring-brand"
              />
              <span className="text-ink">{service}</span>
            </label>
          ))}
        </div>
        {errors.servicesInterested && (
          <p className="text-red-500 text-sm mt-1">{errors.servicesInterested.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-ink font-medium mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className="w-full px-4 py-3 border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-vertical"
          placeholder="Tell us about your project requirements..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary justify-center"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send className="w-4 h-4" />
      </button>
      
      <p className="text-center text-sm text-muted">
        We'll respond within 24 hours.
      </p>
    </form>
  )
}