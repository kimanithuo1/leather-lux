const testimonials = [
    {
      name: "Sarah L.",
      text: "The quality of LeatherLux products is unmatched. My wallet still looks brand new after a year of daily use!",
    },
    {
      name: "Michael R.",
      text: "I love my LeatherLux backpack. It's stylish, durable, and perfect for both work and travel.",
    },
    {
      name: "Emily T.",
      text: "The attention to detail in every LeatherLux piece is impressive. Truly luxury craftsmanship.",
    },
  ]
  
  const Testimonials = () => {
    return (
      <section className="bg-stone-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Testimonials
  
  