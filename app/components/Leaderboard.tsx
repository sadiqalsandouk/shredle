"use client"
import { useQuery } from "@tanstack/react-query"
import { fetchLeaderboard } from "../utils/api"
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface LeaderboardEntry {
  id: number
  player_name: string
  score: number
  date: string
}

interface LeaderboardProps {
  initialPage?: number
}

export default function Leaderboard({ initialPage = 1 }: LeaderboardProps) {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const itemsPerPage = 10 // Fixed at 10 entries per page

  const { data, isLoading, isError } = useQuery({
    queryKey: ["leaderboard", itemsPerPage, currentPage],
    queryFn: async () => {
      // For now, we're still using the existing API which doesn't support real pagination
      // So we'll just get enough data for a few pages
      const result = await fetchLeaderboard(itemsPerPage * 3) // Get 3 pages worth of data

      // Return only the current page items
      return {
        ...result,
        data: result?.data?.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        ),
        totalEntries: result?.data?.length || 0,
      }
    },
    retry: 1,
    refetchOnWindowFocus: false,
  })

  const entries: LeaderboardEntry[] = data?.data || []
  const totalEntries = data?.totalEntries || 0
  const totalPages = Math.ceil(totalEntries / itemsPerPage)

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-10">
        <div className="animate-spin text-3xl">🍔</div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="text-center p-6">
        <div className="text-red-600 dark:text-red-400 mb-4">
          Unable to load leaderboard right now.
        </div>
        <div className="text-gray-600 dark:text-gray-400 text-sm">
          The leaderboard feature is still being set up. Check back soon!
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700">
        <h2 className="text-xl font-bold text-white text-center">
          Top Streaks Leaderboard
        </h2>
      </div>

      {entries.length === 0 ? (
        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
          No scores yet. Be the first to submit!
        </div>
      ) : (
        <>
          {/* Mobile View */}
          <div className="md:hidden divide-y divide-gray-100 dark:divide-gray-700">
            {entries.map((entry, index) => (
              <motion.div
                key={entry.id || index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center p-4 ${
                  (currentPage - 1) * itemsPerPage + index < 3
                    ? "bg-orange-50 dark:bg-orange-900/20"
                    : "dark:bg-gray-800"
                }`}
              >
                <div className="w-8 font-bold text-lg text-orange-600 dark:text-orange-400">
                  {(currentPage - 1) * itemsPerPage + index + 1}.
                </div>
                <div className="flex-1">
                  <p className="font-medium dark:text-gray-200">
                    {entry.player_name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(entry.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-2xl font-bold flex items-center gap-1 text-orange-600 dark:text-orange-400">
                  {entry.score}
                  <span className="text-lg text-orange-500 dark:text-orange-400">
                    🔥
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            <table className="w-full table-auto">
              <thead className="bg-orange-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-orange-800 dark:text-orange-300 w-16">
                    Rank
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-orange-800 dark:text-orange-300">
                    Player
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-orange-800 dark:text-orange-300">
                    Date
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-orange-800 dark:text-orange-300 w-24">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {entries.map((entry, index) => (
                  <motion.tr
                    key={entry.id || index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={
                      (currentPage - 1) * itemsPerPage + index < 3
                        ? "bg-orange-50/50 dark:bg-orange-900/10"
                        : "hover:bg-gray-50 dark:hover:bg-gray-750"
                    }
                  >
                    <td className="px-4 py-3 text-orange-600 dark:text-orange-400 font-bold">
                      {(currentPage - 1) * itemsPerPage + index + 1}.
                    </td>
                    <td className="px-4 py-3 font-medium dark:text-gray-200">
                      {entry.player_name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                      {new Date(entry.date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="text-xl font-bold text-orange-600 dark:text-orange-400 flex items-center justify-end gap-1">
                        {entry.score}
                        <span className="text-base text-orange-500 dark:text-orange-400">
                          🔥
                        </span>
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 flex justify-between items-center border-t border-gray-100 dark:border-gray-700">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-1 px-3 py-1 rounded text-sm ${
                currentPage === 1
                  ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                  : "text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-gray-700"
              }`}
            >
              <ChevronLeft size={16} />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              Page {currentPage} of {Math.max(1, totalPages)}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}
              className={`flex items-center gap-1 px-3 py-1 rounded text-sm ${
                currentPage >= totalPages
                  ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                  : "text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-gray-700"
              }`}
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
