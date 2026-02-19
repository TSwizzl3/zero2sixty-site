// src/app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zero2Sixty Media",
  description:
    "Privacy Policy for Zero2Sixty Media LLC covering data collection, usage, and protection practices.",
};

export default function PrivacyPage() {
  return (
    <main className="container6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-white/50">
        Effective Date: {new Date().getFullYear()}
      </p>

      <div className="mt-10 space-y-10 text-white/80 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
          <p className="mt-3">
            Zero2Sixty Media LLC ("we", "our", or "us") respects your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            2. Information We Collect
          </h2>
          <p className="mt-3">
            We may collect personal information that you voluntarily provide to
            us when you:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Fill out a contact form</li>
            <li>Start a project inquiry</li>
            <li>Subscribe to updates</li>
            <li>Email us directly</li>
          </ul>
          <p className="mt-4">
            This information may include your name, email address, company name,
            and project details.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            3. Automatically Collected Information
          </h2>
          <p className="mt-3">
            We may collect certain information automatically, including:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited</li>
            <li>Referring website</li>
          </ul>
          <p className="mt-4">
            This data may be collected through analytics services to improve
            website performance and user experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            4. How We Use Your Information
          </h2>
          <p className="mt-3">
            We use collected information to:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Respond to inquiries</li>
            <li>Provide project quotes and services</li>
            <li>Improve our website</li>
            <li>Communicate with you about services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            5. Sharing of Information
          </h2>
          <p className="mt-3">
            We do not sell your personal information. We may share information
            with trusted service providers (such as hosting providers or email
            services) solely for the purpose of operating our business.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            6. Data Security
          </h2>
          <p className="mt-3">
            We implement reasonable administrative and technical safeguards to
            protect your information. However, no method of transmission over the
            internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            7. Your Rights
          </h2>
          <p className="mt-3">
            You may request access to, correction of, or deletion of your
            personal information by contacting us at the email below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            8. Third-Party Services
          </h2>
          <p className="mt-3">
            Our website may use third-party tools such as analytics providers,
            hosting platforms, and embedded services. These services may collect
            data in accordance with their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            9. Updates to This Policy
          </h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. Updates will be
            posted on this page with a revised effective date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            10. Contact Us
          </h2>
          <p className="mt-3">
            If you have any questions about this Privacy Policy, you may contact:
          </p>
          <p className="mt-3">
            <strong>Zero2Sixty Media LLC</strong>
            <br />
            Email: tanner@zero2sixtymedia.com
          </p>
        </section>
      </div>
    </main>
  );
}
