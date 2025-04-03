import dynamic from "next/dynamic"
import { getFoodData } from "../utils/getFoodData"

const StreakGameClient = dynamic(
  () => import("../components/StreakGameClient"),
  { ssr: false }
)

export default async function StreakPage() {
  const res = await getFoodData()

  return (
    <div className="flex flex-col items-center">
      <StreakGameClient foodData={res.foodData} />
    </div>
  )
}
