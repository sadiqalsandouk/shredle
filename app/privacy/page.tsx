import FooterPagesLayout from "../components/FooterPagesLayout"

export default function Privacy() {
  return (
    <FooterPagesLayout title="Privacy Policy for Shredle">
      <section className="space-y-4">
        <h2 className="text-md font-bold mt-4">Information We Collect</h2>
        <p>
          At Shredle, we value your privacy and are committed to protecting your
          personal information. This Privacy Policy outlines how we collect,
          use, and safeguard your data when you use our game. By playing
          Shredle, you agree to the terms outlined in this policy. We collect
          various types of information to enhance your gaming experience. Usage
          Data includes information about your interactions with the game, such
          as game statistics, play times, and performance metrics. We may also
          collect Device Information, including device type, operating system,
          browser type, and unique device identifiers. If you choose to create
          an account, we collect your email address and username as Optional
          User Data.
        </p>

        <h2 className="text-md font-bold mt-4">How We Use Your Information</h2>
        <p>
          We use the collected information for several important purposes. Our
          primary goals are to provide and improve the Shredle gaming
          experience, analyze game usage and performance, communicate updates
          and features, and detect and prevent fraud or technical issues. This
          helps us ensure a smooth, engaging, and secure gaming environment for
          all our users.
        </p>

        <h2 className="text-md font-bold mt-4">Data Sharing and Disclosure</h2>
        <p>
          We do not sell or rent your personal information to third parties. We
          may share aggregated, anonymized data with service providers and
          technical partners, or when required by legal requirements or to
          protect our rights. Our commitment is to maintain the confidentiality
          and security of your personal information.
        </p>

        <h2 className="text-md font-bold mt-4">
          Advertisements and Third-Party Services
        </h2>
        <p>
          Shredle uses third-party advertising services to support the
          game&apos;s free-to-play model. These advertisements may collect and
          use data about your interactions, including device information, IP
          address, and usage patterns. We work with ad networks that aim to
          provide relevant and non-intrusive advertisements. While we strive to
          partner with reputable ad providers, we cannot directly control the
          data collection practices of these third-party advertisers.
        </p>
        <p>
          Advertisements may use cookies, pixel tags, and other tracking
          technologies to personalize ad content and measure advertising
          effectiveness. You can manage your ad preferences through your device
          settings or by adjusting your browser&apos;s cookie settings. Please
          note that opting out of personalized ads may not eliminate ad display
          entirely.
        </p>

        <h2 className="text-md font-bold mt-4">Data Security</h2>
        <p>
          We implement robust technical and organizational measures to protect
          your personal information. These include encryption of data
          transmission, conducting regular security assessments, and maintaining
          strict access controls and authentication mechanisms. Our goal is to
          prevent unauthorized access, disclosure, alteration, and destruction
          of your data.
        </p>

        <h2 className="text-md font-bold mt-4">Your Rights</h2>
        <p>
          We respect your data privacy rights. You have the right to request
          access to your personal data, request deletion of your data, and
          opt-out of data collection. Please note that opting out may limit
          certain game functionalities. We are committed to providing you with
          control over your personal information.
        </p>

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
