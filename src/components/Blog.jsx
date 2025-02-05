import { Link } from "react-router-dom"

const blogPosts = [
  {
    id: 1,
    title: "The Art of Leather Crafting",
    excerpt:
      "Discover the intricate process behind creating our premium leather goods, from selecting the finest hides to the final stitching.",
    image: "https://burst.shopifycdn.com/photos/leather-working-tools.jpg",
  },
  {
    id: 2,
    title: "Caring for Your Leather Accessories",
    excerpt:
      "Learn how to maintain and protect your leather items to ensure they last a lifetime. Tips on cleaning, conditioning, and storing your treasured pieces.",
    image: "https://burst.shopifycdn.com/photos/leather-care-products.jpg",
  },
  {
    id: 3,
    title: "The History of Leather in Fashion",
    excerpt:
      "Explore the rich history of leather and its enduring place in fashion, from ancient civilizations to modern runways.",
    image: "https://burst.shopifycdn.com/photos/vintage-leather-suitcase.jpg",
  },
]

const Blog = () => {
  return (
    <section className="bg-matte text-ivory py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-sans font-bold mb-10 text-center">LeatherLux Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-espresso rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl"
            >
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-sans font-semibold mb-2">{post.title}</h3>
                <p className="text-ivory/80 mb-4 font-body">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-gold hover:text-cognac transition duration-300">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="bg-gold text-espresso px-6 py-3 rounded-full text-lg font-semibold hover:bg-cognac transition duration-300"
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog

