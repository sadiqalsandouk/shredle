import { NextResponse } from "next/server"
import { getUTCMidnight } from "@/app/utils/getUTCMidnight"
import {
  getLastPlayedCookie,
  setLastPlayedCookie,
} from "@/app/utils/cookieUtils"

export async function GET(req: Request) {
  const mockDateHeader = req.headers.get("X-Mock-Date")
  const lastPlayed = getLastPlayedCookie()
  const now = mockDateHeader ? new Date(mockDateHeader) : new Date()
  const utcMidnight = getUTCMidnight(now)
  const todayUTC = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  )

  if (lastPlayed && new Date(lastPlayed) >= todayUTC) {
    return NextResponse.json(
      {
        message: "Great job on today's game! Check out your progress",
        nextReset: utcMidnight.toISOString(),
      },
      { status: 403 }
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

  setLastPlayedCookie(now)

  return NextResponse.json({
    message: "Game completed",
    nextReset: utcMidnight.toISOString(),
  })
}
