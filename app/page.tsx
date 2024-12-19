import { Metadata } from "next"
import Game from "./components/Game"
import { getFoodData } from "./utils/getFoodData"

export const metadata: Metadata = {
  title: "Shredle",
  description: "A Wordle Inspired Calories Game",
}

export default async function Home() {
  const foodData = await getFoodData()
  return <Game initialFoodData={foodData.foodData} />
}
