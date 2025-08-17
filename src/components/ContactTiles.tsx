import { Mail, Phone, MapPin, Clock } from 'lucide-react'

interface ContactTile {
  icon: 'email' | 'phone' | 'location' | 'hours'
  title: string
  content: string
  link?: string
}

interface ContactTilesProps {
  className?: string
}

const contactData: ContactTile[] = [
  {
    icon: 'email',
    title: 'Email Us',
    content: 'info@oneclickerp.com',
    link: 'mailto:info@oneclickerp.com'
  },
  {
    icon: 'phone',
    title: 'Call Us',
    content: '+1 (234) 567-890',
    link: 'tel:+1234567890'
  },
  {
    icon: 'location',
    title: 'Visit Us',
    content: '123 Business Ave, Suite 100, City, State 12345'
  },
  {
    icon: 'hours',
    title: 'Business Hours',
    content: 'Mon - Fri: 9:00 AM - 6:00 PM'
  }
]

const iconMap = {
  email: Mail,
  phone: Phone,
  location: MapPin,
  hours: Clock
}

export function ContactTiles({ className }: ContactTilesProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className || ''}`}>
      {contactData.map((tile, index) => {
        const Icon = iconMap[tile.icon]
        const content = tile.link ? (
          <a 
            href={tile.link}
            className="text-brand hover:text-brand-600 transition-colors"
          >
            {tile.content}
          </a>
        ) : (
          <span className="text-ink">{tile.content}</span>
        )

        return (
          <div
            key={index}
            className="bg-card border border-border rounded-card shadow-card p-6 text-center"
          >
            <div className="w-12 h-12 bg-brand bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="w-6 h-6 text-brand" />
            </div>
            <h3 className="text-h3 text-ink mb-2">{tile.title}</h3>
            <div className="text-body">{content}</div>
          </div>
        )
      })}
    </div>
  )
}