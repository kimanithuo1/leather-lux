import { useState } from "react"
import { ShoppingBag, Menu, X, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import Logo from "./Logo"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart } = useCart()

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-espresso text-ivory fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="h-8 w-auto" />
            <span className="text-2xl font-sans font-bold text-gold">LeatherLux</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-ivory hover:text-gold transition-colors duration-300">
              Home
            </Link>
            <Link to="/products" className="text-ivory hover:text-gold transition-colors duration-300">
              Products
            </Link>
            <Link to="/about" className="text-ivory hover:text-gold transition-colors duration-300">
              About
            </Link>
            <Link to="/blog" className="text-ivory hover:text-gold transition-colors duration-300">
              Blog
            </Link>
            <Link to="/contact" className="text-ivory hover:text-gold transition-colors duration-300">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-6">
            <button className="hidden md:flex items-center text-ivory hover:text-gold transition-colors duration-300">
              <Search className="h-5 w-5" />
            </button>

            <Link
              to="/cart"
              className="flex items-center space-x-2 bg-gold text-espresso px-4 py-2 rounded-full hover:bg-cognac transition-colors duration-300"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="font-medium">Cart ({cartItemsCount})</span>
            </Link>

            <button
              className="md:hidden text-ivory hover:text-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-ivory/10">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-ivory hover:text-gold transition-colors duration-300">
                Home
              </Link>
              <Link to="/products" className="text-ivory hover:text-gold transition-colors duration-300">
                Products
              </Link>
              <Link to="/about" className="text-ivory hover:text-gold transition-colors duration-300">
                About
              </Link>
              <Link to="/blog" className="text-ivory hover:text-gold transition-colors duration-300">
                Blog
              </Link>
              <Link to="/contact" className="text-ivory hover:text-gold transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

