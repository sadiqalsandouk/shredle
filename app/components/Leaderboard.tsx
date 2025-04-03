"use client"
import { useQuery } from "@tanstack/react-query"
import { fetchLeaderboard } from "../utils/api"
import { useState } from "react"
import { motion } from "framer-motion"

interface LeaderboardEntry {
  id: number
  player_name: string
  score: number
  date: string
}

interface LeaderboardProps {
  limit?: number
}

export default function Leaderboard({ limit = 10 }: LeaderboardProps) {
  const [showMore, setShowMore] = useState(limit)

  const { data, isLoading, isError } = useQuery({
    queryKey: ["leaderboard", showMore],
    queryFn: () => fetchLeaderboard(showMore),
    retry: 1,
    refetchOnWindowFocus: false,
  })

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
        <div className="text-red-600 mb-4">
          Unable to load leaderboard right now.
        </div>
        <div className="text-gray-600 text-sm">
          The leaderboard feature is still being set up. Check back soon!
        </div>
      </div>
    )
  }

  const entries: LeaderboardEntry[] = data?.data || []

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <h2 className="text-xl font-bold text-white text-center">
          Top Streaks Leaderboard
        </h2>
      </div>

      {entries.length === 0 ? (
        <div className="p-8 text-center text-gray-500">
          No scores yet. Be the first to submit!
        </div>
      ) : (
        <div className="divide-y divide-gray-100">
          {entries.map((entry, index) => (
            <motion.div
              key={entry.id || index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`flex items-center p-4 ${
                index < 3 ? "bg-orange-50" : ""
              }`}
            >
              <div className="w-8 font-bold text-lg text-orange-600">
                {index + 1}.
              </div>
              <div className="flex-1">
                <p className="font-medium">{entry.player_name}</p>
                <p className="text-xs text-gray-500">
                  {new Date(entry.date).toLocaleDateString()}
                </p>
              </div>
              <div className="text-2xl font-bold flex items-center gap-1">
                {entry.score}
                <span className="text-lg text-orange-500">🔥</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {entries.length >= showMore && (
        <div className="p-4 text-center">
          <button
            onClick={() => setShowMore((prev) => prev + 10)}
            className="text-orange-500 hover:text-orange-700 text-sm font-medium"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  )
}
