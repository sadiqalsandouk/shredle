import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"
import { X } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Shredle - Contact",
  description: "Get in touch with me for any queries or support.",
}

export default function Contact() {
  return (
    <FooterPagesLayout title="Contact">
      <div className="space-y-8">
        <p className="text-orange-800">
          Have questions, feedback, or spotted a bug?
        </p>
        <div className="space-y-4">
          <Link
            href="https://twitter.com/sadiqdotdigital"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div
              className="bg-white/80 rounded-lg p-4 shadow-sm 
              transition-all duration-300 
              group-hover:shadow-md group-hover:bg-white/90 
              group-hover:-translate-y-0.5"
            >
              <h2 className="text-lg font-semibold text-orange-800 flex items-center gap-2 mb-2">
                <X className="w-5 h-5" />
              </h2>
              <span className="text-orange-700 group-hover:text-orange-900">
                @sadiqdotdigital
              </span>
            </div>
          </Link>
        </div>
      </div>
    </FooterPagesLayout>
  )
}
