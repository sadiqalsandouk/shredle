import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PoppinsFont } from "../utils/font"

interface HowToPlayProps {
  isMobile?: boolean
}

export default function HowToPlay({ isMobile = false }: HowToPlayProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={
            isMobile
              ? "w-full text-left px-4 py-3 rounded-xl transition-colors text-gray-700 hover:bg-orange-100/50 dark:text-gray-200 dark:hover:bg-orange-900/20 font-medium"
              : "px-3 py-1.5 rounded-lg transition-colors text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          }
        >
          Rules
        </button>
      </DialogTrigger>
      <DialogContent className="w-[85%] max-w-[300px] sm:w-[90%] sm:max-w-[520px] p-3 sm:p-6 bg-orange-50/90 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl max-h-[85vh] sm:max-h-none overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-2xl font-bold text-center mb-2 sm:mb-5 text-orange-800 dark:text-orange-300">
            How to Play Shredle
          </DialogTitle>
        </DialogHeader>
        <div className="text-orange-900/90 dark:text-gray-200 text-xs sm:text-base">
          <div className={`${PoppinsFont.className} space-y-3 sm:space-y-6`}>
            <div>
              <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-3 text-orange-800 dark:text-orange-300">
                🎯 Goal
              </h3>
              <p>Compare two foods and guess which one has more calories!</p>
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-3 text-orange-800 dark:text-orange-300">
                📋 Rules
              </h3>
              <ul className="list-disc pl-4 sm:pl-6 space-y-0.5 sm:space-y-2">
                <li>Compare the revealed item with the hidden one</li>
                <li>Click Higher or Lower to make your guess</li>
                <li>Build your streak with correct guesses</li>
                <li>The game is over if you guess wrong</li>
                <li>One game per day</li>
                <li>Same foods for everyone, each day</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-3 text-orange-800 dark:text-orange-300">
                🏆 Score
              </h3>
              <ul className="list-disc pl-4 sm:pl-6 space-y-0.5 sm:space-y-2">
                <li>Each correct guess adds to your streak</li>
                <li>New game every day</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-3 text-orange-800 dark:text-orange-300">
                🎮 Game Modes
              </h3>
              <ul className="list-disc pl-4 sm:pl-6 space-y-0.5 sm:space-y-2">
                <li>
                  <span className="font-medium">Daily Challenge:</span> 5 foods,
                  same for everyone each day
                </li>
                <li>
                  <span className="font-medium">Streak Mode:</span> Keep
                  guessing until you get one wrong!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
