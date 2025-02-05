const About = () => {
    return (
      <section className="bg-stone-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img src="/placeholder.svg?height=400&width=600" alt="About LeatherLux" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold mb-6">About LeatherLux</h2>
              <p className="mb-4">
                At LeatherLux, we're passionate about crafting the finest leather accessories that blend timeless elegance
                with modern functionality. Our artisans use only the highest quality materials and time-honored techniques
                to create pieces that are built to last.
              </p>
              <p className="mb-6">
                From our classic wallets to our innovative tech accessories, each LeatherLux product is designed to
                elevate your everyday style and stand the test of time.
              </p>
              <button className="bg-amber-400 text-stone-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-amber-500 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About
  
  