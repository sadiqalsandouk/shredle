import { cookies } from "next/headers"
import { getUTCMidnight } from "./getUTCMidnight"
import { GameResult } from "../types/types"

export async function setGameCookie(
  now: Date,
  streak: number,
  gameHistory: GameResult[]
) {
  const nowUTC = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  )

  const expires = new Date(getUTCMidnight(now))
  expires.setUTCDate(expires.getUTCDate())

  const cookieStore = await cookies()
  cookieStore.set({
    name: "gameState",
    value: JSON.stringify({
      lastPlayed: nowUTC,
      streak,
      gameHistory,
    }),
    expires: expires,
  })
}

export async function getGameCookie(): Promise<{
  streak: number
  lastPlayed: string
  gameHistory: GameResult[]
} | null> {
  const cookieStore = await cookies()
  const gameCookie = cookieStore.get("gameState")

  if (!gameCookie) return null

  try {
    return JSON.parse(gameCookie.value)
  } catch {
    return null
  }
}
