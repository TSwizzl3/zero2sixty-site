"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";
type Tone = "green" | "blue";

export function StartProjectForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState<string>("");

  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          projectType: fd.get("projectType"),
          budget: fd.get("budget"),
          timeline: fd.get("timeline"),
          goal: fd.get("goal"),
          details: fd.get("details"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Request failed");
      }

      setStatus("success");
      setMsg("Sent — I’ll reply shortly with your quote + recommended package.");
      form.reset();
      setProjectType("");
      setBudget("");
    } catch (err: any) {
      setStatus("error");
      setMsg(err?.message || "Something went wrong. Try again.");
    }
  }

  /* ---------- shared styles ---------- */
  const label = "text-sm text-white/75";

  const input =
    "mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 outline-none focus:border-[var(--blue)]/55 focus:ring-2 focus:ring-[var(--blue)]/15 transition";

  const select =
    "mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white appearance-none outline-none focus:border-[var(--blue)]/55 focus:ring-2 focus:ring-[var(--blue)]/15 transition";

  function projectHint(): { tone: Tone; text: string } | null {
    if (!projectType) return null;

    if (projectType.includes("Starter / MVP App")) {
      return {
        tone: "blue",
        text: "Great for validating an idea fast · Most common first step",
      };
    }

    if (projectType.includes("Business / E-commerce App")) {
      return {
        tone: "blue",
        text: "Best when you’re ready to grow revenue + add features",
      };
    }

    if (projectType.includes("Promo / Ad Video")) {
      return {
        tone: "green",
        text: "Perfect for ads, launches, and scroll-stopping socials",
      };
    }

    if (projectType.includes("Monthly Content / Marketing")) {
      return {
        tone: "green",
        text: "Best when you want consistent weekly/monthly output",
      };
    }

    if (projectType.includes("Branding / Design")) {
      return {
        tone: "blue",
        text: "Great for a clean refresh + usable brand assets",
      };
    }

    return {
      tone: "blue",
      text: "Tell me what you need — I’ll recommend the best direction",
    };
  }

  function budgetHint(): { tone: Tone; text: string } | null {
    if (!budget) return null;

    if (budget === "$250 – $500") {
      return { tone: "green", text: "Best fit for promo videos / quick edits" };
    }
    if (budget === "$500 – $1,000") {
      return { tone: "blue", text: "Great for branding or a small content push" };
    }
    if (budget === "$1,000 – $1,500") {
      return { tone: "blue", text: "Entry-level MVP scope (lean build)" };
    }
    if (budget === "$1,500 – $3,000") {
      return { tone: "green", text: "Most common MVP range" };
    }
    if (budget === "$3,000 – $5,000") {
      return { tone: "blue", text: "Strong fit for advanced MVPs / more features" };
    }
    if (budget === "$5,000+") {
      return { tone: "green", text: "Best fit for business & e-commerce builds" };
    }

    return null;
  }

  function HintChip({ tone, text }: { tone: Tone; text: string }) {
    const isGreen = tone === "green";

    const dot = isGreen
      ? "bg-[var(--green)] shadow-[0_0_14px_rgba(57,255,20,0.28)]"
      : "bg-[var(--blue)] shadow-[0_0_14px_rgba(79,209,255,0.28)]";

    const pill = isGreen
      ? "border-[rgba(57,255,20,0.22)] bg-[rgba(57,255,20,0.08)] text-[rgba(255,255,255,0.92)]"
      : "border-[rgba(79,209,255,0.22)] bg-[rgba(79,209,255,0.08)] text-[rgba(255,255,255,0.92)]";

    return (
      <div className="mt-2 flex flex-wrap gap-2">
        <span
          className={`hint-chip inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${pill}`}
        >
          <span className={`h-2 w-2 rounded-full ${dot}`} />
          {text}
        </span>
      </div>
    );
  }

  const ph = projectHint();
  const bh = budgetHint();

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {/* Name / Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>Name</label>
          <input name="name" required className={input} placeholder="Your name" />
        </div>

        <div>
          <label className={label}>Email</label>
          <input
            name="email"
            type="email"
            required
            className={input}
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="-mt-1 text-[11px] leading-snug text-white/55">
        No spam. Just one reply from Tanner.
        <span className="text-white/45"> Typical reply time: same day.</span>
      </div>

      {/* Phone / Project Type */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>Phone (optional)</label>
          <input
            name="phone"
            className={input}
            placeholder="Phone number (optional)"
          />
        </div>

        <div>
          <label className={label}>Project type</label>
          <select
            name="projectType"
            required
            className={select}
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option value="" disabled>
              Select…
            </option>
            <option>Starter / MVP App</option>
            <option>Business / E-commerce App</option>
            <option>Promo / Ad Video</option>
            <option>Monthly Content / Marketing</option>
            <option>Branding / Design</option>
            <option>Other</option>
          </select>

          {ph ? <HintChip tone={ph.tone} text={ph.text} /> : null}
        </div>
      </div>

      {/* Budget / Timeline */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>Budget range</label>
          <select
            name="budget"
            required
            className={select}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="" disabled>
              Select…
            </option>
            <option>$250 – $500</option>
            <option>$500 – $1,000</option>
            <option>$1,000 – $1,500</option>
            <option>$1,500 – $3,000</option>
            <option>$3,000 – $5,000</option>
            <option>$5,000+</option>
          </select>

          {bh ? <HintChip tone={bh.tone} text={bh.text} /> : null}
        </div>

        <div>
          <label className={label}>Timeline</label>
          <select name="timeline" required className={select} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>ASAP</option>
            <option>2–4 weeks</option>
            <option>1–2 months</option>
            <option>2–3 months</option>
            <option>Flexible</option>
          </select>
        </div>
      </div>

      {/* Goal */}
      <div>
        <label className={label}>Primary goal</label>
        <input
          name="goal"
          required
          className={input}
          placeholder="Launch an MVP, run ads, increase sales, grow the brand…"
        />
      </div>

      {/* Details */}
      <div>
        <label className={label}>Project details</label>
        <textarea
          name="details"
          required
          rows={5}
          className={input}
          placeholder="Tell me what you’re building, what you already have, and what “done” looks like."
        />
        <div className="mt-2 text-[11px] leading-snug text-white/55">
          Clear scope = faster quote. If you have links (site, IG, doc), drop them
          here too.
        </div>
      </div>

      {/* Submit */}
      <button disabled={status === "sending"} className="btn btn-primary">
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {/* Status message */}
      {msg ? (
        <div
          className={`rounded-2xl border border-white/10 p-4 text-sm ${
            status === "success"
              ? "bg-[var(--green)]/10 text-[var(--green)]"
              : status === "error"
              ? "bg-red-500/10 text-red-200"
              : "bg-white/5 text-white/70"
          }`}
        >
          {msg}
        </div>
      ) : null}
    </form>
  );
}