import { FoodItem } from "../types/types"

export const getDateSeed = () => {
  const today = new Date()
  const month = (today.getMonth() + 1).toString().padStart(2, "0")
  const day = today.getDate().toString().padStart(2, "0")
  return `${today.getFullYear()}-${month}-${day}`
}
export const seededShuffle = (array: FoodItem[], seed: string) => {
  const shuffled = [...array]
  let currentHash = 0
  const seededRandom = () => {
    currentHash =
      (currentHash << 5) -
      currentHash +
      seed.charCodeAt(currentHash % seed.length)
    currentHash = currentHash & currentHash
    return Math.abs(currentHash) / Math.pow(2, 32)
  }

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
