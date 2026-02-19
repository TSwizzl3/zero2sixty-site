// src/app/twitter-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 675 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#050607",
          position: "relative",
          overflow: "hidden",
          padding: 72,
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            left: "50%",
            width: 980,
            height: 560,
            transform: "translateX(-50%)",
            borderRadius: 9999,
            background: "rgba(79, 209, 255, 0.14)",
            filter: "blur(75px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 120,
            width: 760,
            height: 460,
            borderRadius: 9999,
            background: "rgba(57, 255, 20, 0.10)",
            filter: "blur(75px)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "100%",
            borderRadius: 36,
            border: "1px solid rgba(255,255,255,0.12)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
            padding: 56,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 9999,
                background: "#4fd1ff",
                boxShadow: "0 0 24px rgba(79,209,255,0.30)",
              }}
            />
            <div style={{ color: "rgba(255,255,255,0.84)", fontSize: 20 }}>
              Zero2Sixty Media
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                color: "white",
                fontSize: 58,
                fontWeight: 750,
                letterSpacing: -1,
                lineHeight: 1.05,
              }}
            >
              Premium builds.
              <span style={{ color: "rgba(255,255,255,0.92)" }}> Zero fluff.</span>
            </div>
            <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 24, maxWidth: 900 }}>
              Apps, video, branding, and web — built for speed and outcomes.
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 18 }}>
              zero2sixtymedia.com
            </div>
            <div style={{ color: "rgba(255,255,255,0.70)", fontSize: 18 }}>
              Denver-based • Remote-friendly
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}