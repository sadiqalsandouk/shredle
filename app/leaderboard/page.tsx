import Leaderboard from "../components/Leaderboard"

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-2 text-orange-800 dark:text-orange-300">
        Streak Leaderboard
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        See who has the highest score in Shredle!
      </p>
      <Leaderboard limit={20} />
    </div>
  )
}
