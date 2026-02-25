import Header from './components/Header'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Menu from './components/Menu'
import Space from './components/Space'
import Origin from './components/Origin'
import Reviews from './components/Reviews'
import Visit from './components/Visit'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[var(--ondo-bg)] text-[var(--ondo-text)]">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Menu />
        <Space />
        <Origin />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}
