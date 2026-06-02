let ctx: AudioContext | null = null

const MUTED_KEY = "shredle:soundMuted"

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null
  if (!ctx) {
    const Ctor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext
    if (!Ctor) return null
    ctx = new Ctor()
  }
  return ctx
}

export function isMuted(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem(MUTED_KEY) === "1"
}

export function setMuted(muted: boolean): void {
  if (typeof window === "undefined") return
  localStorage.setItem(MUTED_KEY, muted ? "1" : "0")
}

type ToneOpts = {
  freq: number
  duration: number
  type?: OscillatorType
  startOffset?: number
  peakGain?: number
}

function playTone({
  freq,
  duration,
  type = "sine",
  startOffset = 0,
  peakGain = 0.15,
}: ToneOpts) {
  const audio = getCtx()
  if (!audio) return
  if (audio.state === "suspended") audio.resume().catch(() => {})

  const t0 = audio.currentTime + startOffset
  const osc = audio.createOscillator()
  const gain = audio.createGain()

  osc.type = type
  osc.frequency.setValueAtTime(freq, t0)

  gain.gain.setValueAtTime(0.0001, t0)
  gain.gain.exponentialRampToValueAtTime(peakGain, t0 + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration)

  osc.connect(gain)
  gain.connect(audio.destination)
  osc.start(t0)
  osc.stop(t0 + duration + 0.05)
}

export function playCorrect() {
  if (isMuted()) return
  playTone({ freq: 523.25, duration: 0.12 })
  playTone({ freq: 783.99, duration: 0.18, startOffset: 0.1 })
}

export function playWrong() {
  if (isMuted()) return
  playTone({ freq: 220, duration: 0.18, type: "square", peakGain: 0.08 })
  playTone({
    freq: 165,
    duration: 0.22,
    type: "square",
    peakGain: 0.08,
    startOffset: 0.08,
  })
}
