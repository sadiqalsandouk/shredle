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

  // If user has already played today, return their existing game history
  if (gameState?.lastPlayed && new Date(gameState.lastPlayed) >= todayUTC) {
    return NextResponse.json(
      {
        message: "User cannot play",
        nextReset: utcMidnight.toISOString(),
        streak: gameState.streak || 0,
        gameHistory: gameState.gameHistory || [], // Preserve existing history
      },
      { status: 200 }
    )
  }

  // If this is a new game, get the existing game history from cookie
  const existingHistory = gameState?.gameHistory || []

  return NextResponse.json({
    message: "User can play",
    nextReset: utcMidnight.toISOString(),
    gameHistory: existingHistory, // Include existing history in response
  })
}

export async function POST(req: Request) {
  const mockDateHeader = req.headers.get("X-Mock-Date")
  const now = mockDateHeader ? new Date(mockDateHeader) : new Date()
  const utcMidnight = getUTCMidnight(now)
  const { streak, gameHistory } = await req.json()

  // Get existing game state to preserve history
  const existingState = getGameCookie()
  const mergedHistory =
    gameHistory.length > 0 ? gameHistory : existingState?.gameHistory || []

  setGameCookie(now, streak, mergedHistory)

  return NextResponse.json({
    message: "Game completed",
    nextReset: utcMidnight.toISOString(),
    streak,
    gameHistory: mergedHistory,
  })
}
