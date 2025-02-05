import { useCart } from "../context/CartContext"
import { Minus, Plus, X } from "lucide-react"

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart()

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-20 bg-ivory">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-sans font-bold text-espresso mb-4">Your cart is empty</h2>
            <p className="text-matte/70 mb-8">Start shopping to add items to your cart.</p>
            <a
              href="/products"
              className="bg-espresso text-ivory px-6 py-3 rounded-full hover:bg-cognac transition-colors duration-300"
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-ivory">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-sans font-bold text-espresso mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg mb-4 shadow-sm">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />

                <div className="flex-1">
                  <h3 className="font-sans font-bold text-espresso">{item.name}</h3>
                  <p className="text-cognac">${item.price}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded-full hover:bg-espresso/10"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-espresso/10"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-sans font-bold text-espresso mb-4">Order Summary</h3>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-matte/70">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-matte/70">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-bold text-espresso">
                    <span>Total</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-espresso text-ivory py-3 rounded-full hover:bg-cognac transition-colors duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

