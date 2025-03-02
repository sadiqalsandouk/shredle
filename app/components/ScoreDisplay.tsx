interface ScoreDisplayProps {
  score: number
  total?: number
  isGameOver?: boolean
  message?: string
}

export function ScoreDisplay({
  score,
  total = 5,
  isGameOver = false,
  message,
}: ScoreDisplayProps) {
  // Array of food emojis to use
  const foodEmojis = ["🍎", "🥑", "🥕", "🥦", "🍌"]

  return (
    <div className="flex flex-col items-center gap-6 mb-8">
      <div className="flex flex-col items-center gap-4">
        <div className="text-2xl font-bold text-gray-800">
          {isGameOver ? "Today's Score:" : "Score:"}
        </div>
        <div
          className="text-3xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-r from-green-500 to-blue-500"
        >
          {score}/{total}
        </div>
        <div className="flex gap-20">
          {[...Array(total)].map((_, i) => (
            <div
              key={i}
              className={`text-2xl transition-all duration-500 transform
                  ${i < score ? "scale-125" : "opacity-40"}
                  ${i === score - 1 ? "animate-bounce" : ""}`}
            >
              {foodEmojis[i]}
            </div>
          ))}
        </div>
      </div>
      {message && (
        <div
          className="text-lg text-gray-600 font-medium 
              animate-fade-in"
        >
          {message}
        </div>
      )}
    </div>
  )
}
//
