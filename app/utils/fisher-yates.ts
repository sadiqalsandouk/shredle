import { FoodItem } from "../types/types"

export const getDateSeed = () => {
  const today = new Date()
  const month = (today.getMonth() + 1).toString().padStart(2, "0")
  const day = today.getDate().toString().padStart(2, "0")
  return `${today.getFullYear()}-${month}-${day}`
}
export const seededShuffle = (array: FoodItem[], seed: string) => {
  const shuffled = [...array]
  let hash = 0

  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i)
    hash = hash & hash
  }
  const seededRandom = () => {
    hash = (hash << 5) - hash + 1
    hash = hash & hash
    return Math.abs(hash) / Math.pow(2, 32)
  }

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
