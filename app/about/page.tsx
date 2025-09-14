import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Shredle - Learn About Calories and Nutrition",
  description:
    "Learn about calories, nutrition facts, and how Shredle helps you understand food energy content in a fun, educational way.",
  keywords: [
    "food calories",
    "nutrition education",
    "calorie counting",
    "food energy",
    "nutrition facts",
    "healthy eating",
    "dietary education",
  ],
}

export default function About() {
  return (
    <FooterPagesLayout title="About Shredle">
      <div className="space-y-6">
        <div className="text-sm text-gray-600 dark:text-gray-400">By <span className="font-medium">Sadiq</span> • Published 2024-05-01 • Updated 2025-09-14</div>
        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            What is Shredle?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Shredle is an educational game designed to help you understand food
            calorie content through fun, daily challenges. Our mission is to
            make nutrition education engaging and accessible to everyone.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Each day, you&apos;ll compare different foods and guess which has
            more calories. Through regular play, you&apos;ll develop an
            intuitive understanding of the energy content in common foods,
            helping you make more informed dietary choices.
          </p>
        </section>

        <section className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">Who Runs Shredle</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Shredle is created and maintained by <strong>Sadiq</strong>, a developer passionate about building approachable learning tools. The project is based in the United Kingdom.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Contact: <a href="mailto:sadiqdotdigital@gmail.com" className="underline text-orange-700 dark:text-orange-400">sadiqdotdigital@gmail.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Understanding Calories
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A calorie is a unit of energy. In nutrition, we typically use
            kilocalories (kcal), though they&apos;re commonly referred to simply
            as &quot;calories.&quot; One kilocalorie represents the amount of
            energy needed to raise the temperature of one kilogram of water by
            one degree Celsius.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The calorie content of food indicates how much energy your body can
            obtain from consuming it. Different nutrients provide different
            amounts of energy:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
            <li>Carbohydrates: 4 calories per gram</li>
            <li>Proteins: 4 calories per gram</li>
            <li>Fats: 9 calories per gram</li>
            <li>Alcohol: 7 calories per gram</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Understanding the calorie content of foods can help you make
            informed choices about your diet and maintain a healthy energy
            balance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Why Calories Matter
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Calories are essential for life—they fuel everything from basic
            bodily functions to physical activity. However, consuming more
            calories than your body needs leads to weight gain, while consuming
            fewer can lead to weight loss.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The average adult needs between 1,600 to 3,000 calories daily,
            depending on factors like age, sex, weight, height, and activity
            level. Understanding which foods are energy-dense helps you make
            informed choices about your diet.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Playing Shredle regularly can help you develop an intuitive sense of
            which foods contain more calories, making it easier to balance your
            energy intake with your needs.
          </p>
        </section>

        <section className="bg-orange-50 dark:bg-gray-800/50 p-5 rounded-xl">
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            Learn More About Nutrition
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Shredle is just the beginning of your nutrition education journey.
            To deepen your understanding, check out our{" "}
            <Link
              href="/nutrition-guide"
              className="text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300 underline"
            >
              Nutrition Guide
            </Link>{" "}
            with detailed information about various nutrients and food groups.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            For official nutrition recommendations and resources, visit the{" "}
            <a
              href="https://www.nutrition.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300 underline"
            >
              USDA&apos;s Nutrition website
            </a>{" "}
            or consult with a registered dietitian.
          </p>
        </section>
      </div>
    </FooterPagesLayout>
  )
}
