import HowToPlay from "./HowToPlay"

export default function GameHeader() {
  return (
    <header className="text-center py-6 mt-10">
      <h1 className="text-5xl font-bold text-green-500 mb-2">
        🍔 Shreddle.com
      </h1>
      <p className="text-green-500">
        Guess which fast-food item has more calories!
      </p>
      <div className="mt-4">
        <HowToPlay />
      </div>
    </header>
  )
}
