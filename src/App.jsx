import { Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Header from "./components/Header"
import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"
import About from "./components/About"
import Craftsmanship from "./components/Craftsmanship"
import Testimonials from "./components/Testimonials"
import Blog from "./components/Blog"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import Products from "./pages/Products"

function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-[rgb(var(--color-ivory))]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <FeaturedProducts />
                  <About />
                  <Craftsmanship />
                  <Testimonials />
                  <Blog />
                  <Newsletter />
                </>
              }
            />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App

