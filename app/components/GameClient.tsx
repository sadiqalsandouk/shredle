"use client"
import { CardComponent } from "./CardComponent"
import { useGameLogic } from "../hooks/useGameLogic"
import { GameClientProps } from "../types/types"

export default function GameClient({ foodItems }: GameClientProps) {
  const { currentIndex, gameOver, handleHigher, handleLower } =
    useGameLogic(foodItems)
  return (
    <div className="flex-1 flex items-center justify-center p-4">
      {gameOver ? (
        <div>Game Over</div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          <CardComponent
            foodItemName={foodItems[currentIndex].name}
            foodItemCalories={foodItems[currentIndex].calories}
          />
          <CardComponent
            foodItemName={foodItems[currentIndex + 1].name}
            foodItemCalories={foodItems[currentIndex + 1].calories}
            buttons={["Higher", "Lower"]}
            buttonHandlers={[handleHigher, handleLower]}
          />
        </div>
      )}
    </div>
  )
}
