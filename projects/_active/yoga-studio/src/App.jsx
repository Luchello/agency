import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Classes from './components/Classes'
import Instructors from './components/Instructors'
import Schedule from './components/Schedule'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--ink)]">
      <main>
        <Hero />
        <Philosophy />
        <Classes />
        <Instructors />
        <Schedule />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  )
}
