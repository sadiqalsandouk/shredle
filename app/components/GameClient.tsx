"use client"
import { CardComponent } from "./CardComponent"
import { useGameLogic } from "../hooks/useGameLogic"
import { GameClientProps, GameStatus } from "../types/types"
import { fetchGameStatus, updateGameStatus } from "../utils/api"
import { useQuery } from "@tanstack/react-query"
import { ScoreDisplay } from "./ScoreDisplay"
import dynamic from "next/dynamic"
import { useWindowSize } from "react-use"
import { GameOverScreen } from "./GameOverScreen"

const Confetti = dynamic(() => import("react-confetti"), { ssr: false })

export default function GameClient({ foodData }: GameClientProps) {
  const { width, height } = useWindowSize()
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
  } = useGameLogic(foodData)

  useQuery<GameStatus>({
    queryKey: ["gameStatus"],
    queryFn: () => updateGameStatus(streak, gameHistory),
    enabled: gameOver,
  })

  const { data: gameState, isLoading: checkingStatus } = useQuery<GameStatus>({
    queryKey: ["checkGameStatus"],
    queryFn: fetchGameStatus,
    retry: false,
  })

  if (checkingStatus) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin text-3xl">🍔</div>
      </div>
    )
  }

  if (gameState?.message === "User cannot play") {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-center">
          <GameOverScreen
            score={gameState.streak ?? 0}
            message="Game Over! Come back tomorrow for a new challenge"
            gameHistory={gameState.gameHistory || []}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      {gameOver ? (
        <div className="flex flex-col items-center">
          {streak > 0 && (
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
            message="Come back tomorrow for another challenge!"
            gameHistory={gameHistory}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <ScoreDisplay
            score={streak}
            message={
              streak === 0
                ? "Start playing! Compare calories in 100g of each food."
                : undefined
            }
          />

          <div className="h-16 flex items-center justify-center">
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

          <div className="flex justify-center px-2 w-full">
            <div className="flex gap-2 sm:gap-4">
              <CardComponent
                key={dailyFoods[currentIndex].id}
                foodItemName={dailyFoods[currentIndex].name}
                foodItemCalories={dailyFoods[currentIndex].calories}
                foodItemImage={dailyFoods[currentIndex].image}
              />
              <CardComponent
                key={dailyFoods[currentIndex + 1].id}
                foodItemName={dailyFoods[currentIndex + 1].name}
                foodItemCalories={dailyFoods[currentIndex + 1].calories}
                foodItemImage={dailyFoods[currentIndex + 1].image}
                buttons={["Higher", "Lower"]}
                buttonHandlers={[handleHigher, handleLower]}
                disabled={isProcessingGuess}
              />
            </div>
          </div>
          {dailyFoods
            .slice(currentIndex + 2, currentIndex + 5)
            .map((food, index) => (
              <div key={index} className="hidden">
                <img src={food.image} alt="preload" />
              </div>
            ))}
        </div>
      )}
    </div>
  )
}
