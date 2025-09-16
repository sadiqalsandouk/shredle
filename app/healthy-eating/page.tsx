import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"
import AuthorBox from "../components/AuthorBox"

export const metadata: Metadata = {
  title: "Healthy Eating Guide - Balanced Nutrition for Everyone",
  description:
    "Learn the principles of healthy eating, balanced nutrition, and how to make better food choices for long-term health and wellbeing.",
  keywords: [
    "healthy eating",
    "balanced diet",
    "nutrition tips",
    "dietary guidelines",
    "healthy food choices",
    "meal planning",
  ],
}

export default function HealthyEating() {
  const PUBLISHED = "2024-05-01"
  const UPDATED = "2025-09-14"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Healthy Eating Guide - Balanced Nutrition for Everyone",
    author: { "@type": "Person", name: "Sadiq" },
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.playshredle.com/healthy-eating",
    },
  }
  return (
    <FooterPagesLayout title="Healthy Eating Guide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="space-y-6">
        <div className="text-sm text-gray-600 dark:text-gray-400">By <span className="font-medium">Sadiq</span> • Published {PUBLISHED} • Updated {UPDATED}</div>
        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Principles of Healthy Eating
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Healthy eating is about more than just calories—it&apos;s about
            ensuring your body gets all the nutrients it needs while maintaining
            an appropriate energy balance. Here are some core principles:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Variety:</strong> Eat a wide range of foods to get
              different nutrients
            </li>
            <li>
              <strong>Balance:</strong> Include foods from all major food groups
            </li>
            <li>
              <strong>Moderation:</strong> Avoid excessive portions, especially
              of energy-dense foods
            </li>
            <li>
              <strong>Adequacy:</strong> Ensure you get enough essential
              nutrients
            </li>
            <li>
              <strong>Nutrient density:</strong> Focus on foods that provide
              many nutrients relative to their calories
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            The Healthy Plate Model
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A simple way to visualize a balanced meal is to use the healthy
            plate model:
          </p>
          <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>
                <strong>1/2 of your plate:</strong> Vegetables and fruits
                (emphasize variety and color)
              </li>
              <li>
                <strong>1/4 of your plate:</strong> Whole grains and starchy
                foods (brown rice, whole wheat pasta, etc.)
              </li>
              <li>
                <strong>1/4 of your plate:</strong> Protein-rich foods (lean
                meat, fish, beans, tofu, etc.)
              </li>
              <li>
                <strong>Small amount:</strong> Healthy oils and fats
              </li>
              <li>
                <strong>Beverage:</strong> Water, unsweetened tea, or coffee
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Food Groups and Their Benefits
          </h2>

          <div className="space-y-4">
            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-orange-600 dark:text-orange-400 mb-2">
                Fruits and Vegetables
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Rich in vitamins, minerals, antioxidants, and fiber. They
                support immune function, promote good digestion, and reduce risk
                of chronic diseases.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Tip:</strong> Aim for at least 5 servings daily, with a
                variety of colors to ensure diverse nutrients.
              </p>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-orange-600 dark:text-orange-400 mb-2">
                Whole Grains
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Provide complex carbohydrates, fiber, B vitamins, and minerals.
                They help maintain steady energy levels and support digestive
                health.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Tip:</strong> Choose whole grains like brown rice,
                quinoa, oats, and whole wheat bread instead of refined grains.
              </p>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-orange-600 dark:text-orange-400 mb-2">
                Proteins
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Essential for building and repairing tissues, enzyme production,
                and immune function. Different protein sources offer various
                nutrients.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Tip:</strong> Include a mix of plant proteins (beans,
                lentils, tofu) and animal proteins (fish, poultry, lean meat),
                if you eat animal products.
              </p>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-orange-600 dark:text-orange-400 mb-2">
                Healthy Fats
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Support brain health, hormone production, nutrient absorption,
                and provide essential fatty acids your body can&apos;t make.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Tip:</strong> Focus on unsaturated fats from sources
                like olive oil, avocados, nuts, and fish; limit saturated and
                trans fats.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Practical Tips for Healthier Eating
          </h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Cook at home more often to control ingredients and portions</li>
            <li>Plan meals ahead to avoid last-minute unhealthy choices</li>
            <li>
              Limit processed foods high in added sugars, sodium, and unhealthy
              fats
            </li>
            <li>Stay hydrated with water instead of sugary beverages</li>
            <li>
              Practice mindful eating by slowing down and focusing on your food
            </li>
            <li>Don&apos;t skip meals, as it can lead to overeating later</li>
            <li>Read food labels to make informed choices</li>
            <li>Allow yourself occasional treats in moderation</li>
          </ul>
        </section>

        <section className="bg-orange-50 dark:bg-gray-800/50 p-5 rounded-xl">
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            How Shredle Helps With Healthy Eating
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Shredle can help you develop a better intuitive understanding of
            food energy content, which is one component of healthy eating. By
            playing regularly, you&apos;ll become more familiar with the
            relative calorie content of different foods, helping you make more
            informed choices in your daily diet.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Remember that while calorie awareness is important, the overall
            nutritional quality of your diet matters most for long-term health.
          </p>
        </section>
        <AuthorBox published={PUBLISHED} updated={UPDATED} />
      </div>
    </FooterPagesLayout>
  )
}
