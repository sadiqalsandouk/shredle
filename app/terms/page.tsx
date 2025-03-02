import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"

export const metadata: Metadata = {
  title: "Shredle - Terms and Conditions",
  description:
    "Read our Terms and Conditions to understand the rules and guidelines for using our service.",
}

export default function TermsAndConditions() {
  return (
    <FooterPagesLayout title="Terms and Conditions for Shredle">
      <section className="space-y-4">
        <h2 className="text-md font-bold mt-4">Advertisements</h2>
        <p>
          Shredle is a free-to-play game supported by advertisements. By using
          our game, you acknowledge and agree to the presence of ads during your
          gameplay. We strive to balance the advertising experience with game
          enjoyment, but reserve the right to modify our ad placement and
          frequency.
        </p>
        <p>
          You agree not to interact with advertisements in any fraudulent or
          harmful manner. This includes, but is not limited to, intentionally
          clicking ads to generate false revenue, using automated tools to
          interact with ads, or attempting to circumvent ad-blocking detection.
        </p>

        <h2 className="text-md font-bold mt-4">Contact Information</h2>
        <p>
          If you have any questions or concerns about these Terms and
          Conditions, please contact us at. We are committed to addressing your
          inquiries promptly and transparently.
        </p>

        <p className="mt-4 text-sm italic">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </section>
    </FooterPagesLayout>
  )
}
