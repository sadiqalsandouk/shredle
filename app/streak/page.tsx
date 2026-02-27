import { getFoodData } from "../utils/getFoodData"
import FAQ from "../components/FAQ"
import StreakGameWrapper from "../components/StreakGameWrapper"

export default async function StreakPage() {
  const res = await getFoodData()

  return (
    <div className="flex flex-col items-center">
      <StreakGameWrapper foodData={res.foodData} />
      <FAQ />
    </div>
  )
}
