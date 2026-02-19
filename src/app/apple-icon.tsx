// src/app/apple-icon.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050607",
          position: "relative",
          overflow: "hidden",
          borderRadius: 42,
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: -20,
            background:
              "radial-gradient(circle at 35% 30%, rgba(79,209,255,0.22), transparent 55%), radial-gradient(circle at 70% 70%, rgba(57,255,20,0.18), transparent 55%)",
          }}
        />
        <div
          style={{
            width: 130,
            height: 130,
            borderRadius: 36,
            border: "1px solid rgba(255,255,255,0.14)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 44,
              fontWeight: 850,
              letterSpacing: -2,
              color: "rgba(255,255,255,0.92)",
            }}
          >
            Z2S
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}