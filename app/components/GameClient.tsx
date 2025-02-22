"use client"
import { CardComponent } from "./CardComponent"
import { useGameLogic } from "../hooks/useGameLogic"
import { GameClientProps, GameStatus } from "../types/types"
import { fetchGameStatus } from "../utils/api"
import { useQuery } from "@tanstack/react-query"

export default function GameClient({ foodData }: GameClientProps) {
  const { currentIndex, gameOver, handleHigher, handleLower } =
    useGameLogic(foodData)

  const { error, isLoading } = useQuery<GameStatus>({
    queryKey: ["gameStatus"],
    queryFn: fetchGameStatus,
    retry: (failureCount, error) => {
      if (
        error instanceof Error &&
        error.message === "Great job on today's game! Check out your progress"
      ) {
        return false
      }
      return failureCount < 3
    },
  })

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center p-4">
        Loading...
      </div>
    )
  }
  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center p-4">
        {error.message ===
        "Great job on today's game! Check out your progress" ? (
          <div>
            <div>Great job on todays game! Check out your progress</div>
          </div>
        ) : (
          error.message
        )}
      </div>
    )
  }

  return (
    <div className="flex-1 flex items-center justify-center p-4">
      {gameOver ? (
        <div>Game Over</div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          <CardComponent
            foodItemName={foodData[currentIndex].name}
            foodItemCalories={foodData[currentIndex].calories}
          />
          <CardComponent
            foodItemName={foodData[currentIndex + 1].name}
            foodItemCalories={foodData[currentIndex + 1].calories}
            buttons={["Higher", "Lower"]}
            buttonHandlers={[handleHigher, handleLower]}
          />
        </div>
      )}
    </div>
  )
}
