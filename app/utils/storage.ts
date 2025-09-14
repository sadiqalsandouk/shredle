export interface GameState {
  currentIndex: number
  streak: number
  gameOver: boolean
  lives: number
  lastPlayedDate: string
  gameHistory: Array<{
    name1: string
    calories1: number
    name2: string
    calories2: number
    wasCorrect: boolean
  }>
}

export function saveGameState(
  state: GameState,
  mode: "daily" | "streak" | "protein" = "daily"
) {
  if (typeof window === "undefined") return

  try {
    let key: string
    switch (mode) {
      case "daily":
        key = "calorieGameState"
        break
      case "streak":
        key = "calorieGameStreakState"
        break
      case "protein":
        key = "proteinGameStreakState"
        break
      default:
        key = "calorieGameState"
    }
    localStorage.setItem(key, JSON.stringify(state))
  } catch (e) {
    console.error("Failed to save game state", e)
  }
}

export function loadGameState(
  mode: "daily" | "streak" | "protein" = "daily"
): GameState | null {
  if (typeof window === "undefined") return null
  try {
    let key: string
    switch (mode) {
      case "daily":
        key = "calorieGameState"
        break
      case "streak":
        key = "calorieGameStreakState"
        break
      case "protein":
        key = "proteinGameStreakState"
        break
      default:
        key = "calorieGameState"
    }
    const savedState = localStorage.getItem(key)
    return savedState ? JSON.parse(savedState) : null
  } catch (e) {
    console.error("Failed to load game state", e)
    return null
  }
}
