import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"
import AuthorBox from "../components/AuthorBox"

export const metadata: Metadata = {
  title: "Complete Calorie Guide - Understanding Food Energy & Nutrition",
  description:
    "Comprehensive guide to understanding calories in food, portion control, calorie density, and building healthy relationships with food energy. Learn practical estimation skills and debunk common calorie myths.",
  keywords: [
    "calorie guide",
    "food energy",
    "calorie counting",
    "portion control",
    "calorie density",
    "weight management",
    "nutritional values",
    "diet planning",
    "food portions",
    "calorie estimation",
    "nutrition education",
    "healthy eating",
  ],
}

export default function CalorieGuide() {
  const PUBLISHED = "2024-05-01"
  const UPDATED = "2025-09-14"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Calorie Guide - Understanding Food Energy & Nutrition",
    author: { "@type": "Person", name: "Sadiq" },
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.playshredle.com/calorie-guide",
    },
  }
  return (
    <FooterPagesLayout title="Calorie Guide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="space-y-6">
        <div className="text-sm text-gray-600 dark:text-gray-400">By <span className="font-medium">Sadiq</span> • Published {PUBLISHED} • Updated {UPDATED}</div>
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
          <div className="bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 mt-3">
            Quick personal note: when I first started learning about calories, I kept a tiny notebook on my phone and compared a few foods each day. Within a week, I was already better at guessing portions and energy than I expected. Small, consistent practice really does add up.
          </div>
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
            Common Calorie Misconceptions
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Many people have incorrect assumptions about calorie content. Here are some of the most common misconceptions and the truth behind them:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-2">
                Myth: "Healthy" foods are always low in calories
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Reality:</strong> Many nutritious foods are calorie-dense. Nuts, seeds, avocados, and olive oil are excellent for health but pack significant calories. A single avocado contains about 320 calories, while a tablespoon of olive oil has 119 calories.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                The key is understanding that nutrient density and calorie content are different measures. Focus on getting nutritional value from your calories rather than avoiding all high-calorie foods.
              </p>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-2">
                Myth: All calories are created equal
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Reality:</strong> While a calorie is technically a unit of energy, how your body processes different types of calories varies significantly. 100 calories from protein requires more energy to digest than 100 calories from simple carbohydrates.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                This is called the thermic effect of food (TEF). Protein has the highest TEF at 20-30%, meaning you burn 20-30 calories just digesting 100 calories of protein.
              </p>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-2">
                Myth: Fruit has "natural" calories that don't count
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Reality:</strong> While fruit provides vitamins, minerals, and fiber that processed sweets don't, the calories still count toward your daily intake. A large banana has about 120 calories, and a cup of grapes contains around 100 calories.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                The advantage of fruit is that it's typically more filling due to fiber and water content, making it easier to maintain portion control compared to processed snacks.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Calorie Density and Food Volume
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Understanding calorie density—how many calories are packed into a given weight or volume of food—can dramatically change how you think about portions and satiety.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Volume vs. Calories: A Striking Example
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Consider this comparison for approximately 400 calories:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li><strong>2 tablespoons of peanut butter</strong> (small amount, high calories)</li>
                <li><strong>1 medium bagel</strong> (moderate size)</li>
                <li><strong>8 cups of raw spinach</strong> (huge volume, same calories)</li>
                <li><strong>4 large apples</strong> (very filling)</li>
                <li><strong>2 cups of cooked broccoli + 6 oz grilled chicken</strong> (complete, satisfying meal)</li>
              </ul>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Why This Matters for Hunger
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                Your stomach has volume receptors that signal fullness. Foods with high water and fiber content take up more space in your stomach, triggering satiety signals before you consume too many calories.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                This is why you can eat a huge salad with grilled chicken and feel satisfied for hours, while a small portion of nuts might leave you wanting more despite having similar calories.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Hidden Calories in Everyday Foods
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Many calories "hide" in foods where we don't expect them. Being aware of these can help you make more informed choices without feeling restricted.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-orange-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-2">
                Beverages: The Invisible Calories
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">High-Calorie Drinks</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Large frappuccino: 400-600 calories</li>
                    <li>• 20 oz soda: 250-300 calories</li>
                    <li>• Large smoothie: 300-500 calories</li>
                    <li>• Energy drink: 100-200 calories</li>
                    <li>• Glass of wine: 120-150 calories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Lower-Calorie Alternatives</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Black coffee: 2-5 calories</li>
                    <li>• Sparkling water with lime: 0 calories</li>
                    <li>• Unsweetened iced tea: 2 calories</li>
                    <li>• Diet sodas: 0-5 calories</li>
                    <li>• Water with fruit slices: 0-10 calories</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-2">
                Cooking Additions That Add Up
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                Small additions during cooking can significantly increase the calorie content of otherwise healthy meals:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Oils & Fats</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 1 tbsp olive oil: 119 cal</li>
                    <li>• 1 tbsp butter: 102 cal</li>
                    <li>• Cooking spray (1 second): 2 cal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Condiments</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 2 tbsp ranch: 140 cal</li>
                    <li>• 1 tbsp mayo: 90 cal</li>
                    <li>• 1 tbsp ketchup: 15 cal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Toppings</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 1 oz cheese: 100-110 cal</li>
                    <li>• 2 tbsp nuts: 90-100 cal</li>
                    <li>• 1 tbsp honey: 64 cal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Practical Calorie Estimation Skills
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Developing the ability to estimate calories doesn't require obsessive counting, but rather building intuition about food energy content. Here are practical strategies:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-2">
                The Hand Method for Portion Estimation
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Using Your Hand as a Guide</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• <strong>Palm:</strong> Protein portions (3-4 oz meat = ~150-200 cal)</li>
                    <li>• <strong>Fist:</strong> Vegetable portions (~25-50 calories)</li>
                    <li>• <strong>Cupped hand:</strong> Carb portions (~150-200 calories)</li>
                    <li>• <strong>Thumb:</strong> Fat portions (~120-150 calories)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Why This Works</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Your hand size roughly correlates with your body size, so these portions automatically scale to your individual needs. This method provides reasonable estimates without requiring scales or measuring cups.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-2">
                Learning Through Food Comparisons
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Building calorie intuition works best when you can compare similar foods. This is exactly what Shredle helps you practice! Here are some useful comparison frameworks:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Same Volume, Different Calories</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 1 cup white rice vs. 1 cup cauliflower rice</li>
                    <li>• 1 cup whole milk vs. 1 cup almond milk</li>
                    <li>• 1 cup pasta vs. 1 cup zucchini noodles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Same Calories, Different Volume</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 1 small cookie vs. 3 cups of strawberries</li>
                    <li>• 1 oz chips vs. 4 cups air-popped popcorn</li>
                    <li>• 1 tbsp olive oil vs. 2 large apples</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Tips for Calorie Awareness
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Understanding calories can help you make informed food choices without obsessing over numbers:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
            <li>
              Be aware of portion sizes - they often differ from serving sizes
              on labels, and restaurant portions are typically 2-3 times larger than standard servings
            </li>
            <li>
              Remember that liquids can contain many calories (sodas, alcoholic
              drinks, sweetened coffee) and don't trigger satiety the same way solid foods do
            </li>
            <li>
              Cooking methods can dramatically affect calorie content - the same potato can range from 77 calories (boiled) to 536 calories (as chips)
            </li>
            <li>
              Calories aren&apos;t everything - nutrient density, satiety, and how foods make you feel matter equally
            </li>
            <li>
              Focus on patterns rather than perfect precision - being roughly right consistently is better than being exactly right occasionally
            </li>
            <li>
              Playing Shredle regularly can help you develop an intuitive sense
              of calorie content without the stress of constant calculation
            </li>
          </ul>
        </section>

        <section className="bg-orange-50 dark:bg-gray-800/50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Building Healthy Relationships with Calorie Knowledge
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The goal of understanding calories isn't to restrict or judge food choices, but to make informed decisions that support your health and well-being. Knowledge empowers choice.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            When you understand that a large coffee drink might contain 400 calories, you can decide if that fits your goals for the day. Maybe you choose it anyway because you enjoy it, or maybe you opt for a smaller size, or perhaps you choose it on a day when you're more active.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Remember: the "best" calorie choice is the one that fits your individual needs, preferences, lifestyle, and health goals. There's no universal "perfect" diet, but there is a perfect diet for you at any given time in your life.
          </p>
        </section>
        <AuthorBox published={PUBLISHED} updated={UPDATED} />
      </div>
    </FooterPagesLayout>
  )
}
