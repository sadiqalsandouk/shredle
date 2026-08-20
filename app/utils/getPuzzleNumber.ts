// Shredle's public launch date - puzzle #1
const LAUNCH_DATE = new Date(2024, 4, 1)

export function getPuzzleNumber(date: Date = new Date()): number {
  const start = Date.UTC(
    LAUNCH_DATE.getFullYear(),
    LAUNCH_DATE.getMonth(),
    LAUNCH_DATE.getDate()
  )
  const today = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  const diffDays = Math.round((today - start) / (1000 * 60 * 60 * 24))
  return diffDays + 1
}
