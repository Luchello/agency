import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Story from './components/Story'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Footer from './components/Footer'

const marqueeItems = [
  '갓 구운 빵',
  '수제 케이크',
  '브런치 세트',
  '커피 & 음료',
  '자연 발효종',
  '프랑스산 버터',
  '유기농 밀가루',
]

export default function App() {
  return (
    <div className="bb-grain">
      <Header />
      <main>
        <Hero />
        <Marquee items={marqueeItems} />
        <div id="story">
          <Story />
        </div>
        <Menu />
        <Gallery />
        <Reviews />
        <div id="visit">
          <Location />
        </div>
      </main>
      <Footer />
    </div>
  )
}
