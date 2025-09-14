import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Portion Control Guide - Understanding Serving Sizes vs Reality",
  description:
    "Master portion control with practical strategies for estimating serving sizes, understanding food labels, and making balanced choices. Learn the difference between serving sizes and typical portions for better nutrition management.",
  keywords: [
    "portion control",
    "serving sizes",
    "food portions",
    "calorie control",
    "weight management",
    "nutrition portions",
    "portion awareness",
    "serving size guide",
    "healthy portions",
    "portion estimation",
    "mindful eating",
  ],
}

export default function PortionControl() {
  return (
    <FooterPagesLayout title="Portion Control: Understanding Serving Sizes vs. Reality">
      <div className="space-y-8">
        <div className="text-sm text-gray-600 dark:text-gray-400">By <span className="font-medium">Sadiq</span> • Updated {new Date().toLocaleDateString()}</div>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            The Foundation of Nutrition Awareness
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Portion control isn't about restriction—it's about awareness. Understanding what constitutes a reasonable portion helps you enjoy all foods while maintaining balance. The challenge is that our perception of "normal" portions has been significantly distorted by supersizing culture, restaurant servings, and packaging that contains multiple servings.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Research shows that people consistently underestimate the calorie content of larger portions and overestimate the calorie content of smaller portions. This "portion size bias" can lead to consuming 200-500 extra calories per day without realizing it—enough to cause gradual weight gain over time.
          </p>
          <div className="bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-300">
            What helped me most: using a smaller plate for anything rich (pasta, curries) and a big bowl for veg. It feels like a cheat code—my meals still look abundant, but I naturally serve a little less of the heavy stuff without thinking about it.
          </div>
        </section>

        <section className="bg-orange-50 dark:bg-gray-800/50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Serving Size vs. Portion Size: Understanding the Difference
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            These terms are often used interchangeably, but they mean very different things. Understanding this distinction is crucial for making informed food choices.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Serving Size (Label Reference)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                The standardized amount used on nutrition labels, set by the FDA based on what people typically eat. All nutritional information is calculated per serving size.
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Legally standardized amounts</li>
                <li>Used for nutritional calculations</li>
                <li>Often smaller than typical consumption</li>
                <li>Based on reference amounts customarily consumed (RACCs)</li>
                <li>Updated periodically to reflect eating patterns</li>
              </ul>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Portion Size (What You Actually Eat)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                The actual amount of food you choose to eat at one time. This can be larger or smaller than the serving size, and it's what determines your actual calorie intake.
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Individual choice and preference</li>
                <li>Varies by hunger, occasion, and environment</li>
                <li>Often larger than serving sizes</li>
                <li>Influenced by package size, plate size, and social context</li>
                <li>What actually matters for calorie intake</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-orange-100 dark:bg-gray-700/50 rounded-lg">
            <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-2">
              Real-World Examples of the Gap
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Cereal</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Label serving:</strong> 3/4 cup (110 cal)<br/>
                  <strong>Typical bowl:</strong> 1.5 cups (220 cal)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Pasta</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Label serving:</strong> 2 oz dry (200 cal)<br/>
                  <strong>Restaurant portion:</strong> 6-8 oz dry (600-800 cal)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Ice Cream</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Label serving:</strong> 1/2 cup (140 cal)<br/>
                  <strong>Typical scoop:</strong> 1 cup (280 cal)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            The Psychology of Portion Perception
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our brains use visual cues to estimate portion sizes, but these cues can be easily manipulated by environmental factors. Understanding these psychological influences helps you make more conscious choices.
          </p>

          <div className="space-y-6">
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                The Delboeuf Illusion in Food
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                This optical illusion demonstrates how the same amount of food appears smaller on a large plate and larger on a small plate. Studies show people eat 22% more food when using larger plates.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Plate Size Effects</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Small plate (8-9 inches):</strong> Portions appear larger</li>
                    <li><strong>Large plate (12+ inches):</strong> Same portion appears smaller</li>
                    <li><strong>Bowl depth:</strong> Shallow bowls lead to smaller portions</li>
                    <li><strong>Color contrast:</strong> High contrast makes portions appear larger</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Practical Applications</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>Use smaller plates for calorie-dense foods</li>
                    <li>Use larger plates for vegetables and salads</li>
                    <li>Choose plates with high contrast to food color</li>
                    <li>Be aware of restaurant "presentation plates"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Environmental Influences on Portion Size
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Research by Dr. Brian Wansink and others has identified numerous environmental factors that unconsciously influence how much we eat, often overriding our internal hunger and satiety cues.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Package and Container Size</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>People eat 20-45% more from larger packages</li>
                    <li>Family-size containers lead to larger portions</li>
                    <li>Wide containers encourage more consumption than tall ones</li>
                    <li>Transparent containers increase consumption visibility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Social and Contextual Cues</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>People eat 44% more when dining with others</li>
                    <li>Buffet settings encourage larger portions</li>
                    <li>Eating while distracted increases portion sizes</li>
                    <li>Time pressure can increase or decrease portions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                The "Supersizing" of America
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Portion sizes have increased dramatically over the past 50 years. What was considered a large portion in the 1950s is now often smaller than today's "small" sizes.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-700 dark:text-gray-300">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <th className="text-left py-2">Food Item</th>
                      <th className="text-right py-2">1950s Portion</th>
                      <th className="text-right py-2">Modern Portion</th>
                      <th className="text-right py-2">Calorie Increase</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Soda</td>
                      <td className="text-right">6.5 oz</td>
                      <td className="text-right">20 oz</td>
                      <td className="text-right">+150 calories</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">French Fries</td>
                      <td className="text-right">2.4 oz</td>
                      <td className="text-right">6.9 oz</td>
                      <td className="text-right">+300 calories</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Hamburger</td>
                      <td className="text-right">3.9 oz</td>
                      <td className="text-right">8 oz</td>
                      <td className="text-right">+230 calories</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Bagel</td>
                      <td className="text-right">2-3 inches</td>
                      <td className="text-right">5-6 inches</td>
                      <td className="text-right">+210 calories</td>
                    </tr>
                    <tr>
                      <td className="py-2">Muffin</td>
                      <td className="text-right">1.5 oz</td>
                      <td className="text-right">4-6 oz</td>
                      <td className="text-right">+200-400 calories</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Practical Portion Estimation Methods
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            You don't need to carry measuring cups everywhere. These practical methods help you estimate portions accurately using everyday objects and your own body as reference points.
          </p>

          <div className="space-y-6">
            <div className="bg-orange-50 dark:bg-gray-800/50 p-6 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-4">
                The Hand Method for Portion Control
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Your hands are proportional to your body size, making them perfect portable portion guides. This method automatically scales portions to individual needs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">✋</div>
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">Palm = Protein Portions</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        1 palm-sized portion = 3-4 oz cooked protein (~20-30g protein, 120-200 calories)
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 text-xs italic">
                        Examples: chicken breast, fish fillet, tofu, lean beef
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">👊</div>
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">Fist = Vegetables</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        1 fist-sized portion = 1 cup vegetables (~25-50 calories)
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 text-xs italic">
                        Examples: broccoli, spinach, carrots, bell peppers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">🥄</div>
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">Cupped Hand = Carbohydrates</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        1 cupped hand = 1/2 cup cooked grains (~100-150 calories)
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 text-xs italic">
                        Examples: rice, pasta, quinoa, oatmeal, potatoes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">👍</div>
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">Thumb = Fats</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        1 thumb-sized portion = 1 tablespoon fat (~120-140 calories)
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 text-xs italic">
                        Examples: olive oil, nuts, nut butter, avocado
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Building a Balanced Meal</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    A balanced meal using the hand method might include:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• 1 palm protein (150-200 calories)</li>
                    <li>• 1-2 fists vegetables (25-100 calories)</li>
                    <li>• 1 cupped hand carbs (100-150 calories)</li>
                    <li>• 1 thumb fat (120-140 calories)</li>
                  </ul>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 font-semibold">
                    Total: ~395-590 calories per meal
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Everyday Object Portion Guides
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                When hand measurements aren't practical, these everyday objects provide reliable portion references.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Protein Portions</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Deck of cards:</strong> 3 oz cooked meat (~150-180 cal)</li>
                    <li><strong>Checkbook:</strong> 4 oz fish fillet (~200 cal)</li>
                    <li><strong>Computer mouse:</strong> 2-3 oz portion (~100-150 cal)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Other Foods</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Tennis ball:</strong> 1 medium apple or orange (~80 cal)</li>
                    <li><strong>Baseball:</strong> 1 cup of cereal or salad (~100 cal)</li>
                    <li><strong>Golf ball:</strong> 2 tbsp nuts or nut butter (~180 cal)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                The Plate Method for Balanced Meals
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                This visual approach helps ensure balanced nutrition while controlling portions. It's endorsed by diabetes educators and nutrition professionals worldwide.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Standard 9-inch Plate Division</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>1/2 plate:</strong> Non-starchy vegetables (25-100 calories)</li>
                    <li><strong>1/4 plate:</strong> Lean protein (150-200 calories)</li>
                    <li><strong>1/4 plate:</strong> Starchy foods/grains (100-200 calories)</li>
                    <li><strong>Side:</strong> Healthy fat (100-150 calories)</li>
                    <li><strong>Beverage:</strong> Water or unsweetened drink</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Benefits of This Approach</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Automatically controls portions</li>
                    <li>• Ensures vegetable intake</li>
                    <li>• Balances macronutrients</li>
                    <li>• Works for any cuisine</li>
                    <li>• Easy to remember and apply</li>
                    <li>• Promotes dietary variety</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Restaurant and Dining Out Strategies
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Restaurant portions are often 2-4 times larger than standard serving sizes. Having strategies for dining out helps you enjoy social meals while maintaining portion awareness.
          </p>

          <div className="space-y-6">
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Pre-Meal Planning Strategies
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Before You Go</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>Review the menu online beforehand</li>
                    <li>Look for portion size indicators (small/regular/large)</li>
                    <li>Check if nutrition information is available</li>
                    <li>Plan to eat half and save half for later</li>
                    <li>Consider sharing an entree</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Upon Arrival</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>Ask your server about portion sizes</li>
                    <li>Request a to-go box with your meal</li>
                    <li>Ask for dressing/sauce on the side</li>
                    <li>Consider ordering appetizer as main course</li>
                    <li>Don't be afraid to make special requests</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                During-Meal Portion Management
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Portion Control Techniques</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>Immediately box half before eating</li>
                    <li>Use smaller utensils to slow eating</li>
                    <li>Put utensils down between bites</li>
                    <li>Focus on conversation, not just food</li>
                    <li>Check in with hunger levels mid-meal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Visual Cues on Restaurant Plates</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>Protein should cover 1/4 of large plate</li>
                    <li>Vegetables often pushed to side—move to center</li>
                    <li>Starches frequently oversized—eat half</li>
                    <li>Sauces add 100-300 calories—use sparingly</li>
                    <li>Bread basket = 150-300 calories before meal</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h3 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                Common Restaurant Portion Realities
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Understanding typical restaurant portion sizes helps set realistic expectations and portion strategies.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-700 dark:text-gray-300">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <th className="text-left py-2">Food Item</th>
                      <th className="text-right py-2">Standard Serving</th>
                      <th className="text-right py-2">Restaurant Portion</th>
                      <th className="text-right py-2">Multiplier</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Pasta</td>
                      <td className="text-right">2 oz dry (~200 cal)</td>
                      <td className="text-right">6-8 oz dry (600-800 cal)</td>
                      <td className="text-right">3-4x</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Rice</td>
                      <td className="text-right">1/3 cup dry (~150 cal)</td>
                      <td className="text-right">1 cup dry (450 cal)</td>
                      <td className="text-right">3x</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Meat/Fish</td>
                      <td className="text-right">3 oz (~150-200 cal)</td>
                      <td className="text-right">6-12 oz (300-600 cal)</td>
                      <td className="text-right">2-4x</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Salad dressing</td>
                      <td className="text-right">2 tbsp (~90 cal)</td>
                      <td className="text-right">4-6 tbsp (180-270 cal)</td>
                      <td className="text-right">2-3x</td>
                    </tr>
                    <tr>
                      <td className="py-2">French fries</td>
                      <td className="text-right">Small (2.5 oz ~220 cal)</td>
                      <td className="text-right">Large (6 oz ~540 cal)</td>
                      <td className="text-right">2.5x</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 dark:bg-gray-800/50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Building Sustainable Portion Habits
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The goal isn't perfect portion control every time, but developing awareness and practical skills that become second nature. Small changes in portion awareness can have significant long-term impacts.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Gradual Habit Formation</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Start by measuring just one food per day for a week</li>
                <li>Practice the hand method for one meal per day</li>
                <li>Use smaller plates for calorie-dense foods</li>
                <li>Pack away leftovers immediately after cooking</li>
                <li>Eat slowly and check in with hunger mid-meal</li>
                <li>Take photos of portions to calibrate your eye</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Flexible Approach</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Adjust portions based on activity level and hunger</li>
                <li>Allow for larger portions on special occasions</li>
                <li>Focus on vegetables—these can be generous portions</li>
                <li>Listen to satiety cues over strict portion rules</li>
                <li>Remember that portion control is a skill, not perfection</li>
                <li>Use tools like Shredle to build calorie intuition</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Portion Control and Learning Through Practice
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Understanding portion sizes becomes intuitive through practice and experience. Games like Shredle help develop this awareness by comparing foods and understanding how different portion sizes affect calorie content.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The more you practice estimating portions and understanding food energy density, the better you become at making balanced choices naturally. This knowledge empowers you to enjoy food fully while maintaining awareness of your overall intake.
          </p>
          <div className="text-center">
            <Link 
              href="/"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Practice Portion Awareness with Shredle
            </Link>
          </div>
        </section>

        <div className="text-sm text-gray-600 dark:text-gray-400 italic">
          <p>
            Note: Portion recommendations are general guidelines. Individual needs vary based on age, sex, activity level, and health goals. Consult with a healthcare professional for personalized nutrition advice.
          </p>
        </div>
      </div>
    </FooterPagesLayout>
  )
}
