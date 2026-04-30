export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="text-4xl font-bold">Delete Your Account</h1>

        <p className="mt-6 text-white/70">
          If you would like to delete your account and associated data from our
          services (including HypeLoop and Rebound), you can request deletion
          using one of the methods below.
        </p>

        <div className="mt-10 space-y-6 text-white/80">
          <div>
            <h2 className="text-xl font-semibold">Option 1 — In-App</h2>
            <p className="mt-2">
              You can delete your account directly inside the app by going to:
            </p>
            <p className="mt-2 font-semibold">
              Settings → Account → Delete Account
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Option 2 — Email Request</h2>
            <p className="mt-2">
              Send an email request to:
            </p>
            <p className="mt-2 font-semibold text-cyan-400">
              zero2sixtygraphics@gmail.com
            </p>
            <p className="mt-2 text-sm text-white/60">
              Include your account email/username so we can locate your account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">What Happens When You Delete</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Your account profile will be permanently removed</li>
              <li>Your data (messages, activity, saved items) will be deleted</li>
              <li>You will lose access to any subscriptions or features</li>
              <li>Some data may be retained for legal, security, or fraud prevention purposes</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Processing Time</h2>
            <p className="mt-2">
              Account deletion requests are typically processed within 7 days.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}