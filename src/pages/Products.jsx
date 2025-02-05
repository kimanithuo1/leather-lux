import { useState } from "react"
import { ShoppingBag, Heart, SlidersHorizontal } from "lucide-react"
import { useCart } from "../context/CartContext"

const categories = ["All", "Wallets", "Bags", "Belts", "Accessories", "New Arrivals"]

const products = [
  // Wallets
  {
    id: "w1",
    name: "Executive Bifold Wallet",
    price: 79,
    image: "https://images.unsplash.com/photo-1627123364843-8d279b401202",
    category: "Wallets",
    description: "Handcrafted from premium full-grain leather with multiple card slots and bill compartments.",
    isNew: true,
  },
  {
    id: "w2",
    name: "Slim Card Holder",
    price: 49,
    image: "https://images.unsplash.com/photo-1606503825008-909a67e63c3d",
    category: "Wallets",
    description: "Minimalist design perfect for essential cards and folded bills.",
    isNew: false,
  },
  {
    id: "w3",
    name: "Travel Passport Wallet",
    price: 89,
    image: "https://images.unsplash.com/photo-1589409514187-c21d14df0d04",
    category: "Wallets",
    description: "Designed for travelers with passport and boarding pass pockets.",
    isNew: true,
  },
  // Bags
  {
    id: "b1",
    name: "Heritage Leather Briefcase",
    price: 299,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
    category: "Bags",
    description: "Classic briefcase with modern features for the professional.",
    isNew: true,
  },
  {
    id: "b2",
    name: "Vintage Messenger Bag",
    price: 249,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
    category: "Bags",
    description: "Timeless messenger design with adjustable shoulder strap.",
    isNew: false,
  },
  {
    id: "b3",
    name: "Weekend Duffle Bag",
    price: 329,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    category: "Bags",
    description: "Perfect for short trips with spacious compartments.",
    isNew: true,
  },
  // Belts
  {
    id: "bt1",
    name: "Classic Dress Belt",
    price: 89,
    image: "https://images.unsplash.com/photo-1624668432641-4d1b0c698e6e",
    category: "Belts",
    description: "Formal belt with traditional buckle design.",
    isNew: true,
  },
  {
    id: "bt2",
    name: "Casual Suede Belt",
    price: 69,
    image: "https://images.unsplash.com/photo-1614671147345-8430e1a3c661",
    category: "Belts",
    description: "Versatile suede belt for casual occasions.",
    isNew: false,
  },
  // Accessories
  {
    id: "a1",
    name: "Premium AirPods Case",
    price: 39,
    image: "https://images.unsplash.com/photo-1586308834066-0cb0595dc548",
    category: "Accessories",
    description: "Protective leather case for AirPods with clip.",
    isNew: false,
  },
  {
    id: "a2",
    name: "Leather Key Organizer",
    price: 29,
    image: "https://images.unsplash.com/photo-1614671147355-5f24f86c8aa9",
    category: "Accessories",
    description: "Keep your keys organized and quiet.",
    isNew: true,
  },
  // New Arrivals
  {
    id: "n1",
    name: "Smart Watch Strap",
    price: 59,
    image: "https://images.unsplash.com/photo-1434754205268-ad3b5f549b11",
    category: "New Arrivals",
    description: "Premium leather strap for smart watches.",
    isNew: true,
  },
  {
    id: "n2",
    name: "Laptop Sleeve",
    price: 79,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
    category: "New Arrivals",
    description: "Protective sleeve for laptops up to 15 inches.",
    isNew: true,
  },
]

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const { addToCart } = useCart()

  const filteredProducts = products.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory,
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price
    if (sortBy === "price-desc") return b.price - a.price
    if (sortBy === "new") return b.isNew - a.isNew
    return 0 // featured
  })

  return (
    <div className="min-h-screen pt-20 bg-[rgb(var(--color-ivory))]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-sans font-bold text-[rgb(var(--color-espresso))] mb-4 md:mb-0">
            Our Collection
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-[rgb(var(--color-espresso)_/_0.2)] rounded-full px-4 py-2 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-gold))]"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="new">New Arrivals</option>
              </select>
              <SlidersHorizontal className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-[rgb(var(--color-espresso))]" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-[rgb(var(--color-gold))] text-[rgb(var(--color-espresso))]"
                  : "bg-[rgb(var(--color-espresso))] text-[rgb(var(--color-ivory))]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-[rgb(var(--color-gold))] text-[rgb(var(--color-espresso))] px-3 py-1 rounded-full text-sm font-semibold">
                    New Arrival
                  </div>
                )}
                <div
                  className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[rgb(var(--color-gold))] text-[rgb(var(--color-espresso))] p-3 rounded-full hover:bg-[rgb(var(--color-cognac))] transition-colors duration-300"
                  >
                    <ShoppingBag className="h-6 w-6" />
                  </button>
                  <button className="bg-white text-[rgb(var(--color-espresso))] p-3 rounded-full hover:bg-[rgb(var(--color-cognac))] hover:text-white transition-colors duration-300">
                    <Heart className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm font-medium mb-2 text-[rgb(var(--color-cognac))]">{product.category}</div>
                <h3 className="text-xl font-sans font-bold mb-2 text-[rgb(var(--color-espresso))]">{product.name}</h3>
                <p className="text-[rgb(var(--color-matte)_/_0.7)] mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-[rgb(var(--color-espresso))]">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[rgb(var(--color-espresso))] text-[rgb(var(--color-ivory))] px-4 py-2 rounded-full hover:bg-[rgb(var(--color-cognac))] transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

