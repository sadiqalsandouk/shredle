import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"

export const metadata: Metadata = {
  title: "Nutrition Guide - Comprehensive Food Education",
  description:
    "Learn about nutrition basics, macronutrients, reading food labels, and making informed dietary choices in our comprehensive nutrition guide.",
  keywords: [
    "nutrition guide",
    "macronutrients",
    "food labels",
    "healthy eating",
    "calorie counting",
    "balanced diet",
    "nutrition facts",
  ],
}

export default function NutritionGuide() {
  return (
    <FooterPagesLayout title="Nutrition Guide">
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Understanding Macronutrients
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Macronutrients are the nutrients your body needs in large amounts to
            function properly. The three main macronutrients are:
          </p>

          <div className="space-y-4">
            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-orange-600 dark:text-orange-400 mb-2">
                Carbohydrates
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Carbohydrates are your body&apos;s primary energy source,
                providing 4 calories per gram. They include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Simple carbs:</strong> Sugars found in fruits, milk,
                  and processed foods
                </li>
                <li>
                  <strong>Complex carbs:</strong> Starches and fiber found in
                  whole grains, legumes, and vegetables
                </li>
              </ul>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-orange-600 dark:text-orange-400 mb-2">
                Proteins
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Proteins are essential for building and repairing tissues,
                providing 4 calories per gram. Good sources include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>Meat, poultry, and fish</li>
                <li>Eggs and dairy products</li>
                <li>Legumes, nuts, and seeds</li>
                <li>Soy products like tofu and tempeh</li>
              </ul>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-orange-600 dark:text-orange-400 mb-2">
                Fats
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Fats are the most energy-dense macronutrient, providing 9
                calories per gram. They help with vitamin absorption and hormone
                production. Types include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Unsaturated fats:</strong> Found in olive oil,
                  avocados, nuts (generally healthier)
                </li>
                <li>
                  <strong>Saturated fats:</strong> Found in animal products and
                  tropical oils (consume in moderation)
                </li>
                <li>
                  <strong>Trans fats:</strong> Found in some processed foods
                  (best to avoid)
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Reading Food Labels
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Understanding food labels is crucial for making informed dietary
            choices. Here&apos;s what to look for:
          </p>

          <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg space-y-3">
            <div>
              <h3 className="font-bold text-orange-600 dark:text-orange-400">
                Serving Size
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                All nutritional information is based on one serving. Note how
                many servings are in the package.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-orange-600 dark:text-orange-400">
                Calories
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Shows the energy content per serving. Remember that 2,000
                calories is a general reference point, but individual needs
                vary.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-orange-600 dark:text-orange-400">
                Nutrients
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Check the amounts of fats, carbohydrates (including sugars and
                fiber), and protein.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-orange-600 dark:text-orange-400">
                % Daily Value
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Shows how much a nutrient contributes to a 2,000-calorie daily
                diet. Aim for higher percentages of fiber, vitamins, and
                minerals, and lower percentages of saturated fat, sodium, and
                added sugars.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Calorie Density: Why Some Foods Have More Calories
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Calorie density refers to the number of calories in a given weight
            or volume of food. Understanding this concept can help you make
            better food choices:
          </p>

          <div className="space-y-4">
            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-orange-600 dark:text-orange-400 mb-2">
                High-Calorie Dense Foods
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Foods high in fat and/or sugar and low in water content
                typically have high calorie density:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>Nuts and seeds (healthy but calorie-dense)</li>
                <li>Oils and butter</li>
                <li>Fried foods</li>
                <li>Pastries and desserts</li>
                <li>Processed snack foods</li>
              </ul>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-orange-600 dark:text-orange-400 mb-2">
                Low-Calorie Dense Foods
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Foods high in water and fiber content typically have low calorie
                density:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>Fruits and vegetables</li>
                <li>Broth-based soups</li>
                <li>Leafy greens</li>
                <li>Non-starchy vegetables</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Balancing Your Diet
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A balanced diet includes a variety of foods from all food groups in
            appropriate proportions. General recommendations include:
          </p>

          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
            <li>Make half your plate fruits and vegetables</li>
            <li>Include whole grains for at least half of your grain intake</li>
            <li>Vary your protein sources</li>
            <li>Choose low-fat or fat-free dairy products</li>
            <li>Limit added sugars, sodium, and saturated fats</li>
            <li>Stay hydrated by drinking plenty of water</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300">
            Remember that individual nutritional needs vary based on age, sex,
            activity level, and overall health. Consult with a healthcare
            provider or registered dietitian for personalized advice.
          </p>
        </section>

        <div className="text-sm text-gray-600 dark:text-gray-400 italic mt-6">
          <p>
            Note: The information provided is for educational purposes only and
            is not intended as medical or nutritional advice. Consult with a
            healthcare professional for personalized dietary recommendations.
          </p>
        </div>
      </div>
    </FooterPagesLayout>
  )
}
