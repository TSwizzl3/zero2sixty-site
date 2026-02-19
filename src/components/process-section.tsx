// src/components/process-section.tsx
export function ProcessSection() {
  const steps = [
    {
      title: "01 · Align",
      desc: "We lock the goal, audience, and the one metric that matters.",
    },
    {
      title: "02 · Design",
      desc: "Premium direction that reads “legit” and converts better.",
    },
    {
      title: "03 · Build",
      desc: "Fast, focused execution — shipped in tight, reviewable iterations.",
    },
    {
      title: "04 · Launch",
      desc: "Deliver, refine, and optimize with real feedback. No guesswork.",
    },
  ];

  return (
    <section className="section">
      <div className="container6">
        <h2 className="h2">A simple process that ships.</h2>
        <p className="p max-w-2xl">
          Less chaos, more momentum — with polish that doesn’t look templated.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="surface">
              <div className="surface-inner p-6">
                <div className="text-sm text-white/65">{s.title}</div>
                <div className="mt-3 text-sm text-white/78 leading-relaxed">
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-xs text-white/55">
          You’ll get clear scope, clear pricing, and tight turnaround — before we build.
        </div>
      </div>
    </section>
  );
}