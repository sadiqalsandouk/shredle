import { Metadata } from "next"
import Link from "next/link"
import FooterPagesLayout from "../components/FooterPagesLayout"

export const metadata: Metadata = {
  title: "Nutrition Resources - Food Education Hub",
  description:
    "Explore our collection of nutrition guides, food science articles, and healthy eating resources to build your food knowledge.",
  keywords: [
    "nutrition resources",
    "food education",
    "nutrition guides",
    "food science",
    "healthy eating guides",
    "calorie education",
  ],
}

const nutritionResources = [
  {
    title: "Nutrition Guide",
    href: "/nutrition-guide",
    description: "Comprehensive guide to macronutrients, micronutrients, and building a balanced diet.",
    category: "Foundation"
  },
  {
    title: "Calorie Guide", 
    href: "/calorie-guide",
    description: "Understanding calories, energy balance, and how to use calorie information effectively.",
    category: "Foundation"
  },
  {
    title: "Healthy Eating",
    href: "/healthy-eating",
    description: "Practical tips for sustainable healthy eating habits and meal planning.",
    category: "Foundation"
  }
]

const scienceResources = [
  {
    title: "Food Science",
    href: "/food-science", 
    description: "The science behind how food affects your body, from digestion to metabolism.",
    category: "Deep Dive"
  },
  {
    title: "Cooking & Calories",
    href: "/cooking-calories",
    description: "How different cooking methods change the calorie content and nutritional value of foods.",
    category: "Deep Dive"
  },
  {
    title: "Food Facts",
    href: "/food-facts",
    description: "Surprising facts and insights about common foods and their nutritional properties.",
    category: "Deep Dive"
  }
]

const practicalResources = [
  {
    title: "Hidden Calories",
    href: "/hidden-calories",
    description: "Identify sneaky sources of calories in everyday foods and drinks.",
    category: "Practical"
  },
  {
    title: "Portion Control",
    href: "/portion-control", 
    description: "Master portion sizes and visual cues for better calorie management.",
    category: "Practical"
  },
  {
    title: "Restaurant Calories",
    href: "/restaurant-calories",
    description: "Navigate dining out with confidence using calorie awareness strategies.",
    category: "Practical"
  }
]

function ResourceCard({ title, href, description, category }: { title: string, href: string, description: string, category: string }) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-orange-100 dark:border-gray-700 hover:shadow-md hover:border-orange-200 dark:hover:border-gray-600 transition-all duration-200">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 group-hover:text-orange-700 dark:group-hover:text-orange-200">
            {title}
          </h3>
          <span className="text-xs font-medium px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">
            {category}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex items-center text-orange-600 dark:text-orange-400 text-sm font-medium">
          Read more 
          <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default function ResourcesPage() {
  return (
    <FooterPagesLayout title="Nutrition Resources">
      <div className="space-y-8">
        <section>
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Build your food knowledge with our collection of nutrition guides, food science deep-dives, and practical eating strategies.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-4 text-orange-700 dark:text-orange-400">
                🎯 Foundation Guides
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nutritionResources.map((resource) => (
                  <ResourceCard key={resource.href} {...resource} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-orange-700 dark:text-orange-400">
                🔬 Food Science Deep Dives
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scienceResources.map((resource) => (
                  <ResourceCard key={resource.href} {...resource} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-orange-700 dark:text-orange-400">
                ⚡ Practical Strategies
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {practicalResources.map((resource) => (
                  <ResourceCard key={resource.href} {...resource} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 dark:bg-gray-800/50 p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">
            🎮 Learn by Playing
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Put your knowledge into practice! Our game modes help you develop intuitive understanding of food calories and nutrition.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors">
              Daily Game
            </Link>
            <Link href="/streak" className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors">
              Streak Mode
            </Link>
            <Link href="/protein" className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors">
              Protein Mode
            </Link>
          </div>
        </section>
      </div>
    </FooterPagesLayout>
  )
}
