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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Amped — New American Energy",
    description:
      "Amped organizes the political and cultural power of the clean energy economy to accelerate the energy transition.",
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
