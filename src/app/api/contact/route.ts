import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  projectType?: string | null;
  budget?: string | null;
  timeline?: string | null;
  goal?: string | null;
  details?: string | null;
  source?: string | null;
};

function clean(v: unknown, max = 4000) {
  const s = typeof v === "string" ? v.trim() : "";
  return s.length > max ? s.slice(0, max) + "…" : s;
}

function getClientIp(req: Request) {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

const bucket = new Map<string, { count: number; resetAt: number }>();
function rateLimit(key: string, limit = 8, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const row = bucket.get(key);

  if (!row || now > row.resetAt) {
    bucket.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  if (row.count >= limit) return { ok: false };

  row.count += 1;
  bucket.set(key, row);
  return { ok: true };
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeEmailSubject(s: string, max = 140) {
  const v = (s || "").replace(/[\r\n]+/g, " ").trim();
  return v.length > max ? v.slice(0, max) + "…" : v;
}

function normalizeEmail(s: string) {
  return (s || "").trim().toLowerCase();
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    const name = clean(body.name || "New Lead", 140);
    const email = clean(body.email, 320);
    const phone = clean(body.phone, 64);
    const projectType = clean(body.projectType, 120);
    const budget = clean(body.budget, 120);
    const timeline = clean(body.timeline, 120);
    const goal = clean(body.goal, 300);
    const details = clean(body.details, 4000);
    const source = clean(body.source, 120);

    if (!email || !email.includes("@")) {
      return Response.json({ error: "Valid email is required." }, { status: 400 });
    }
    if (!projectType) {
      return Response.json({ error: "Project type is required." }, { status: 400 });
    }
    if (!budget) {
      return Response.json({ error: "Budget is required." }, { status: 400 });
    }
    if (!timeline) {
      return Response.json({ error: "Timeline is required." }, { status: 400 });
    }
    if (!goal) {
      return Response.json({ error: "Goal is required." }, { status: 400 });
    }

    const ip = getClientIp(req);
    const rl = rateLimit(ip);
    if (!rl.ok) {
      return Response.json(
        { error: "Too many requests. Please try again in a bit." },
        { status: 429 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const fromName = process.env.CONTACT_FROM_NAME || "Zero2Sixty Media";

    // Optional: send a confirmation to the lead (recommended)
    const sendConfirmation =
      (process.env.CONTACT_SEND_CONFIRMATION || "1").trim() !== "0";

    // Optional: CTA link you want in the confirmation email
    const bookUrl =
      (process.env.CONTACT_BOOK_URL || "").trim() ||
      "https://zero2sixtymedia.com/start";

    if (!apiKey || !toEmail || !fromEmail) {
      return Response.json(
        { error: "Server email config missing. Check .env.local." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    /* ----------------------------- INTERNAL (YOU) ----------------------------- */
    const internalSubject = safeEmailSubject(
      `Zero2Sixty Lead: ${projectType} • ${budget}`
    );

    const internalText = [
      `New lead for Zero2Sixty Media`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : `Phone: (not provided)`,
      `Project Type: ${projectType}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
      `Goal: ${goal}`,
      details ? `Details: ${details}` : `Details: (not provided)`,
      source ? `Source: ${source}` : `Source: (not provided)`,
      `IP: ${ip}`,
    ]
      .filter(Boolean)
      .join("\n");

    const internalHtml = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height: 1.5;">
        <h2 style="margin: 0 0 12px;">New Zero2Sixty Lead</h2>
        <p style="margin: 0 0 14px; color:#374151;">
          Direct submission from <b>${escapeHtml(source || "Website")}</b>
        </p>
        <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 720px;">
          ${[
            ["Name", name],
            ["Email", email],
            ["Phone", phone || "(not provided)"],
            ["Project Type", projectType],
            ["Budget", budget],
            ["Timeline", timeline],
            ["Goal", goal],
            ["Details", details || "(not provided)"],
            ["Source", source || "(not provided)"],
            ["IP", ip],
          ]
            .map(
              ([k, v]) => `
              <tr>
                <td style="padding: 10px 12px; border: 1px solid #e5e7eb; background: #f9fafb; width: 160px;"><b>${escapeHtml(
                  k
                )}</b></td>
                <td style="padding: 10px 12px; border: 1px solid #e5e7eb;">${escapeHtml(
                  v
                )}</td>
              </tr>
            `
            )
            .join("")}
        </table>
      </div>
    `;

    const internalSend = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: internalSubject,
      text: internalText,
      html: internalHtml,
    });

    if (internalSend.error) {
      return Response.json({ error: internalSend.error.message }, { status: 500 });
    }

    /* --------------------------- CONFIRMATION (LEAD) -------------------------- */
    if (sendConfirmation) {
      const leadEmail = normalizeEmail(email);

      const confirmSubject = safeEmailSubject(
        "Got it — I’ll reply today (Zero2Sixty Media)"
      );

      const confirmText = [
        `Hey${name && name !== "New Lead" ? ` ${name}` : ""} —`,
        ``,
        `Thanks for reaching out. I got your project details and I’ll reply shortly with next steps.`,
        ``,
        `If you want to speed things up, you can send any links (site, IG, doc) or book a quick call here:`,
        `${bookUrl}`,
        ``,
        `— Tanner`,
        `Zero2Sixty Media`,
      ].join("\n");

      const confirmHtml = `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height: 1.55;">
          <h2 style="margin:0 0 10px;">Got it — thanks.</h2>
          <p style="margin:0 0 14px; color:#111827;">
            I received your project details. I’ll reply shortly with next steps.
          </p>

          <div style="margin: 16px 0 18px; padding: 14px 16px; border:1px solid #e5e7eb; border-radius: 12px; background:#f9fafb;">
            <div style="font-size: 13px; color:#374151; margin-bottom:6px;"><b>Quick summary</b></div>
            <div style="font-size: 13px; color:#111827;">${escapeHtml(
              projectType
            )} • ${escapeHtml(budget)} • ${escapeHtml(timeline)}</div>
            <div style="font-size: 12px; color:#6b7280; margin-top:8px;">
              If anything changes, just reply to this email.
            </div>
          </div>

          <a href="${escapeHtml(
            bookUrl
          )}" style="display:inline-block; padding: 10px 14px; background:#111827; color:#ffffff; text-decoration:none; border-radius: 10px;">
            Book a quick call
          </a>

          <p style="margin:18px 0 0; font-size: 13px; color:#374151;">
            — Tanner<br/>
            <span style="color:#6b7280;">Zero2Sixty Media</span>
          </p>
        </div>
      `;

      const confirmSend = await resend.emails.send({
        from: `${fromName} <${fromEmail}>`,
        to: [leadEmail],
        replyTo: toEmail,
        subject: confirmSubject,
        text: confirmText,
        html: confirmHtml,
      });

      // If confirmation fails, don’t fail the whole request (internal email already sent)
      // but DO surface a server-side error for debugging via logs if you have them.
      // We keep response OK to avoid hurting conversions.
      if (confirmSend.error) {
        // no-op (intentionally)
      }
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (e: any) {
    return Response.json(
      { error: e?.message || "Unexpected error" },
      { status: 500 }
    );
  }
}