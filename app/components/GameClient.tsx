"use client"
import { CardComponent } from "./CardComponent"
import { useGameLogic } from "../hooks/useGameLogic"
import { GameClientProps, GameStatus } from "../types/types"
import { fetchGameStatus, updateGameStatus } from "../utils/api"
import { useQuery } from "@tanstack/react-query"

export default function GameClient({ foodData }: GameClientProps) {
  const {
    currentIndex,
    gameOver,
    handleHigher,
    handleLower,
    streak,
    dailyFoods,
  } = useGameLogic(foodData)

  const { data: gameStatus } = useQuery<GameStatus>({
    queryKey: ["gameStatus"],
    queryFn: () => updateGameStatus(streak),
    enabled: gameOver,
  })

  const { data: gameState, isLoading: checkingStatus } = useQuery<GameStatus>({
    queryKey: ["checkGameStatus"],
    queryFn: fetchGameStatus,
    retry: false,
  })

  if (checkingStatus) {
    return (
      <div className="flex items-center justify-center p-4">Loading...</div>
    )
  }

  if (gameState?.message === "User cannot play") {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">
            Todays Score: {gameState.streak}/5
          </div>
          <div>You have already played today!</div>
          <div>Come back tomorrow for a new challenge.</div>
        </div>
      </div>
    )
  }

  if (gameOver) {
    const finalStreak = gameStatus?.streak || streak
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">Game Over!</div>
          <div className="text-xl">Final Score: {finalStreak}/5 </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="text-xl">Score: {streak}/5</div>
      <div className="flex items-center justify-center p-4">
        <div className="flex flex-col md:flex-row gap-8">
          <CardComponent
            foodItemName={dailyFoods[currentIndex].name}
            foodItemCalories={dailyFoods[currentIndex].calories}
            foodItemImage={dailyFoods[currentIndex].image}
          />
          <CardComponent
            foodItemName={dailyFoods[currentIndex + 1].name}
            foodItemCalories={dailyFoods[currentIndex + 1].calories}
            foodItemImage={dailyFoods[currentIndex + 1].image}
            buttons={["Higher", "Lower"]}
            buttonHandlers={[handleHigher, handleLower]}
          />
        </div>
      </div>
    </>
  )
}
