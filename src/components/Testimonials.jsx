const testimonials = [
  {
    name: "Sarah L.",
    text: "The quality of LeatherLux products is unmatched. My wallet still looks brand new after a year of daily use!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Michael R.",
    text: "I love my LeatherLux backpack. It's stylish, durable, and perfect for both work and travel.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Emily T.",
    text: "The attention to detail in every LeatherLux piece is impressive. Truly luxury craftsmanship.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
]

const Testimonials = () => {
  return (
    <section className="bg-ivory py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-sans font-bold mb-10 text-center text-espresso">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="mb-4 italic text-matte font-body">"{testimonial.text}"</p>
              <p className="font-semibold text-cognac font-sans">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

