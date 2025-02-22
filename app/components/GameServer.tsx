import { Suspense } from "react"
import { GameClientProps } from "../types/types"
import GameClient from "./GameClient"

export default function GameServer({ foodData }: GameClientProps) {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-none"></div>
      <Suspense fallback={<div>Loading...</div>}>
        <GameClient foodData={foodData} />
      </Suspense>
    </div>
  )
}
