"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "decision", label: "Decision today" },
  { id: "property", label: "Property" },
  { id: "home", label: "The home" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "budget", label: "Budget" },
  { id: "drainage", label: "Drainage" },
  { id: "timeline", label: "Timeline" },
  { id: "risks", label: "Unknowns" },
  { id: "closing", label: "Conclusion" },
];

const scenarios = [
  {
    key: "Optimistic",
    site: "$85,000",
    total: "$411,000",
    tone: "Best documented outcome",
    copy: "Shared costs allocate favorably, seller-paid work transfers, and lot-specific grading and connections remain straightforward.",
  },
  {
    key: "Planning",
    site: "$105,000",
    total: "$436,000±",
    tone: "Decision number",
    copy: "The working case used for evaluating affordability today. It sits inside the current evidence-backed all-in range.",
    featured: true,
  },
  {
    key: "Conservative",
    site: "$125k–$150k+",
    total: "$486,000+",
    tone: "High-risk protection",
    copy: "Contractor bids exceed engineering estimates, credits do not transfer, or the lot requires more drainage, grading, and fees.",
  },
];

const budgetLines = [
  ["Shared infrastructure contribution", "$55k–$75k", "Road, water and sewer mains; allocation not yet confirmed"],
  ["Lot-specific preparation", "$30k–$45k", "Laterals, grading, detention feature, access and review allowances"],
  ["Configured Mohican home", "$131,150", "Current configured home price"],
  ["Delivery, set and finish", "$20k–$35k", "Transport, placement, marriage line and factory finish work"],
  ["Permanent foundation", "$30k–$50k", "Engineered permanent foundation and related site work"],
  ["Final utilities + HVAC", "$15k–$30k", "House connections, central air or heat pump, commissioning"],
  ["Exterior completion", "$10k–$25k", "Entry, final driveway, skirting and exterior closeout"],
  ["Additional contingency", "$20k–$30k", "Protection against bids, field conditions and scope gaps"],
];

const progress = [
  ["Electrical upgrade", "Paid / complete", "complete"],
  ["Gas plans + installation costs", "Paid", "complete"],
  ["Water + sewer plans", "In review", "active"],
  ["Road + drainage plans", "In review", "active"],
  ["Construction pricing", "Pending approvals", "pending"],
];

