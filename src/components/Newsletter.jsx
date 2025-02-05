const Newsletter = () => {
  return (
    <section className="bg-cognac py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-sans font-bold mb-6 text-center text-ivory">Join Our Newsletter</h2>
        <p className="text-xl mb-8 text-center text-ivory/80 font-body">
          Stay updated with our latest products and exclusive offers.
        </p>
        <form className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-espresso"
          />
          <button
            type="submit"
            className="bg-espresso text-ivory px-6 py-2 rounded-r-full hover:bg-matte transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter

