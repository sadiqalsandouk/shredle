"use client"

import { Volume2, VolumeX } from "lucide-react"
import { useEffect, useState } from "react"
import { isMuted, setMuted } from "../utils/sounds"

export default function SoundToggle() {
  const [mounted, setMounted] = useState(false)
  const [muted, setMutedState] = useState(false)

  useEffect(() => {
    setMounted(true)
    setMutedState(isMuted())
  }, [])

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Toggle sound"
      >
        <div className="h-5 w-5" />
      </button>
    )
  }

  return (
    <button
      onClick={() => {
        const next = !muted
        setMuted(next)
        setMutedState(next)
      }}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label={muted ? "Unmute sound" : "Mute sound"}
    >
      {muted ? (
        <VolumeX className="h-5 w-5" />
      ) : (
        <Volume2 className="h-5 w-5" />
      )}
    </button>
  )
}
