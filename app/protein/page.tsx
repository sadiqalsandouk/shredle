import { getFoodDataWithProtein } from "../utils/getFoodDataWithProtein"
import FAQ from "../components/FAQ"
import ProteinGameWrapper from "../components/ProteinGameWrapper"

export default async function ProteinPage() {
  const res = await getFoodDataWithProtein()

  return (
    <div className="flex flex-col items-center">
      <ProteinGameWrapper foodData={res.foodData} />
      <FAQ />
    </div>
  )
}
