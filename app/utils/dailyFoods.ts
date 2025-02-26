import { FoodItem } from "../types/types"
import { getDateSeed, seededShuffle } from "./fisher-yates"

export function getDailyFoods(foodItems: FoodItem[]): FoodItem[] {
  const shuffled = seededShuffle(foodItems, getDateSeed())
  return shuffled.slice(0, 6)
}
