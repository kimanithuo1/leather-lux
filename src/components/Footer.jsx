import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">LeatherLux</h3>
            <p>Crafting premium leather accessories since 2023.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>123 Leather Lane</p>
            <p>Craftsville, CR 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@leatherlux.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-400">
                <Facebook />
              </a>
              <a href="#" className="hover:text-amber-400">
                <Instagram />
              </a>
              <a href="#" className="hover:text-amber-400">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 LeatherLux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

