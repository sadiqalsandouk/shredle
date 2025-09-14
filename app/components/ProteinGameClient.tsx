"use client"
import { ProteinCardComponent } from "./ProteinCardComponent"
import { useProteinGameLogic } from "../hooks/useProteinGameLogic"
import { FoodItem } from "../types/types"
import { useWindowSize } from "react-use"
import { GameOverScreen } from "./GameOverScreen"
import dynamic from "next/dynamic"
import { ScoreDisplay } from "./ScoreDisplay"
import { useState, useEffect } from "react"

const Confetti = dynamic(() => import("react-confetti"), { ssr: false })

export default function ProteinGameClient({
  foodData,
}: {
  foodData: FoodItem[]
}) {
  const { width, height } = useWindowSize()
  const [isClientSide, setIsClientSide] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsClientSide(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const {
    currentIndex,
    gameOver,
    handleHigher,
    handleLower,
    streak,
    dailyFoods,
    feedback,
    feedbackKey,
    isProcessingGuess,
    gameHistory,
    resetGame,
    cheatAttempted,
  } = useProteinGameLogic(foodData, "protein")

  const handleReset = () => {
    resetGame()

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }

  if (!isClientSide || isLoading) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="animate-spin text-3xl">🍔</div>
      </div>
    )
  }

  if (cheatAttempted) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-md text-center">
          <div className="text-5xl mb-4">🍔😭💔</div>
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-3">
            Game Reset
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Refreshing during streak mode resets the game!
          </p>
          <button
            onClick={handleReset}
            className="w-full py-3 bg-orange-600 hover:bg-orange-700 
                    text-white rounded-lg font-semibold transition-colors"
          >
            Start New Game
          </button>
        </div>
      </div>
    )
  }

  if (gameOver) {
    return (
      <div className="flex items-center justify-center p-4">
        {streak >= 20 && (
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={500}
            gravity={0.3}
          />
        )}
        <GameOverScreen
          score={streak}
          total={streak}
          message={`Your streak was ${streak}! Can you beat it?`}
          gameHistory={gameHistory}
          isStreak={true}
          isProteinMode={true}
          onReset={resetGame}
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">Protein Mode</h1>
      <ScoreDisplay score={streak} streakMode={true} proteinMode={true} />

      <div className="h-[60px] flex items-center justify-center">
        {feedback && (
          <div
            key={feedbackKey}
            className={`py-2 px-4 text-lg sm:text-xl mb-5 font-bold rounded ${
              feedback === "correct"
                ? "bg-green-500 text-white animate-scaleUp"
                : "bg-red-500 text-white animate-shake"
            }`}
          >
            {feedback === "correct" ? "Correct!" : "Wrong!"}
          </div>
        )}
      </div>

      {dailyFoods.length >= 2 && (
        <div className="flex gap-2 sm:gap-4">
          <ProteinCardComponent
            key={`protein-${currentIndex}-a`}
            foodItemName={dailyFoods[currentIndex].name}
            foodItemProtein={dailyFoods[currentIndex].protein ?? 0}
            foodItemImage={dailyFoods[currentIndex].image}
          />
          <ProteinCardComponent
            key={`protein-${currentIndex}-b`}
            foodItemName={dailyFoods[currentIndex + 1].name}
            foodItemProtein={dailyFoods[currentIndex + 1].protein ?? 0}
            foodItemImage={dailyFoods[currentIndex + 1].image}
            buttons={["Higher", "Lower"]}
            buttonHandlers={[handleHigher, handleLower]}
            disabled={isProcessingGuess}
          />
        </div>
      )}

      {/* Preload next few images */}
      {dailyFoods.length > currentIndex + 2 &&
        dailyFoods
          .slice(currentIndex + 2, currentIndex + 5)
          .map((food, index) => (
            <div key={index} className="hidden">
              <img src={food.image} alt="" aria-hidden="true" />
            </div>
          ))}
    </div>
  )
}
