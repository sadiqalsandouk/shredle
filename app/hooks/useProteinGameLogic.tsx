"use client"

import { useMemo, useState, useEffect, useRef } from "react"
import { FoodItem, GameState } from "../types/types"
import { getProteinDailyFoods } from "../utils/proteinDailyFoods"
import { loadGameState, saveGameState } from "../utils/storage"
import { seededShuffle } from "../utils/fisher-yates"
import { updateGameStatus } from "../utils/api"

export function useProteinGameLogic(
  foodItems: FoodItem[],
  mode: "daily" | "protein" = "protein"
) {
  const isFirstRender = useRef(true)

  const [streakFoods, setStreakFoods] = useState<FoodItem[]>([])
  const [cheatAttempted, setCheatAttempted] = useState(false)

  useEffect(() => {
    if (isFirstRender.current && mode === "protein") {
      isFirstRender.current = false

      // Generate a game session ID if none exists
      if (!localStorage.getItem("currentProteinGameSessionId")) {
        const gameSessionId = `protein-${Date.now()}-${Math.floor(
          Math.random() * 1000
        )}`
        localStorage.setItem("currentProteinGameSessionId", gameSessionId)
      }

      const cheatFlag = localStorage.getItem("proteinRefreshCheat")
      if (cheatFlag) {
        localStorage.removeItem("proteinRefreshCheat")
        setCheatAttempted(true)

        localStorage.removeItem("proteinGameStreakState")
        return
      }

      // Filter foods that have protein data
      const foodsWithProtein = foodItems.filter(food => food.protein != null && food.protein > 0)
      const randomSeed = Math.floor(Math.random() * 1000000).toString()
      setStreakFoods(seededShuffle([...foodsWithProtein], randomSeed).slice(0, 100))

      if (typeof window !== "undefined") {
        const savedState = loadGameState(mode)

        if (
          savedState &&
          !savedState.gameOver &&
          savedState.streak > 0 &&
          savedState.currentIndex > 0
        ) {
          localStorage.setItem("proteinRefreshCheat", "true")
          localStorage.removeItem("proteinGameStreakState")

          setCheatAttempted(true)
        }
      }
    }
  }, [foodItems, mode])

  const gameFoods = useMemo(() => {
    if (mode === "daily") {
      return getProteinDailyFoods(foodItems)
    } else if (streakFoods.length > 0) {
      return streakFoods
    }
    // Fallback to foods with protein data
    const foodsWithProtein = foodItems.filter(food => food.protein != null && food.protein > 0)
    return foodsWithProtein.slice(0, 2)
  }, [foodItems, mode, streakFoods])

  const getInitialState = () => {
    if (cheatAttempted) {
      return {
        currentIndex: 0,
        streak: 0,
        gameOver: true,
        lives: 0,
        gameHistory: [],
      }
    }

    if (typeof window === "undefined") {
      return {
        currentIndex: 0,
        streak: 0,
        gameOver: false,
        lives: mode === "daily" ? 3 : 1,
        gameHistory: [],
      }
    }

    const today = new Date().toISOString().split("T")[0]
    const savedState = loadGameState(mode)

    if (
      savedState &&
      (mode === "protein" || savedState.lastPlayedDate === today)
    ) {
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
      lives: mode === "daily" ? 3 : 1,
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
  const [gameHistory, setGameHistory] = useState(initialState.gameHistory)

  useEffect(() => {
    const state: GameState = {
      currentIndex,
      streak,
      gameOver,
      lives,
      lastPlayedDate: new Date().toISOString().split("T")[0],
      gameHistory,
    }

    saveGameState(state, mode)

    if (mode === "daily" && gameOver) {
      updateGameStatus(streak, gameHistory).catch(console.error)
    }
  }, [currentIndex, streak, gameOver, lives, gameHistory, mode])

  const endGameWithDelay = () => {
    setTimeout(() => {
      setGameOver(true)
    }, 1000)
  }

  const handleGuess = (isHigher: boolean) => {
    if (isProcessingGuess) return

    if (mode === "daily" && currentIndex >= gameFoods.length - 1) return

    setIsProcessingGuess(true)

    const isCorrect = isHigher
      ? (gameFoods[currentIndex + 1].protein ?? 0) >= (gameFoods[currentIndex].protein ?? 0)
      : (gameFoods[currentIndex + 1].protein ?? 0) <= (gameFoods[currentIndex].protein ?? 0)

    setGameHistory((prev) => [
      ...prev,
      {
        name1: gameFoods[currentIndex].name,
        calories1: gameFoods[currentIndex].calories,
        protein1: gameFoods[currentIndex].protein,
        name2: gameFoods[currentIndex + 1].name,
        calories2: gameFoods[currentIndex + 1].calories,
        protein2: gameFoods[currentIndex + 1].protein,
        wasCorrect: isCorrect,
      },
    ])

    setFeedback(isCorrect ? "correct" : "wrong")
    setFeedbackKey((prevKey) => prevKey + 1)

    if (isCorrect) {
      setStreak(streak + 1)

      if (mode === "daily" && currentIndex + 1 >= gameFoods.length - 1) {
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

      if (
        newLives <= 0 ||
        (mode === "daily" && currentIndex + 1 >= gameFoods.length - 1)
      ) {
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

  const resetGame = () => {
    if (mode !== "protein") return

    localStorage.removeItem("proteinRefreshCheat")
    setCheatAttempted(false)

    const gameSessionId = `protein-${Date.now()}-${Math.floor(
      Math.random() * 1000
    )}`
    localStorage.setItem("currentProteinGameSessionId", gameSessionId)

    // Filter foods that have protein data
    const foodsWithProtein = foodItems.filter(food => food.protein != null && food.protein > 0)
    const randomSeed = Math.floor(Math.random() * 1000000).toString()
    setStreakFoods(seededShuffle([...foodsWithProtein], randomSeed).slice(0, 100))

    setCurrentIndex(0)
    setStreak(0)
    setGameOver(false)
    setLives(1)
    setFeedback(null)
    setIsProcessingGuess(false)
    setGameHistory([])

    localStorage.removeItem("proteinGameStreakState")
  }

  return {
    currentIndex,
    streak,
    gameOver,
    handleHigher,
    handleLower,
    dailyFoods: gameFoods,
    feedback,
    feedbackKey,
    lives,
    isProcessingGuess,
    gameHistory,
    resetGame,
    cheatAttempted,
  }
}
