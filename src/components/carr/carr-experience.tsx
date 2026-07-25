"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "opportunity", label: "Opportunity" },
  { id: "property", label: "Property" },
  { id: "home", label: "The home" },
  { id: "options", label: "Build options" },
  { id: "budget", label: "Budget" },
  { id: "timeline", label: "Timeline" },
  { id: "risks", label: "Due diligence" },
  { id: "plan", label: "Action plan" },
  { id: "closing", label: "Closing" },
];

const optionData = [
  {
    key: "A",
    name: "Complete Forever Home",
    price: "$368k–$429k",
    time: "4–6 months",
    note: "Best finished result",
    description:
      "Complete the home, attached garage, fence, full driveway and exterior work as one coordinated project.",
    includes: ["Attached garage", "Privacy fence", "Full driveway", "Central air"],
  },
  {
    key: "B",
    name: "Fastest Move-In",
    price: "$298k–$331k",
    time: "3.5–5 months",
    note: "Recommended starting point",
    description:
      "Prioritize occupancy. Preserve the site plan for a future attached or detached garage and add the fence later.",
    includes: ["Move-in ready home", "Basic driveway", "Central air", "Future garage plan"],
    featured: true,
  },
  {
    key: "C",
    name: "Detached Garage Package",
    price: "$358k–$419k",
    time: "4–5.5 months",
    note: "Balanced one-phase build",
    description:
      "Finish the property in one phase with a detached garage that reduces structural coordination and cost.",
    includes: ["Detached garage", "Privacy fence", "Full driveway", "Central air"],
  },
];

