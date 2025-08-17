import { ReactNode } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CardProps {
  icon?: ReactNode
  title: string
  description?: string
  bullets?: string[]
  className?: string
  children?: ReactNode
}

export function Card({ 
  icon, 
  title, 
  description, 
  bullets, 
  className,
  children 
}: CardProps) {
  return (
    <div className={cn(
      'bg-card border border-border rounded-card shadow-card p-6',
      className
    )}>
      {icon && (
        <div className="mb-4 text-brand">
          {icon}
        </div>
      )}
      
      <h3 className="text-h3 text-ink mb-3">
        {title}
      </h3>
      
      {description && (
        <p className="text-body text-muted mb-4">
          {description}
        </p>
      )}
      
      {bullets && bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span className="text-sm text-ink">{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      
      {children}
    </div>
  )
}