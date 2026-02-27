"use client"
import dynamic from "next/dynamic"
import { FoodItem } from "../types/types"

const StreakGameClient = dynamic(
  () => import("./StreakGameClient"),
  { ssr: false }
)

export default function StreakGameWrapper({ foodData }: { foodData: FoodItem[] }) {
  return <StreakGameClient foodData={foodData} />
}
