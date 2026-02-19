// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            top: -140,
            left: "50%",
            width: 900,
            height: 520,
            transform: "translateX(-50%)",
            borderRadius: 9999,
            background: "rgba(79, 209, 255, 0.14)",
            filter: "blur(70px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 140,
            width: 760,
            height: 460,
            borderRadius: 9999,
            background: "rgba(57, 255, 20, 0.10)",
            filter: "blur(70px)",
          }}
        />

        {/* Card */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            borderRadius: 36,
            border: "1px solid rgba(255,255,255,0.12)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
            padding: 56,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 9999,
                background: "#39ff14",
                boxShadow: "0 0 24px rgba(57,255,20,0.35)",
              }}
            />
            <div style={{ color: "rgba(255,255,255,0.84)", fontSize: 20 }}>
              Zero2Sixty Media
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                color: "white",
                fontSize: 64,
                fontWeight: 700,
                letterSpacing: -1,
                lineHeight: 1.05,
              }}
            >
              Launch faster.
              <span style={{ color: "rgba(255,255,255,0.92)" }}> Look legit.</span>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["Apps", "Video", "Branding", "Web"].map((x) => (
                <div
                  key={x}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 9999,
                    border: "1px solid rgba(255,255,255,0.14)",
                    background: "rgba(255,255,255,0.04)",
                    color: "rgba(255,255,255,0.82)",
                    fontSize: 18,
                  }}
                >
                  {x}
                </div>
              ))}
            </div>

            <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 24, maxWidth: 900 }}>
              Premium builds for founders, businesses, and creators — speed, polish, outcomes.
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 18 }}>
              zero2sixtymedia.com
            </div>

            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 9999,
                  background: "#4fd1ff",
                  boxShadow: "0 0 24px rgba(79,209,255,0.30)",
                }}
              />
              <div style={{ color: "rgba(255,255,255,0.70)", fontSize: 18 }}>
                Fast turnarounds • Clean delivery • No fluff
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}