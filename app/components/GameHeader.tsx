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
  const isProteinMode = pathname === "/protein"
  const isLeaderboard = pathname === "/leaderboard"
  const isResources = pathname === "/resources" || pathname?.startsWith("/nutrition-guide") || pathname?.startsWith("/calorie-guide") || pathname?.startsWith("/healthy-eating")
  const isDailyMode = pathname === "/" || (!isStreakMode && !isProteinMode && !isLeaderboard && !isResources)
  const [showNew, setShowNew] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const hasSeenProtein = localStorage.getItem("hasSeenProteinMode")
    if (!hasSeenProtein) {
      setShowNew(true)
    }

    if (isProteinMode) {
      localStorage.setItem("hasSeenProteinMode", "true")
      setShowNew(false)
    }
  }, [isProteinMode])

  return (
    <header className="bg-orange-50/95 dark:bg-gray-950/95 backdrop-blur-sm relative z-50">
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
                  isDailyMode
                    ? "bg-orange-100 text-orange-800 font-semibold dark:bg-orange-900/30 dark:text-orange-300"
                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
            >
              Daily
            </Link>

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

            <div className="relative">
              <Link
                href="/protein"
                className={`px-3 py-1.5 rounded-lg transition-colors text-sm font-medium
                  ${
                    isProteinMode
                      ? "bg-orange-100 text-orange-800 font-semibold dark:bg-orange-900/30 dark:text-orange-300"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
              >
                Protein
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
              <Link
                href="/resources"
                className={`px-3 py-1.5 rounded-lg transition-colors text-sm font-medium ${
                  isResources
                    ? "bg-orange-100 text-orange-800 font-semibold dark:bg-orange-900/30 dark:text-orange-300"
                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                Resources
              </Link>
              <HowToPlay isMobile={false} />
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

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[90]"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <div
          className={`
            fixed top-[57px] left-0 right-0 bg-white/95 dark:bg-gray-900/95 z-[100]
            border-t border-orange-100 dark:border-gray-700 shadow-xl 
            sm:hidden overflow-hidden transition-all 
            duration-300 ease-in-out
            ${
              isMenuOpen
                ? "max-h-[220px] opacity-100 pt-2 pb-4"
                : "max-h-0 opacity-0 pointer-events-none"
            }
          `}
          style={{
            boxShadow: isMenuOpen
              ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              : "none",
          }}
        >
          <nav className="px-4 py-3 space-y-3">
            <Link
              href="/leaderboard"
              className="block px-5 py-3.5 rounded-xl transition-colors text-gray-700 
                hover:bg-orange-100/80 dark:text-gray-200 dark:hover:bg-orange-900/30
                font-medium relative z-[101] text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Leaderboard
            </Link>
            <Link
              href="/resources"
              className="block px-5 py-3.5 rounded-xl transition-colors text-gray-700 
                hover:bg-orange-100/80 dark:text-gray-200 dark:hover:bg-orange-900/30
                font-medium relative z-[101] text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <div
              className="relative z-[101]"
              onClick={() => setIsMenuOpen(false)}
            >
              <HowToPlay isMobile={true} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
