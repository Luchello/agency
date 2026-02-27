import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Process from './components/Process'
import Reviews from './components/Reviews'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[var(--lamure-bg)] text-[var(--lamure-text)]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Process />
        <Reviews />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}
