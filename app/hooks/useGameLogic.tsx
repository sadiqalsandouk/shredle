"use client"

import { useState } from "react"
import { FoodItem } from "../types/types"

export function useGameLogic(foodItems: FoodItem[]) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [streak, setStreak] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  const handleHigher = () => {
    if (
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
      foodItems[currentIndex + 1].calories <= foodItems[currentIndex].calories
    ) {
      setStreak(streak + 1)
      setCurrentIndex(currentIndex + 1)
    } else {
      setGameOver(true)
    }
  }

  return {
    currentIndex,
    streak,
    gameOver,
    handleHigher,
    handleLower,
  }
}
