interface ScoreDisplayProps {
  score: number
  total?: number
  isGameOver?: boolean
  message?: string
  streakMode?: boolean
  lives?: number
}

export function ScoreDisplay({
  score,
  total = 5,
  isGameOver = false,
  message,
  streakMode = false,
  lives = 1,
}: ScoreDisplayProps) {
  const foodEmojis = ["🍎", "🥑", "🥕", "🥦", "🍌"]
  const heartEmoji = "❤️"

  return (
    <div className="flex flex-col items-center gap-4 mb-6">
      <div className="flex flex-col items-center gap-3">
        <div className="text-xl sm:text-2xl font-bold text-orange-800 dark:text-orange-300 mb-2">
          {isGameOver
            ? "Today's Score:"
            : streakMode
            ? "Current Streak:"
            : "Score:"}{" "}
          {score}
          {!streakMode && `/${total}`}
        </div>

        {streakMode ? (
          <div className="flex items-center justify-center">
            <span className="text-2xl sm:text-3xl">🔥</span>
          </div>
        ) : (
          <>
            <div className="flex gap-4 sm:gap-8 md:gap-12">
              {[...Array(total)].map((_, i) => (
                <div
                  key={i}
                  className={`text-2xl sm:text-2xl transition-all duration-500 transform
                    ${i < score ? "scale-110 sm:scale-125" : "opacity-40"}
                    ${i === score - 1 ? "animate-bounce" : ""}`}
                >
                  {foodEmojis[i]}
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className={`transition-all duration-300 ${
                    i < lives ? "opacity-100" : "opacity-30"
                  }`}
                >
                  {heartEmoji}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      {message && (
        <div
          className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium 
          animate-fade-in text-center px-4"
        >
          {message}
        </div>
      )}
    </div>
  )
}
