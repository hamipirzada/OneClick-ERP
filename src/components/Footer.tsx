import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#00296b' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/oneclick-logo.png"
                alt="OneClick"
                width={140}
                height={45}
                className="object-contain filter"
                style={{ 
                  filter: 'brightness(0) invert(1)', 
                  mixBlendMode: 'normal' 
                }}
              />
            </div>
            <p className="text-white/90 mb-6 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, sed consectetur adipiscing elit, sed do 
              eiusmod tempor sed incididunt ut labore et dolore magna aliqua elit 
              Ut enim ad in reprehenderit in volud.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-xs">in</span>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-xs">x</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <div><Link href="/" className="text-white/90 hover:text-white text-sm">Home</Link></div>
              <div><Link href="/about" className="text-white/90 hover:text-white text-sm">About Us</Link></div>
              <div><Link href="/services" className="text-white/90 hover:text-white text-sm">Services</Link></div>
              <div><Link href="/contact" className="text-white/90 hover:text-white text-sm">Contact us</Link></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Contact us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm">📧</span>
                <span className="text-white/90 text-sm">info@oneclick.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">📞</span>
                <span className="text-white/90 text-sm">+91 6005227426</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sm">📍</span>
                <span className="text-white/90 text-sm">
                  3891 Ranchview Dr, Richardson,<br />
                  California
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/80 text-xs">© 2025 OneClick. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
