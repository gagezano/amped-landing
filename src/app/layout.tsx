import type { Metadata } from "next";
import { Inter, Libre_Caslon_Display } from "next/font/google";
import "./globals.css";

const libreCasl = Libre_Caslon_Display({
  variable: "--font-libre-casl",
  subsets: ["latin"],
  weight: "400",
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
    "Amped organizes and unlocks political and cultural power to super charge the energy transition.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Amped",
    title: "Amped — New American Energy",
    description:
      "Amped organizes and unlocks political and cultural power to super charge the energy transition.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amped — New American Energy",
    description:
      "Amped organizes and unlocks political and cultural power to super charge the energy transition.",
  },
  icons: {
    icon: [{ url: "/favicon.jpg", type: "image/jpeg", sizes: "154x154" }],
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
      className={`${libreCasl.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=ranade@400,500,700&display=swap"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
