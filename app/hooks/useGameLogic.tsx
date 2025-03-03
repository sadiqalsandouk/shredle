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
  const [lives, setLives] = useState(3)

  const handleHigher = () => {
    if (currentIndex >= dailyFoods.length - 1) {
      setGameOver(true)
      return
    }

    const isCorrect =
      dailyFoods[currentIndex + 1].calories >= dailyFoods[currentIndex].calories
    setFeedback(isCorrect ? "correct" : "wrong")
    setFeedbackKey((prevKey) => prevKey + 1)
    if (isCorrect) {
      setStreak(streak + 1)
    } else {
      setLives(lives - 1)
      if (lives - 1 <= 0) {
        setGameOver(true)
      }
    }
    setCurrentIndex(currentIndex + 1)
    if (currentIndex + 1 >= dailyFoods.length - 1) {
      setGameOver(true)
    }
  }

  const handleLower = () => {
    if (currentIndex >= dailyFoods.length - 1) {
      setGameOver(true)
      return
    }

    const isCorrect =
      dailyFoods[currentIndex + 1].calories <= dailyFoods[currentIndex].calories
    setFeedback(isCorrect ? "correct" : "wrong")
    setFeedbackKey((prevKey) => prevKey + 1)
    if (isCorrect) {
      setStreak(streak + 1)
    } else {
      setLives(lives - 1)
      if (lives - 1 <= 0) {
        setGameOver(true)
      }
    }
    setCurrentIndex(currentIndex + 1)
    if (currentIndex + 1 >= dailyFoods.length - 1) {
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
    lives,
  }
}
