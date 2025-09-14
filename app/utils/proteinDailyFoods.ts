import { FoodItem } from "../types/types"
import { getDateSeed, seededShuffle } from "./fisher-yates"

export function getProteinDailyFoods(foodItems: FoodItem[]): FoodItem[] {
  // Filter foods that have protein data
  const proteinFoods = foodItems.filter(food => food.protein != null && food.protein > 0)
  const shuffled = seededShuffle(proteinFoods, getDateSeed())
  return shuffled.slice(0, 6)
}
