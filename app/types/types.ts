export interface FoodItem {
  id: number
  name: string
  calories: number
  image: string
}

export interface GameResult {
  name1: string
  calories1: number
  name2: string
  calories2: number
  wasCorrect: boolean
}

export interface GameClientProps {
  foodData: FoodItem[]
}
export interface GameStatus {
  message: string
  nextReset: string
  streak?: number
  gameHistory?: GameResult[]
}

export interface GameState {
  currentIndex: number
  streak: number
  gameOver: boolean
  lives: number
  lastPlayedDate: string
  gameHistory: GameResult[]
}

export interface IFoodCardProps {
  food: {
    id: string
    name: string
    calories: number
    protein: number
    image: string
  }
  onFoodDeleted?: () => void
}
