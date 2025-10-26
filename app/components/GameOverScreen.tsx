import { motion } from "framer-motion"
import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useState, useEffect } from "react"
import { ScoreSubmitForm } from "./ScoreSubmitForm"
import { useQuery } from "@tanstack/react-query"
import { fetchLeaderboard } from "../utils/api"

interface GameResult {
  name1: string
  calories1: number
  protein1?: number
  name2: string
  calories2: number
  protein2?: number
  wasCorrect: boolean
}

interface LeaderboardEntry {
  id: number
  player_name: string
  score: number
  date: string
}

interface GameOverScreenProps {
  score: number
  total?: number
  message?: string
  gameHistory?: GameResult[]
  isStreak?: boolean
  isProteinMode?: boolean
  onReset?: () => void
}

export function GameOverScreen({
  score,
  total = 5,
  message,
  gameHistory = [],
  isStreak = false,
  isProteinMode = false,
  onReset,
}: GameOverScreenProps) {
  const [scoreSubmitted, setScoreSubmitted] = useState(false)
  const foodEmojis = ["🍎", "🥑", "🥕", "🥦", "🍌"]
  const date = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })

  // Fetch top 3 scores for streak/protein mode
  const gameMode = isProteinMode ? "protein" : "streak"
  const { data: leaderboardData, isLoading } = useQuery({
    queryKey: ["leaderboard", 3, gameMode],
    queryFn: () => fetchLeaderboard(3, 1, gameMode),
    enabled: isStreak,
    refetchOnWindowFocus: false,
  })

  // Check if score was already submitted
  useEffect(() => {
    if (isStreak) {
      // Get the current game session ID from the game state
      const sessionKey = isProteinMode ? "currentProteinGameSessionId" : "currentGameSessionId"
      const gameSessionId =
        localStorage.getItem(sessionKey) || `${gameMode}-${Date.now()}`

      const submittedScores = localStorage.getItem("submittedScores") || "{}"
      const parsedScores = JSON.parse(submittedScores)

      if (parsedScores[gameSessionId]) {
        setScoreSubmitted(true)
      }
    }
  }, [isStreak, score, isProteinMode, gameMode])

  // Mark score as submitted
  const handleScoreSubmitted = () => {
    if (isStreak) {
      const sessionKey = isProteinMode ? "currentProteinGameSessionId" : "currentGameSessionId"
      const gameSessionId =
        localStorage.getItem(sessionKey) || `${gameMode}-${Date.now()}`

      const submittedScores = localStorage.getItem("submittedScores") || "{}"
      const parsedScores = JSON.parse(submittedScores)

      parsedScores[gameSessionId] = true
      localStorage.setItem("submittedScores", JSON.stringify(parsedScores))
      setScoreSubmitted(true)
    }
  }

  const generateShareMessage = () => {
    if (isStreak) {
      return `Shredle Streak - ${date}\nI got ${score} correct in a row! 🔥\n\nPlay at https://www.playshredle.com`
    }

    // Generate emojis based on actual game results, not just score count
    const scoreEmojis = gameHistory.length > 0 
      ? gameHistory.map(result => result.wasCorrect ? "🟩" : "🟥").join("")
      : Array(total).fill("⬜").map((emoji, i) => (i < score ? "🟩" : emoji)).join("")

    return `Shredle - ${date}\n${score}/${total}\n${scoreEmojis}\n\nPlay at https://www.playshredle.com`
  }

  const handleShare = async () => {
    const shareMessage = generateShareMessage()
    
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile && navigator.share) {
      try {
        await navigator.share({
          title: `Shredle - ${date}`,
          text: shareMessage,
        })
        return
      } catch (err) {
        console.error("Native share failed:", err)
      }
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(shareMessage)
        toast("Results copied to clipboard!")
        return
      } catch (err) {
        console.error("Clipboard failed:", err)
      }
    }

    if (!isMobile && navigator.share) {
      try {
        await navigator.share({
          title: `Shredle - ${date}`,
          text: shareMessage,
        })
        return
      } catch (err) {
        console.error("Native share failed:", err)
      }
    }

    try {
      const textArea = document.createElement("textarea")
      textArea.value = shareMessage
      textArea.style.position = "fixed"
      textArea.style.left = "-999999px"
      textArea.style.top = "-999999px"
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      toast("Results copied to clipboard!")
    } catch (err) {
      console.error("All copy methods failed:", err)
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`
      window.open(whatsappUrl, "_blank")
    }
  }

  const fallbackToClipboard = async (message: string) => {
    try {
      await navigator.clipboard.writeText(message)
      toast("Results copied to clipboard!")
    } catch (err) {
      console.error("Failed to copy to clipboard:", err)
    }
  }

  // Filter to only show incorrect guesses in streak mode
  const filteredGameHistory = isStreak
    ? gameHistory.filter((result) => !result.wasCorrect)
    : gameHistory

  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.93 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-6 rounded-2xl shadow-xl max-w-md w-full mx-auto border border-gray-100 dark:border-gray-700"
    >
      <div className="text-center space-y-4">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
            Shredle
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {date}
          </p>
        </div>

        <div className="flex justify-center space-x-8">
          {isStreak ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-4xl"
            >
              🔥
            </motion.div>
          ) : (
            [...Array(total)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`text-2xl transition-all duration-300 ${
                  i < score
                    ? "transform scale-110 opacity-100"
                    : "opacity-30 grayscale"
                }`}
              >
                {foodEmojis[i]}
              </motion.div>
            ))
          )}
        </div>

        <div className="flex flex-col items-center">
          {isStreak ? (
            <div className="flex items-center">
              <div className="text-4xl font-black text-orange-600 dark:text-orange-500">
                {score}
              </div>
            </div>
          ) : (
            <div className="text-3xl font-black text-orange-600 dark:text-orange-500">
              {score}
              <span className="text-orange-300">/</span>
              <span className="dark:text-orange-300">{total}</span>
            </div>
          )}
          <div className="text-xs font-medium text-orange-600/80 dark:text-orange-400/80">
            {isStreak ? "Final Streak" : "Final Score"}
          </div>
        </div>
        {filteredGameHistory.length > 0 && (
          <div className="space-y-2 mt-4">
            {filteredGameHistory.map((result, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`p-2 rounded-lg border text-sm ${
                  result.wasCorrect
                    ? "bg-green-50/50 border-green-200 dark:bg-green-900/30 dark:border-green-800"
                    : "bg-red-50/50 border-red-200 dark:bg-red-900/30 dark:border-red-800"
                }`}
              >
                <div className="grid grid-cols-[1fr,auto,1fr] gap-x-2 items-start">
                  <div className="text-left space-y-0.5 min-w-[120px] sm:min-w-[150px]">
                    <p className="text-gray-900 dark:text-gray-100 text-xs sm:text-sm leading-tight break-words pr-1 min-h-[2.5em]">
                      {result.name1}
                    </p>
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                      {isProteinMode 
                        ? `${result.protein1?.toLocaleString() || 0}g protein`
                        : `${result.calories1.toLocaleString()} cal`
                      }
                    </p>
                  </div>
                  <div className="text-xs font-medium text-gray-400 dark:text-gray-500 pt-1 px-2">
                    vs
                  </div>
                  <div className="text-right space-y-0.5 min-w-[120px] sm:min-w-[150px]">
                    <p className="text-gray-900 dark:text-gray-100 text-xs sm:text-sm leading-tight break-words pl-1 min-h-[2.5em]">
                      {result.name2}
                    </p>
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                      {isProteinMode 
                        ? `${result.protein2?.toLocaleString() || 0}g protein`
                        : `${result.calories2.toLocaleString()} cal`
                      }
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {message && (
          <p className="text-gray-600 dark:text-gray-300 font-medium text-xs px-4 py-2 bg-gray-50/50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
            {message}
          </p>
        )}

        {isStreak && (
          <div className="mt-6 space-y-4">
            {!scoreSubmitted && score > 0 ? (
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Submit Your Score
                </h3>
                <ScoreSubmitForm
                  score={score}
                  gameMode={gameMode}
                  onComplete={handleScoreSubmitted}
                />
              </div>
            ) : null}

            {/* Top 3 Leaderboard Section */}
            {!isLoading &&
              leaderboardData?.data &&
              leaderboardData.data.length > 0 && (
                <div className="mt-4 pt-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Top Streaks
                  </h3>
                  <div className="space-y-2">
                    {leaderboardData.data
                      .slice(0, 3)
                      .map((entry: LeaderboardEntry, index: number) => (
                        <div
                          key={entry.id || index}
                          className={`flex items-center p-2 rounded-md ${
                            index === 0
                              ? "dark:bg-gray-800 dark:border-gray-700 bg-yellow-50 border border-yellow-100"
                              : index === 1
                              ? "dark:bg-gray-800 dark:border-gray-700 bg-gray-50 border border-gray-100"
                              : index === 2
                              ? "dark:bg-gray-800 dark:border-gray-700 bg-orange-50 border border-orange-100"
                              : ""
                          }`}
                        >
                          <div className="w-8 font-bold text-lg">
                            {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                          </div>
                          <div className="flex-1 text-left">
                            <p className="font-medium text-sm">
                              {entry.player_name}
                            </p>
                          </div>
                          <div className="text-xl font-bold flex items-center gap-1 text-orange-600">
                            {entry.score}
                            <span className="text-base">🔥</span>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    <a
                      href="/leaderboard"
                      className="text-orange-600 hover:underline"
                    >
                      View full leaderboard →
                    </a>
                  </div>
                </div>
              )}

            {onReset && (
              <button
                onClick={onReset}
                className="mt-4 w-full py-3 bg-orange-600 hover:bg-orange-700 
                           text-white rounded-lg font-semibold transition-colors
                           shadow-md"
              >
                Play Again
              </button>
            )}
          </div>
        )}

        {!isStreak && (
          <Button
            onClick={handleShare}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            Share Score
          </Button>
        )}

        <div className="pt-2 text-xs font-medium text-gray-400 flex items-center justify-center gap-1">
          Play at
          <span className="text-orange-500">https://www.playshredle.com</span>
        </div>
      </div>
    </motion.div>
  )
}
