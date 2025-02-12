import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag, Heart } from "lucide-react"
import { useCart } from "../context/CartContext"

const products = [
  // Wallets
  {
    id: 1,
    name: "Executive Bifold Wallet",
    price: 79,
    image: "https://images.unsplash.com/photo-1627123364843-8d279b401202",
    category: "Wallets",
    isNew: true,
  },
  {
    id: 2,
    name: "Minimalist Card Holder",
    price: 49,
    image: "https://images.unsplash.com/photo-1606503825008-909a67e63c3d",
    category: "Wallets",
    isNew: false,
  },
  // Bags
  {
    id: 3,
    name: "Heritage Leather Briefcase",
    price: 299,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
    category: "Bags",
    isNew: true,
  },
  {
    id: 4,
    name: "Classic Messenger Bag",
    price: 249,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
    category: "Bags",
    isNew: false,
  },
  // Belts
  {
    id: 5,
    name: "Artisan Dress Belt",
    price: 89,
    image: "https://images.unsplash.com/photo-1624668432641-4d1b0c698e6e",
    category: "Belts",
    isNew: true,
  },
  {
    id: 6,
    name: "Casual Suede Belt",
    price: 69,
    image: "https://images.unsplash.com/photo-1614671147345-8430e1a3c661",
    category: "Belts",
    isNew: false,
  },
  // Accessories
  {
    id: 7,
    name: "Premium AirPods Case",
    price: 39,
    image: "https://images.unsplash.com/photo-1586308834066-0cb0595dc548",
    category: "Accessories",
    isNew: false,
  },
  {
    id: 8,
    name: "Leather Key Organizer",
    price: 29,
    image: "https://images.unsplash.com/photo-1614671147355-5f24f86c8aa9",
    category: "Accessories",
    isNew: true,
  },
  // New Arrivals
  {
    id: 9,
    name: "Smart Watch Strap",
    price: 59,
    image: "https://images.unsplash.com/photo-1434754205268-ad3b5f549b11",
    category: "New Arrivals",
    isNew: true,
  },
  {
    id: 10,
    name: "Laptop Sleeve",
    price: 79,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
    category: "New Arrivals",
    isNew: true,
  },
]

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  const categories = ["all", "Wallets", "Bags", "Belts", "Accessories", "New Arrivals"]
  const filteredProducts =
    selectedCategory === "all"
      ? products.slice(0, 8)
      : products.filter((product) => product.category === selectedCategory)

  return (
    <section className="py-20" style={{ backgroundColor: "rgb(var(--color-ivory))" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-sans font-bold mb-4" style={{ color: "rgb(var(--color-espresso))" }}>
            Featured Products
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "rgb(var(--color-matte) / 0.7)" }}>
            Discover our most popular handcrafted leather accessories, each piece telling its own story of craftsmanship
            and elegance.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
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
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
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
                    onClick={() => handleAddToCart(product)}
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
                <div className="text-sm font-medium mb-2" style={{ color: "rgb(var(--color-cognac))" }}>
                  {product.category}
                </div>
                <h3 className="text-xl font-sans font-bold mb-2" style={{ color: "rgb(var(--color-espresso))" }}>
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold" style={{ color: "rgb(var(--color-espresso))" }}>
                    ${product.price}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-[rgb(var(--color-gold))] hover:text-[rgb(var(--color-cognac))] transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center bg-[rgb(var(--color-espresso))] text-[rgb(var(--color-ivory))] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[rgb(var(--color-cognac))] transition-colors duration-300"
          >
            View All Products
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts

