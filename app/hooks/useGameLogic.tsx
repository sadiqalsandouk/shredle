"use client"

import { useMemo, useState } from "react"
import { FoodItem } from "../types/types"
import { getDailyFoods } from "../utils/dailyFoods"

export function useGameLogic(foodItems: FoodItem[]) {
  const dailyFoods = useMemo(() => getDailyFoods(foodItems), [foodItems])
  console.log(dailyFoods)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [streak, setStreak] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  const handleHigher = () => {
    if (
      dailyFoods[currentIndex + 1].calories >= dailyFoods[currentIndex].calories
    ) {
      if (streak + 1 >= 5) {
        setGameOver(true)
      }
      setStreak(streak + 1)
      setCurrentIndex(currentIndex + 1)
    } else {
      setGameOver(true)
    }
  }

  const handleLower = () => {
    if (
      dailyFoods[currentIndex + 1].calories <= dailyFoods[currentIndex].calories
    ) {
      if (streak + 1 >= 5) {
        setGameOver(true)
      }
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
    dailyFoods,
  }
}
