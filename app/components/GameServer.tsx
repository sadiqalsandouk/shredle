import { Suspense } from "react"
import { GameClientProps } from "../types/types"
import GameClient from "./GameClient"

export default function GameServer({ foodData }: GameClientProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GameClient foodData={foodData} />
    </Suspense>
  )
}
