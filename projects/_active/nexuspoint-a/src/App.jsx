import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import PolicyGuarantee from './components/PolicyGuarantee'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Pricing />
      <PolicyGuarantee />
      <Process />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
