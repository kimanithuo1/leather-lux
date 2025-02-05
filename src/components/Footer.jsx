import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="bg-espresso text-ivory py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Logo className="h-10 w-auto" />
              <span className="text-2xl font-sans font-bold text-gold">LeatherLux</span>
            </Link>
            <p className="mb-4 text-ivory/80">
              Crafting premium leather accessories since 2023. Our commitment to quality and sustainability sets us
              apart.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-ivory hover:text-gold transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-ivory hover:text-gold transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-ivory hover:text-gold transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-ivory hover:text-gold transition-colors duration-300">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gold font-sans font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/wallets" className="hover:text-gold transition-colors duration-300">
                  Wallets
                </Link>
              </li>
              <li>
                <Link to="/products/bags" className="hover:text-gold transition-colors duration-300">
                  Bags
                </Link>
              </li>
              <li>
                <Link to="/products/belts" className="hover:text-gold transition-colors duration-300">
                  Belts
                </Link>
              </li>
              <li>
                <Link to="/products/accessories" className="hover:text-gold transition-colors duration-300">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/products/new-arrivals" className="hover:text-gold transition-colors duration-300">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-sans font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-gold transition-colors duration-300">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/craftsmanship" className="hover:text-gold transition-colors duration-300">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-gold transition-colors duration-300">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gold transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-gold transition-colors duration-300">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-sans font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gold transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping-returns" className="hover:text-gold transition-colors duration-300">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/care-guide" className="hover:text-gold transition-colors duration-300">
                  Leather Care Guide
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="hover:text-gold transition-colors duration-300">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ivory/20 text-center">
          <p className="text-ivory/60">&copy; 2025 LeatherLux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

