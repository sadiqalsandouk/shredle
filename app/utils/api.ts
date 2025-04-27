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

export const fetchLeaderboard = async (limit = 10, page = 1) => {
  try {
    const response = await fetch(`/api/leaderboard?limit=${limit}&page=${page}`)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("Leaderboard fetch error:", errorData)
      throw new Error(`Failed to fetch leaderboard: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error("Fetch leaderboard error:", error)
    throw error
  }
}

export const submitScore = async (playerName: string, score: number) => {
  try {
    const response = await fetch("/api/leaderboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playerName, score }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("Score submission error:", errorData)
      throw new Error(`Failed to submit score: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error("Submit score error:", error)
    throw error
  }
}
