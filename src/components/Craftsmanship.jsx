import { Link } from "react-router-dom"

const craftingSteps = [
  {
    title: "Premium Leather Selection",
    description: "We source only the finest full-grain leather from sustainable tanneries.",
    image: "https://burst.shopifycdn.com/photos/leather-samples.jpg",
  },
  {
    title: "Precision Cutting",
    description: "Each piece is carefully cut to ensure perfect fit and minimal waste.",
    image: "https://burst.shopifycdn.com/photos/cutting-leather.jpg",
  },
  {
    title: "Skilled Stitching",
    description: "Our artisans use both traditional and modern techniques for durable, beautiful seams.",
    image: "https://burst.shopifycdn.com/photos/stitching-leather.jpg",
  },
  {
    title: "Finishing Touches",
    description: "Every product is carefully inspected and given a final polish before shipping.",
    image: "https://burst.shopifycdn.com/photos/polishing-leather.jpg",
  },
]

const Craftsmanship = () => {
  return (
    <section className="bg-ivory py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-sans font-bold mb-10 text-center text-espresso">Our Craftsmanship</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {craftingSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl"
            >
              <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-sans font-semibold mb-2 text-espresso">{step.title}</h3>
                <p className="text-matte font-body">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/our-process"
            className="bg-espresso text-ivory px-6 py-3 rounded-full text-lg font-semibold hover:bg-cognac transition duration-300"
          >
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Craftsmanship

