import { cookies } from "next/headers"
import { getUTCMidnight } from "./getUTCMidnight"

export function setGameCookie(now: Date, streak: number) {
  const nowUTC = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  )

  const expires = new Date(getUTCMidnight(now))
  expires.setUTCDate(expires.getUTCDate())

  cookies().set({
    name: "gameState",
    value: JSON.stringify({
      lastPlayed: nowUTC,
      streak: streak,
    }),
    expires: expires,
  })
}

export function getGameCookie(): { streak: number; lastPlayed: string } | null {
  const cookieStore = cookies()
  const gameCookie = cookieStore.get("gameState")

  if (!gameCookie) return null

  try {
    return JSON.parse(gameCookie.value)
  } catch {
    return null
  }
}
