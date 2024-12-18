import FooterPagesLayout from "../components/FooterPagesLayout"

export default function TermsAndConditions() {
  return (
    <FooterPagesLayout title="Terms and Conditions for Shredle">
      <section className="space-y-4">
        <h2 className="text-md font-bold mt-4">Acceptance of Terms</h2>
        <p>
          Welcome to Shredle. By accessing or using our game, you agree to be
          bound by these Terms and Conditions. These terms govern your use of
          our game and establish the legal relationship between you and Shredle.
          Please read these terms carefully before playing. By continuing to use
          Shredle, you acknowledge that you have read, understood, and agreed to
          these terms.
        </p>

        <h2 className="text-md font-bold mt-4">User Eligibility</h2>
        <p>
          To use Shredle, you must be at least 13 years old. By using our game,
          you represent and warrant that you meet the age requirement. If you
          are between 13 and 18 years old, you must have parental or guardian
          consent to use our game. We reserve the right to verify age and
          restrict access if we suspect a user does not meet these criteria.
        </p>

        <h2 className="text-md font-bold mt-4">User Account</h2>
        <p>
          When creating an account, you agree to provide accurate, current, and
          complete information. You are responsible for maintaining the
          confidentiality of your account credentials and for all activities
          that occur under your account. You agree to notify us immediately of
          any unauthorized use of your account. Shredle reserves the right to
          suspend or terminate your account if we believe you have violated
          these terms.
        </p>

        <h2 className="text-md font-bold mt-4">Intellectual Property Rights</h2>
        <p>
          All content within Shredle, including game design, graphics, audio,
          software, and text, is the property of Shredle and protected by
          intellectual property laws. You are granted a limited, non-exclusive,
          non-transferable license to use the game for personal, non-commercial
          purposes. You may not reproduce, distribute, modify, create derivative
          works, or exploit any part of the game without our explicit written
          consent.
        </p>

        <h2 className="text-md font-bold mt-4">User Conduct</h2>
        <p>
          When using Shredle, you agree not to engage in any conduct that may
          disrupt the gaming experience or violate these terms. Prohibited
          activities include, but are not limited to, harassing other users,
          using offensive language, sharing inappropriate content, attempting to
          hack or manipulate the game, or using cheats or unauthorized
          third-party software. We reserve the right to investigate and take
          appropriate action against any violations.
        </p>

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

        <h2 className="text-md font-bold mt-4">
          Third-Party Links and Services
        </h2>
        <p>
          Our game may contain links to third-party websites or services through
          advertisements or other means. We are not responsible for the content,
          privacy policies, or practices of these external sites. Accessing
          these links is at your own risk, and we encourage you to review their
          terms and privacy policies before interaction.
        </p>

        <h2 className="text-md font-bold mt-4">Limitation of Liability</h2>
        <p>
          Shredle is provided &quot;as is&quot; without any warranties. We are
          not liable for any direct, indirect, incidental, special, or
          consequential damages arising from your use of the game. This
          includes, but is not limited to, loss of data, interruption of
          service, or any damages resulting from errors, bugs, or game
          modifications.
        </p>

        <h2 className="text-md font-bold mt-4">
          Modifications to the Game and Terms
        </h2>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of
          Shredle at any time without prior notice. We may also update these
          Terms and Conditions periodically. Continued use of the game after
          changes constitutes acceptance of the new terms. We encourage you to
          review these terms regularly to stay informed about any updates.
        </p>

        <h2 className="text-md font-bold mt-4">Dispute Resolution</h2>
        <p>
          Any disputes arising from the use of Shredle shall be resolved through
          amicable negotiation. If a resolution cannot be reached, the dispute
          will be subject to arbitration in accordance with the rules of the
          laws of England and Wales. The prevailing party in any dispute shall
          be entitled to recover reasonable legal fees and costs.
        </p>

        <h2 className="text-md font-bold mt-4">Governing Law</h2>
        <p>
          These Terms and Conditions are governed by and construed in accordance
          with the laws of the laws of England and Wales. Any legal actions or
          proceedings related to Shredle shall be brought exclusively in the
          courts of the laws of England and Wales.
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
