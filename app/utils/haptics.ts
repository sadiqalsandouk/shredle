import { isMuted } from "./sounds"

function vibrate(pattern: number | number[]) {
  if (typeof navigator === "undefined") return
  if (typeof navigator.vibrate !== "function") return
  if (isMuted()) return
  try {
    navigator.vibrate(pattern)
  } catch {
    // Some browsers throw if called too aggressively; ignore.
  }
}

export function hapticCorrect() {
  vibrate(25)
}

export function hapticWrong() {
  vibrate([55, 40, 55])
}