const timeline = [
  ["01", "Due diligence", "Weeks 1–3", "Road, utilities, zoning, survey and site feasibility"],
  ["02", "Close & order", "Weeks 3–4", "Cash closing, factory order and contractor scheduling"],
  ["03", "Parallel build", "Weeks 4–12", "Factory production while permits and site work advance"],
  ["04", "Set the home", "Weeks 11–13", "Delivery, permanent foundation and marriage-line work"],
  ["05", "Connect & finish", "Weeks 12–17", "Utilities, HVAC, driveway, inspections and punch list"],
  ["06", "Move in", "Weeks 16–20", "Certificate of occupancy and family move-in"],
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
  const [selectedOption, setSelectedOption] = useState("B");

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        }),
      { threshold: 0.14 }
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

  const lightSection = ["opportunity", "home", "options", "timeline", "risks"].includes(active);

  return (
    <main className="carr-page">
      <nav
        className={`carr-nav ${lightSection ? "on-light" : ""}`}
        aria-label="Project Carr Court"
      >
        <button className="carr-wordmark" onClick={() => goTo("overview")}>
          CARR <span>/ 01</span>
        </button>
        <div className={`carr-nav-links ${menuOpen ? "open" : ""}`}>
          {sections.slice(1, 7).map((item) => (
            <button key={item.id} onClick={() => goTo(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
        <button
          className="carr-menu"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label="Toggle section menu"
        >
          <i />
          <i />
        </button>
      </nav>

      <aside className="carr-progress" aria-label="Page progress">
        {sections.map((item, index) => (
          <button
            key={item.id}
            className={active === item.id ? "active" : ""}
            onClick={() => goTo(item.id)}
            aria-label={`Go to ${item.label}`}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </aside>

      <section id="overview" className="carr-hero">
        <Image
          src="/project-carr/carr-court-hero-v2.png"
          alt="Concept rendering of the proposed Carr Court residence"
          fill
          priority
          sizes="100vw"
          className="carr-hero-image"
        />
        <div className="carr-hero-shade" />
        <div className="carr-hero-content">
          <p className="carr-kicker">Residential Development Proposal</p>
          <h1>
            Project
            <br />
            <em>Carr Court</em>
          </h1>
          <p className="carr-intro">
            A thoughtful plan to create a permanent family home in Littleton,
            Colorado.
          </p>
          <div className="carr-prepared">
            <div>
              <span>Prepared for</span>
              <strong>Tom Marsh</strong>
            </div>
            <div>
              <span>Prepared by</span>
              <strong>Tanner &amp; Deidre</strong>
            </div>
          </div>
        </div>
        <button className="carr-scroll" onClick={() => goTo("opportunity")}>
          Explore the proposal <span>↓</span>
        </button>
        <span className="carr-concept-label">Conceptual rendering</span>
      </section>

      <section id="opportunity" className="carr-section carr-overview">
        <div className="carr-wrap">
          <SectionHeading
            eyebrow="The opportunity"
            title="A new home. A clear plan. A lasting investment."
            copy="Project Carr Court brings the land, home, essential site work and three build strategies into one understandable decision."
          />
          <div className="carr-stats reveal">
            {[
              ["$80,000", "Land asking price"],
              ["2,280", "Square feet"],
              ["3 + 2*", "Bedrooms + bathrooms"],
              ["100%", "Cash funded"],
            ].map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="carr-manifesto reveal">
            <p>
              The goal is not simply to buy another house. It is to create a
              modern, energy-efficient home designed around our family while
              making each construction decision carefully and transparently.
            </p>
            <div>
              <span>Selected home</span>
              <strong>Adventure Homes</strong>
              <strong>Mojave Mohican 0763C</strong>
            </div>
          </div>
          <div className="carr-status reveal">
            <span>Project status</span>
            {[
              ["Property identified", "Complete"],
              ["Home selected", "Complete"],
              ["Preliminary options", "Complete"],
              ["Road + utilities", "Awaiting verification"],
              ["Dealer quote", "Awaiting final quote"],
              ["Contractor bids", "Not started"],
            ].map(([label, status]) => (
              <div key={label}>
                <i className={status === "Complete" ? "complete" : ""} />
                <strong>{label}</strong>
                <small>{status}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="property" className="carr-section carr-property">
        <div className="carr-wrap carr-property-grid">
          <div>
            <SectionHeading
              eyebrow="01 / The property"
              title="A rare foothold in an established Littleton neighborhood."
              copy="A 0.29-acre cul-de-sac lot with no HOA, R-1 zoning and reported pre-development work already underway."
            />
            <a
              className="carr-text-link reveal"
              href="https://www.zillow.com/homedetails/7873-S-Carr-Ct-Littleton-CO-80128/108379940_zpid/"
              target="_blank"
              rel="noreferrer"
            >
              View current listing ↗
            </a>
          </div>
          <div className="carr-site-card reveal">
            <div className="carr-site-address">
              <span>Proposed site</span>
              <strong>7873 S. Carr Court</strong>
              <small>Littleton, Colorado 80128</small>
            </div>
            <div className="carr-lot-diagram" aria-label="Conceptual lot diagram">
              <span className="road">Carr Court</span>
              <div className="lot">
                <div className="home-footprint">Residence</div>
                <div className="garage-footprint">Garage</div>
                <div className="yard-footprint">Private yard</div>
              </div>
              <small>Concept only · final placement subject to engineering</small>
            </div>
            <div className="carr-property-facts">
              {[
                ["0.29 ac", "Lot size"],
                ["R-1", "Zoning"],
                ["None", "HOA"],
                ["Public", "Water listed"],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="carr-wrap carr-lot-gallery reveal">
          <figure className="primary">
            <Image src="/project-carr/real/lot-boundary.webp" alt="Aerial property boundary showing the approximate 106 by 117 foot Carr Court lot" fill sizes="(max-width: 900px) 100vw, 60vw" />
            <figcaption>Approximate lot boundary · listing image</figcaption>
          </figure>
          <figure>
            <Image src="/project-carr/real/lot-aerial.webp" alt="Aerial view of the Carr Court lot and neighboring homes" fill sizes="(max-width: 900px) 100vw, 40vw" />
            <figcaption>Neighborhood context · listing image</figcaption>
          </figure>
          <figure>
            <Image src="/project-carr/real/lot-context.webp" alt="Aerial view showing Carr Court access to Wadsworth Boulevard, C-470 and Santa Fe Drive" fill sizes="(max-width: 900px) 100vw, 40vw" />
            <figcaption>Regional access · listing image</figcaption>
          </figure>
        </div>
      </section>

      <section id="home" className="carr-section carr-home">
        <div className="carr-wrap">
          <SectionHeading
            eyebrow="02 / The home"
            title="Space that lives like a traditional ranch."
            copy="The Mohican combines generous common areas and three bedrooms in a 2,280-square-foot sectional home. The uploaded floor plan shows two bathrooms; final configuration is pending dealer confirmation."
          />
          <div className="carr-home-showcase reveal">
            <div className="carr-home-visual">
              <Image
                src="/project-carr/real/mohican-exterior-v2.png"
                alt="Adventure Homes Mohican 0763C display exterior"
                fill
                sizes="(max-width: 900px) 100vw, 65vw"
              />
              <span>Actual Mohican display home · Adventure Homes</span>
            </div>
            <div className="carr-home-specs">
              <p>Mohican 0763C</p>
              <h3>Designed for everyday life—and the years ahead.</h3>
              <ul>
                <li><span>Living area</span><strong>2,280 sq. ft.</strong></li>
                <li><span>Bedrooms</span><strong>3</strong></li>
                <li><span>Bathrooms</span><strong>2 shown*</strong></li>
                <li><span>Foundation</span><strong>Permanent</strong></li>
                <li><span>Base + selections</span><strong>$131,150</strong></li>
              </ul>
              <a
                href="https://colorado-home-sales.buildtrove.com/deal"
                target="_blank"
                rel="noreferrer"
              >
                Explore the model ↗
              </a>
            </div>
          </div>
          <div className="carr-floorplan reveal">
            <div>
              <span>Actual model floor plan</span>
              <h3>Open living at the center. Private bedrooms at each side.</h3>
              <p>
                The uploaded 0763C plan shows two full bathrooms. The proposal
                will retain that count until the dealer confirms whether the
                configured BuildTrove version adds a third bathroom.
              </p>
            </div>
            <figure>
              <Image
                src="/project-carr/real/mohican-floorplan.webp"
                alt="Adventure Homes Mohican 0763C floor plan"
                width={1956}
                height={777}
                sizes="(max-width: 900px) 100vw, 72vw"
              />
            </figure>
          </div>
          <div className="carr-room-gallery reveal">
            {[
              ["/project-carr/real/kitchen-wide.webp", "Kitchen", "Hardwood cabinetry · stainless appliances"],
              ["/project-carr/real/kitchen-island.webp", "Island", "Large gathering and preparation space"],
              ["/project-carr/real/living-room.webp", "Living room", "Bright, open everyday living"],
              ["/project-carr/real/primary-bedroom.webp", "Primary suite", "Tray ceiling and bathroom access"],
              ["/project-carr/real/bathroom.webp", "Primary bathroom", "Double vanity and tiled shower"],
              ["/project-carr/real/dining.webp", "Dining room", "Dedicated dining with natural light"],
            ].map(([src, title, detail]) => (
              <figure key={src}>
                <Image src={src} alt={`${title} in the Adventure Homes Mohican display model`} fill sizes="(max-width: 700px) 100vw, 33vw" />
                <figcaption><strong>{title}</strong><span>{detail}</span></figcaption>
              </figure>
            ))}
          </div>
          <p className="carr-photo-note reveal">
            Manufacturer display photography illustrates the Mohican layout and
            available finishes. Final selections and included features remain
            subject to the written dealer order.
          </p>
          <div className="carr-finish-grid reveal">
            {[
              ["Spruce", "Upgraded siding", "#243a32"],
              ["Architectural", "Black shingles", "#202326"],
              ["Hardwood", "Cabinetry", "#856f52"],
              ["Stainless", "Appliances", "#b7b9b6"],
              ["Glass tile", "Backsplash", "#d8d4c8"],
              ["Central air", "Initial-build priority", "#6b8790"],
            ].map(([title, label, color]) => (
              <div key={title}>
                <i style={{ background: color }} />
                <strong>{title}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="options" className="carr-section carr-options">
        <div className="carr-wrap">
          <SectionHeading
            eyebrow="03 / Three paths"
            title="Choose the right balance of speed, completeness and cost."
            copy="All three options include the land, configured home, permanent foundation, essential site work and central air."
          />
          <div className="carr-interaction-hint reveal">
            <span>Interactive comparison</span>
            <strong>Select each option to view its complete scope, price and timeline.</strong>
            <i>↓</i>
          </div>
          <div className="carr-option-tabs reveal" role="tablist">
            {optionData.map((option) => (
              <button
                key={option.key}
                role="tab"
                aria-selected={selectedOption === option.key}
                onClick={() => setSelectedOption(option.key)}
                className={selectedOption === option.key ? "active" : ""}
              >
                <span>Option {option.key} · Click to explore</span>
                <strong>{option.name}</strong>
                <i aria-hidden="true">→</i>
              </button>
            ))}
          </div>
          {optionData.map((option) => (
            <article
              key={option.key}
              className={`carr-option-detail ${selectedOption === option.key ? "active" : ""}`}
              role="tabpanel"
            >
              <div>
                <span>{option.note}</span>
                <h3>{option.name}</h3>
                <p>{option.description}</p>
              </div>
              <div className="carr-option-numbers">
                <div><span>Planning range</span><strong>{option.price}</strong></div>
                <div><span>Target move-in</span><strong>{option.time}</strong></div>
              </div>
              <ul>
                {option.includes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
          <div className="carr-decision-matrix reveal">
            <div className="matrix-title">
              <span>Decision matrix</span>
              <strong>How the three approaches compare</strong>
            </div>
            <div className="matrix-row matrix-head">
              <span>Priority</span><span>A · Attached</span><span>B · Later</span><span>C · Detached</span>
            </div>
            {[
              ["Initial investment", "Highest", "Lowest", "Middle"],
              ["Move-in speed", "4–6 mo.", "3.5–5 mo.", "4–5.5 mo."],
              ["Finished on day one", "Yes", "No", "Yes"],
              ["Future flexibility", "Moderate", "Highest", "High"],
              ["Construction complexity", "Highest", "Lowest", "Moderate"],
              ["Traditional resale appeal", "Highest", "Flexible", "Strong"],
            ].map((row) => (
              <div className="matrix-row" key={row[0]}>
                {row.map((cell) => <span key={cell}>{cell}</span>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="budget" className="carr-section carr-budget">
        <div className="carr-wrap">
          <SectionHeading
            eyebrow="04 / Financial overview"
            title="A planning guide—not a promise."
            copy="The figures below organize the known pricing and current allowances. Contractor bids, utility costs and engineering will replace allowances before a final commitment."
          />
          <div className="carr-budget-grid reveal">
            <div className="carr-budget-bars">
              {[
                ["Land", "$80,000", 24],
                ["Configured home", "$131,150", 39],
                ["Delivery + fees", "$16,780", 5],
                ["Foundation + set", "$28k–$37k", 10],
                ["Site + grading", "$8k–$12k", 4],
                ["Utility connections", "$10k–$18k", 5],
                ["Permits + engineering", "$5k–$8k", 2],
                ["Central air", "$5.9k–$8k", 2],
                ["Basic entry + drive", "$5k–$8k", 2],
                ["Contingency", "$8k–$12k", 3],
              ].map(([label, value, width]) => (
                <div key={label as string}>
                  <span>{label}</span>
                  <i><b style={{ width: `${width}%` }} /></i>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <div className="carr-budget-total">
              <span>Option B working target</span>
              <strong>≈ $318,000</strong>
              <p>
                Fastest move-in with an attached or detached garage and fence
                planned for a later phase.
              </p>
              <small>Feasibility range: approximately $298,000–$331,000.</small>
            </div>
          </div>
          <div className="carr-all-option-costs reveal">
            {optionData.map((option) => (
              <article key={option.key} className={option.featured ? "featured" : ""}>
                <span>Option {option.key}</span>
                <h3>{option.name}</h3>
                <strong>{option.price}</strong>
                <small>{option.time} target</small>
              </article>
            ))}
          </div>
          <div className="carr-assumptions reveal">
            <span>Key assumptions</span>
            <p>
              $80,000 land price · $131,150 configured home · Denver-area
              delivery based on the prior $16,780 Cortland quote · utilities
              reachable from planned adjacent infrastructure · simple permanent
              foundation and set · no extraordinary floodplain, retaining, soil
              or road costs.
            </p>
          </div>
          <div className="carr-range-explainer reveal">
            <article>
              <span>Lean feasible case</span>
              <strong>≈ $298,000</strong>
              <p>Competitive bids, simple site work, low utility share and an $8,000 contingency. This is where the earlier $296,000 example was aiming, but it leaves little room for surprises.</p>
            </article>
            <article className="featured">
              <span>Working target</span>
              <strong>≈ $318,000</strong>
              <p>The original proposal target remains credible if the shared infrastructure keeps utility costs controlled and the foundation/site package bids well.</p>
            </article>
            <article>
              <span>Protected case</span>
              <strong>≈ $331,000</strong>
              <p>Higher ends of the current allowances with a $12,000 contingency, while still excluding a garage, fence and full landscaping.</p>
            </article>
          </div>
          <div className="carr-budget-notes reveal">
            <div>
              <span>Known pricing</span>
              <p>Land asking price: $80,000. Configured Mohican: $131,150. Prior Denver-area Cortland transport, factory and state-fee quote: $16,780.</p>
            </div>
            <div>
              <span>Still allowances</span>
              <p>Foundation, home set, grading, utility connections, permits, central air, basic driveway and contingency remain planning figures until written bids arrive. Jefferson County states that unincorporated Jeffco does not charge use tax.</p>
            </div>
            <div>
              <span>Cash strategy</span>
              <p>Request cash pricing and priority scheduling, but use milestone payments, inspections and lien waivers rather than paying contractors fully in advance.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="carr-section carr-timeline">
        <div className="carr-wrap">
          <SectionHeading
            eyebrow="05 / Fast-track schedule"
            title="Work in parallel. Move in sooner."
            copy="Cash funding removes lender underwriting and draw schedules. The greatest time savings comes from advancing site work while the home is being built."
          />
          <div className="carr-timeline-list">
            {timeline.map(([number, title, timing, detail]) => (
              <div className="reveal" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <strong>{timing}</strong>
                <p>{detail}</p>
              </div>
            ))}
          </div>
          <div className="carr-timeline-callout reveal">
            <span>Fastest realistic occupancy</span>
            <strong>Approximately 16–20 weeks</strong>
            <p>Subject to permits, road and utility readiness, factory lead time, weather and inspections.</p>
          </div>
          <div className="carr-option-timelines reveal">
            <article>
              <span>Option A</span>
              <strong>4–6 months</strong>
              <p>Permit the attached garage with the home and overlap its foundation, framing and electrical work with home completion.</p>
            </article>
            <article className="featured">
              <span>Option B</span>
              <strong>3.5–5 months</strong>
              <p>Fastest occupancy. Complete only what the certificate of occupancy requires, while preserving space and utility stubs for either future garage type.</p>
            </article>
            <article>
              <span>Option C</span>
              <strong>4–5.5 months</strong>
              <p>Build the detached garage alongside home finish work without tying its roof or structure into the residence.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="risks" className="carr-section carr-risks">
        <div className="carr-wrap">
          <SectionHeading
            eyebrow="06 / Due diligence"
            title="Resolve the expensive unknowns before committing."
            copy="The opportunity is compelling because the price is low. That makes verification—not optimism—the right next move."
          />
          <div className="carr-risk-grid reveal">
            {[
              ["Road & access", "Confirm the final approach, easements, schedule and each owner's remaining share."],
              ["Utilities", "Obtain written tap, extension and connection costs for water, sewer, electric and gas."],
              ["Floodplain", "Review the current map, permit and buildable-envelope documentation—not verbal confirmation alone."],
              ["Home eligibility", "Confirm HUD or modular acceptance, design standards, setbacks and garage attachment rules."],
              ["Site engineering", "Review survey, drainage, soils and foundation requirements before ordering the home."],
              ["Contract scope", "Define who owns delivery, set, marriage-line finish, HVAC, inspections and warranty handoff."],
            ].map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="carr-responsibility reveal">
            <SectionHeading
              eyebrow="Who does what"
              title="One coordinated scope. Clear accountability."
            />
            <div>
              {[
                ["Colorado Home Sales", "Final home configuration, factory order, transport scope, manufacturer documents and warranty handoff."],
                ["Site / general contractor", "Permit coordination, excavation, grading, foundation, drainage, utility trenching and site sequencing."],
                ["Set crew", "Placement, anchoring, marriage-line completion, exterior close-up and required installation certifications."],
                ["Licensed trades", "Water, sewer, electrical service, central air or heat pump, testing and trade inspections."],
                ["Garage + exterior team", "Garage, driveway, fence, steps, walkways and final exterior finish for Options A or C."],
                ["Tanner & Deidre", "Selections, approvals, budget tracking, milestone payments, documentation and communication with Tom."],
              ].map(([title, copy]) => (
                <article key={title}>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="plan" className="carr-section carr-plan">
        <div className="carr-wrap">
          <SectionHeading
            eyebrow="07 / Complete action plan"
            title="Include the hard-to-retrofit upgrades. Verify everything else."
            copy="The initial build should cover comfort, infrastructure and future readiness. Cosmetic additions can wait."
          />
          <div className="carr-upgrades reveal">
            <div>
              <span>Include now</span>
              <ul>
                <li>High-efficiency central air or heat pump</li>
                <li>Smart thermostat and complete commissioning</li>
                <li>200-amp service confirmation</li>
                <li>Whole-home surge protection</li>
                <li>CAT6 wiring to key rooms</li>
                <li>Exterior outlets and hose bibs</li>
                <li>Garage or future-garage EV circuit</li>
                <li>Garage-ready drainage and site placement</li>
              </ul>
            </div>
            <div>
              <span>Selected home finishes</span>
              <ul>
                <li>Upgraded spruce-green vinyl siding</li>
                <li>Black architectural shingles</li>
                <li>White trim and black shutters</li>
                <li>Hardwood cabinetry</li>
                <li>Glass tile backsplash</li>
                <li>Stainless appliance package</li>
                <li>Fiberglass tub with upgraded tile walls</li>
                <li>Wild Dove flooring and Camelback carpet</li>
              </ul>
            </div>
          </div>
          <div className="carr-investment reveal">
            <div>
              <span>Why it is worth considering</span>
              <h3>New construction at a planning cost below the listing’s stated $600k–$700k neighborhood range.</h3>
            </div>
            <div>
              <p>Modern systems and manufacturer warranties</p>
              <p>No HOA and flexible future improvements</p>
              <p>Lower expected maintenance than many older homes</p>
              <p>Potential equity—but no guaranteed completed value</p>
            </div>
          </div>
          <div className="carr-next-steps reveal">
            <span>Next steps before any commitment</span>
            {[
              ["01", "Collect the seller package", "Road plan, shared-infrastructure budget, surveys, drainage work, permits and floodplain documents."],
              ["02", "Confirm county feasibility", "Manufactured or modular eligibility, setbacks, garage attachment, buildable envelope and certificate-of-occupancy requirements."],
              ["03", "Obtain the dealer quote", "Exact Mohican selections, delivery, state and factory fees, set scope, central-air options and warranties."],
              ["04", "Bid the complete site scope", "Foundation, grading, utilities, driveway, steps, garage and fence—with exclusions clearly stated."],
              ["05", "Replace every allowance", "Build the final cash budget, contingency and milestone-payment schedule before buying land or ordering the home."],
            ].map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <div><strong>{title}</strong><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="closing" className="carr-closing">
        <Image
          src="/project-carr/carr-court-hero-v2.png"
          alt=""
          fill
          sizes="100vw"
          className="carr-closing-image"
        />
        <div className="carr-closing-shade" />
        <div className="carr-closing-content reveal">
          <span>Our commitment</span>
          <h2>A home built with care. An investment handled with respect.</h2>
          <p>
            If given the opportunity to move forward, we are committed to
            treating every dollar thoughtfully, communicating openly and
            validating the important details before decisions are made.
          </p>
          <div>
            <strong>Thank you for considering Project Carr Court.</strong>
            <span>— Tanner &amp; Deidre</span>
          </div>
        </div>
      </section>
    </main>
  );
}
