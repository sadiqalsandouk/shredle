import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"

export const metadata: Metadata = {
  title: "Cookie Policy - Shredle",
  description:
    "Learn how Shredle uses cookies and how to manage your preferences, including advertising and analytics cookies.",
}

export default function CookiePolicy() {
  return (
    <FooterPagesLayout title="Cookie Policy">
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <div className="text-sm text-gray-600 dark:text-gray-400">By <span className="font-medium">Sadiq</span> • Published 2024-05-01 • Updated 2025-09-14</div>

        <section>
          <h2 className="text-lg font-bold mb-2 text-orange-700 dark:text-orange-400">What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device to help websites function, analyze usage, and personalize content such as ads.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2 text-orange-700 dark:text-orange-400">How We Use Cookies</h2>
          <ul className="list-disc pl-6">
            <li><strong>Essential:</strong> Required for basic functionality and security</li>
            <li><strong>Preferences:</strong> Save your settings</li>
            <li><strong>Analytics:</strong> Understand usage to improve Shredle</li>
            <li><strong>Advertising:</strong> Show relevant ads via Google AdSense</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2 text-orange-700 dark:text-orange-400">Managing Your Choices</h2>
          <p>You can accept or reject cookies using our banner. You can also clear or block cookies via your browser settings at any time.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2 text-orange-700 dark:text-orange-400">Advertising Partners</h2>
          <p>We use Google AdSense. See our <a className="underline text-orange-700 dark:text-orange-400" href="/privacy">Privacy Policy</a> and <a className="underline text-orange-700 dark:text-orange-400" href="/ads.txt">ads.txt</a>.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2 text-orange-700 dark:text-orange-400">Contact</h2>
          <p>Questions? Email <a className="underline text-orange-700 dark:text-orange-400" href="mailto:sadiqdotdigital@gmail.com">sadiqdotdigital@gmail.com</a>.</p>
        </section>
      </div>
    </FooterPagesLayout>
  )
}


