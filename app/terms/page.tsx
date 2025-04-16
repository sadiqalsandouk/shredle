import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"

export const metadata: Metadata = {
  title: "Shredle - Terms and Conditions",
  description:
    "Read our Terms and Conditions to understand the rules and guidelines for using Shredle and your responsibilities as a user.",
  keywords: [
    "terms of service",
    "user agreement",
    "legal terms",
    "usage policy",
    "copyright",
    "intellectual property",
  ],
}

export default function TermsAndConditions() {
  return (
    <FooterPagesLayout title="Terms and Conditions for Shredle">
      <section className="space-y-6">
        <div className="text-gray-700 dark:text-gray-300 mb-6">
          <p>Effective Date: {new Date().toLocaleDateString()}</p>
          <p className="mt-2">
            Welcome to Shredle! These Terms and Conditions govern your use of
            our web application and services. By accessing or using Shredle, you
            agree to be bound by these Terms. If you disagree with any part of
            these Terms, you may not access our service.
          </p>
        </div>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Acceptance of Terms
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          By accessing or using Shredle, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and Conditions, as
          well as our Privacy Policy. If you are using our service on behalf of
          an organization, you agree to these Terms on behalf of that
          organization.
        </p>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Service Description
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Shredle is a web-based game that challenges users to compare the
          calorie content of different foods. We provide this service for
          educational and entertainment purposes. The game presents information
          about food calorie content that is derived from generally available
          sources, and while we strive for accuracy, we do not guarantee the
          precision of all calorie values presented.
        </p>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          User Accounts and Responsibilities
        </h2>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <p>When using our service, you agree to:</p>
          <ul className="list-disc pl-6">
            <li>
              Provide accurate information if account creation is required
            </li>
            <li>Maintain the security of your account information</li>
            <li>
              Accept responsibility for all activities that occur under your
              account
            </li>
            <li>Not use the service for any illegal or unauthorized purpose</li>
            <li>
              Not attempt to interfere with or disrupt the service or servers
            </li>
          </ul>
        </div>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Intellectual Property
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          All content included on Shredle, such as text, graphics, logos,
          images, audio clips, digital downloads, data compilations, and
          software, is the property of Shredle or its content suppliers and is
          protected by international copyright laws. The compilation of all
          content on this site is the exclusive property of Shredle and is
          protected by international copyright laws.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          You may not reproduce, duplicate, copy, sell, resell, or exploit any
          portion of the service or content without express written permission
          from Shredle.
        </p>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Advertisements
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Shredle is a free-to-play game supported by advertisements. By using
          our game, you acknowledge and agree to the presence of ads during your
          gameplay. We strive to balance the advertising experience with game
          enjoyment, but reserve the right to modify our ad placement and
          frequency.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          You agree not to interact with advertisements in any fraudulent or
          harmful manner. This includes, but is not limited to, intentionally
          clicking ads to generate false revenue, using automated tools to
          interact with ads, or attempting to circumvent ad-blocking detection.
        </p>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Limitation of Liability
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          To the maximum extent permitted by applicable law, Shredle and its
          affiliates, officers, employees, agents, partners, and licensors shall
          not be liable for any indirect, incidental, special, consequential, or
          punitive damages, including without limitation, loss of profits, data,
          use, goodwill, or other intangible losses, resulting from:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mt-2">
          <li>
            Your access to or use of or inability to access or use the service
          </li>
          <li>Any conduct or content of any third party on the service</li>
          <li>Any content obtained from the service</li>
          <li>
            Unauthorized access, use, or alteration of your transmissions or
            content
          </li>
        </ul>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Disclaimer of Warranties
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Shredle is provided on an &quot;AS IS&quot; and &quot;AS
          AVAILABLE&quot; basis. We expressly disclaim all warranties of any
          kind, whether express or implied, including but not limited to the
          implied warranties of merchantability, fitness for a particular
          purpose, and non-infringement.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          We do not guarantee that the service will be uninterrupted, timely,
          secure, or error-free, or that the results obtained from using the
          service will be accurate or reliable.
        </p>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Governing Law
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          These Terms shall be governed and construed in accordance with the
          laws of the United Kingdom, without regard to its conflict of law
          provisions. Our failure to enforce any right or provision of these
          Terms will not be considered a waiver of those rights.
        </p>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Changes to Terms
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          We reserve the right to modify or replace these Terms at any time at
          our sole discretion. If we make material changes to these Terms, we
          will provide notice through our service or by other means. Your
          continued use of the service after any such changes constitutes your
          acceptance of the new Terms.
        </p>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Termination
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          We may terminate or suspend your access to our service immediately,
          without prior notice or liability, for any reason whatsoever,
          including without limitation if you breach these Terms. Upon
          termination, your right to use the service will immediately cease.
        </p>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Contact Information
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          If you have any questions or concerns about these Terms and
          Conditions, please contact us at{" "}
          <a
            href="mailto:sadiqdotdigital@gmail.com"
            className="text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300"
          >
            sadiqdotdigital@gmail.com
          </a>
          . We are committed to addressing your inquiries promptly and
          transparently.
        </p>

        <p className="mt-6 text-sm italic text-gray-600 dark:text-gray-400">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </section>
    </FooterPagesLayout>
  )
}
