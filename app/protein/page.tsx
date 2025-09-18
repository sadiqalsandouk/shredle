import dynamic from "next/dynamic"
import { getFoodDataWithProtein } from "../utils/getFoodDataWithProtein"
import FAQ from "../components/FAQ"

const ProteinGameClient = dynamic(
  () => import("../components/ProteinGameClient"),
  { ssr: false }
)

export default async function ProteinPage() {
  const res = await getFoodDataWithProtein()

  return (
    <div className="flex flex-col items-center">
      <ProteinGameClient foodData={res.foodData} />
      <FAQ />
    </div>
  )
}
