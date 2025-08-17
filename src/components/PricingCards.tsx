import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PricingPlan {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

interface PricingCardsProps {
  plans: PricingPlan[]
  className?: string
}

export function PricingCards({ plans, className }: PricingCardsProps) {
  return (
    <div className={cn(
      'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
      className
    )}>
      {plans.map((plan, index) => (
        <div
          key={index}
          className={cn(
            'relative bg-card border border-border rounded-card shadow-card p-6',
            plan.popular && 'border-brand ring-2 ring-brand ring-opacity-20'
          )}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-brand text-white px-3 py-1 text-xs font-semibold rounded-full">
                Most Popular
              </span>
            </div>
          )}
          
          <div className="text-center mb-6">
            <h3 className="text-h3 text-ink mb-2">{plan.name}</h3>
            <div className="mb-2">
              <span className="text-3xl font-bold text-brand">{plan.price}</span>
              {plan.period && (
                <span className="text-muted ml-1">/{plan.period}</span>
              )}
            </div>
            <p className="text-sm text-muted">{plan.description}</p>
          </div>
          
          <ul className="space-y-3 mb-6">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-sm text-ink">{feature}</span>
              </li>
            ))}
          </ul>
          
          <button className={cn(
            'w-full py-3 px-4 rounded-button font-semibold transition-colors',
            plan.popular 
              ? 'bg-brand text-white hover:bg-brand-600' 
              : 'bg-bg text-ink border border-border hover:bg-gray-50'
          )}>
            {plan.cta}
          </button>
        </div>
      ))}
    </div>
  )
}