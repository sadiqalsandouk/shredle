import Link from "next/link"
import HowToPlay from "./HowToPlay"

export default function GameHeader() {
  return (
    <header className="">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-2xl sm:text-3xl 
              font-bold font-display"
          >
            <span className="text-2xl sm:text-3xl">🍔</span>
            <span
              className="bg-gradient-to-r from-orange-600 to-orange-800 
              bg-clip-text text-transparent hover:text-orange-800"
            >
              Shredle
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <HowToPlay />
          </div>
        </div>
      </div>
    </header>
  )
}
