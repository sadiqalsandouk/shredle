export interface FoodItem {
  id: number
  name: string
  calories: number
  image: string
}

export interface GameClientProps {
  foodData: FoodItem[]
}
export interface GameStatus {
  message: string
  nextReset: string
}
