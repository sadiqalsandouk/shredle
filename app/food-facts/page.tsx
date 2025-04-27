import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Food Facts - Surprising Nutrition Information and Food Science",
  description:
    "Discover fascinating food facts, nutritional insights, and scientific explanations about everyday foods and their calorie content.",
  keywords: [
    "food facts",
    "nutrition facts",
    "food science",
    "calorie content",
    "food composition",
    "surprising food information",
    "food nutrition data",
  ],
}

export default function FoodFacts() {
  return (
    <FooterPagesLayout title="Food Facts">
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Fascinating Food Facts
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Food is much more than just calories—it&apos;s a fascinating
            intersection of chemistry, biology, culture, and history. Here are
            some intriguing facts about the foods we eat every day.
          </p>
        </section>

        <section className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
          <h3 className="text-lg font-bold mb-3 text-orange-600 dark:text-orange-400">
            Surprising Calorie Comparisons
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="border-b border-orange-100 dark:border-gray-700 pb-2">
              <strong>Avocados vs. Sugar:</strong> A medium avocado
              (approximately 200g) contains about 240 calories, which is roughly
              equivalent to 15 teaspoons of sugar. However, avocados provide
              healthy fats, fiber, and numerous vitamins and minerals, while
              sugar offers minimal nutritional value.
            </li>
            <li className="border-b border-orange-100 dark:border-gray-700 pb-2">
              <strong>Nuts vs. Chips:</strong> A 30g serving of potato chips and
              a 30g serving of almonds have similar calorie counts
              (approximately 160 calories), but almonds provide protein, fiber,
              vitamin E, and healthy fats, while chips offer significantly less
              nutritional benefit.
            </li>
            <li className="border-b border-orange-100 dark:border-gray-700 pb-2">
              <strong>Dried vs. Fresh Fruit:</strong> A cup of fresh grapes
              contains about 100 calories, while a cup of raisins (dried grapes)
              contains around 430 calories. The drying process concentrates the
              sugars and calories while removing water.
            </li>
            <li>
              <strong>Olive Oil vs. Butter:</strong> Both contain about 120
              calories per tablespoon, but olive oil is rich in monounsaturated
              fats and antioxidants, while butter contains more saturated fat.
            </li>
          </ul>
        </section>

        <section className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
          <h3 className="text-lg font-bold mb-3 text-orange-600 dark:text-orange-400">
            The Science Behind Food Energy
          </h3>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              The calorie content in food represents the potential energy that
              can be released when that food is metabolized by the body. This
              energy is measured in kilocalories (commonly called calories) and
              is determined by several factors:
            </p>
            <div className="pl-4 space-y-2">
              <div>
                <strong className="text-orange-600 dark:text-orange-400">
                  Macronutrient Composition:
                </strong>
                <p>
                  Different macronutrients provide different amounts of energy:
                  carbohydrates and proteins provide 4 calories per gram, while
                  fats provide 9 calories per gram.
                </p>
              </div>
              <div>
                <strong className="text-orange-600 dark:text-orange-400">
                  Digestibility:
                </strong>
                <p>
                  Not all calories in food are equally accessible. Fiber, for
                  example, is a carbohydrate that the human body cannot fully
                  digest, which is why high-fiber foods often have fewer
                  &quot;available&quot; calories.
                </p>
              </div>
              <div>
                <strong className="text-orange-600 dark:text-orange-400">
                  Processing Method:
                </strong>
                <p>
                  How a food is processed affects its calorie content. Cooking
                  can make some nutrients more bioavailable, effectively
                  increasing the calories your body can extract from the food.
                </p>
              </div>
              <div>
                <strong className="text-orange-600 dark:text-orange-400">
                  Thermic Effect:
                </strong>
                <p>
                  Different foods require different amounts of energy to digest.
                  Protein has a higher thermic effect (20-30% of calories used
                  for digestion) compared to carbohydrates (5-10%) and fats
                  (0-3%).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
          <h3 className="text-lg font-bold mb-3 text-orange-600 dark:text-orange-400">
            Hidden Calories in Common Foods
          </h3>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              Many foods contain significantly more calories than people
              realize. Here are some surprising examples:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Coffee Drinks:</strong> A large flavored latte with
                whole milk and whipped cream can contain 350-500
                calories—equivalent to a full meal.
              </li>
              <li>
                <strong>Salad Dressings:</strong> Two tablespoons of ranch
                dressing adds approximately 140 calories to your salad, while
                the same amount of Caesar dressing adds about 160 calories.
              </li>
              <li>
                <strong>Smoothies:</strong> Commercial fruit smoothies often
                contain 300-600 calories due to added sugars, fruit juices, and
                sweetened yogurt.
              </li>
              <li>
                <strong>Granola:</strong> Despite its healthy reputation, a
                half-cup serving of granola typically contains 200-300 calories,
                mainly from added sugars and oils.
              </li>
              <li>
                <strong>Condiments:</strong> A tablespoon of mayonnaise adds
                about 90 calories, while the same amount of ketchup adds around
                15 calories.
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-orange-50 dark:bg-gray-800/50 p-5 rounded-xl">
          <h3 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">
            Beyond Calories: Nutritional Value Matters
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            While calories are important, nutritional value is equally crucial.
            Foods with similar calorie counts can have vastly different effects
            on health, satiety, and energy levels.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            For a deeper understanding of nutrition beyond calories, explore our{" "}
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
            Remember that playing Shredle regularly can help you develop an
            intuitive understanding of the calorie content in different foods,
            supporting better dietary decisions in your daily life.
          </p>
        </section>

        <div className="text-sm text-gray-600 dark:text-gray-400 italic mt-6">
          <p>
            Note: The information provided is for educational purposes only.
            Calorie values are approximate and may vary based on specific
            brands, preparation methods, and portion sizes.
          </p>
        </div>
      </div>
    </FooterPagesLayout>
  )
}
