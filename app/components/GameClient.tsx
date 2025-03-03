"use client"
import { CardComponent } from "./CardComponent"
import { useGameLogic } from "../hooks/useGameLogic"
import { GameClientProps, GameStatus } from "../types/types"
import { fetchGameStatus, updateGameStatus } from "../utils/api"
import { useQuery } from "@tanstack/react-query"
import { ScoreDisplay } from "./ScoreDisplay"
import dynamic from "next/dynamic"
import { useWindowSize } from "react-use"
import NextImage from "next/image"
import { useEffect } from "react"

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
    lives,
  } = useGameLogic(foodData)

  useQuery<GameStatus>({
    queryKey: ["gameStatus"],
    queryFn: () => updateGameStatus(streak),
    enabled: gameOver,
  })

  const { data: gameState, isLoading: checkingStatus } = useQuery<GameStatus>({
    queryKey: ["checkGameStatus"],
    queryFn: fetchGameStatus,
    retry: false,
  })

  useEffect(() => {
    dailyFoods.slice(currentIndex + 2, currentIndex + 5).forEach((food) => {
      const img = new window.Image()
      img.src = food.image
    })
  }, [currentIndex, dailyFoods])

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
          <ScoreDisplay
            score={gameState.streak ?? 0}
            isGameOver={true}
            message="You have already played today! Come back tomorrow for a new challenge"
          />
        </div>
      </div>
    )
  }

  if (gameOver) {
    return (
      <div className="flex items-center justify-center p-4">
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
        />
        <ScoreDisplay
          score={streak}
          isGameOver={true}
          message="Game Over! Come back tomorrow for a new challenge"
        />
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center gap-4">
      {feedback && (
        <div
          key={feedbackKey}
          className={`py-2 px-4 text-lg sm:text-xl font-bold rounded ${
            feedback === "correct"
              ? "bg-green-500 text-white animate-scaleUp"
              : "bg-red-500 text-white animate-shake"
          }`}
        >
          {feedback === "correct" ? "Correct!" : "Wrong!"}
        </div>
      )}
      <ScoreDisplay score={streak} />
      <div className="text-xl sm:text-2xl font-bold text-orange-800 mb-2">
        Lives: {lives}
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
          />
        </div>
      </div>
      {dailyFoods
        .slice(currentIndex + 2, currentIndex + 5)
        .map((food, index) => (
          <div key={index} className="hidden">
            <NextImage
              src={food.image}
              alt="preload"
              width={280}
              height={480}
              unoptimized={true}
              priority
            />
          </div>
        ))}
    </div>
  )
}
