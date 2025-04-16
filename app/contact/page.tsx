import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"
import { Mail } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Shredle - Contact",
  description: "Get in touch with me for any queries or support.",
}

export default function Contact() {
  return (
    <FooterPagesLayout title="Contact">
      <div className="space-y-8">
        <p className="text-gray-700 dark:text-gray-300">
          Have questions, feedback, or spotted a bug?
        </p>
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <Link
            href="mailto:sadiqdotdigital@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div
              className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-sm 
              transition-all duration-300 
              group-hover:shadow-md group-hover:bg-white/90 dark:group-hover:bg-gray-700/90
              group-hover:-translate-y-0.5"
            >
              <h2 className="text-lg font-semibold text-orange-800 dark:text-orange-300 flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5" />
              </h2>
              <span className="group-hover:text-orange-900 text-gray-700 dark:text-gray-300 dark:group-hover:text-orange-300">
                sadiqdotdigital@gmail.com
              </span>
            </div>
          </Link>
        </div>
      </div>
    </FooterPagesLayout>
  )
}
