import Link from "next/link"

export default function Footer() {
  return (
    <footer className="text-xs sm:text-sm py-3 sm:py-4 px-2 sm:px-4">
      <div className="container mx-auto flex flex-row flex-wrap justify-center gap-2 sm:gap-4">
        <Link
          className="text-orange-700 hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-300 transition-colors duration-200"
          href="/"
        >
          Play
        </Link>
        <Link
          className="text-orange-700 hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-300 transition-colors duration-200"
          href="/privacy"
        >
          Privacy
        </Link>
        <Link
          className="text-orange-700 hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-300 transition-colors duration-200"
          href="/terms"
        >
          Terms
        </Link>
        <Link
          className="text-orange-700 hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-300 transition-colors duration-200"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </footer>
  )
}
