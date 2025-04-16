import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"

export const metadata: Metadata = {
  title: "Calorie Guide - Understanding Food Energy",
  description:
    "Learn about calories in food, how to count them, and how they impact your health and weight management.",
  keywords: [
    "calories",
    "food energy",
    "calorie counting",
    "weight management",
    "nutritional values",
    "diet planning",
  ],
}

export default function CalorieGuide() {
  return (
    <FooterPagesLayout title="Calorie Guide">
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            What Are Calories?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A calorie is a unit of energy. Specifically, it&apos;s the amount of
            energy needed to raise the temperature of 1 gram of water by 1
            degree Celsius. In nutrition, we usually talk about kilocalories
            (kcal), which are equal to 1,000 small calories, though we commonly
            just call them &quot;calories.&quot;
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            When you see calorie counts on food labels or in nutrition apps,
            they&apos;re referring to kilocalories. These numbers represent the
            potential energy your body can extract from the food you eat.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            How Many Calories Do I Need?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Your daily calorie needs depend on several factors:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
            <li>
              <strong>Age:</strong> Calorie needs generally decrease as you age
            </li>
            <li>
              <strong>Sex:</strong> Males typically need more calories than
              females
            </li>
            <li>
              <strong>Weight and height:</strong> Larger bodies generally
              require more energy
            </li>
            <li>
              <strong>Activity level:</strong> More active individuals need more
              calories
            </li>
            <li>
              <strong>Specific conditions:</strong> Pregnancy, breastfeeding,
              illness, or recovery can affect needs
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            General daily calorie intake guidelines:
          </p>
          <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
            <table className="w-full text-gray-700 dark:text-gray-300">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <th className="text-left py-2">Group</th>
                  <th className="text-right py-2">Estimated Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2">Sedentary women</td>
                  <td className="text-right">1,600-2,000</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2">Active women</td>
                  <td className="text-right">2,000-2,400</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2">Sedentary men</td>
                  <td className="text-right">2,000-2,600</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2">Active men</td>
                  <td className="text-right">2,400-3,000</td>
                </tr>
                <tr>
                  <td className="py-2">Children and teens</td>
                  <td className="text-right">1,400-3,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Surprising Calorie Content in Common Foods
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Many people are surprised by the actual calorie content of certain
            foods. Here are some examples (per 100g):
          </p>

          <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg mb-4">
            <h3 className="font-bold text-lg text-orange-600 dark:text-orange-400 mb-2">
              Higher Than Expected
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Granola:</strong> 450-500 calories (can be higher than
                chocolate!)
              </li>
              <li>
                <strong>Dried fruits:</strong> 300-350 calories (much higher
                than fresh fruit)
              </li>
              <li>
                <strong>Avocado:</strong> 160-200 calories (healthy but
                calorie-dense)
              </li>
              <li>
                <strong>Olive oil:</strong> 884 calories (all oils are very
                calorie-dense)
              </li>
              <li>
                <strong>Nuts:</strong> 550-650 calories (nutritious but high in
                calories)
              </li>
            </ul>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
            <h3 className="font-bold text-lg text-orange-600 dark:text-orange-400 mb-2">
              Lower Than Expected
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Popcorn (air-popped):</strong> 375 calories, but very
                light (a large bowl may only be 100-150 calories)
              </li>
              <li>
                <strong>Strawberries:</strong> 32 calories (you can eat many for
                few calories)
              </li>
              <li>
                <strong>Egg whites:</strong> 52 calories (versus 155 for whole
                eggs)
              </li>
              <li>
                <strong>Broth-based soups:</strong> 30-70 calories (filling with
                relatively few calories)
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Tips for Calorie Awareness
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Understanding calories can help you make informed food choices:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>
              Be aware of portion sizes - they often differ from serving sizes
              on labels
            </li>
            <li>
              Remember that liquids can contain many calories (sodas, alcoholic
              drinks, sweetened coffee)
            </li>
            <li>
              Cooking methods can significantly affect calorie content (fried
              vs. baked)
            </li>
            <li>
              Calories aren&apos;t everything - nutrient density matters too
            </li>
            <li>
              Playing Shredle regularly can help you develop an intuitive sense
              of calorie content
            </li>
          </ul>
        </section>
      </div>
    </FooterPagesLayout>
  )
}
