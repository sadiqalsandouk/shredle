export interface FoodItem {
  name: string
  calories: number
}

export interface GameClientProps {
  foodItems: FoodItem[]
}
export interface GameStatus {
  message: string
  nextReset: string
}
