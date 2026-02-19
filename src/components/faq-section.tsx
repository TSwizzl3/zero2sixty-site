// src/components/faq-section.tsx
const FAQS = [
  {
    q: "Do you offer payment plans?",
    a: "Yes — larger builds can be split into milestones (deposit + checkpoints + delivery).",
  },
  {
    q: "How fast can you turn projects around?",
    a: "Depends on scope. Promos can be days. MVP builds are usually weeks. You’ll get a timeline up front before anything starts.",
  },
  {
    q: "Do you do revisions?",
    a: "Yes. Most projects include 1–2 rounds. If you need more, we’ll scope it clearly (no surprise charges).",
  },
  {
    q: "Do you help with app store submissions?",
    a: "Yes — guidance and submission support is included with app packages.",
  },
];

export function FAQSection() {
  return (
    <section className="section">
      <div className="container6">
        <h2 className="h2">FAQ</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {FAQS.map((f) => (
            <div key={f.q} className="surface">
              <div className="surface-inner p-7">
                <div className="font-semibold">{f.q}</div>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-xs text-white/55">
          Still unsure? Start a project and you’ll get a clear quote + recommended scope.
        </div>
      </div>
    </section>
  );
}