const risks = [
  ["Per-lot allocation", "Documents reference seven undeveloped lots but eight water/sewer service connections. The project manager must confirm the actual allocation method."],
  ["Seller-paid credits", "Confirm in writing that prior contributions and completed utility work transfer with this parcel at closing."],
  ["Tap + meter fees", "Water, sewer, meter, district, inspection and any system-development charges remain to be verified."],
  ["Final contractor bids", "Engineering estimates are planning documents. Construction pricing will not be firm until approvals permit competitive bidding."],
  ["Private drainage", "Each lot is expected to own and maintain its detention/water-quality feature; final grading and pond cost are lot-specific."],
  ["Parcel identity", "The listing is 7873 S. Carr Court, while one supplied image appears to show 7893. Confirm the exact lot and legal description."],
  ["Permits + reviews", "Jefferson County, fire access, floodplain, drainage, foundation and utility review fees require final confirmation."],
];

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="carr-heading reveal">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function CarrExperience() {
  const [active, setActive] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const [infrastructureView, setInfrastructureView] = useState<"project" | "parcel">("parcel");

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    const sectionObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-42% 0px -48% 0px" }
    );
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) sectionObserver.observe(element);
    });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const lightSection = ["decision", "home", "drainage", "timeline", "risks"].includes(active);

  return (
    <main className="carr-page">
      <nav className={`carr-nav ${lightSection ? "on-light" : ""}`} aria-label="Project Carr Court">
        <button className="carr-wordmark" onClick={() => goTo("overview")}>
          CARR <span>/ INVESTMENT ANALYSIS</span>
        </button>
        <div className={`carr-nav-links ${menuOpen ? "open" : ""}`}>
          {sections.slice(1, 7).map((item) => (
            <button key={item.id} onClick={() => goTo(item.id)}>{item.label}</button>
          ))}
        </div>
        <button className="carr-menu" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle section menu">
          <i /><i />
        </button>
      </nav>

      <aside className="carr-progress" aria-label="Page progress">
        {sections.map((item, index) => (
          <button key={item.id} className={active === item.id ? "active" : ""} onClick={() => goTo(item.id)} aria-label={`Go to ${item.label}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </aside>

      <section id="overview" className="carr-hero">
        <Image src="/project-carr/carr-court-hero-v2.png" alt="Concept rendering of the proposed Carr Court residence" fill priority sizes="100vw" className="carr-hero-image" />
        <div className="carr-hero-shade" />
        <div className="carr-hero-content">
          <p className="carr-kicker">Engineering-backed residential investment analysis</p>
          <h1>Project<br /><em>Carr Court</em></h1>
          <p className="carr-intro">A corrected, evidence-led plan for developing a permanent family home in Littleton, Colorado.</p>
          <div className="carr-prepared">
            <div><span>Prepared for</span><strong>Tom Marsh</strong></div>
            <div><span>Prepared by</span><strong>Tanner &amp; Deidre</strong></div>
          </div>
        </div>
        <button className="carr-scroll" onClick={() => goTo("decision")}>Review the analysis <span>↓</span></button>
        <span className="carr-concept-label">Conceptual rendering</span>
      </section>

      <section id="decision" className="carr-section carr-overview">
        <div className="carr-wrap">
          <SectionHeading
            eyebrow="Decision today"
            title="Is this project still worth pursuing?"
            copy="Yes—if the planning case remains affordable and the unknowns below are resolved during due diligence. The earlier site-development estimate was too low. Engineering documents now support a more responsible range."
          />
          <div className="carr-correction reveal">
            <span>Estimate correction</span>
            <p>The proposal previously understated the cost of shared road and utility infrastructure, individual drainage work, and lot preparation. This analysis replaces those assumptions with figures grounded in JR Engineering documents and the project’s later budget projections.</p>
          </div>
          <div className="carr-scenario-grid reveal">
            {scenarios.map((scenario) => (
              <article key={scenario.key} className={scenario.featured ? "featured" : ""}>
                <span>{scenario.key}</span>
                <small>{scenario.tone}</small>
                <div><label>Lot construction-ready</label><strong>{scenario.site}</strong></div>
                <div><label>All-in with $80k land</label><strong>{scenario.total}</strong></div>
                <p>{scenario.copy}</p>
              </article>
            ))}
          </div>
          <div className="carr-decision-banner reveal">
            <div><span>Working site allowance</span><strong>$105,000</strong></div>
            <div><span>Total excluding land</span><strong>$331k–$406k</strong></div>
            <div><span>All-in including land</span><strong>$411k–$486k</strong></div>
          </div>
        </div>
      </section>

      <section id="property" className="carr-section carr-property">
        <div className="carr-wrap carr-property-grid">
          <div>
            <SectionHeading
              eyebrow="01 / The property"
              title="A promising lot inside an active infrastructure project."
              copy="The 0.29-acre R-1 parcel offers a Littleton location with no HOA and documented engineering progress—but it is not yet a finished, build-ready lot."
            />
            <a className="carr-text-link reveal" href="https://www.zillow.com/homedetails/7873-S-Carr-Ct-Littleton-CO-80128/108379940_zpid/" target="_blank" rel="noreferrer">View current listing ↗</a>
          </div>
          <div className="carr-site-card reveal">
            <div className="carr-site-address">
              <span>Proposed site</span>
              <strong>7873 S. Carr Court</strong>
              <small>Littleton, Colorado 80128</small>
            </div>
            <div className="carr-lot-diagram" aria-label="Conceptual lot diagram">
              <span className="road">Carr Court extension</span>
              <div className="lot">
                <div className="home-footprint">Residence</div>
                <div className="garage-footprint">Garage</div>
                <div className="yard-footprint">Private yard</div>
              </div>
              <small>Concept only · placement subject to survey, drainage and setbacks</small>
            </div>
            <div className="carr-property-facts">
              {[["0.29 ac", "Lot size"], ["R-1", "Zoning"], ["None", "HOA"], ["$80k", "Asking price"]].map(([value, label]) => (
                <div key={label}><strong>{value}</strong><span>{label}</span></div>
              ))}
            </div>
          </div>
        </div>
        <div className="carr-wrap carr-lot-gallery reveal">
          <figure className="primary"><Image src="/project-carr/real/lot-boundary.webp" alt="Aerial property boundary for the proposed Carr Court lot" fill sizes="(max-width: 900px) 100vw, 60vw" /><figcaption>Approximate boundary · verify legal parcel</figcaption></figure>
          <figure><Image src="/project-carr/real/lot-aerial.webp" alt="Aerial view of the Carr Court lot and neighboring homes" fill sizes="(max-width: 900px) 100vw, 40vw" /><figcaption>Neighborhood context</figcaption></figure>
          <figure><Image src="/project-carr/real/lot-context.webp" alt="Regional access around Carr Court" fill sizes="(max-width: 900px) 100vw, 40vw" /><figcaption>Regional access</figcaption></figure>
        </div>
      </section>

      <section id="home" className="carr-section carr-home">
        <div className="carr-wrap">
          <SectionHeading eyebrow="02 / The home" title="The selected home remains a strong value." copy="The Mohican’s configured price is the most stable major number in the analysis. Site development—not the home itself—is the principal budget uncertainty." />
          <div className="carr-home-showcase reveal">
            <div className="carr-home-visual">
              <Image src="/project-carr/real/mohican-exterior-v2.png" alt="Adventure Homes Mohican 0763C display exterior" fill sizes="(max-width: 900px) 100vw, 65vw" />
              <span>Actual Mohican display home · Adventure Homes</span>
            </div>
            <div className="carr-home-specs">
              <p>Mojave Mohican 0763C</p>
              <h3>2,280 square feet configured around everyday family life.</h3>
              <ul>
                <li><span>Bedrooms / bathrooms</span><strong>3 / 3</strong></li>
                <li><span>Configured home price</span><strong>$131,150</strong></li>
                <li><span>Foundation</span><strong>Permanent</strong></li>
                <li><span>Climate priority</span><strong>Central air / heat pump</strong></li>
              </ul>
            </div>
          </div>
          <div className="carr-floorplan reveal">
            <div><span>Actual model floor plan</span><h3>Open at the center. Private at each side.</h3><p>Final factory order, structural interfaces, utility locations and garage connection must be confirmed in writing before site engineering is completed.</p></div>
            <figure><Image src="/project-carr/real/mohican-floorplan.webp" alt="Adventure Homes Mohican 0763C floor plan" width={1956} height={777} sizes="(max-width: 900px) 100vw, 72vw" /></figure>
          </div>
          <div className="carr-room-gallery reveal">
            {[
              ["/project-carr/real/kitchen-wide.webp", "Kitchen"],
              ["/project-carr/real/living-room.webp", "Living room"],
              ["/project-carr/real/primary-bedroom.webp", "Primary suite"],
            ].map(([src, title]) => (
              <figure key={src}><Image src={src} alt={`${title} in the Adventure Homes Mohican display model`} fill sizes="(max-width: 700px) 100vw, 33vw" /><figcaption><strong>{title}</strong><span>Manufacturer display photography</span></figcaption></figure>
            ))}
          </div>
        </div>
      </section>

      <section id="infrastructure" className="carr-section carr-infrastructure">
        <div className="carr-wrap">
          <SectionHeading
            eyebrow="03 / Shared infrastructure"
            title="The project is real, engineered—and still awaiting final pricing."
            copy="JR Engineering prepared road, water, sewer and drainage work for the broader development. Those plans materially reduce uncertainty, but the final construction cost and each parcel’s share are not yet fixed."
          />
          <div className="carr-infrastructure-tabs reveal" role="tablist" aria-label="Infrastructure cost view">
            <button
              type="button"
              role="tab"
              aria-selected={infrastructureView === "parcel"}
              className={infrastructureView === "parcel" ? "active" : ""}
              onClick={() => setInfrastructureView("parcel")}
            >
              <span>Most relevant</span>
              <strong>Our Estimated Portion</strong>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={infrastructureView === "project"}
              className={infrastructureView === "project" ? "active" : ""}
              onClick={() => setInfrastructureView("project")}
            >
              <span>Reference</span>
              <strong>Entire Shared Project</strong>
            </button>
          </div>
          {infrastructureView === "parcel" ? (
            <div className="carr-parcel-share" role="tabpanel">
              <div className="primary">
                <span>Working estimate for this parcel</span>
                <strong>$55,000–$75,000</strong>
                <p>Estimated remaining contribution to shared road, water and sewer infrastructure—not the full project cost.</p>
              </div>
              <div>
                <span>If divided by 8 services</span>
                <strong>$74,100</strong>
                <p>Simple gross allocation of the later $592,801 projection before seller-paid credits.</p>
              </div>
              <div>
                <span>If divided by 7 lots</span>
                <strong>$84,686</strong>
                <p>Simple gross allocation before credits. The documents do not yet confirm which method applies.</p>
              </div>
              <aside>
                <strong>Why the planning range is lower than the simple division</strong>
                <p>Approximately $154,460 is described as already spent across engineering, electrical, gas, studies and permits. The $55,000–$75,000 range assumes the seller’s paid contributions transfer with this lot. That transfer must be confirmed in writing.</p>
              </aside>
            </div>
          ) : (
            <div className="carr-engineering-total" role="tabpanel">
              <div><span>JR preliminary estimate</span><strong>$506,203</strong><p>Shared construction and soft-cost planning estimate for the broader project.</p></div>
              <div><span>Later project projection</span><strong>$592,801</strong><p>Broader projection after additional engineering and utility-related costs.</p></div>
              <aside><strong>Not our individual bill</strong><p>These are whole-project figures. Our current estimated remaining share is $55,000–$75,000, subject to the final allocation and confirmation of transferred credits.</p></aside>
            </div>
          )}
          <div className="carr-progress-board reveal">
            {progress.map(([label, status, state]) => (
              <article key={label}><i className={state} /><div><strong>{label}</strong><span>{status}</span></div></article>
            ))}
          </div>
          <div className="carr-source-note reveal">
            <span>What the documents support</span>
            <p>Electrical work is described as paid and complete. Gas planning and installation costs are described as paid. Water/sewer and road/drainage plans remain in review. Construction bids are expected after approvals.</p>
          </div>
        </div>
      </section>

      <section id="budget" className="carr-section carr-budget">
        <div className="carr-wrap">
          <SectionHeading eyebrow="04 / Corrected financial overview" title="Build the decision from the ground up." copy="Land is shown separately. The ranges below distinguish shared work from lot-specific preparation and the house itself, making the remaining uncertainty visible instead of hiding it in one allowance." />
          <div className="carr-budget-table reveal">
            <div className="budget-head"><span>Cost category</span><span>Working range</span><span>What it covers</span></div>
            {budgetLines.map(([label, value, detail]) => (
              <div key={label}><strong>{label}</strong><b>{value}</b><span>{detail}</span></div>
            ))}
          </div>
          <div className="carr-budget-summary reveal">
            <article><span>Site construction-ready</span><strong>$85k–$120k</strong><p>$105,000 planning case</p></article>
            <article><span>Project excluding land</span><strong>$331k–$406k</strong><p>Home through move-in readiness</p></article>
            <article className="featured"><span>All-in including $80k land</span><strong>$411k–$486k</strong><p>Current decision range</p></article>
          </div>
          <p className="carr-budget-disclaimer reveal">Planning analysis only—not a bid, appraisal, guarantee, or authorization to proceed. Final commitments should follow written allocation confirmation, utility fee verification, site-specific engineering, dealer scope, and competitive contractor pricing.</p>
        </div>
      </section>

      <section id="drainage" className="carr-section carr-drainage">
        <div className="carr-wrap">
          <SectionHeading eyebrow="05 / Drainage + floodplain" title="The mapped floodplain appears limited. Private drainage is the larger practical issue." copy="The documents indicate most of the site is in Zone X. Only a small 72-square-foot portion of Lot 20 is identified in Zone AE, with no planned home development in the 100-year floodplain." />
          <div className="carr-drainage-grid reveal">
            <article><span>Zone X</span><strong>Most of the site</strong><p>The proposed residential development is planned outside the mapped 100-year floodplain.</p></article>
            <article><span>Zone AE</span><strong>72 sq. ft.</strong><p>A small portion of Lot 20 is identified in the floodplain and is intended to remain undisturbed.</p></article>
            <article className="featured"><span>Owner responsibility</span><strong>Private detention / water quality</strong><p>Each lot is expected to include and maintain its own drainage feature, making final grading and maintenance a homeowner obligation.</p></article>
          </div>
          <div className="carr-caution reveal"><strong>Important:</strong><p>These findings describe the project documents, not a parcel-specific legal or engineering opinion. Confirm the selected parcel, current FEMA mapping, finished-floor elevations, drainage easements, and final civil design before purchase.</p></div>
        </div>
      </section>

      <section id="timeline" className="carr-section carr-timeline">
        <div className="carr-wrap">
          <SectionHeading eyebrow="06 / Fast-track path" title="Approvals and bids now control the schedule." copy="Cash removes lender delay, but it does not remove civil approvals, utility coordination, factory lead time, inspections, or contractor availability." />
          <div className="carr-timeline-list reveal">
            {[
              ["01", "Confirm before contract", "Immediate", "Legal parcel, contribution history, transferable credits, utility fee status and seller documents"],
              ["02", "Project-manager meeting", "Under contract", "Confirm per-lot allocation, approvals, remaining scope, schedule and bid strategy"],
              ["03", "Site + home engineering", "Parallel", "Finalize home placement, foundation, drainage feature, utility laterals and garage strategy"],
              ["04", "Competitive pricing", "After approvals", "Obtain written bids for shared work, lot preparation, foundation, delivery/set and final connections"],
              ["05", "Factory + field work", "Overlapped", "Build the home while road, utilities, grading and foundation work advance"],
              ["06", "Set, connect, inspect", "Final phase", "Deliver, finish, commission HVAC, complete exterior access and secure occupancy approval"],
            ].map(([num, title, time, detail]) => (
              <div key={num}><span>{num}</span><h3>{title}</h3><strong>{time}</strong><p>{detail}</p></div>
            ))}
          </div>
          <div className="carr-timeline-callout reveal"><span>Schedule position</span><strong>4–6 months remains an aspirational build window after approvals and site readiness—not a current promise.</strong></div>
        </div>
      </section>

      <section id="risks" className="carr-section carr-risks">
        <div className="carr-wrap">
          <SectionHeading eyebrow="07 / Risks + unknowns" title="Seven answers determine whether the planning case holds." copy="Each item below should be resolved in writing or priced before the project is presented as fully committed." />
          <div className="carr-risk-grid reveal">
            {risks.map(([title, copy], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <div className="carr-gates reveal">
            <span>Proceed only after</span>
            <ol>
              <li>Confirm the exact parcel and legal description.</li>
              <li>Receive a written per-lot infrastructure statement and credit ledger.</li>
              <li>Verify all tap, meter, district and permit fees.</li>
              <li>Obtain dealer and site-contractor scopes that close every move-in gap.</li>
              <li>Protect the purchase with appropriate due-diligence and feasibility terms.</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="closing" className="carr-closing">
        <Image src="/project-carr/carr-court-hero-v2.png" alt="" fill sizes="100vw" className="carr-hero-image" />
        <div className="carr-closing-shade" />
        <div className="carr-closing-content reveal">
          <span className="carr-kicker">Investment conclusion</span>
          <h2>A promising project—at a corrected price.</h2>
          <p>Project Carr Court remains worth investigating, but the decision should be based on an all-in range of approximately <strong>$411,000–$486,000</strong>, not the earlier lower estimate. The responsible next step is to verify the lot allocation and transferable credits before treating the $105,000 site allowance as dependable.</p>
          <div><strong>Prepared for Tom Marsh</strong><span>with care by Tanner &amp; Deidre</span></div>
        </div>
      </section>
    </main>
  );
}
