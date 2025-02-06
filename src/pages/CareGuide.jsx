import PageLayout from "../components/PageLayout"

const careInstructions = [
  {
    title: "Daily Care",
    steps: [
      "Wipe your leather items with a soft, dry cloth after each use",
      "Store in a cool, dry place away from direct sunlight",
      "Use leather conditioner every 3-6 months",
    ],
  },
  {
    title: "Cleaning",
    steps: [
      "Remove surface dirt with a slightly damp cloth",
      "Use specialized leather cleaner for tough stains",
      "Always test cleaning products on a small, hidden area first",
    ],
  },
  {
    title: "Protection",
    steps: [
      "Apply leather protector spray before first use",
      "Reapply protection every 6 months",
      "Avoid exposure to rain and excessive moisture",
    ],
  },
  {
    title: "Storage",
    steps: [
      "Store in a dust bag when not in use",
      "Keep leather items stuffed to maintain shape",
      "Avoid plastic bags which can trap moisture",
    ],
  },
]

export default function CareGuide() {
  return (
    <PageLayout
      title="Leather Care Guide"
      description="Learn how to maintain and protect your leather accessories to ensure they last a lifetime."
    >
      <div className="space-y-12">
        {careInstructions.map((section) => (
          <div key={section.title} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-sans font-bold text-espresso mb-4">{section.title}</h2>
            <ul className="space-y-3">
              {section.steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gold text-espresso font-bold mr-3">
                    {index + 1}
                  </span>
                  <span className="text-matte/80">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="bg-espresso text-ivory p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold mb-4">Need Help?</h3>
          <p className="mb-4">
            If you have specific questions about caring for your LeatherLux products, our customer service team is here
            to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold text-espresso px-6 py-2 rounded-full hover:bg-cognac transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </PageLayout>
  )
}

