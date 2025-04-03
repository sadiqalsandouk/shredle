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
  mode: "daily" | "streak" = "daily"
) {
  if (typeof window === "undefined") return

  try {
    const key = mode === "daily" ? "calorieGameState" : "calorieGameStreakState"
    localStorage.setItem(key, JSON.stringify(state))
  } catch (e) {
    console.error("Failed to save game state", e)
  }
}

export function loadGameState(
  mode: "daily" | "streak" = "daily"
): GameState | null {
  if (typeof window === "undefined") return null
  try {
    const key = mode === "daily" ? "calorieGameState" : "calorieGameStreakState"
    const savedState = localStorage.getItem(key)
    return savedState ? JSON.parse(savedState) : null
  } catch (e) {
    console.error("Failed to load game state", e)
    return null
  }
}
