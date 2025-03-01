import { Metadata } from "next"
import { getFoodData } from "./utils/getFoodData"
import GameServer from "./components/GameServer"

export const metadata: Metadata = {
  title: "Shredle",
  description: "A Wordle Inspired Calories Higher/Lower Game",
}

export default async function Home() {
  const res = await getFoodData()
  return <GameServer foodData={res.foodData} />
}
