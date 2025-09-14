import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-5 px-4 mt-8 border-t border-orange-200 dark:border-gray-800 bg-orange-50/50 dark:bg-gray-900/30 text-sm">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
          {/* Game Links */}
          <div>
            <h3 className="font-semibold text-orange-700 dark:text-orange-400 mb-2 text-xs uppercase tracking-wider">
              Game
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-300"
                >
                  Play
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/streak"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-300"
                >
                  Streak
                </Link>
              </li>
              <li>
                <Link
                  href="/protein"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-300"
                >
                  Protein
                </Link>
              </li>
              <li>
                <Link
                  href="/leaderboard"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-300"
                >
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Nutrition Resources */}
          <div>
            <h3 className="font-semibold text-orange-700 dark:text-orange-400 mb-2 text-xs uppercase tracking-wider">
              Nutrition
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/nutrition-guide"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-300"
                >
                  Nutrition Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/calorie-guide"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-300"
                >
                  Calorie Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/healthy-eating"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-300"
                >
                  Healthy Eating
                </Link>
              </li>
            </ul>
          </div>

          {/* Food Science */}
          <div>
            <h3 className="font-semibold text-orange-700 dark:text-orange-400 mb-2 text-xs uppercase tracking-wider">
              Food Science
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/food-science"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-300"
                >
                  Food Science
                </Link>
              </li>
              <li>
                <Link
                  href="/cooking-calories"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-300"
                >
                  Cooking Calories
                </Link>
              </li>
              <li>
                <Link
                  href="/food-facts"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-300"
                >
                  Food Facts
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-orange-700 dark:text-orange-400 mb-2 text-xs uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-300"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-300"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-300"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 dark:text-gray-400 pt-3 border-t border-orange-100 dark:border-gray-800">
          © {new Date().getFullYear()} Shredle. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
