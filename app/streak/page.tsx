import { Metadata } from "next"
import { getFoodData } from "../utils/getFoodData"
import FAQ from "../components/FAQ"
import StreakGameWrapper from "../components/StreakGameWrapper"

export const metadata: Metadata = {
  alternates: { canonical: "/streak" },
  title: "Streak Mode - Shredle",
  description:
    "Play Shredle's endless Streak Mode: keep guessing which food has more calories and see how long you can keep your streak alive.",
}

export default async function StreakPage() {
  const res = await getFoodData()

  return (
    <div className="flex flex-col items-center">
      <StreakGameWrapper foodData={res.foodData} />
      <FAQ />
    </div>
  )
}
