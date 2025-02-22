export interface FoodItem {
  id: number
  name: string
  calories: number
  protein_g: number
  category: string
}

export interface GameClientProps {
  foodData: FoodItem[]
}
export interface GameStatus {
  message: string
  nextReset: string
}
