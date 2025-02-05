import Header from "./components/Header"
import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <FeaturedProducts />
      <About />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App

