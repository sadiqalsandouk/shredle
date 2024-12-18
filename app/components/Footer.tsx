import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <footer className="text-black py-4">
      <div className="container mx-auto flex justify-center space-x-4">
        <Link href="/">Play</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms & Conditions</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </footer>
  )
}
