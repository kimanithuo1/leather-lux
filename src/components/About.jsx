import { Link } from "react-router-dom"

const About = () => {
  return (
    <section className="bg-espresso text-ivory py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="https://burst.shopifycdn.com/photos/leather-craftsman-at-work.jpg"
              alt="LeatherLux craftsman"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-sans font-bold mb-6">About LeatherLux</h2>
            <p className="mb-4 font-body">
              At LeatherLux, we're passionate about crafting the finest leather accessories that blend timeless elegance
              with modern functionality. Our artisans use only the highest quality full-grain leather and time-honored
              techniques to create pieces that are built to last.
            </p>
            <p className="mb-4 font-body">
              From our classic wallets to our innovative tech accessories, each LeatherLux product is designed to
              elevate your everyday style and stand the test of time. We source our leather from sustainable tanneries
              and ensure that every step of our production process meets the highest environmental and ethical
              standards.
            </p>
            <p className="mb-6 font-body">
              With a commitment to quality, sustainability, and customer satisfaction, LeatherLux is more than just a
              brand - it's a lifestyle choice for those who appreciate the finer things in life.
            </p>
            <Link
              to="/about"
              className="bg-gold text-espresso px-6 py-3 rounded-full text-lg font-semibold hover:bg-cognac transition duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

