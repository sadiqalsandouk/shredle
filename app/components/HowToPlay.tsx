import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function HowToPlay() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="text-lg text-orange-700 hover:text-orange-900 hover:bg-orange-100/50"
        >
          Rules
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-orange-50/90 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4 text-orange-800">
            How to Play Shredle
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-orange-900/90">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-orange-800">
                🎯 Goal
              </h3>
              <p>Compare two foods and guess which one has more calories!</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-orange-800">
                📋 Rules
              </h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>Compare the revealed item with the hidden one</li>
                <li>Click Higher or Lower to make your guess</li>
                <li>Build your streak with correct guesses</li>
                <li>The game is over if you guess wrong</li>
                <li>One game per day</li>
                <li>Same foods for everyone, each day</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-orange-800">
                🏆 Score
              </h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>Each correct guess adds to your streak</li>
                <li>New game every day</li>
              </ul>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
