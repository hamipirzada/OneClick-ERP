import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  centered?: boolean
}

export function SectionHeader({ 
  eyebrow, 
  title, 
  description, 
  className,
  centered = false 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      'space-y-4',
      centered && 'text-center',
      className
    )}>
      {eyebrow && (
        <div className="text-brand font-semibold text-sm uppercase tracking-wide">
          {eyebrow}
        </div>
      )}
      <h2 className="text-h2 text-ink">
        {title}
      </h2>
      {description && (
        <p className="text-body text-muted max-w-3xl">
          {description}
        </p>
      )}
    </div>
  )
}