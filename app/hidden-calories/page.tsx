import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hidden Calories: 25 Foods That Pack More Energy Than You Think",
  description:
    "Discover the surprising calorie content in everyday foods that appear healthy or low-calorie. Learn to identify hidden calories in drinks, condiments, cooking methods, and seemingly healthy snacks to make better nutrition choices.",
  keywords: [
    "hidden calories",
    "calorie traps",
    "high calorie foods",
    "unexpected calories",
    "calorie awareness",
    "nutrition facts",
    "food calories",
    "diet awareness",
    "calorie counting",
    "weight management",
    "portion control",
  ],
}

export default function HiddenCalories() {
  return (
    <FooterPagesLayout title="Hidden Calories: Foods That Pack More Energy Than You Think">
      <div className="space-y-8">
        <div className="text-sm text-gray-600 dark:text-gray-400">By <span className="font-medium">Sadiq</span> • Updated {new Date().toLocaleDateString()}</div>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            The Surprising World of Hidden Calories
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Some of the biggest obstacles to maintaining a balanced diet aren't the obvious culprits like desserts and fried foods—they're the "stealth" calories hiding in foods that appear healthy, small, or inconsequential. These hidden calories can easily add 500-1000+ calories to your daily intake without you realizing it.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Understanding where calories hide helps you make informed choices without feeling restricted. Knowledge is power, and knowing the calorie content of your food empowers you to enjoy everything in moderation while meeting your health goals.
          </p>
          <div className="bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-300">
            Real life: a few years ago I was puzzled that my lunches felt "light" but my energy dipped mid‑afternoon. Turned out the culprit was my coffee—one generous caramel latte added more calories than the salad it followed. Switching to an Americano made a noticeable difference in a week.
          </div>
        </section>

        <section className="bg-orange-50 dark:bg-gray-800/50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Category 1: Beverages - The Invisible Calories
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Liquid calories are often the most overlooked because they don't trigger the same satiety responses as solid foods. You can easily drink 400-600 calories and still feel hungry for a full meal.
          </p>

          <div className="space-y-6">
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Coffee Shop Surprises
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">High-Calorie Coffee Drinks</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Large Frappuccino with whipped cream:</strong> 400-670 calories</li>
                    <li><strong>Flavored latte (16 oz):</strong> 250-400 calories</li>
                    <li><strong>Hot chocolate (large):</strong> 350-500 calories</li>
                    <li><strong>Chai tea latte (16 oz):</strong> 240-320 calories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Lower-Calorie Alternatives</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Black coffee:</strong> 2-5 calories</li>
                    <li><strong>Coffee with 2 tbsp milk:</strong> 15-25 calories</li>
                    <li><strong>Americano:</strong> 5-10 calories</li>
                    <li><strong>Espresso:</strong> 1-3 calories</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-orange-100 dark:bg-gray-700/50 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Hidden Calorie Tip:</strong> The difference between a large specialty coffee drink and black coffee can be equivalent to a full meal. Those daily fancy coffees can add up to 2,000+ calories per week.
                </p>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Smoothie and Juice Traps
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Smoothies and juices often appear healthy due to their fruit content, but many pack more calories than a full meal due to added sugars, large portions, and concentrated fruit content.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Calorie Bombs</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Large acai bowl:</strong> 500-800 calories</li>
                    <li><strong>Protein smoothie (store-bought):</strong> 300-500 calories</li>
                    <li><strong>Green juice (16 oz):</strong> 150-300 calories</li>
                    <li><strong>Orange juice (16 oz):</strong> 220 calories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Why They're High</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Multiple servings of fruit in one drink</li>
                    <li>• Added sugars and syrups</li>
                    <li>• Nut butters and protein powders</li>
                    <li>• Large portion sizes (20+ oz)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Alcoholic Beverages
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Alcohol contains 7 calories per gram (nearly as much as fat), and mixed drinks often include high-calorie mixers. A night out can easily add 1,000+ calories.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-700 dark:text-gray-300">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <th className="text-left py-2">Drink</th>
                      <th className="text-right py-2">Serving Size</th>
                      <th className="text-right py-2">Calories</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Piña Colada</td>
                      <td className="text-right">8 oz</td>
                      <td className="text-right">450</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Margarita</td>
                      <td className="text-right">8 oz</td>
                      <td className="text-right">300</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Wine</td>
                      <td className="text-right">5 oz glass</td>
                      <td className="text-right">120-130</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Beer</td>
                      <td className="text-right">12 oz</td>
                      <td className="text-right">100-200</td>
                    </tr>
                    <tr>
                      <td className="py-2">Vodka/Whiskey</td>
                      <td className="text-right">1.5 oz shot</td>
                      <td className="text-right">96</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Category 2: "Healthy" Foods That Are Calorie Dense
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Many nutritious foods are also high in calories. This doesn't make them "bad," but portion awareness is crucial when these foods are part of your regular diet.
          </p>

          <div className="space-y-6">
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Nuts and Seeds: Nature's Calorie Powerhouses
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Nuts and seeds are incredibly nutritious, providing healthy fats, protein, and various vitamins and minerals. However, they're also extremely calorie-dense, making portion control essential.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Calorie Content (per 1 oz / ~28g)</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Macadamia nuts:</strong> 204 calories</li>
                    <li><strong>Pecans:</strong> 196 calories</li>
                    <li><strong>Brazil nuts:</strong> 186 calories</li>
                    <li><strong>Walnuts:</strong> 185 calories</li>
                    <li><strong>Almonds:</strong> 164 calories</li>
                    <li><strong>Cashews:</strong> 157 calories</li>
                    <li><strong>Sunflower seeds:</strong> 165 calories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Portion Reality Check</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• 1 oz = about 23 almonds</li>
                    <li>• 1 oz = about 14 walnut halves</li>
                    <li>• 1 oz = about 18 cashews</li>
                    <li>• Most people eat 2-3 servings at once</li>
                    <li>• Trail mix portion = 300-500 calories</li>
                    <li>• Large handful = 200-300 calories</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 bg-orange-100 dark:bg-gray-700/50 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Smart Strategy:</strong> Pre-portion nuts into small containers or buy single-serving packages. The difference between a small handful (100 calories) and mindless snacking from a large container (400+ calories) is significant.
                </p>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Avocados and Nut Butters
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Avocado Breakdown</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>1 medium avocado (200g):</strong> 320 calories</li>
                    <li><strong>1/2 avocado:</strong> 160 calories</li>
                    <li><strong>1/4 cup guacamole:</strong> 120-150 calories</li>
                    <li><strong>Avocado toast (with bread):</strong> 300-400 calories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Nut Butter Reality</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>2 tbsp peanut butter:</strong> 190 calories</li>
                    <li><strong>2 tbsp almond butter:</strong> 196 calories</li>
                    <li><strong>Typical "spread" amount:</strong> 3-4 tbsp (285-380 cal)</li>
                    <li><strong>PB&J sandwich:</strong> 400-500 calories</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Dried Fruits and "Health" Foods
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                The dehydration process concentrates sugars and calories while reducing volume, making it easy to consume large amounts without feeling full.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Dried Fruits (1/4 cup)</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Dates:</strong> 105 calories</li>
                    <li><strong>Raisins:</strong> 108 calories</li>
                    <li><strong>Dried cranberries:</strong> 92 calories</li>
                    <li><strong>Dried banana chips:</strong> 147 calories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Granola & Cereals (1/2 cup)</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Granola:</strong> 200-300 calories</li>
                    <li><strong>Muesli:</strong> 160-200 calories</li>
                    <li><strong>Typical serving:</strong> 3/4 to 1 cup</li>
                    <li><strong>With milk:</strong> +150 calories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Comparison</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>1 cup fresh grapes:</strong> 100 cal</li>
                    <li><strong>1/4 cup raisins:</strong> 108 cal</li>
                    <li><em>Same calories, 4x less volume!</em></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Category 3: Cooking and Condiment Calories
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Small additions during cooking or eating can dramatically increase the calorie content of otherwise healthy meals. These "extra" calories often go unnoticed but can add 200-500 calories per meal.
          </p>

          <div className="space-y-6">
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Cooking Oils and Fats
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                All oils contain approximately 120 calories per tablespoon, regardless of type. The healthy reputation of oils like olive oil doesn't change their calorie density.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Common Cooking Additions</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>1 tbsp olive oil:</strong> 119 calories</li>
                    <li><strong>1 tbsp butter:</strong> 102 calories</li>
                    <li><strong>1 tbsp coconut oil:</strong> 121 calories</li>
                    <li><strong>Cooking spray (1-second spray):</strong> 2 calories</li>
                    <li><strong>Typical sauté amount:</strong> 2-3 tbsp (240-360 cal)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Hidden in Preparation</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Restaurant vegetables often cooked in 2-3 tbsp oil</li>
                    <li>• "Light sauté" can still add 100+ calories</li>
                    <li>• Roasted vegetables absorb oil</li>
                    <li>• Grilled foods often brushed with oil</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Salad Dressing and Condiment Reality
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                A healthy salad can quickly become a high-calorie meal with generous dressing. Most people use 2-4 tablespoons of dressing, not the 2 teaspoons used for nutrition labels.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-700 dark:text-gray-300">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <th className="text-left py-2">Condiment</th>
                      <th className="text-right py-2">2 tbsp serving</th>
                      <th className="text-right py-2">Typical use</th>
                      <th className="text-right py-2">Typical calories</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Ranch dressing</td>
                      <td className="text-right">140 cal</td>
                      <td className="text-right">3-4 tbsp</td>
                      <td className="text-right">210-280 cal</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Caesar dressing</td>
                      <td className="text-right">160 cal</td>
                      <td className="text-right">3-4 tbsp</td>
                      <td className="text-right">240-320 cal</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Mayonnaise</td>
                      <td className="text-right">180 cal</td>
                      <td className="text-right">2-3 tbsp</td>
                      <td className="text-right">180-270 cal</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Thousand Island</td>
                      <td className="text-right">120 cal</td>
                      <td className="text-right">3 tbsp</td>
                      <td className="text-right">180 cal</td>
                    </tr>
                    <tr>
                      <td className="py-2">Balsamic vinaigrette</td>
                      <td className="text-right">90 cal</td>
                      <td className="text-right">2-3 tbsp</td>
                      <td className="text-right">135-180 cal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Restaurant and Takeout Hidden Calories
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Restaurant foods often contain 2-3 times more calories than the same dish made at home due to generous use of oils, butter, sugar, and larger portions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Common Hidden Sources</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Bread served with butter: +200-300 calories</li>
                    <li>• "Grilled" vegetables cooked in oil: +150-250 calories</li>
                    <li>• Salads with nuts, cheese, dried fruit: +300-500 calories</li>
                    <li>• Stir-fries with oil: +200-400 calories</li>
                    <li>• Pasta with oil-based sauces: +300-500 calories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Portion Size Reality</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Restaurant pasta: 3-4 servings worth</li>
                    <li>• Restaurant rice: 2-3 servings worth</li>
                    <li>• Bagels: often 3-4 servings worth</li>
                    <li>• Muffins: can be 400-600 calories each</li>
                    <li>• "Large" drinks: 32-44 oz vs standard 12 oz</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Category 4: Snack Foods That Seem Innocent
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Many snack foods appear small or harmless but pack significant calories. The key is understanding what constitutes a realistic portion versus what most people actually consume.
          </p>

          <div className="space-y-6">
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Crackers, Chips, and Baked Goods
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Label Serving vs. Reality</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Potato chips - Label:</strong> 1 oz (15 chips) = 150 cal</li>
                    <li><strong>Potato chips - Reality:</strong> Small bag = 2 oz = 300 cal</li>
                    <li><strong>Crackers - Label:</strong> 5 crackers = 80 cal</li>
                    <li><strong>Crackers - Reality:</strong> Typical snacking = 15-20 crackers = 240-320 cal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Baked Good Surprises</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Large bakery muffin:</strong> 400-600 calories</li>
                    <li><strong>Bagel with cream cheese:</strong> 400-500 calories</li>
                    <li><strong>Granola bar:</strong> 100-200 calories (seems healthy!)</li>
                    <li><strong>Large cookie:</strong> 200-400 calories each</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Cheese and Dairy Hidden Calories
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Cheese is calorie-dense due to its fat content, and serving sizes on labels are much smaller than typical consumption amounts.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Cheese Realities</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>1 oz cheddar cheese:</strong> 110 calories (size of thumb)</li>
                    <li><strong>Typical sandwich slice:</strong> 1.5-2 oz = 165-220 calories</li>
                    <li><strong>Pizza cheese (large slice):</strong> 200-300 calories</li>
                    <li><strong>Cheese and crackers snack:</strong> 300-500 calories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Other Dairy</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Whole milk (1 cup):</strong> 150 calories</li>
                    <li><strong>Greek yogurt (6 oz):</strong> 100-150 calories</li>
                    <li><strong>Ice cream (1/2 cup):</strong> 150-200 calories</li>
                    <li><strong>Typical ice cream serving:</strong> 1 cup = 300-400 calories</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 dark:bg-gray-800/50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Strategies for Managing Hidden Calories
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Awareness is the first step, but having practical strategies helps you enjoy all foods while maintaining balance. The goal isn't to avoid these foods, but to make informed choices.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Practical Strategies</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Read serving sizes on labels and measure occasionally to calibrate your eye</li>
                <li>Pre-portion snacks into small containers or buy single-serving packages</li>
                <li>Ask for dressing on the side when dining out</li>
                <li>Use cooking spray instead of pouring oil when possible</li>
                <li>Choose smaller beverages or dilute drinks with water or ice</li>
                <li>Be especially mindful of liquid calories—they don't provide satiety</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Balanced Approach</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Enjoy higher-calorie foods mindfully and savor them</li>
                <li>Balance higher-calorie choices with lighter options during the day</li>
                <li>Focus on foods that provide both calories and nutrition</li>
                <li>Remember that no single food choice defines your overall health</li>
                <li>Use tools like Shredle to build intuitive understanding of food energy</li>
                <li>Practice the 80/20 rule—make balanced choices 80% of the time</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Building Calorie Awareness Through Practice
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Understanding hidden calories becomes intuitive with practice. Games like Shredle help you develop this awareness by comparing foods and learning about energy density, portion sizes, and preparation methods.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The more you practice identifying calorie content, the better you become at making informed choices without constant calculation. This knowledge empowers you to enjoy food fully while maintaining awareness of your overall intake.
          </p>
          <div className="text-center">
            <Link 
              href="/"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Practice Calorie Awareness with Shredle
            </Link>
          </div>
        </section>

        <div className="text-sm text-gray-600 dark:text-gray-400 italic">
          <p>
            Note: Calorie values are approximate and may vary based on brands, preparation methods, and specific ingredients. This information is for educational purposes and not intended as medical or nutritional advice.
          </p>
        </div>
      </div>
    </FooterPagesLayout>
  )
}
