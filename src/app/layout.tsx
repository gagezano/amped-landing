import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-300EGJNQLH";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-ui",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

/**
 * Absolute site origin for Open Graph / Twitter. Instagram and others require HTTPS
 * and a public host — never fall back to localhost in production builds.
 */
function getSiteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (explicit) return explicit;
  const vercelHost = process.env.VERCEL_URL?.trim().replace(/\/$/, "");
  if (vercelHost) return `https://${vercelHost}`;
  return "http://localhost:3000";
}

const siteUrl = getSiteOrigin();

/** Canonical link-preview art — replace `public/social/link-preview.png` when the design updates. */
const SOCIAL_SHARE_PATH = "/social/link-preview.png";
const SOCIAL_SHARE_WIDTH = 1024;
const SOCIAL_SHARE_HEIGHT = 535;

/** Bump when replacing the PNG so iMessage / MMS caches see a new path even between deploys. */
const SHARE_IMAGE_REVISION = "2";

/**
 * Chat apps cache preview URLs aggressively. Use deploy id + revision so each ship
 * gets a distinct og:image URL (some clients strip query params; path change still helps).
 */
function socialShareImageUrl(): string {
  const bust =
    process.env.VERCEL_DEPLOYMENT_ID || process.env.VERCEL_GIT_COMMIT_SHA || "";
  const qs = new URLSearchParams();
  if (bust) qs.set("v", bust);
  qs.set("r", SHARE_IMAGE_REVISION);
  const q = qs.toString();
  return q ? `${SOCIAL_SHARE_PATH}?${q}` : SOCIAL_SHARE_PATH;
}

const socialShareImage = socialShareImageUrl();

/** Absolute URL for og:image / twitter:image (some crawlers ignore relative URLs). */
const absoluteSocialShareImage = new URL(socialShareImage, `${siteUrl}/`).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amped — New American Energy",
    template: "%s — Amped",
  },
  description:
    "Amped organizes the political and cultural power of the clean energy economy to accelerate the energy transition.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Amped",
    title: "Amped — New American Energy",
    description:
      "Amped organizes the political and cultural power of the clean energy economy to accelerate the energy transition.",
    images: [
      {
        url: absoluteSocialShareImage,
        ...(siteUrl.startsWith("https")
          ? { secureUrl: absoluteSocialShareImage }
          : {}),
        width: SOCIAL_SHARE_WIDTH,
        height: SOCIAL_SHARE_HEIGHT,
        alt: "Amped — New American Energy",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amped — New American Energy",
    description:
      "Amped organizes the political and cultural power of the clean energy economy to accelerate the energy transition.",
    images: [absoluteSocialShareImage],
  },
  icons: {
    icon: [
      {
        url: "/favicon-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [{ url: "/favicon.jpg", sizes: "154x154" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=ranade@400,500,700&display=swap"
        />
        <noscript>
          {/* Ensure reveal-gated elements stay visible without JS / before hydration on crawlers. */}
          <style>{`.animate-amp-reveal,.amp-sticker-stack{opacity:1!important;transform:none!important;animation:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full">{children}</body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
