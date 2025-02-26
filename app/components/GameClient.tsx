"use client"
import { CardComponent } from "./CardComponent"
import { useGameLogic } from "../hooks/useGameLogic"
import { GameClientProps, GameStatus } from "../types/types"
import { fetchGameStatus, updateGameStatus } from "../utils/api"
import { useQuery } from "@tanstack/react-query"

export default function GameClient({ foodData }: GameClientProps) {
  const { currentIndex, gameOver, handleHigher, handleLower, streak } =
    useGameLogic(foodData)

  const { error, isLoading } = useQuery<GameStatus>({
    queryKey: ["gameStatus"],
    queryFn: updateGameStatus,
    enabled: gameOver,
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

  const { error: lastPlayed, isLoading: checkingStatus } = useQuery<GameStatus>(
    {
      queryKey: ["checkGameStatus"],
      queryFn: fetchGameStatus,
      retry: false,
    }
  )

  if (checkingStatus) {
    return (
      <div className="flex items-center justify-center p-4">Loading...</div>
    )
  }

  if (
    lastPlayed?.message === "Great job on today's game! Check out your progress"
  ) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-center">
          <div>You have already played today!</div>
          <div>Come back tomorrow for a new challenge.</div>
        </div>
      </div>
    )
  }

  if (gameOver) {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center p-4">Loading...</div>
      )
    }

    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-center">
          <div className="mb-2">Game Over!</div>
          <div>Final Score: {streak}</div>
          {error && (
            <div className="mt-2">
              {error.message ===
              "Great job on today's game! Check out your progress"
                ? "Great job on today's game! Check out your progress"
                : error.message}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center p-4">
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
