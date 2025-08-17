interface Stat {
  number: string
  label: string
}

interface StatsRowProps {
  stats: Stat[]
  className?: string
}

export function StatsRow({ stats, className }: StatsRowProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className || ''}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-brand mb-1">
            {stat.number}
          </div>
          <div className="text-sm text-muted">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}