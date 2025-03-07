"use client"

import { useMemo, useState, useEffect } from "react"
import { FoodItem, GameState } from "../types/types"
import { getDailyFoods } from "../utils/dailyFoods"

const STORAGE_KEY = "shredle_game_state"

function saveGameState(state: GameState) {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }
}

function loadGameState(): GameState | null {
  if (typeof window === "undefined") {
    return null
  }
  const saved = localStorage.getItem(STORAGE_KEY)
  if (!saved) return null
  return JSON.parse(saved)
}

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
      }
    }

    return {
      currentIndex: 0,
      streak: 0,
      gameOver: false,
      lives: 3,
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

  useEffect(() => {
    const state: GameState = {
      currentIndex,
      streak,
      gameOver,
      lives,
      lastPlayedDate: new Date().toISOString().split("T")[0],
    }
    saveGameState(state)
  }, [currentIndex, streak, gameOver, lives, dailyFoods])

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

      if (newLives <= 0 || currentIndex + 1 >= dailyFoods.length - 2) {
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
  }
}
