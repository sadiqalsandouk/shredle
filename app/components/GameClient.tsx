"use client"
import { CardComponent } from "./CardComponent"
import { useGameLogic } from "../hooks/useGameLogic"
import { GameClientProps } from "../types/types"
import { useEffect, useState } from "react"

export default function GameClient({ foodItems }: GameClientProps) {
  const { currentIndex, gameOver, handleHigher, handleLower } =
    useGameLogic(foodItems)

  const [gameStatus, setGameStatus] = useState({
    message: "",
    nextReset: new Date(),
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGameStatus = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        })
        const data = await response.json()
        console.log(data)
        setGameStatus(data)
      } catch (error) {
        console.error("Error fetching game status:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGameStatus()
  }, [])

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center p-4">
        Loading...
      </div>
    )
  }

  if (gameStatus && gameStatus.message !== "User can play") {
    return (
      <div className="flex-1 flex items-center justify-center p-4">
        <div>{gameStatus.message}</div>
        <div>
          Next reset at:
          {gameStatus.nextReset.toLocaleString()}
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex items-center justify-center p-4">
      {gameOver ? (
        <div>Game Over</div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          <CardComponent
            foodItemName={foodItems[currentIndex].name}
            foodItemCalories={foodItems[currentIndex].calories}
          />
          <CardComponent
            foodItemName={foodItems[currentIndex + 1].name}
            foodItemCalories={foodItems[currentIndex + 1].calories}
            buttons={["Higher", "Lower"]}
            buttonHandlers={[handleHigher, handleLower]}
          />
        </div>
      )}
    </div>
  )
}
