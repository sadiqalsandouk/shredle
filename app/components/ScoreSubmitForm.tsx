"use client"
import { useState } from "react"
import { submitScore } from "../utils/api"
import { useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { validateUsername } from "../utils/profanityFilter"

interface ScoreSubmitFormProps {
  score: number
  onComplete: () => void
}

export function ScoreSubmitForm({ score, onComplete }: ScoreSubmitFormProps) {
  const [playerName, setPlayerName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationError, setValidationError] = useState("")
  const queryClient = useQueryClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset validation error
    setValidationError("")

    // Validate name
    const trimmedName = playerName.trim()
    const validation = validateUsername(trimmedName)

    if (!validation.isValid) {
      setValidationError(validation.error || "Invalid name")
      return
    }

    try {
      setIsSubmitting(true)
      await submitScore(trimmedName, score)
      toast.success("Score submitted successfully!")

      // Invalidate leaderboard queries to refresh data
      queryClient.invalidateQueries({ queryKey: ["leaderboard"] })

      // Mark as submitted
      onComplete()
    } catch (error) {
      toast.error("Failed to submit score. Please try again.")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Name input handler with live validation
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPlayerName(value)

    // Only show errors after user has typed something substantial
    if (value.length > 3) {
      const validation = validateUsername(value)
      if (!validation.isValid) {
        setValidationError(validation.error || "")
      } else {
        setValidationError("")
      }
    } else {
      setValidationError("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div>
        <input
          type="text"
          id="playerName"
          value={playerName}
          onChange={handleNameChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500
            ${
              validationError
                ? "border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-700"
                : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            }`}
          placeholder="Enter your name"
          maxLength={20}
          required
          disabled={isSubmitting}
        />
        {validationError ? (
          <p className="text-red-500 dark:text-red-400 text-xs mt-1">
            {validationError}
          </p>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
            Your name will be visible on the leaderboard
          </p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting || !!validationError}
          className={`w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-colors shadow-md
            ${
              isSubmitting || !!validationError
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-orange-600"
            }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Score"}
        </button>
      </div>
    </form>
  )
}
