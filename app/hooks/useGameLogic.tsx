"use client"

import { useMemo, useState } from "react"
import { FoodItem } from "../types/types"
import { getDailyFoods } from "../utils/dailyFoods"

export function useGameLogic(foodItems: FoodItem[]) {
  const dailyFoods = useMemo(() => getDailyFoods(foodItems), [foodItems])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [streak, setStreak] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null)
  const [feedbackKey, setFeedbackKey] = useState(0)

  const handleHigher = () => {
    const isCorrect =
      dailyFoods[currentIndex + 1].calories >= dailyFoods[currentIndex].calories
    setFeedback(isCorrect ? "correct" : "wrong")
    setFeedbackKey((prevKey) => prevKey + 1)
    if (isCorrect) {
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
    const isCorrect =
      dailyFoods[currentIndex + 1].calories <= dailyFoods[currentIndex].calories
    setFeedback(isCorrect ? "correct" : "wrong")
    if (isCorrect) {
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
    feedback,
    feedbackKey,
  }
}
