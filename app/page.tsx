import { Metadata } from "next"
import { getFoodData } from "./utils/getFoodData"
import GameClient from "./components/GameClient"

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
    name: "Sadiq Digital",
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
      <GameClient foodData={res.foodData} />
    </>
  )
}
