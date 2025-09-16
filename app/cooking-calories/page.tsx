import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"
import Link from "next/link"
import AuthorBox from "../components/AuthorBox"

export const metadata: Metadata = {
  title: "Cooking Calories - How Preparation Methods Affect Food Energy",
  description:
    "Learn how different cooking methods affect the calorie content of foods. Discover which cooking techniques add calories and which help reduce them.",
  keywords: [
    "cooking calories",
    "food preparation methods",
    "calorie changes when cooking",
    "cooking techniques",
    "nutrition in cooking",
    "healthy cooking methods",
    "food energy preparation",
  ],
}

export default function CookingCalories() {
  const PUBLISHED = "2024-05-01"
  const UPDATED = "2025-09-14"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cooking Calories - How Preparation Methods Affect Food Energy",
    author: { "@type": "Person", name: "Sadiq" },
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.playshredle.com/cooking-calories",
    },
  }
  return (
    <FooterPagesLayout title="Cooking Calories">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="space-y-6">
        <div className="text-sm text-gray-600 dark:text-gray-400">By <span className="font-medium">Sadiq</span> • Published {PUBLISHED} • Updated {UPDATED}</div>
        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            How Cooking Affects Calorie Content
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The way you prepare food can significantly impact its calorie
            content. Different cooking methods can add calories through added
            fats and oils, or in some cases, make food more digestible,
            affecting how many calories your body absorbs.
          </p>
        </section>

        <section className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
          <h3 className="text-lg font-bold mb-3 text-orange-600 dark:text-orange-400">
            Cooking Methods That Add Calories
          </h3>
          <div className="space-y-4">
            <div className="border-b border-orange-100 dark:border-gray-700 pb-4">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                Frying and Deep Frying
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Frying is one of the cooking methods that adds the most calories
                to food. When foods are fried, they absorb oil, significantly
                increasing their calorie content.
              </p>
              <div className="bg-orange-50 dark:bg-gray-700/50 p-3 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Example:</strong>
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                  <li>A 100g raw potato contains about 77 calories</li>
                  <li>
                    The same potato made into french fries contains
                    approximately 312 calories
                  </li>
                  <li>
                    When made into potato chips, it jumps to around 536 calories
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-b border-orange-100 dark:border-gray-700 pb-4">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                Sautéing
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Sautéing uses less oil than frying but still adds calories from
                the cooking fat. Each tablespoon of oil adds approximately 120
                calories to the dish.
              </p>
              <div className="bg-orange-50 dark:bg-gray-700/50 p-3 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  <strong>
                    Calories Added by Common Cooking Fats (per tablespoon):
                  </strong>
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                  <li>Olive oil: 119 calories</li>
                  <li>Butter: 102 calories</li>
                  <li>Coconut oil: 121 calories</li>
                  <li>Vegetable oil: 124 calories</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                Breading and Coating
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Adding breading or batter before cooking dramatically increases
                calories, both from the coating itself and from the additional
                oil absorption during cooking.
              </p>
              <div className="bg-orange-50 dark:bg-gray-700/50 p-3 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Example:</strong>
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                  <li>A 100g chicken breast contains about 165 calories</li>
                  <li>
                    When breaded and fried, it increases to approximately
                    280-300 calories
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
          <h3 className="text-lg font-bold mb-3 text-orange-600 dark:text-orange-400">
            Lower-Calorie Cooking Methods
          </h3>
          <div className="space-y-4">
            <div className="border-b border-orange-100 dark:border-gray-700 pb-4">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                Steaming
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Steaming cooks food with hot water vapor without adding any fat.
                This method preserves nutrients and keeps the calorie content
                virtually unchanged from the raw state, except for making some
                nutrients more bioavailable.
              </p>
            </div>

            <div className="border-b border-orange-100 dark:border-gray-700 pb-4">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                Boiling and Poaching
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Like steaming, boiling and poaching cook food in water without
                adding fats. However, some water-soluble nutrients may leach
                into the cooking water. In terms of calories, these methods do
                not add any to the food.
              </p>
            </div>

            <div className="border-b border-orange-100 dark:border-gray-700 pb-4">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                Grilling and Broiling
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Grilling allows fat to drip away from the food as it cooks,
                which can actually reduce the calorie content compared to the
                raw state. However, some recipes call for marinating or basting
                with oil, which can add calories back.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                Baking and Roasting
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Baking and roasting can be relatively low in added calories if
                minimal fat is used. However, many baking recipes include
                calorie-dense ingredients like butter, oil, and sugar that
                significantly increase the calorie content.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
          <h3 className="text-lg font-bold mb-3 text-orange-600 dark:text-orange-400">
            The Digestibility Factor
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Cooking does not just potentially add calories—it can also change
            how many calories your body extracts from food. This concept, known
            as bioavailability, means that cooked food often provides more
            usable energy than the same food in its raw state.
          </p>

          <div className="space-y-4">
            <div className="bg-orange-50 dark:bg-gray-700/50 p-3 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                Starches
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Cooking starches (like potatoes, rice, and other grains) breaks
                down complex carbohydrates, making them more easily digestible.
                This means your body can extract more calories from cooked
                starches than raw ones. For example, cooking increases the
                digestible calories in a sweet potato by about 15-20%.
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-gray-700/50 p-3 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                Proteins
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Cooking denatures proteins, making them easier to break down
                during digestion. For proteins like eggs and meat, cooking can
                increase the bioavailable calories by 20-40% compared to their
                raw state.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
          <h3 className="text-lg font-bold mb-3 text-orange-600 dark:text-orange-400">
            Calorie-Conscious Cooking Tips
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <ul className="list-disc pl-6">
              <li>
                Use a cooking spray instead of pouring oil to control the amount
                of fat added
              </li>
              <li>
                Try an air fryer, which creates a similar texture to deep frying
                with significantly less oil
              </li>
              <li>
                Measure oils and fats instead of estimating—even a tablespoon
                more than needed can add over 100 calories
              </li>
              <li>
                For sautéing, use non-stick pans to reduce the amount of oil
                needed
              </li>
              <li>
                When recipes call for high-fat ingredients like butter or cream,
                experiment with lighter substitutes like Greek yogurt,
                applesauce, or mashed banana
              </li>
              <li>
                Opt for flavor enhancers like herbs, spices, vinegar, or lemon
                juice instead of calorie-dense sauces
              </li>
              <li>
                Allow cooked rice, pasta, and potatoes to cool before eating,
                which increases their resistant starch content and decreases
                available calories
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-orange-50 dark:bg-gray-800/50 p-5 rounded-xl">
          <h3 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">
            Beyond Calories: Cooking for Nutrition
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            While managing calories is important, the nutritional quality of
            food is equally crucial. Some cooking methods preserve nutrients
            better than others, even if they do not significantly affect calorie
            content.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            For more information on balanced nutrition and making healthier food
            choices, check out our{" "}
            <Link
              href="/nutrition-guide"
              className="text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300 underline"
            >
              Nutrition Guide
            </Link>{" "}
            and{" "}
            <Link
              href="/healthy-eating"
              className="text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300 underline"
            >
              Healthy Eating
            </Link>{" "}
            resources.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Learning to estimate food calories through games like Shredle can
            help you make more informed decisions about your cooking methods and
            portion sizes.
          </p>
        </section>

        <div className="text-sm text-gray-600 dark:text-gray-400 italic mt-6">
          <p>
            Note: Calorie values provided are approximate and may vary based on
            specific foods, preparation methods, and portion sizes. The
            information is intended for educational purposes only.
          </p>
        </div>
        <AuthorBox published={PUBLISHED} updated={UPDATED} />
      </div>
    </FooterPagesLayout>
  )
}
