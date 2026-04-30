export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="text-4xl font-bold">Safety Standards</h1>

        <p className="mt-6 text-white/70">
          Zero2Sixty Media LLC is committed to maintaining a safe platform across
          all applications, including HypeLoop. We have a strict zero-tolerance
          policy against child sexual abuse and exploitation (CSAE).
        </p>

        <div className="mt-10 space-y-6 text-white/80">
          <div>
            <h2 className="text-xl font-semibold">Zero Tolerance Policy</h2>
            <p className="mt-2">
              Any content or behavior that involves or promotes child sexual
              abuse or exploitation is strictly prohibited. Accounts found
              engaging in such behavior will be permanently removed and may be
              reported to appropriate law enforcement authorities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">User Reporting</h2>
            <p className="mt-2">
              Users can report content or accounts directly within the app. All
              reports are reviewed and appropriate action is taken, including
              removal of content and suspension of accounts.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Moderation</h2>
            <p className="mt-2">
              We actively monitor and moderate user-generated content to prevent
              harmful or illegal activity. This includes reviewing reports and
              taking action when violations occur.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Compliance</h2>
            <p className="mt-2">
              We comply with all applicable child safety laws and cooperate with
              law enforcement when required. We are committed to preventing,
              detecting, and responding to child sexual abuse material (CSAM).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-2">
              For safety concerns or reports, contact:
            </p>
            <p className="mt-2 font-semibold text-cyan-400">
              zero2sixtymediallc@gmail.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}