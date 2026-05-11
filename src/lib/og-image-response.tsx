import { ImageResponse } from "next/og";

const size = { width: 1200, height: 630 };

export function createSocialImageResponse() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#070707",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            padding: 64,
            textAlign: "center",
            maxWidth: 1000,
          }}
        >
          <p
            style={{
              fontSize: 28,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              margin: 0,
              opacity: 0.9,
            }}
          >
            New American Energy
          </p>
          <p
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              margin: 0,
              lineHeight: 1,
            }}
          >
            amped
          </p>
          <p
            style={{
              fontSize: 32,
              fontWeight: 400,
              lineHeight: 1.25,
              margin: 0,
              marginTop: 24,
              opacity: 0.95,
            }}
          >
            Amped organizes and unlocks political and cultural power to super charge the
            energy transition.
          </p>
        </div>
      </div>
    ),
    { ...size },
  );
}

export const socialImageSize = size;
