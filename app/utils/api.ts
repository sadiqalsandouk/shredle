import { GameStatus } from "../types/types"

export const fetchGameStatus = async (): Promise<GameStatus> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
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
