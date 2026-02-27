"use client"
import dynamic from "next/dynamic"
import { GameClientProps } from "../types/types"

const GameClient = dynamic(
  () => import("./GameClient"),
  { ssr: false }
)

export default function GameClientWrapper({ foodData }: GameClientProps) {
  return <GameClient foodData={foodData} />
}
