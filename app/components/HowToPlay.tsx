import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function HowToPlay() {
  return (
    <Dialog>
      <DialogTrigger className="hover:underline cursor-pointer text-green-700 hover:text-green-800 text-lg">
        How do I play?
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            How to Play Shreddle
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">🎯 Goal</h3>
              <p>
                Guess whether the next fast food item has higher or lower
                calories than the current one.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">📋 Rules</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  You&apos;ll see two fast food items, one revealed and one
                  hidden
                </li>
                <li>Guess if the hidden item has higher or lower calories</li>
                <li>Keep your streak going by guessing correctly</li>
                <li>One wrong guess ends your game</li>
                <li>You get one attempt per day</li>
                <li>Everyone gets the same food items each day</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">🏆 Scoring</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>Build your streak by guessing correctly</li>
                <li>Compare your streak with friends</li>
                <li>Come back daily for new food items</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-3 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">💡 Why Play?</h3>
              <p>
                Whether you&apos;re tracking macros or just curious, Shreddle
                helps you make informed choices about fast food. You might be
                surprised which menu items are actually gym-friendly and which
                ones could derail your fitness goals!
              </p>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
