"use client"
import { CardComponent } from "./CardComponent"
import { useGameLogic } from "../hooks/useGameLogic"
import { GameClientProps, GameStatus } from "../types/types"
import { fetchGameStatus, updateGameStatus } from "../utils/api"
import { useQuery } from "@tanstack/react-query"
import { ScoreDisplay } from "./ScoreDisplay"

export default function GameClient({ foodData }: GameClientProps) {
  const {
    currentIndex,
    gameOver,
    handleHigher,
    handleLower,
    streak,
    dailyFoods,
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

  if (checkingStatus) {
    return (
      <div className="flex items-center justify-center p-4">Loading...</div>
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
        <ScoreDisplay
          score={streak}
          isGameOver={true}
          message="Game Over! Come back tomorrow for a new challenge"
        />
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center gap-8">
      <ScoreDisplay score={streak} />
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
  )
}
