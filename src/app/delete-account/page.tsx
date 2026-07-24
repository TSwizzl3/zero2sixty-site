import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Flagged Account | Zero2Sixty Media",
  description:
    "Request deletion of your Flagged account and associated app data from Zero2Sixty Media LLC.",
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-4 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
          Flagged account deletion
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Delete your Flagged account and data
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/70">
          You can request deletion of your Flagged account and associated app
          data at any time. This page explains how to make the request, what
          data is deleted, and what limited information may be retained.
        </p>

        <div className="mt-10 space-y-6 text-white/80">
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold text-white">
              How to request deletion
            </h2>
            <p className="mt-3 leading-7">
              Email Zero2Sixty Media LLC from the email address connected to
              your Flagged account. Use the subject line{" "}
              <strong>Delete my Flagged account</strong>.
            </p>
            <p className="mt-3 leading-7">
              Include your Flagged username or display name if you have one, so
              we can confirm the correct account.
            </p>
            <p className="mt-4 break-words font-semibold text-emerald-400">
              support@zero2sixtymediallc.com
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold text-white">Data deleted</h2>
            <p className="mt-3 leading-7">
              When your request is processed, we delete or de-identify
              account-associated Flagged data, including:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
              <li>Your account profile and profile settings</li>
              <li>Your posts, comments, votes, and anonymous-post usage records</li>
              <li>Your reports, moderation records, and app activity tied to your account</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] p-6">
            <h2 className="text-xl font-semibold text-white">
              Data we may keep temporarily
            </h2>
            <p className="mt-3 leading-7">
              We may retain limited records when required for legal, security,
              fraud prevention, abuse prevention, dispute resolution, or policy
              enforcement reasons.
            </p>
            <p className="mt-3 leading-7">
              Deletion requests are typically processed within 30 days after we
              verify the request.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold text-white">Questions</h2>
            <p className="mt-3 leading-7">
              For questions about account deletion, privacy, or data handling,
              contact us at{" "}
              <span className="break-words font-semibold text-emerald-400">
                support@zero2sixtymediallc.com
              </span>
              .
            </p>
          </section>
        </div>

        <p className="mt-10 text-sm text-white/45">Last updated: July 23, 2026</p>
      </section>
    </main>
  );
}
