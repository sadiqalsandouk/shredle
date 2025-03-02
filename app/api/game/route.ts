import { NextResponse } from "next/server"
import { getUTCMidnight } from "@/app/utils/getUTCMidnight"
import { getGameCookie, setGameCookie } from "@/app/utils/cookieUtils"

export async function GET(req: Request) {
  const mockDateHeader = req.headers.get("X-Mock-Date")
  const gameState = getGameCookie()
  const now = mockDateHeader ? new Date(mockDateHeader) : new Date()
  const utcMidnight = getUTCMidnight(now)
  const todayUTC = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  )

  if (gameState?.lastPlayed && new Date(gameState.lastPlayed) >= todayUTC) {
    return NextResponse.json(
      {
        message: "User cannot play",
        nextReset: utcMidnight.toISOString(),
        streak: gameState.streak || 0,
      },
      { status: 200 }
    )
  }

  return NextResponse.json({
    message: "User can play",
    nextReset: utcMidnight.toISOString(),
  })
}

export async function POST(req: Request) {
  const mockDateHeader = req.headers.get("X-Mock-Date")
  const now = mockDateHeader ? new Date(mockDateHeader) : new Date()
  const utcMidnight = getUTCMidnight(now)
  const { streak } = await req.json()

  setGameCookie(now, streak)

  return NextResponse.json({
    message: "Game completed",
    nextReset: utcMidnight.toISOString(),
  })
}
