import HowToPlay from "./HowToPlay"

export default function GameHeader() {
  return (
    <header className="text-center py-6 mt-5">
      <h1 className="text-3xl sm:text-4xl font-semibold text-green-500 mb-2">
        🍔 Shredle.com
      </h1>
      <p className="text-green-500 sm:text-4xl font-semibold mt-3 text-3xl">
        Which has more calories?
      </p>
      <div className="mt-4">
        <HowToPlay />
      </div>
    </header>
  )
}
