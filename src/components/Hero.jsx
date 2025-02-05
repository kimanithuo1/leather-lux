const Hero = () => {
    return (
      <section className="bg-stone-100 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Style with Premium Leather</h2>
            <p className="text-xl mb-6">Discover our exquisite collection of handcrafted leather accessories.</p>
            <button className="bg-amber-400 text-stone-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-amber-500 transition duration-300">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg?height=400&width=600" alt="LeatherLux products" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero
  
  