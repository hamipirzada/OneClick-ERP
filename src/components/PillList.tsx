interface PillListProps {
  items: string[]
  className?: string
}

export function PillList({ items, className }: PillListProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className || ''}`}>
      {items.map((item, index) => (
        <span
          key={index}
          className="inline-flex items-center px-4 py-2 bg-bg text-ink text-sm font-medium rounded-full border border-border"
        >
          {item}
        </span>
      ))}
    </div>
  )
}