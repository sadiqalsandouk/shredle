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
import { PoppinsFont } from "../utils/font"

export default function HowToPlay() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`${PoppinsFont.className} px-4 py-2 text-lg font-medium text-orange-700 hover:text-orange-900 border-2 rounded-lg shadow-sm}`}
        >
          📋 Rules
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] max-w-[320px] p-4 bg-orange-50/90 backdrop-blur-sm rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4 text-orange-800">
            How to Play Shredle
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-orange-900/90">
          <div className={`${PoppinsFont.className} space-y-10}`}>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-orange-800">
                🎯 Goal
              </h3>
              <p>Compare two foods and guess which one has more calories!</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 mt-7 text-orange-800">
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
              <h3 className="font-semibold text-lg mb-2 text-orange-800 mt-7">
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
