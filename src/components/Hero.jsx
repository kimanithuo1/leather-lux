import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="pt-24 bg-gradient-to-b from-[#3D2B1F] to-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center py-16 md:py-24">
          <div className="md:w-1/2 mb-10 md:mb-0 text-[#F5F5DC]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold mb-6 leading-tight">
              Elevate Your Style with Premium Leather
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#F5F5DC]/80 font-body max-w-xl">
              Discover our exquisite collection of handcrafted leather accessories, where timeless elegance meets modern
              sophistication.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/products"
                className="bg-[#D4AF37] text-[#3D2B1F] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#A67B5B] transition-colors duration-300 inline-flex items-center"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#D4AF37] hover:text-[#3D2B1F] transition-colors duration-300 inline-flex items-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7"
              alt="Premium Leather Bag"
              className="rounded-lg shadow-2xl w-full object-cover transform hover:scale-105 transition-transform duration-500"
              style={{ height: "600px" }}
            />
            <div className="absolute -bottom-6 -left-6 bg-[#D4AF37] text-[#3D2B1F] p-4 rounded-lg shadow-xl">
              <p className="text-lg font-semibold">Handcrafted Excellence</p>
              <p className="text-sm">Premium Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

