import { cookies } from "next/headers"

export function setLastPlayedCookie(now: Date) {
  const nowUTC = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  )
  cookies().set({ name: "lastPlayed", value: nowUTC.toISOString() })
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
