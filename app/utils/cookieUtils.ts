import { cookies } from "next/headers"
import { getUTCMidnight } from "./getUTCMidnight"

export function setLastPlayedCookie(now: Date) {
  const nowUTC = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  )

  const expires = new Date(getUTCMidnight(now))
  expires.setUTCDate(expires.getUTCDate())

  cookies().set({
    name: "lastPlayed",
    value: nowUTC.toISOString(),
    expires: expires,
  })
}

export function getLastPlayedCookie(): Date | null {
  const cookieStore = cookies()
  const lastPlayedCookie = cookieStore.get("lastPlayed")

  if (!lastPlayedCookie) return null

  try {
    return new Date(lastPlayedCookie.value)
  } catch {
    return null
  }
}
