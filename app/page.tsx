import { Metadata } from "next"
import { getFoodData } from "./utils/getFoodData"
import GameClient from "./components/GameClient"
import FAQ from "./components/FAQ"

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
        <FAQ />
      </div>
    </>
  )
}
