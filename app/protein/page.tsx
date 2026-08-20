import { Metadata } from "next"
import { getFoodDataWithProtein } from "../utils/getFoodDataWithProtein"
import FAQ from "../components/FAQ"
import ProteinGameWrapper from "../components/ProteinGameWrapper"

export const metadata: Metadata = {
  alternates: { canonical: "/protein" },
  title: "Protein Mode - Shredle",
  description:
    "Play Shredle's Protein Mode: compare two foods and guess which one has more protein in this daily nutrition guessing game.",
}

export default async function ProteinPage() {
  const res = await getFoodDataWithProtein()

  return (
    <div className="flex flex-col items-center">
      <ProteinGameWrapper foodData={res.foodData} />
      <FAQ />
    </div>
  )
}
