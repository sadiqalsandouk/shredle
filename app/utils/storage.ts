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

const STORAGE_KEY = "shredle_game_state"

export function saveGameState(state: GameState) {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }
}

export function loadGameState(): GameState | null {
  if (typeof window === "undefined") {
    return null
  }
  const saved = localStorage.getItem(STORAGE_KEY)
  if (!saved) return null
  return JSON.parse(saved)
}
