const products = [
    { name: "Classic Wallet", price: "$79", image: "/placeholder.svg?height=300&width=300" },
    { name: "Leather Backpack", price: "$199", image: "/placeholder.svg?height=300&width=300" },
    { name: "Belt Collection", price: "$59", image: "/placeholder.svg?height=300&width=300" },
    { name: "Phone Case", price: "$39", image: "/placeholder.svg?height=300&width=300" },
  ]
  
  const FeaturedProducts = () => {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                  <button className="mt-4 w-full bg-stone-900 text-white py-2 rounded-full hover:bg-stone-800 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default FeaturedProducts
  
  