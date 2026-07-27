"use client";

import { useEffect, useState } from "react";

const navItems = [
  ["summary", "Summary"],
  ["scope", "Project"],
  ["findings", "Findings"],
  ["validation", "Validation"],
  ["readiness", "Readiness"],
  ["plan", "Plan"],
  ["proposal", "Proposal"],
];

const scores = [
  ["Architecture & organization", 8, "Strong"],
  ["Feature completeness", 6, "Moderate"],
  ["Production readiness", 5, "Needs work"],
  ["Verification confidence", 5, "Limited access"],
];

const milestones = [
  {
    n: "01",
    title: "Stabilize & establish baseline",
    time: "Week 1",
    hours: "20–30 hrs",
    text: "Resolve code-generation blockers, produce a working build, confirm launch scope, and establish a prioritized issue register.",
    deliverable: "Buildable source + verified backlog",
  },
  {
    n: "02",
    title: "Complete core workflows",
    time: "Weeks 2–4",
    hours: "60–100 hrs",
    text: "Complete and validate agreed marketplace, payment, identity, driver, delivery, rental, and media workflows.",
    deliverable: "Feature-complete launch candidate",
  },
  {
    n: "03",
    title: "Quality assurance",
    time: "Weeks 4–5",
    hours: "30–50 hrs",
    text: "Run end-to-end testing across roles and devices, remediate defects, and verify Supabase security and storage behavior.",
    deliverable: "Release candidate + QA record",
  },
  {
    n: "04",
    title: "Launch preparation",
    time: "Weeks 5–6",
    hours: "10–20 hrs",
    text: "Finalize production configuration, release assets, monitoring, store submissions, and a clean ownership handoff.",
    deliverable: "Launch-ready application",
  },
];

