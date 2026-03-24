import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Team from './components/Team'
import ThePlace from './components/ThePlace'
import Schedule from './components/Schedule'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A', color: '#F5F5F5' }}>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Team />
        <ThePlace />
        <Schedule />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
