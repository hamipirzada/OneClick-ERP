import Hero from '@/components/sections/Hero'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import CTABand from '@/components/sections/CTABand'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CTABand />
      <Footer />
    </main>
  )
}