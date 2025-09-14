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
            Hi there! 👋
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Got a question, idea, or just want to say hello? I'd love to hear from you!
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">
            What can I help you with?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                🔧 Something's not working
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Game acting up? Can't access a feature? Just describe what's happening and I'll help you get it sorted.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                📊 About the data
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Think a calorie count looks off? Want to suggest foods to add? I'm always working to make the nutrition info more accurate and interesting.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                🎓 Using Shredle in education
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Teacher, nutritionist, or health pro? I'd love to chat about how Shredle could work in your classroom or practice.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                💡 Ideas & requests
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                What would make Shredle even better? New game modes, mobile app, specific food categories? All ideas welcome!
              </p>
            </div>
          </div>
        </section>


        <section>
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
                  Email
                </h4>
                <span className="group-hover:text-orange-900 text-gray-700 dark:text-gray-300 dark:group-hover:text-orange-300 text-lg">
                  sadiqdotdigital@gmail.com
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Your go-to for everything Shredle-related
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
                How accurate are the calorie values?
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                I pull data from reliable nutrition databases, but calorie counts can vary based on how food is prepared, what brand it is, and serving sizes. I'm always updating things when I find better info!
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Can I suggest new foods?
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Yes please! I especially love suggestions for foods that might surprise people. Just let me know the food and any details about how it's prepared.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Can I use this in my classroom?
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Absolutely! Teachers and health professionals use Shredle all the time. If you need anything special for your class or institution, just ask.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 dark:bg-gray-800/50 p-6 rounded-xl">
          <h3 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">
            A quick note
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            I built Shredle because I think learning about nutrition should be fun and accessible. Your messages and ideas help make it better for everyone who plays.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Don't worry—I keep all emails private and only use your feedback to improve the game.
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
