import { Metadata } from "next"
import { getFoodData } from "./utils/getFoodData"
import GameClient from "./components/GameClient"

export const metadata: Metadata = {
  title: "Shredle",
  description: "A Wordle Inspired Calories Higher/Lower Game",
}

export default async function Home() {
  const res = await getFoodData()
  return <GameClient foodData={res.foodData} />
}
