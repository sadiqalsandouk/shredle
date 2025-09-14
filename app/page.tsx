import { Metadata } from "next"
import { getFoodData } from "./utils/getFoodData"
import GameClient from "./components/GameClient"
import FAQ from "./components/FAQ"
import AdBanner from "./components/AdBanner"

export const metadata: Metadata = {
  title: "Shredle - Daily Food Calorie Guessing Game",
  description:
    "Challenge yourself with Shredle, a daily game where you guess which food has more calories. Learn about nutrition while having fun!",
}

// Add JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Shredle",
  description: "A daily game where players guess which food has more calories",
  url: "https://www.shredle.co.uk",
  applicationCategory: "GameApplication",
  genre: "Educational Game",
  browserRequirements: "Requires JavaScript",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "SadiqDotDigital",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "100",
  },
}

export default async function Home() {
  const res = await getFoodData()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col items-center w-full">
        <GameClient foodData={res.foodData} />
        <div className="w-full my-6 flex justify-center">
          <AdBanner dataAdSlot="6595333514" dataAdFormat="auto" dataFullWidthResponsive={true} />
        </div>
        <section className="w-full max-w-3xl text-gray-800 dark:text-gray-200 px-3">
          <h2 className="text-xl font-bold mb-2 text-orange-700 dark:text-orange-400">What is Shredle?</h2>
          <p className="mb-3">Shredle is a daily higher/lower game that helps you build calorie intuition by comparing common foods. It’s a fun way to learn how preparation, portion size, and ingredients change energy content.</p>
          <h3 className="font-semibold text-orange-700 dark:text-orange-400 mb-1">Why it helps</h3>
          <ul className="list-disc pl-5 mb-3">
            <li>Practice quick comparisons to learn calorie density</li>
            <li>Reinforce concepts like macronutrients and cooking effects</li>
            <li>Link out to deeper guides for structured learning</li>
          </ul>
          <h3 className="font-semibold text-orange-700 dark:text-orange-400 mb-1">Learn more</h3>
          <p>Explore our <a className="underline text-orange-700 dark:text-orange-400" href="/nutrition-guide">Nutrition Guide</a>, <a className="underline text-orange-700 dark:text-orange-400" href="/calorie-guide">Calorie Guide</a>, and <a className="underline text-orange-700 dark:text-orange-400" href="/healthy-eating">Healthy Eating</a> resources.</p>
        </section>
        <FAQ />
      </div>
    </>
  )
}
