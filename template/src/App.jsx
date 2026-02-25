import { useScrollAnimation } from './hooks/useScrollAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default App;
