import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flagged Safety Standards | Zero2Sixty Media",
  description:
    "Zero2Sixty Media LLC safety standards for Flagged, including child sexual abuse and exploitation prevention.",
};

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-4 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
          Flagged safety standards
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Child safety and CSAE prevention standards
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/70">
          Zero2Sixty Media LLC is committed to maintaining a safe platform across
          all applications, including Flagged. We have a strict zero-tolerance
          policy against child sexual abuse and exploitation (CSAE), child
          sexual abuse material (CSAM), grooming, sexual extortion, trafficking,
          or any content or conduct that sexualizes or exploits minors.
        </p>

        <div className="mt-10 space-y-6 text-white/80">
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold text-white">
              Zero tolerance policy
            </h2>
            <p className="mt-3 leading-7">
              Any content or behavior that involves or promotes child sexual
              abuse or exploitation is strictly prohibited. Accounts found to be
              engaging in this behavior may be permanently removed, banned, and
              reported to appropriate regional or national authorities.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold text-white">
              In-app reporting
            </h2>
            <p className="mt-3 leading-7">
              Flagged allows users to report posts, comments, and user accounts
              directly in the app. Reports involving child safety concerns are
              prioritized for review and action.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold text-white">
              Moderation and enforcement
            </h2>
            <p className="mt-3 leading-7">
              We review user-generated content reports and take appropriate
              enforcement action, including removing content, muting users,
              banning accounts, preserving relevant evidence when legally
              required, and escalating suspected CSAM or CSAE to appropriate
              authorities.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold text-white">
              Legal compliance
            </h2>
            <p className="mt-3 leading-7">
              We comply with applicable child safety laws and cooperate with law
              enforcement and relevant child safety authorities when required.
              We are committed to preventing, detecting, reporting, and
              responding to child sexual abuse material and exploitation.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold text-white">
              Designated child safety contact
            </h2>
            <p className="mt-3 leading-7">
              For Flagged child safety concerns, CSAE/CSAM reports, or
              compliance questions, contact:
            </p>
            <p className="mt-4 break-words font-semibold text-emerald-400">
              zero2sixtymediallc@gmail.com
            </p>
          </section>
        </div>

        <p className="mt-10 text-sm text-white/45">Last updated: July 24, 2026</p>
      </section>
    </main>
  );
}
