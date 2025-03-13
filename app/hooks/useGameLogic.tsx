"use client"

import { useMemo, useState, useEffect } from "react"
import { FoodItem, GameState } from "../types/types"
import { getDailyFoods } from "../utils/dailyFoods"
import { loadGameState, saveGameState } from "../utils/storage"

export function useGameLogic(foodItems: FoodItem[]) {
  const dailyFoods = useMemo(() => getDailyFoods(foodItems), [foodItems])

  const getInitialState = () => {
    const savedState = loadGameState()
    const today = new Date().toISOString().split("T")[0]

    if (savedState && savedState.lastPlayedDate === today) {
      return {
        currentIndex: savedState.currentIndex,
        streak: savedState.streak,
        gameOver: savedState.gameOver,
        lives: savedState.lives,
        gameHistory: savedState.gameHistory || [],
      }
    }

    return {
      currentIndex: 0,
      streak: 0,
      gameOver: false,
      lives: 3,
      gameHistory: [],
    }
  }

  const initialState = getInitialState()

  const [currentIndex, setCurrentIndex] = useState(initialState.currentIndex)
  const [streak, setStreak] = useState(initialState.streak)
  const [gameOver, setGameOver] = useState(initialState.gameOver)
  const [lives, setLives] = useState(initialState.lives)
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null)
  const [feedbackKey, setFeedbackKey] = useState(0)
  const [isProcessingGuess, setIsProcessingGuess] = useState(false)
  const [gameHistory, setGameHistory] = useState<
    Array<{
      name1: string
      calories1: number
      name2: string
      calories2: number
      wasCorrect: boolean
    }>
  >([])

  useEffect(() => {
    const state: GameState = {
      currentIndex,
      streak,
      gameOver,
      lives,
      lastPlayedDate: new Date().toISOString().split("T")[0],
      gameHistory,
    }
    saveGameState(state)
  }, [currentIndex, streak, gameOver, lives, gameHistory])

  const endGameWithDelay = () => {
    setTimeout(() => {
      setGameOver(true)
    }, 1000)
  }

  const handleGuess = (isHigher: boolean) => {
    if (currentIndex >= dailyFoods.length - 1 || isProcessingGuess) {
      return
    }

    setIsProcessingGuess(true)

    const isCorrect = isHigher
      ? dailyFoods[currentIndex + 1].calories >=
        dailyFoods[currentIndex].calories
      : dailyFoods[currentIndex + 1].calories <=
        dailyFoods[currentIndex].calories

    setGameHistory((prev) => [
      ...prev,
      {
        name1: dailyFoods[currentIndex].name,
        calories1: dailyFoods[currentIndex].calories,
        name2: dailyFoods[currentIndex + 1].name,
        calories2: dailyFoods[currentIndex + 1].calories,
        wasCorrect: isCorrect,
      },
    ])

    setFeedback(isCorrect ? "correct" : "wrong")
    setFeedbackKey((prevKey) => prevKey + 1)

    if (isCorrect) {
      setStreak(streak + 1)

      if (currentIndex + 1 >= dailyFoods.length - 1) {
        endGameWithDelay()
        setTimeout(() => setIsProcessingGuess(false), 1000)
        return
      }

      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        setFeedback(null)
        setIsProcessingGuess(false)
      }, 1000)
    } else {
      const newLives = lives - 1
      setLives(newLives)

      if (newLives <= 0 || currentIndex + 1 >= dailyFoods.length - 1) {
        endGameWithDelay()
        setTimeout(() => setIsProcessingGuess(false), 1000)
        return
      }

      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        setFeedback(null)
        setIsProcessingGuess(false)
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
    isProcessingGuess,
    gameHistory,
  }
}
