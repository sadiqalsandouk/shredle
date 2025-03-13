import { GameResult, GameStatus } from "../types/types"

export const fetchGameStatus = async (): Promise<GameStatus> => {
  const response = await fetch("/api/game", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })

  if (!response.ok) {
    if (response.status === 403) {
      const errorData = await response.json()
      throw new Error(errorData.message)
    }
    throw new Error("Network response was not ok")
  }

  const data = await response.json()
  return data
}

export const updateGameStatus = async (
  streak: number,
  gameHistory: GameResult[]
): Promise<GameStatus> => {
  const response = await fetch("/api/game", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ streak, gameHistory }),
    credentials: "include",
  })

  if (!response.ok) {
    throw new Error("Failed to update game status")
  }

  const data = await response.json()
  return data
}
