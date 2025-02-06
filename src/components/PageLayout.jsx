import { motion } from "framer-motion"

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
}

export default function PageLayout({ children, title, description }) {
  return (
    <motion.div
      className="min-h-screen pt-20 bg-ivory"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-sans font-bold text-espresso mb-4">{title}</h1>
          {description && <p className="text-lg text-matte/70 mb-8">{description}</p>}
          {children}
        </div>
      </div>
    </motion.div>
  )
}

