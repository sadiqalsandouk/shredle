import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"
import { Mail } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Shredle - Support, Feedback & Educational Partnerships",
  description: "Get in touch with Shredle for technical support, content feedback, educational partnerships, or feature requests. We respond within 24-48 hours to help with your nutrition education journey.",
  keywords: [
    "contact shredle",
    "nutrition education support",
    "food calorie game support",
    "educational partnerships",
    "technical support",
    "feedback",
    "customer service",
  ],
}

export default function Contact() {
  return (
    <FooterPagesLayout title="Contact">
      <div className="space-y-8">
        <div className="text-sm text-gray-600 dark:text-gray-400">By <span className="font-medium">Sadiq</span> • Updated {new Date().toLocaleDateString()}</div>
        <section>
          <h2 className="text-xl font-bold mb-4 text-orange-700 dark:text-orange-400">
            Get in Touch with Shredle
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We&apos;re here to help make your nutrition education journey with Shredle as engaging and informative as possible. Whether you have questions about the game, suggestions for improvement, technical issues, or just want to share your experience, we&apos;d love to hear from you.
          </p>
          <div className="bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-300">
            I read and reply to emails personally. If you spotted a weird calorie comparison or have a feature idea, send it over—those are the messages that make Shredle better for everyone.
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">
            How We Can Help You
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Technical Support
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Experiencing issues with the game? Browser compatibility problems? Trouble accessing certain features? We'll help you troubleshoot and get back to learning about nutrition.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Content Feedback
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Found inaccurate calorie information? Have suggestions for new food items? Want to see specific nutrition topics covered? Your feedback helps us improve our educational content.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Educational Partnerships
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Are you an educator, nutritionist, or health professional interested in using Shredle as a teaching tool? We'd love to discuss how our platform can support nutrition education in your context.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Feature Requests
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Have ideas for new game modes? Want to see specific dietary categories (vegan, keto, etc.)? Suggestions for mobile app features? We consider all user feedback in our development roadmap.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">
            Response Times and Support
          </h3>
          <div className="bg-orange-50 dark:bg-gray-800/50 p-5 rounded-lg mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              We typically respond to all inquiries within 24-48 hours during business days. For urgent technical issues that prevent you from using the game, we aim to respond within 12 hours.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              When contacting us, please include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Your browser type and version (Chrome, Firefox, Safari, etc.)</li>
              <li>Your device type (desktop, mobile, tablet)</li>
              <li>A detailed description of the issue or question</li>
              <li>Screenshots if applicable (especially for technical issues)</li>
              <li>Any error messages you've encountered</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">
            Connect With Us
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Ready to get in touch? We're always excited to connect with our community of nutrition enthusiasts and learners.
          </p>
          <div className="text-gray-700 dark:text-gray-300 space-y-4">
            <Link
              href="mailto:sadiqdotdigital@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div
                className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-6 shadow-sm 
                transition-all duration-300 
                group-hover:shadow-md group-hover:bg-white/90 dark:group-hover:bg-gray-700/90
                group-hover:-translate-y-0.5"
              >
                <h4 className="text-lg font-semibold text-orange-800 dark:text-orange-300 flex items-center gap-3 mb-3">
                  <Mail className="w-6 h-6" />
                  Email Support
                </h4>
                <span className="group-hover:text-orange-900 text-gray-700 dark:text-gray-300 dark:group-hover:text-orange-300 text-lg">
                  sadiqdotdigital@gmail.com
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Primary contact for all inquiries, support requests, and feedback
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Q: How accurate are the calorie values in Shredle?
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                A: We source our calorie data from reliable nutrition databases and government sources. However, actual calorie content can vary based on preparation methods, brands, and serving sizes. We continuously review and update our data for accuracy.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Q: Can I suggest new foods to be added to the game?
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                A: Absolutely! We welcome suggestions for new foods, especially those that might surprise players or provide educational value. Please include the food name and any specific details about preparation or serving size.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Q: Is Shredle suitable for use in educational settings?
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                A: Yes! Many educators use Shredle as a engaging way to teach about nutrition and calorie awareness. Contact us if you're interested in educational licensing or bulk access for your institution.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 dark:bg-gray-800/50 p-6 rounded-xl">
          <h3 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">
            Our Commitment to You
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            At Shredle, we're passionate about making nutrition education accessible, engaging, and fun. Your feedback and questions help us continue improving the platform for everyone in our community.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We respect your privacy and will never share your contact information with third parties. All communication is handled confidentially and used solely to improve your Shredle experience.
          </p>
        </section>

        <div className="text-sm text-gray-600 dark:text-gray-400 italic">
          <p>
            Note: For privacy-related inquiries, please refer to our Privacy Policy. For terms of service questions, please see our Terms and Conditions page.
          </p>
        </div>
      </div>
    </FooterPagesLayout>
  )
}
