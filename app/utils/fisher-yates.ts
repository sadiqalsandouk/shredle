import { FoodItem } from "../types/types"

export const getDateSeed = () => {
  const today = new Date()
  return `${today.getFullYear()}-0${today.getMonth() + 1}-${today.getDate()}`
}

export const seededShuffle = (array: FoodItem[], seed: string) => {
  const shuffled = [...array]
  const seededRandom = () => {
    let hash = 0
    for (let i = 0; i < seed.length; i++) {
      hash = (hash << 5) - hash + seed.charCodeAt(i)
      hash = hash & hash
    }
    return Math.abs(hash) / Math.pow(2, 32)
  }

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
