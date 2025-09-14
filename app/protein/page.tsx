import dynamic from "next/dynamic"
import { getFoodDataWithProtein } from "../utils/getFoodDataWithProtein"
import FAQ from "../components/FAQ"
import AdBanner from "../components/AdBanner"

const ProteinGameClient = dynamic(
  () => import("../components/ProteinGameClient"),
  { ssr: false }
)

export default async function ProteinPage() {
  const res = await getFoodDataWithProtein()

  return (
    <div className="flex flex-col items-center">
      <ProteinGameClient foodData={res.foodData} />
      <div className="w-full my-6 flex justify-center">
        <AdBanner dataAdSlot="6595333514" dataAdFormat="auto" dataFullWidthResponsive={true} />
      </div>
      <FAQ />
    </div>
  )
}
