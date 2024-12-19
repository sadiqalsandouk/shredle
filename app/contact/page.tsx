import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"

export const metadata: Metadata = {
  title: "Shredle - Contact Us",
  description: "Get in touch with us for any queries or support.",
}

export default function Contact() {
  return (
    <FooterPagesLayout title="Contact Us">
      <p>Get in touch with us.</p>
    </FooterPagesLayout>
  )
}
