import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Restaurant Calories: How Dining Out Affects Your Nutrition Goals",
  description:
    "Understand how restaurant meals compare to home cooking in calories and nutrition. Learn strategies for making healthier choices when dining out, from fast food to fine dining establishments.",
  keywords: [
    "restaurant calories",
    "dining out nutrition",
    "restaurant vs home cooking",
    "healthy restaurant choices",
    "fast food calories",
    "chain restaurant nutrition",
    "dining out strategies",
    "restaurant portion sizes",
    "eating out tips",
    "restaurant meal planning",
  ],
}

export default function RestaurantCalories() {
  return (
    <FooterPagesLayout title="Restaurant Calories: How Dining Out Affects Your Nutrition Goals">
      <div className="space-y-8">
        <div className="text-sm text-gray-600 dark:text-gray-400">By <span className="font-medium">Sadiq</span> • Updated {new Date().toLocaleDateString()}</div>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            The Hidden Cost of Convenience
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Dining out has become an integral part of modern life, with the average American eating out 4-5 times per week. While convenient and enjoyable, restaurant meals typically contain 200-300% more calories than the same dishes prepared at home. This dramatic difference stems from larger portions, cooking methods that prioritize taste over health, and ingredients that would be used sparingly in home cooking.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The impact goes beyond just calories. Restaurant meals often contain 2-3 times the sodium, significantly more saturated fat, and fewer vegetables compared to home-prepared meals. Understanding these differences empowers you to make informed choices and enjoy dining out as part of a balanced lifestyle.
          </p>
          <div className="bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-300">
            Small win I use: ask for a to‑go box with the meal and split it before I start. It takes 10 seconds and tomorrow’s lunch sorts itself out. I still enjoy the restaurant dish—just in two sittings.
          </div>
        </section>

        <section className="bg-orange-50 dark:bg-gray-800/50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Restaurant vs. Home Cooking: The Calorie Gap
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The calorie difference between restaurant and home-prepared foods isn't just about portion size—it's fundamentally about how food is prepared and what ingredients are used.
          </p>

          <div className="space-y-6">
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Why Restaurant Foods Are Higher in Calories
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Cooking Methods</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• <strong>Liberal use of oils and butter:</strong> 2-4 tbsp per dish vs. 1 tsp at home</li>
                    <li>• <strong>Deep frying:</strong> Common for appetizers, sides, and proteins</li>
                    <li>• <strong>Pan-searing with oil:</strong> Often 2-3x more oil than home cooking</li>
                    <li>• <strong>Cream-based sauces:</strong> Heavy cream, butter, cheese additions</li>
                    <li>• <strong>Basting and glazing:</strong> Butter, oil, or sugar-based glazes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Ingredient Choices</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• <strong>Higher-fat cuts of meat:</strong> Ribeye vs. sirloin, dark meat vs. white</li>
                    <li>• <strong>Cheese additions:</strong> Often 2-4 oz per dish</li>
                    <li>• <strong>Nuts and seeds:</strong> Generous portions in salads and dishes</li>
                    <li>• <strong>Refined carbohydrates:</strong> White bread, pasta, rice as bases</li>
                    <li>• <strong>Sugar in unexpected places:</strong> Marinades, dressings, sauces</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Direct Comparisons: Same Dish, Different Calories
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                These comparisons show how the same basic dish can vary dramatically in calories depending on preparation method and portion size.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-700 dark:text-gray-300">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <th className="text-left py-2">Dish</th>
                      <th className="text-right py-2">Home Prepared</th>
                      <th className="text-right py-2">Restaurant Version</th>
                      <th className="text-right py-2">Difference</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Grilled Chicken Salad</td>
                      <td className="text-right">350 calories</td>
                      <td className="text-right">800-1200 calories</td>
                      <td className="text-right">+450-850</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Pasta with Marinara</td>
                      <td className="text-right">400 calories</td>
                      <td className="text-right">800-1200 calories</td>
                      <td className="text-right">+400-800</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Stir-fried Vegetables</td>
                      <td className="text-right">150 calories</td>
                      <td className="text-right">400-600 calories</td>
                      <td className="text-right">+250-450</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Fish with Rice</td>
                      <td className="text-right">450 calories</td>
                      <td className="text-right">900-1300 calories</td>
                      <td className="text-right">+450-850</td>
                    </tr>
                    <tr>
                      <td className="py-2">Burger and Fries</td>
                      <td className="text-right">600 calories</td>
                      <td className="text-right">1200-1800 calories</td>
                      <td className="text-right">+600-1200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                The Economics of Restaurant Calories
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Understanding why restaurants prepare food this way helps explain the calorie differences and can guide your ordering strategies.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Business Motivations</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Fat and salt enhance flavor and palatability</li>
                    <li>• Larger portions perceived as better value</li>
                    <li>• Oil and butter are relatively inexpensive</li>
                    <li>• Consistent taste across locations requires standardization</li>
                    <li>• Customer satisfaction often correlates with richness</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Operational Factors</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Pre-prepared sauces and dressings with extended shelf life</li>
                    <li>• Cooking methods that work for high-volume service</li>
                    <li>• Staff training focused on speed and consistency</li>
                    <li>• Inventory management favors versatile ingredients</li>
                    <li>• Food safety protocols may require higher cooking temperatures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Fast Food vs. Fast-Casual vs. Fine Dining
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Different types of restaurants present unique challenges and opportunities for maintaining nutrition goals. Understanding the patterns can help you navigate any dining situation.
          </p>

          <div className="space-y-6">
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Fast Food: High Calories, Predictable Nutrition
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Fast food gets criticism for high calories, but it often provides the most transparent nutrition information and consistent portions across locations.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Typical Fast Food Calories</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Burger, fries, soda combo:</strong> 1200-1600 calories</li>
                    <li><strong>Large pizza slice:</strong> 300-400 calories each</li>
                    <li><strong>Chicken sandwich meal:</strong> 1000-1400 calories</li>
                    <li><strong>Burrito bowl:</strong> 600-1200 calories</li>
                    <li><strong>Fish sandwich meal:</strong> 1100-1500 calories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Smart Fast Food Strategies</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Choose grilled over fried proteins</li>
                    <li>• Substitute side salad for fries</li>
                    <li>• Order water or unsweetened drinks</li>
                    <li>• Check nutrition facts before ordering</li>
                    <li>• Consider kids' meals for portion control</li>
                    <li>• Skip the meal deal if you don't need everything</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Fast-Casual: The Healthy Halo Effect
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Fast-casual restaurants often market themselves as healthier alternatives, but customizable options can lead to very high-calorie meals if you're not careful.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Hidden Calorie Traps</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Salad with everything:</strong> 800-1200 calories</li>
                    <li><strong>Açai bowl with toppings:</strong> 600-900 calories</li>
                    <li><strong>Build-your-own bowl:</strong> 700-1300 calories</li>
                    <li><strong>Smoothie with add-ins:</strong> 400-800 calories</li>
                    <li><strong>"Healthy" sandwich:</strong> 600-1000 calories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Smart Customization</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Load up on vegetables and lean proteins</li>
                    <li>• Limit high-calorie toppings (nuts, cheese, avocado)</li>
                    <li>• Choose vinaigrette over creamy dressings</li>
                    <li>• Ask for half portions of calorie-dense ingredients</li>
                    <li>• Skip or limit dried fruits and granola</li>
                    <li>• Be mindful of portion creep with "unlimited" toppings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Fine Dining: Hidden Indulgence
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Fine dining restaurants often have the highest calorie counts due to rich preparation methods and multiple courses, but smaller portions and slower eating can help with satiety.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Common High-Calorie Elements</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Butter and cream sauces:</strong> +200-400 calories</li>
                    <li><strong>Bread service with butter:</strong> 300-500 calories</li>
                    <li><strong>Cheese courses:</strong> 300-600 calories</li>
                    <li><strong>Rich appetizers:</strong> 400-800 calories each</li>
                    <li><strong>Desserts:</strong> 500-1200 calories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Fine Dining Strategies</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Share appetizers and desserts</li>
                    <li>• Choose grilled or roasted preparations</li>
                    <li>• Ask for sauces on the side</li>
                    <li>• Focus on vegetable-forward dishes</li>
                    <li>• Consider skipping bread service</li>
                    <li>• Eat slowly and savor each course</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Cuisine-Specific Calorie Patterns
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Different cuisines have characteristic preparation methods and ingredients that affect calorie content. Understanding these patterns helps you make informed choices regardless of the type of restaurant.
          </p>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
                <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                  Italian Cuisine
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">High-Calorie Items</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Pasta dishes: 800-1500 calories</li>
                      <li>• Pizza (large slice): 300-500 calories each</li>
                      <li>• Risotto: 600-1000 calories</li>
                      <li>• Lasagna: 800-1200 calories</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Better Choices</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Grilled fish or chicken</li>
                      <li>• Vegetable antipasto</li>
                      <li>• Minestrone soup</li>
                      <li>• Side of steamed vegetables</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
                <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                  Mexican Cuisine
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">High-Calorie Items</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Large burrito: 1000-1500 calories</li>
                      <li>• Nachos: 1200-2000 calories</li>
                      <li>• Quesadilla: 800-1200 calories</li>
                      <li>• Chimichanga: 1000-1400 calories</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Better Choices</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Ceviche or grilled fish</li>
                      <li>• Chicken or vegetable fajitas</li>
                      <li>• Black bean soup</li>
                      <li>• Salsa and vegetables</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
                <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                  Asian Cuisines
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">High-Calorie Items</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Fried rice: 600-1000 calories</li>
                      <li>• General Tso's chicken: 1200-1500 calories</li>
                      <li>• Pad Thai: 800-1200 calories</li>
                      <li>• Tempura dishes: 600-1000 calories</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Better Choices</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Steamed dishes with sauce on side</li>
                      <li>• Miso soup and salads</li>
                      <li>• Sashimi and simple rolls</li>
                      <li>• Stir-fried vegetables</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
                <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                  American Casual Dining
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">High-Calorie Items</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Loaded burgers: 1200-1800 calories</li>
                      <li>• Fried appetizer platters: 1500-2500 calories</li>
                      <li>• Pasta entrees: 1000-1800 calories</li>
                      <li>• Riblets and wings: 1200-2000 calories</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Better Choices</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Grilled chicken or fish</li>
                      <li>• Side salads with vinaigrette</li>
                      <li>• Steamed or roasted vegetables</li>
                      <li>• Broth-based soups</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 dark:bg-gray-800/50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Strategic Dining Out: Planning and Execution
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Successful restaurant dining when watching calories requires both advance planning and in-the-moment strategies. The goal is to enjoy the social and culinary experience while maintaining awareness of your nutrition goals.
          </p>

          <div className="space-y-6">
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Pre-Dining Preparation
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Research Phase</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Review menu online before going</li>
                    <li>• Look for nutrition information if available</li>
                    <li>• Identify 2-3 suitable options</li>
                    <li>• Check for "light" or "fit" menu sections</li>
                    <li>• Note preparation methods (grilled, steamed, etc.)</li>
                    <li>• Plan your approach to sides and extras</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Day-of Planning</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Eat a small protein snack beforehand</li>
                    <li>• Stay hydrated throughout the day</li>
                    <li>• Plan lighter meals earlier in the day</li>
                    <li>• Don't skip meals to "save calories"</li>
                    <li>• Consider your activity level for the day</li>
                    <li>• Set realistic expectations for the meal</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Ordering Strategies
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Communication with Staff</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Ask about preparation methods</li>
                    <li>• Request modifications confidently</li>
                    <li>• Ask for sauces and dressings on the side</li>
                    <li>• Inquire about portion sizes</li>
                    <li>• Request steamed instead of sautéed vegetables</li>
                    <li>• Ask about substitutions (salad for fries)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Menu Navigation</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Look for keywords: grilled, baked, steamed, roasted</li>
                    <li>• Avoid: fried, crispy, creamy, loaded, smothered</li>
                    <li>• Consider appetizers as main courses</li>
                    <li>• Ask about half-portions or lunch sizes</li>
                    <li>• Be the first to order to avoid social influence</li>
                    <li>• Don't be swayed by "limited time" or "special" items</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                During-Meal Management
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Portion Control Tactics</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Ask for a to-go box when meal arrives</li>
                    <li>• Box half the meal before starting</li>
                    <li>• Share dishes with dining companions</li>
                    <li>• Eat slowly and put utensils down between bites</li>
                    <li>• Focus on conversation, not just food</li>
                    <li>• Check in with hunger levels mid-meal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Mindful Eating Practices</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Taste and savor each bite fully</li>
                    <li>• Notice flavors, textures, and aromas</li>
                    <li>• Pause between courses to assess fullness</li>
                    <li>• Drink water regularly throughout the meal</li>
                    <li>• Appreciate the social aspects of dining</li>
                    <li>• Remember that you can always order more</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            The Social Aspect of Restaurant Dining
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Dining out is rarely just about food—it's about connection, celebration, and shared experiences. Balancing social enjoyment with nutrition goals requires strategies that don't compromise either aspect.
          </p>

          <div className="space-y-6">
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Navigating Social Pressure
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Common Social Challenges</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Pressure to order appetizers or desserts</li>
                    <li>• Family-style sharing that encourages overeating</li>
                    <li>• "Special occasion" justifications for indulgence</li>
                    <li>• Feeling judged for making healthier choices</li>
                    <li>• FOMO (fear of missing out) on popular dishes</li>
                    <li>• Group decisions that don't align with your goals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Confidence-Building Responses</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• "I'm really excited about this entrée"</li>
                    <li>• "I'm saving room for the main course"</li>
                    <li>• "This looks amazing, let's share it"</li>
                    <li>• "I'm focusing on really enjoying my food tonight"</li>
                    <li>• "I had a big lunch, so I'm keeping it light"</li>
                    <li>• Simply focus on the conversation, not food choices</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Special Occasions and Celebrations
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Special occasions often involve restaurant dining, and finding balance between celebration and health goals requires flexibility and planning.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Flexible Strategies</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Plan which meals to be more flexible with</li>
                    <li>• Balance indulgent meals with lighter ones</li>
                    <li>• Focus on foods that are truly special or meaningful</li>
                    <li>• Share rich dishes so you can taste without overindulging</li>
                    <li>• Remember that celebration is about connection, not just food</li>
                    <li>• Consider non-food ways to mark special occasions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Long-term Perspective</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• One meal doesn't define your overall health</li>
                    <li>• Consistency over time matters more than perfection</li>
                    <li>• Guilt and stress about food choices can be more harmful than the food itself</li>
                    <li>• Learning to navigate social eating is a valuable life skill</li>
                    <li>• Enjoyment and satisfaction contribute to overall well-being</li>
                    <li>• Build sustainable habits rather than rigid rules</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Building Restaurant Navigation Skills
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Like any skill, navigating restaurant meals successfully improves with practice and awareness. The goal is to develop intuition that allows you to enjoy dining out while maintaining your health goals.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Understanding calorie patterns in restaurant foods becomes easier as you practice identifying preparation methods, portion sizes, and ingredient choices. Tools like Shredle can help build this awareness by training your ability to estimate food energy content across different preparation styles.
          </p>
          <div className="text-center">
            <Link 
              href="/"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Practice Food Estimation with Shredle
            </Link>
          </div>
        </section>

        <div className="text-sm text-gray-600 dark:text-gray-400 italic">
          <p>
            Note: Calorie estimates are based on typical restaurant preparations and may vary significantly between establishments. When available, use restaurant-provided nutrition information for more accurate estimates.
          </p>
        </div>
      </div>
    </FooterPagesLayout>
  )
}
