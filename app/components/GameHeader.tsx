"use client"
import Link from "next/link"
import HowToPlay from "./HowToPlay"
import { PoppinsFontHeader } from "../utils/font"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import ThemeToggle from "./ThemeToggle"

export default function GameHeader() {
  const pathname = usePathname()
  const isStreakMode = pathname === "/streak"
  const isLeaderboard = pathname === "/leaderboard"
  const [showNew, setShowNew] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const hasSeenStreak = localStorage.getItem("hasSeenStreakMode")
    if (!hasSeenStreak) {
      setShowNew(true)
    }

    if (isStreakMode) {
      localStorage.setItem("hasSeenStreakMode", "true")
      setShowNew(false)
    }
  }, [isStreakMode])

  return (
    <header className="sticky top-0 bg-orange-50/95 dark:bg-gray-900/95 backdrop-blur-sm z-50">
      <div className="max-w-4xl mx-auto px-3 py-3">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-2xl font-bold"
          >
            <span className="text-2xl">🍔</span>
            <span
              className={`bg-gradient-to-r from-orange-600 to-orange-700 
              bg-clip-text text-transparent ${PoppinsFontHeader.className}`}
            >
              Shredle
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-lg transition-colors text-sm font-medium
                ${
                  !isStreakMode && !isLeaderboard
                    ? "bg-orange-100 text-orange-800 font-semibold dark:bg-orange-900/30 dark:text-orange-300"
                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
            >
              Daily
            </Link>

            <div className="relative">
              <Link
                href="/streak"
                className={`px-3 py-1.5 rounded-lg transition-colors text-sm font-medium
                  ${
                    isStreakMode
                      ? "bg-orange-100 text-orange-800 font-semibold dark:bg-orange-900/30 dark:text-orange-300"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
              >
                Streak
              </Link>
              {mounted && showNew && (
                <div className="absolute -top-2 -right-2 z-10">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm animate-pulse dark:from-red-600 dark:to-red-700">
                    NEW
                  </div>
                </div>
              )}
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <Link
                href="/leaderboard"
                className={`px-3 py-1.5 rounded-lg transition-colors text-sm font-medium
                  ${
                    isLeaderboard
                      ? "bg-orange-100 text-orange-800 font-semibold dark:bg-orange-900/30 dark:text-orange-300"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
              >
                Leaderboard
              </Link>
              <HowToPlay />
            </div>

            <div className="ml-2">
              <ThemeToggle />
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 sm:hidden"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 transition-transform duration-200 ease-in-out"
                style={{
                  transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`
            absolute left-0 right-0 bg-gradient-to-b from-orange-50/95 to-white 
            dark:from-gray-900/95 dark:to-gray-800/95 border-t border-orange-100/50 
            dark:border-gray-700/50 shadow-lg sm:hidden overflow-hidden transition-all 
            duration-300 ease-in-out backdrop-blur-sm
            ${isMenuOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <nav className="px-3 py-2 space-y-1">
            <Link
              href="/leaderboard"
              className="block px-4 py-3 rounded-xl transition-colors text-gray-700 
                hover:bg-orange-100/50 dark:text-gray-200 dark:hover:bg-orange-900/20
                font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Leaderboard
            </Link>
            <HowToPlay />
          </nav>
        </div>
      </div>
    </header>
  )
}
