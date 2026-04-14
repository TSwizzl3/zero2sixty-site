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

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setMsg("Sent — I’ll reply shortly with your quote + recommended package.");
      form.reset();
      setProjectType("");
      setBudget("");
    } catch {
      setStatus("error");
      setMsg("Something went wrong. Try again.");
    }
  }

  const label = "text-sm text-white/75";

  const input =
    "mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 outline-none focus:border-[var(--blue)]/55 focus:ring-2 focus:ring-[var(--blue)]/15 transition";

  const select =
    "mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white appearance-none outline-none focus:border-[var(--blue)]/55 focus:ring-2 focus:ring-[var(--blue)]/15 transition";

  function projectHint(): { tone: Tone; text: string } | null {
    if (!projectType) return null;

    if (projectType.includes("MVP App")) {
      return {
        tone: "blue",
        text: "Best for launching fast and validating your idea",
      };
    }

    if (projectType.includes("Video Production")) {
      return {
        tone: "green",
        text: "Perfect for viral content, ads, and attention-grabbing visuals",
      };
    }

    if (projectType.includes("Ultimate Branding")) {
      return {
        tone: "blue",
        text: "Best for making your business look premium and established",
      };
    }

    if (projectType.includes("Monthly Retainer")) {
      return {
        tone: "green",
        text: "Best for ongoing content and consistent growth",
      };
    }

    if (projectType.includes("StoreSound")) {
      return {
        tone: "green",
        text: "Get your business heard daily on a retail radio experience",
      };
    }

    return {
      tone: "blue",
      text: "Tell me what you need — I’ll recommend the best direction",
    };
  }

  function budgetHint(): { tone: Tone; text: string } | null {
    if (!budget) return null;

    if (budget === "$20 – $100") {
      return { tone: "green", text: "Best for StoreSound sponsorship or quick video" };
    }
    if (budget === "$100 – $300") {
      return { tone: "green", text: "Perfect for video production or small branding work" };
    }
    if (budget === "$300 – $500") {
      return { tone: "blue", text: "Great for branding packages or upgrades" };
    }
    if (budget === "$500 – $1,000") {
      return { tone: "blue", text: "Best fit for MVP apps" };
    }
    if (budget === "$1,000+") {
      return { tone: "green", text: "Custom builds or expanded projects" };
    }

    return null;
  }

  function HintChip({ tone, text }: { tone: Tone; text: string }) {
    const isGreen = tone === "green";

    const dot = isGreen
      ? "bg-[var(--green)] shadow-[0_0_14px_rgba(57,255,20,0.28)]"
      : "bg-[var(--blue)] shadow-[0_0_14px_rgba(79,209,255,0.28)]";

    const pill = isGreen
      ? "border-[rgba(57,255,20,0.22)] bg-[rgba(57,255,20,0.08)] text-white"
      : "border-[rgba(79,209,255,0.22)] bg-[rgba(79,209,255,0.08)] text-white";

    return (
      <div className="mt-2 flex flex-wrap gap-2">
        <span className={`hint-chip inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${pill}`}>
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

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>Name</label>
          <input name="name" required className={input} placeholder="Your name" />
        </div>

        <div>
          <label className={label}>Email</label>
          <input name="email" type="email" required className={input} placeholder="you@email.com" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>Phone (optional)</label>
          <input name="phone" className={input} placeholder="Phone number (optional)" />
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
            <option value="" disabled>Select…</option>
            <option>MVP App — Starting at $500</option>
            <option>Video Production — Starting at $100</option>
            <option>Ultimate Branding Package — Starting at $300</option>
            <option>Monthly Retainer — Starting at $50</option>
            <option>StoreSound Retail Radio Sponsorship — $20/month</option>
            <option>Add-On: 30-Second Commercial — +$25/month</option>
          </select>

          {ph && <HintChip tone={ph.tone} text={ph.text} />}
        </div>
      </div>

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
            <option value="" disabled>Select…</option>
            <option>$20 – $100</option>
            <option>$100 – $300</option>
            <option>$300 – $500</option>
            <option>$500 – $1,000</option>
            <option>$1,000+</option>
          </select>

          {bh && <HintChip tone={bh.tone} text={bh.text} />}
        </div>

        <div>
          <label className={label}>Timeline</label>
          <select name="timeline" required className={select}>
            <option value="" disabled>Select…</option>
            <option>ASAP</option>
            <option>1–2 weeks</option>
            <option>2–4 weeks</option>
            <option>1–2 months</option>
            <option>Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label className={label}>Primary goal</label>
        <input name="goal" required className={input} placeholder="What are you trying to accomplish?" />
      </div>

      <div>
        <label className={label}>Project details</label>
        <textarea
          name="details"
          required
          rows={5}
          className={input}
          placeholder="Tell me about your project..."
        />
      </div>

      <button disabled={status === "sending"} className="btn btn-primary">
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {msg && (
        <div className={`rounded-2xl border border-white/10 p-4 text-sm ${
          status === "success"
            ? "bg-[var(--green)]/10 text-[var(--green)]"
            : "bg-red-500/10 text-red-200"
        }`}>
          {msg}
        </div>
      )}
    </form>
  );
}