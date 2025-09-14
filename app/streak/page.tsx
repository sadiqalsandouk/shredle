import dynamic from "next/dynamic"
import { getFoodData } from "../utils/getFoodData"
import FAQ from "../components/FAQ"
import AdBanner from "../components/AdBanner"

const StreakGameClient = dynamic(
  () => import("../components/StreakGameClient"),
  { ssr: false }
)

export default async function StreakPage() {
  const res = await getFoodData()

  return (
    <div className="flex flex-col items-center">
      <StreakGameClient foodData={res.foodData} />
      <div className="w-full my-6 flex justify-center">
        <AdBanner dataAdSlot="6595333514" dataAdFormat="auto" dataFullWidthResponsive={true} />
      </div>
      <FAQ />
    </div>
  )
}
