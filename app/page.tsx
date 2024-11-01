import Game from "./components/Game"
import { getFoodData } from "./utils/getFoodData"

export default async function Home() {
  const foodData = await getFoodData()
  return <Game initialFoodData={foodData.foodData} />
}
