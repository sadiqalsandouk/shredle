"use client"
import Link from "next/link"
import HowToPlay from "./HowToPlay"
import { PoppinsFontHeader } from "../utils/font"
import { PoppinsFont } from "../utils/font"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function GameHeader() {
  const pathname = usePathname()
  const isStreakMode = pathname === "/streak"
  const isLeaderboard = pathname === "/leaderboard"
  const [showNew, setShowNew] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Only run after mount to prevent hydration issues
  useEffect(() => {
    setMounted(true)
    const hasSeenStreak = localStorage.getItem("hasSeenStreakMode")
    if (!hasSeenStreak) {
      setShowNew(true)
    }

    // If they visit the streak page, mark it as seen
    if (isStreakMode) {
      localStorage.setItem("hasSeenStreakMode", "true")
      setShowNew(false)
    }
  }, [isStreakMode])

  return (
    <header className="border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-2xl sm:text-3xl 
              font-bold font-display"
          >
            <span className="text-2xl sm:text-3xl">🍔</span>
            <span
              className={`bg-gradient-to-r from-orange-600 to-orange-700 
              bg-clip-text text-transparent hover:text-orange-800 font-bold ${PoppinsFontHeader.className}`}
            >
              Shredle
            </span>
          </Link>

          <div className={`flex items-center gap-4 ${PoppinsFont.className}`}>
            <div className="flex items-center">
              <Link
                href="/"
                className={`px-3 py-1 rounded-lg transition-colors h-8 flex items-center
                  ${
                    !isStreakMode && !isLeaderboard
                      ? "bg-orange-100 text-orange-800 font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                Daily
              </Link>

              <div className="relative mx-2">
                <Link
                  href="/streak"
                  className={`px-3 py-1 rounded-lg transition-colors h-8 flex items-center
                    ${
                      isStreakMode
                        ? "bg-orange-100 text-orange-800 font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  Streak
                </Link>

                {mounted && showNew && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm animate-pulse">
                      NEW
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/leaderboard"
                className={`px-3 py-1 rounded-lg transition-colors h-8 flex items-center
                  ${
                    isLeaderboard
                      ? "bg-orange-100 text-orange-800 font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                Leaderboard
              </Link>
            </div>

            <div className="ml-2">
              <HowToPlay />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
