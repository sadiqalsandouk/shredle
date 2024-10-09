"use client"
import { useEffect, useState } from "react"
import { FoodItem } from "../foodData"
import { useFoodData } from "../utils/hooks/useFoodData"
import { CardComponent } from "./CardComponent"

export default function Game() {
  const { data } = useFoodData()
  const foodItems: FoodItem[] | undefined = data?.foodData?.foodItems

  const [currentIndex, setCurrentIndex] = useState(0)
  const [streak, setStreak] = useState(0)
  const [lives, setLives] = useState(3)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (lives === 0) {
      setGameOver(true)
    }
  }, [lives])

  const handleHigher = () => {
    if (
      foodItems &&
      foodItems[currentIndex + 1].calories > foodItems[currentIndex].calories
    ) {
      setStreak(streak + 1)
      setCurrentIndex(currentIndex + 1)
    } else {
      setLives(lives - 1)
    }
  }

  const handleLower = () => {
    if (
      foodItems &&
      foodItems[currentIndex + 1].calories < foodItems[currentIndex].calories
    ) {
      setStreak(streak + 1)
      setCurrentIndex(currentIndex + 1)
    } else {
      setLives(lives - 1)
    }
  }

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen">
      {gameOver ? (
        <div>Game Over</div>
      ) : foodItems ? (
        <>
          <div>Streak: {streak}</div>
          <div>Lives: {lives}</div>
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
