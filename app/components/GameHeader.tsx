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
  const [isDarkMode, setIsDarkMode] = useState(false)

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

    // Check for dark mode
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark')
      setIsDarkMode(isDark)
    }
    
    // Initial check
    checkDarkMode()
    
    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [isProteinMode])

  return (
    <header 
      className="backdrop-blur-sm relative z-50" 
      style={{ backgroundColor: isDarkMode ? '#0f172a' : '#fefaf7' }}
    >
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
              className="ml-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 sm:hidden text-gray-700 dark:text-gray-300 relative z-10 border border-gray-200 dark:border-gray-700"
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

        {/* Sidebar Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[9998] sm:hidden"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 9998,
            }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            fixed top-0 left-0 h-screen w-80 max-w-[85vw] z-[9999]
            shadow-2xl border-r border-gray-200 dark:border-gray-600
            sm:hidden transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
          style={{
            backgroundColor: isDarkMode ? '#1f2937' : 'white',
            height: '100vh',
            width: '320px',
            maxWidth: '85vw',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999,
          }}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍔</span>
              <span className="text-xl font-bold text-gray-800 dark:text-gray-200">
                Menu
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="p-4 space-y-2">
            <Link
              href="/leaderboard"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-base font-medium
                ${
                  isLeaderboard
                    ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-lg">🏆</span>
              Leaderboard
            </Link>
            
            <Link
              href="/resources"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-base font-medium
                ${
                  isResources
                    ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-lg">📚</span>
              Resources
            </Link>

            <div className="pt-2">
              <HowToPlay isMobile={true} />
            </div>
          </nav>

          {/* Sidebar Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
