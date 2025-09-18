import dynamic from "next/dynamic"
import { getFoodData } from "../utils/getFoodData"
import FAQ from "../components/FAQ"

const StreakGameClient = dynamic(
  () => import("../components/StreakGameClient"),
  { ssr: false }
)

export default async function StreakPage() {
  const res = await getFoodData()

  return (
    <div className="flex flex-col items-center">
      <StreakGameClient foodData={res.foodData} />
      <FAQ />
    </div>
  )
}