export default function ZuluchyProposal() {
  const [active, setActive] = useState("summary");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.25, 0.5] },
    );
    navItems.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(".reveal, .section-head, .finding, .validation-grid article, .timeline article, .price-card")
      .forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="zuluchy-page">
      <header className="topbar">
        <a className="brand" href="#summary" aria-label="Zero2Sixty Media home">
          <img src="/brand/logo_full.png" alt="Zero2Sixty Media LLC" />
        </a>
        <nav aria-label="Report sections">
          {navItems.map(([id, label]) => (
            <button className={active === id ? "active" : ""} key={id} onClick={() => go(id)}>
              {label}
            </button>
          ))}
        </nav>
        <button className="print" onClick={() => window.print()} aria-label="Print or save this report as PDF">
          Export PDF
        </button>
      </header>

      <section className="hero" id="summary">
        <div className="hero-grid">
          <div className="eyebrow">Technical assessment · Read-only evaluation</div>
          <div className="hero-copy">
            <img className="hero-logo" src="/brand/logo_full.png" alt="Zero2Sixty Media LLC" />
            <h1>ZULUCHY <span>Super App</span></h1>
            <p className="dek">
              A focused review of the existing FlutterFlow and Supabase build—what is working,
              what remains, and the clearest path to launch.
            </p>
            <div className="hero-actions reveal">
              <button className="primary" onClick={() => go("findings")}>Review findings <span>↓</span></button>
              <button className="secondary" onClick={() => go("proposal")}>View proposal</button>
            </div>
          </div>
          <aside className="hero-card">
            <div className="status-row"><i /> Assessment complete</div>
            <div className="hero-stat">
              <span>Visible project surface</span>
              <strong>75</strong><small>pages</small>
            </div>
            <div className="mini-grid">
              <div><strong>121</strong><span>components</span></div>
              <div><strong>30</strong><span>custom code files</span></div>
            </div>
            <div className="scope-note">Prepared from read-only FlutterFlow access and project-definition export.</div>
          </aside>
          <div className="hero-meta">
          <span>Prepared for Serenelink Healthcare Group</span>
            <span>Prepared by Zero2Sixty Media LLC</span>
            <span>July 2026</span>
          </div>
        </div>
      </section>

      <section className="section ivory" id="scope">
        <div className="section-head">
          <span className="section-no">01</span>
          <div><p className="kicker">Executive summary</p><h2>A strong foundation with a clear path to launch.</h2></div>
        </div>
        <div className="summary-grid">
          <div className="lead-copy">
            <p>
              ZULUCHY is more than a marketplace. The visible build combines accounts, rides, delivery,
              vehicle rentals, driver and business workflows, balances, payouts, payments, maps, and notifications.
            </p>
            <p>
              The product is structurally advanced, but <b>not yet launch-ready</b>. The first move is to
              restore reliable code generation and establish a clean build. Then the priority launch flows
              can be completed, tested against Supabase, and prepared for production.
            </p>
          </div>
          <div className="verdict">
            <div><span>Assessment</span><strong>Promising foundation</strong></div>
            <div><span>Current state</span><strong className="amber">Stabilization required</strong></div>
            <div><span>Recommended window</span><strong>4–6 weeks</strong></div>
            <div><span>Estimated effort</span><strong>120–180 hours</strong></div>
          </div>
        </div>
        <div className="project-strip">
          {[
            ["Identity", "Authentication, profiles & roles"],
            ["Marketplace", "Listings, discovery & media"],
            ["Mobility", "Rides, drivers & vehicle rentals"],
            ["Commerce", "Payments, balances & payouts"],
            ["Operations", "Maps, delivery & notifications"],
          ].map(([a,b]) => <div key={a}><span>{a}</span><p>{b}</p></div>)}
        </div>
      </section>

      <section className="section navy" id="findings">
        <div className="section-head inverse">
          <span className="section-no">02</span>
          <div><p className="kicker">Confirmed findings</p><h2>Evidence observed in the current project.</h2></div>
        </div>
        <p className="section-intro light">
          Every item below is supported by the read-only review or project export. Anything that still
          needs live testing is clearly separated.
        </p>
        <div className="finding-grid">
          <article className="finding featured">
            <div className="severity critical">Launch blocker</div>
            <span className="finding-no">F-01</span>
            <h3>Source-code generation currently fails.</h3>
            <p>
              FlutterFlow reports an unresolved <code>PlaceholderWidget</code> inside the
              <code>EditPaymentMethods</code> flow. It must be corrected before a clean export and release build.
            </p>
            <div className="path">EditPaymentMethods → ConditionalBuilder → PlaceholderWidget</div>
          </article>
          <article className="finding">
            <div className="severity high">High</div>
            <span className="finding-no">F-02</span>
            <h3>The payment-method flow shows incomplete structural states.</h3>
            <p>
              Multiple placeholder nodes remain on the affected page. Their intended behavior needs to be
              confirmed and completed across empty, loading, success, and error states.
            </p>
          </article>
          <article className="finding">
            <div className="severity medium">Scope</div>
            <span className="finding-no">F-03</span>
            <h3>The visible application scope is materially larger than a typical marketplace.</h3>
            <p>
              Seventy-five pages, 121 reusable components, and custom Dart code span several service areas.
              The launch scope should be locked first, then completed through clear milestones.
            </p>
          </article>
          <article className="finding">
            <div className="severity medium">Configuration</div>
            <span className="finding-no">F-04</span>
            <h3>Production configuration requires a release-readiness review.</h3>
            <p>
              Maps, platform settings, payment credentials, secrets, and store configuration need a
              production-readiness pass before release.
            </p>
          </article>
        </div>
      </section>

      <section className="section ivory" id="validation">
        <div className="section-head">
          <span className="section-no">03</span>
          <div><p className="kicker">Runtime validation</p><h2>What must be proven in a working build.</h2></div>
        </div>
        <div className="validation-grid">
          {[
            ["Authentication & roles", "Verify registration, recovery, sessions, role routing, account state, and permission boundaries."],
            ["Supabase security", "Review schema relationships, Row Level Security, indexes, storage policies, triggers, and edge functions."],
            ["Payments & payouts", "Test provider setup, saved methods, failure states, refunds, fees, ledger accuracy, and webhooks."],
            ["Marketplace workflows", "Validate create, edit, search, media upload, availability, booking/order, cancellation, and history."],
            ["Maps & location", "Confirm API restrictions, geocoding, routing, location permissions, pricing logic, and live tracking."],
            ["Notifications & messaging", "Verify device tokens, deep links, delivery, role-specific templates, unread state, and retries."],
            ["Cross-platform quality", "Test representative Android and iOS devices, accessibility, network loss, loading, and empty states."],
            ["Release operations", "Confirm privacy disclosures, analytics, crash reporting, store assets, signing, and production ownership."],
          ].map(([title,text], i) => (
            <article key={title}><span>{String(i + 1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
        <div className="method-note">
          <strong>Assessment boundary</strong>
          <p>
            No project changes were made. Editor access, Supabase console access, test accounts, a successful
            export, and device testing were not available. The proposal therefore defines clear assumptions
            for anything that cannot yet be verified.
          </p>
        </div>
      </section>

      <section className="section pale" id="readiness">
        <div className="section-head">
          <span className="section-no">04</span>
          <div><p className="kicker">Launch readiness</p><h2>Strong structure. Clear remaining work.</h2></div>
        </div>
        <div className="score-layout">
          <div className="overall-score">
            <div className="score-ring"><strong>6.0</strong><span>/ 10</span></div>
            <h3>Preliminary readiness score</h3>
            <p>A directional score based on the visible build, pending runtime and backend verification.</p>
          </div>
          <div className="score-bars">
            {scores.map(([label,score,status]) => (
              <div className="score-row" key={label as string}>
                <div><span>{label}</span><small>{status}</small></div>
                <div className="bar"><i style={{width: `${Number(score) * 10}%`}} /></div>
                <strong>{score}/10</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section ivory" id="plan">
        <div className="section-head">
          <span className="section-no">05</span>
          <div><p className="kicker">Completion plan</p><h2>From inherited project to launch-ready product.</h2></div>
        </div>
        <div className="timeline">
          {milestones.map((m) => (
            <article key={m.n}>
              <div className="timeline-marker"><span>{m.n}</span></div>
              <div className="timeline-main">
                <div className="timeline-meta"><span>{m.time}</span><span>{m.hours}</span></div>
                <h3>{m.title}</h3><p>{m.text}</p>
                <div className="deliverable">Deliverable <strong>{m.deliverable}</strong></div>
              </div>
            </article>
          ))}
        </div>
        <div className="week-one">
          <div><p className="kicker">The first week</p><h3>Reduce uncertainty immediately.</h3></div>
          <ul>
            <li>Resolve the known export blocker and create a reproducible build.</li>
            <li>Confirm the exact launch scope and priority user roles.</li>
            <li>Review Supabase schema, RLS, storage, functions, and environment ownership.</li>
            <li>Exercise authentication, payment, upload, and primary transaction paths.</li>
            <li>Deliver a prioritized issue register and lock the milestone acceptance criteria.</li>
          </ul>
        </div>
      </section>

      <section className="section proposal" id="proposal">
        <div className="proposal-wrap">
          <div className="proposal-copy">
            <p className="kicker">Fixed-price proposal</p>
            <h2>Complete, stabilize, test, and prepare ZULUCHY for launch.</h2>
            <p>
              A milestone-based engagement covering the visible completion scope, with clear acceptance
              criteria, weekly progress updates, and ownership through launch.
            </p>
            <div className="included">
              <span>Included</span>
              <ul>
                <li>Project stabilization and clean build baseline</li>
                <li>Agreed visible feature completion</li>
                <li>Supabase, payment, storage, and security validation</li>
                <li>Cross-platform QA and launch preparation</li>
                <li>Source, database, and asset ownership retained by client</li>
              </ul>
            </div>
          </div>
          <aside className="price-card">
            <span>Proposed fixed price</span>
            <div className="price"><sup>$</sup>8,500</div>
            <p>Estimated delivery: <b>4–6 weeks</b></p>
            <div className="payment-plan">
              <div><span>25%</span><p>Start & baseline</p></div>
              <div><span>40%</span><p>Feature completion</p></div>
              <div><span>25%</span><p>QA candidate</p></div>
              <div><span>10%</span><p>Launch handoff</p></div>
            </div>
            <button onClick={() => go("contact")}>Discuss the assessment <span>→</span></button>
          </aside>
        </div>
        <div className="assumptions">
          <strong>Commercial assumptions</strong>
          <p>
            Price is based on the visible project and scope described here. It assumes access to required
            accounts and test credentials, no fundamental rebuild, no new product areas beyond the visible
            scope, and timely feedback. Any materially new scope will be documented and approved before it
            affects price or schedule.
          </p>
        </div>
      </section>

      <footer id="contact">
        <div>
          <p className="kicker">Ready to move forward</p>
          <h2>Let’s establish a stable baseline and bring ZULUCHY across the finish line.</h2>
          <p className="footer-lead">Built like software. Presented like a brand. Delivered with ownership from review through launch.</p>
        </div>
        <div className="signature">
          <strong>Tanner Thergesen</strong>
          <span>Zero2Sixty Media LLC</span>
          <p>Flutter · FlutterFlow · Supabase</p>
        </div>
        <div className="footer-bottom">
          <span>Technical Assessment · Confidential</span>
          <span>© 2026 Zero2Sixty Media LLC</span>
        </div>
      </footer>
    </main>
  );
}
