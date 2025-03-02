import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"

export const metadata: Metadata = {
  title: "Shredle - Privacy Policy",
  description: "Read our privacy policy to understand how we handle your data.",
}

export default function Privacy() {
  return (
    <FooterPagesLayout title="Privacy Policy for Shredle">
      <section className="space-y-4">
        <h2 className="text-md font-bold mt-4">Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your
          gaming experience and collect usage statistics. These technologies
          help us understand how users interact with Shredle and improve our
          services. You can manage cookie preferences through your browser
          settings, giving you control over your data tracking.
        </p>

        <h2 className="text-md font-bold mt-4">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically to reflect changes in
          our data practices or legal requirements. We will notify you of any
          significant changes by posting the new policy on this page. We
          encourage you to review this policy regularly to stay informed about
          how we protect your information.
        </p>

        <h2 className="text-md font-bold mt-4">Contact Information</h2>
        <p>
          For any privacy-related questions, concerns, or requests, please
          contact us. We are committed to addressing your privacy inquiries
          promptly and transparently.
        </p>

        <p className="mt-4 text-sm italic">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </section>
    </FooterPagesLayout>
  )
}
