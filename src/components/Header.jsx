import { ShoppingBag } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-stone-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">LeatherLux</h1>
        <nav>
          <ul className="flex space-x-6">
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
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="bg-amber-400 text-stone-900 px-4 py-2 rounded-full flex items-center">
          <ShoppingBag className="mr-2" />
          Cart (0)
        </button>
      </div>
    </header>
  )
}

export default Header

