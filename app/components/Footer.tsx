import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <footer className="text-black py-4 px-4">
      <div className="container mx-auto flex flex-row flex-wrap justify-center gap-4">
        <Link className="hover:text-gray-600" href="/">
          Play
        </Link>
        <Link className="hover:text-gray-600" href="/privacy">
          Privacy Policy
        </Link>
        <Link className="hover:text-gray-600" href="/terms">
          Terms & Conditions
        </Link>
        <Link className="hover:text-gray-600" href="/contact">
          Contact Us
        </Link>
      </div>
    </footer>
  )
}
