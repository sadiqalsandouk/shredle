/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState } from "react"
import { CardComponent } from "./CardComponent"

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
    <div className="flex flex-wrap justify-center items-center min-h-screen">
      {gameOver ? (
        <div>Game Over</div>
      ) : foodItems ? (
        <>
          <div>Streak: {streak}</div>
          <CardComponent
            avatarUrl="https://github.com/shadcn.png"
            description={foodItems[currentIndex].name}
            content={foodItems[currentIndex].calories}
          />
          <CardComponent
            avatarUrl="https://github.com/shadcn.png"
            description={foodItems[currentIndex + 1].name}
            content={foodItems[currentIndex + 1].calories}
            buttons={["Higher", "Lower"]}
            buttonHandlers={[handleHigher, handleLower]}
          />
        </>
      ) : null}
    </div>
  )
}
