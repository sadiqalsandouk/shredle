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

  const endGameWithDelay = () => {
    setTimeout(() => {
      setGameOver(true)
    }, 1000)
  }

  const handleGuess = (isHigher: boolean) => {
    if (currentIndex >= dailyFoods.length - 1) {
      return
    }

    const isCorrect = isHigher
      ? dailyFoods[currentIndex + 1].calories >=
        dailyFoods[currentIndex].calories
      : dailyFoods[currentIndex + 1].calories <=
        dailyFoods[currentIndex].calories

    setFeedback(isCorrect ? "correct" : "wrong")
    setFeedbackKey((prevKey) => prevKey + 1)

    if (isCorrect) {
      setStreak(streak + 1)

      if (currentIndex + 1 >= dailyFoods.length - 1) {
        endGameWithDelay()
        return
      }

      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        setFeedback(null)
      }, 1000)
    } else {
      const newLives = lives - 1
      setLives(newLives)

      if (newLives <= 0 || currentIndex + 1 >= dailyFoods.length - 2) {
        endGameWithDelay()
        return
      }

      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        setFeedback(null)
      }, 1000)
    }
  }

  const handleHigher = () => handleGuess(true)
  const handleLower = () => handleGuess(false)

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
