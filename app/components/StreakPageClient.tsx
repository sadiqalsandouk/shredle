"use client"
import { useState, useEffect } from "react"
import StreakGameClient from "./StreakGameClient"
import { FoodItem } from "../types/types"

export default function StreakPageClient({
  foodData,
}: {
  foodData: FoodItem[]
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoaded) {
    return null
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 text-center animate-fade-in">
        <h1 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-2">
          Streak Mode
        </h1>
        <p className="text-sm sm:text-base text-gray-700">
          How many correct guesses can you make in a row?
        </p>
      </div>

      <StreakGameClient foodData={foodData} />
    </div>
  )
}
