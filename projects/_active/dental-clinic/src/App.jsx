import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import BeforeAfter from './components/BeforeAfter'
import Facility from './components/Facility'
import Reviews from './components/Reviews'
import Appointment from './components/Appointment'
import Footer from './components/Footer'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <BeforeAfter />
        <Facility />
        <Reviews />
        <Appointment />
      </main>
      <Footer />
    </div>
  )
}

export default App
