"use client"
import { useState } from "react"
import { CardComponent } from "./CardComponent"
import GameHeader from "./GameHeader"

interface GameProps {
  initialFoodData: any
}

export default function Game({ initialFoodData }: GameProps) {
  const foodItems = initialFoodData.foodItems
  const [currentIndex, setCurrentIndex] = useState(0)
  const [streak, setStreak] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  const handleHigher = () => {
    if (
      foodItems &&
      foodItems[currentIndex + 1].calories >= foodItems[currentIndex].calories
    ) {
      setStreak(streak + 1)
      setCurrentIndex(currentIndex + 1)
    } else {
      setGameOver(true)
    }
  }

  const handleLower = () => {
    if (
      foodItems &&
      foodItems[currentIndex + 1].calories <= foodItems[currentIndex].calories
    ) {
      setStreak(streak + 1)
      setCurrentIndex(currentIndex + 1)
    } else {
      setGameOver(true)
    }
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-none">
        <GameHeader />
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        {gameOver ? (
          <div>Game Over</div>
        ) : foodItems ? (
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
        ) : null}
      </div>
    </div>
  )
}
