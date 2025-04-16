import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"

export const metadata: Metadata = {
  title: "Shredle - Privacy Policy",
  description:
    "Read our privacy policy to understand how we handle your data and protect your privacy when using Shredle.",
  keywords: [
    "privacy policy",
    "data protection",
    "cookies",
    "user data",
    "GDPR",
    "privacy rights",
  ],
}

export default function Privacy() {
  return (
    <FooterPagesLayout title="Privacy Policy for Shredle">
      <section className="space-y-6">
        <div className="text-gray-700 dark:text-gray-300 mb-6">
          <p>Effective Date: {new Date().toLocaleDateString()}</p>
          <p className="mt-2">
            At Shredle, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use
            our service.
          </p>
          <p className="mt-2">
            By accessing or using Shredle, you agree to this Privacy Policy. If
            you do not agree with the terms of this Privacy Policy, please do
            not access the application.
          </p>
        </div>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Information We Collect
        </h2>
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <p>
            We collect information in several ways when you use our service:
          </p>
          <h3 className="font-semibold text-orange-600 dark:text-orange-400">
            Automatically Collected Information
          </h3>
          <p>
            When you use Shredle, our servers automatically record certain
            information, including:
          </p>
          <ul className="list-disc pl-6">
            <li>Device information (type of device, operating system)</li>
            <li>Browser type and version</li>
            <li>IP address</li>
            <li>Referring/exit pages</li>
            <li>Date/time stamps</li>
            <li>Game performance and interaction data</li>
          </ul>

          <h3 className="font-semibold text-orange-600 dark:text-orange-400">
            Game Data
          </h3>
          <p>We collect information about your gameplay, including:</p>
          <ul className="list-disc pl-6">
            <li>Game scores and streaks</li>
            <li>Game completion statistics</li>
            <li>Game preferences and settings</li>
          </ul>
        </div>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          How We Use Your Information
        </h2>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <p>
            We use the information we collect for various purposes, including
            to:
          </p>
          <ul className="list-disc pl-6">
            <li>Provide, maintain, and improve our service</li>
            <li>Track gameplay statistics and manage leaderboards</li>
            <li>Monitor and analyze usage patterns and trends</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Personalize your experience</li>
            <li>Deliver targeted advertisements</li>
          </ul>
        </div>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Cookies and Tracking Technologies
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          We use cookies and similar tracking technologies to enhance your
          gaming experience and collect usage statistics. These technologies
          help us understand how users interact with Shredle and improve our
          services. You can manage cookie preferences through your browser
          settings, giving you control over your data tracking.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          The types of cookies we use include:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Essential Cookies:</strong> Required for the basic
            functionality of the game
          </li>
          <li>
            <strong>Preference Cookies:</strong> Remember your settings and
            preferences
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Help us understand how you
            interact with our service
          </li>
          <li>
            <strong>Advertising Cookies:</strong> Used to deliver relevant
            advertisements
          </li>
        </ul>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Third-Party Services
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          We may use third-party services, such as analytics providers and
          advertising networks, that collect, monitor, and analyze user data.
          These third parties may use cookies or similar tracking technologies
          to collect information.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Our service may include advertisements from Google AdSense, which may
          collect and use data about your visits to this and other websites to
          serve more relevant ads.
        </p>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Data Security
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          We implement appropriate technical and organizational measures to
          protect the information we collect and store. However, no method of
          transmission over the Internet or electronic storage is 100% secure,
          and we cannot guarantee absolute security.
        </p>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Your Rights and Choices
        </h2>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information, including:
          </p>
          <ul className="list-disc pl-6">
            <li>The right to access information we have about you</li>
            <li>The right to correct inaccurate or incomplete information</li>
            <li>The right to delete your personal information</li>
            <li>
              The right to restrict or object to our processing of your
              information
            </li>
            <li>The right to data portability</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, please contact us using the information
            provided below.
          </p>
        </div>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Children&apos;s Privacy
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Our service is not directed to children under the age of 13. We do not
          knowingly collect personal information from children under 13. If we
          become aware that we have collected personal information from a child
          under 13, we will take steps to remove that information.
        </p>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Changes to This Policy
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          We may update this Privacy Policy periodically to reflect changes in
          our data practices or legal requirements. We will notify you of any
          significant changes by posting the new policy on this page. We
          encourage you to review this policy regularly to stay informed about
          how we protect your information.
        </p>

        <h2 className="text-lg font-bold mt-6 text-orange-700 dark:text-orange-400">
          Contact Information
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          For any privacy-related questions, concerns, or requests, please
          contact us at{" "}
          <a
            href="mailto:sadiqdotdigital@gmail.com"
            className="text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300"
          >
            sadiqdotdigital@gmail.com
          </a>
          . We are committed to addressing your privacy inquiries promptly and
          transparently.
        </p>

        <p className="mt-6 text-sm italic text-gray-600 dark:text-gray-400">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </section>
    </FooterPagesLayout>
  )
}
