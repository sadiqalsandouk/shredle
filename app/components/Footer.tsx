import Link from "next/link"

export default function Footer() {
  return (
    <footer className="text-sm py-4 px-4">
      <div className="container mx-auto flex flex-row flex-wrap justify-center gap-4">
        <Link
          className="text-orange-700 hover:text-orange-900 transition-colors duration-200"
          href="/"
        >
          Play
        </Link>
        <Link
          className="text-orange-700 hover:text-orange-900 transition-colors duration-200"
          href="/privacy"
        >
          Privacy Policy
        </Link>
        <Link
          className="text-orange-700 hover:text-orange-900 transition-colors duration-200"
          href="/terms"
        >
          Terms & Conditions
        </Link>
        <Link
          className="text-orange-700 hover:text-orange-900 transition-colors duration-200"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </footer>
  )
}
