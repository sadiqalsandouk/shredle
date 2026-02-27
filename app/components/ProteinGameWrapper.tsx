"use client"
import dynamic from "next/dynamic"
import { FoodItem } from "../types/types"

const ProteinGameClient = dynamic(
  () => import("./ProteinGameClient"),
  { ssr: false }
)

export default function ProteinGameWrapper({ foodData }: { foodData: FoodItem[] }) {
  return <ProteinGameClient foodData={foodData} />
}
