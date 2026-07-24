import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Services from './components/Services'
import VideoShowcase from './components/VideoShowcase'
import Impact from './components/Impact'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <VideoShowcase />
      <Impact />
      <Awards />
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
  )
}

export default App
