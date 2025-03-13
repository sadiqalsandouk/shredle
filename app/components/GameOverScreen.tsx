import { motion } from "framer-motion"
import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface GameResult {
  name1: string
  calories1: number
  name2: string
  calories2: number
  wasCorrect: boolean
}

interface GameOverScreenProps {
  score: number
  total?: number
  message?: string
  gameHistory?: GameResult[]
}

export function GameOverScreen({
  score,
  total = 5,
  message,
  gameHistory = [],
}: GameOverScreenProps) {
  const foodEmojis = ["🍎", "🥑", "🥕", "🥦", "🍌"]
  const date = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })

  const generateShareMessage = () => {
    const scoreEmojis = Array(total)
      .fill("⬜")
      .map((emoji, i) => (i < score ? "🟩" : emoji))
      .join("")

    return `Shredle ${date}\n${score}/${total}\n${scoreEmojis}\nPlay at shredle.co.uk`
  }

  const handleShare = async () => {
    const shareMessage = generateShareMessage()
    const shareUrl = "https://shredle.co.uk"

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Shredle - ${date}`,
          text: shareMessage,
          url: shareUrl,
        })
      } catch (err) {
        console.error("Error sharing:", err)
        await fallbackToClipboard(shareMessage, shareUrl)
      }
    } else {
      if (navigator.clipboard) {
        await fallbackToClipboard(shareMessage, shareUrl)
      } else {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
          shareMessage + "\n" + shareUrl
        )}`
        window.open(whatsappUrl, "_blank")
      }
    }
  }

  const fallbackToClipboard = async (message: string, url: string) => {
    try {
      await navigator.clipboard.writeText(`${message}\n${url}`)
      toast("Results copied to clipboard!")
    } catch (err) {
      console.error("Failed to copy to clipboard:", err)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.93 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-b from-white to-gray-50 p-4 sm:p-6 rounded-2xl shadow-xl max-w-md w-full mx-auto border border-gray-100"
    >
      <div className="text-center space-y-4">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Shredle
          </h1>
          <p className="text-sm text-gray-600 font-medium">{date}</p>
        </div>

        <div className="flex justify-center space-x-8">
          {[...Array(total)].map((_, i) => (
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
          ))}
        </div>

        <div className="flex flex-col items-center">
          <div className="text-3xl font-black text-orange-600">
            {score}
            <span className="text-orange-300">/{total}</span>
          </div>
          <div className="text-xs font-medium text-orange-600/80">
            Final Score
          </div>
        </div>
        {gameHistory.length > 0 && (
          <div className="space-y-2 mt-4">
            {gameHistory.map((result, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`p-2 rounded-lg border text-sm ${
                  result.wasCorrect
                    ? "bg-green-50/50 border-green-200"
                    : "bg-red-50/50 border-red-200"
                }`}
              >
                <div className="grid grid-cols-[1fr,auto,1fr] gap-x-2 items-start">
                  <div className="text-left space-y-0.5 min-w-[120px] sm:min-w-[150px]">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight break-words pr-1 min-h-[2.5em]">
                      {result.name1}
                    </p>
                    <p className="text-xs font-medium text-gray-600">
                      {result.calories1.toLocaleString()} cal
                    </p>
                  </div>
                  <div className="text-xs font-medium text-gray-400 pt-1 px-2">
                    vs
                  </div>
                  <div className="text-right space-y-0.5 min-w-[120px] sm:min-w-[150px]">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight break-words pl-1 min-h-[2.5em]">
                      {result.name2}
                    </p>
                    <p className="text-xs font-medium text-gray-600">
                      {result.calories2.toLocaleString()} cal
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {message && (
          <p className="text-gray-600 font-medium text-xs sm:text-sm px-4 py-2 bg-gray-50/50 rounded-lg border border-gray-100">
            {message}
          </p>
        )}

        <Button
          onClick={handleShare}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2"
        >
          <Share2 className="w-4 h-4" />
          Share Score
        </Button>

        <div className="pt-2 text-xs font-medium text-gray-400 flex items-center justify-center gap-1">
          Play at
          <span className="text-orange-500">shredle.co.uk</span>
        </div>
      </div>
    </motion.div>
  )
}
