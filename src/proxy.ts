import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function canonicalSiteUrl(): URL | null {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return null;
  return new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
}

function apex(hostname: string) {
  return hostname.replace(/^www\./i, "").toLowerCase();
}

/** Meta / Instagram / etc. often fetch the apex URL; some crawlers do not follow redirects. */
function isLinkPreviewBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return (
    ua.includes("facebookexternalhit") ||
    ua.includes("facebot") ||
    ua.includes("instagram") ||
    ua.includes("linkedinbot") ||
    ua.includes("twitterbot") ||
    ua.includes("slackbot") ||
    ua.includes("whatsapp") ||
    ua.includes("telegram") ||
    ua.includes("discordbot") ||
    ua.includes("pinterest") ||
    ua.includes("embedly")
  );
}

/**
 * Browsers: redirect apex ↔ www to canonical host from NEXT_PUBLIC_SITE_URL.
 * Link-preview bots: rewrite to canonical URL so the first response is 200 HTML with
 * og:* tags (some crawlers skip previews when they only see a redirect).
 */
export function proxy(request: NextRequest) {
  const canonical = canonicalSiteUrl();
  if (!canonical) return NextResponse.next();

  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  if (!host || host === canonical.hostname) return NextResponse.next();

  if (apex(host) !== apex(canonical.hostname)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.hostname = canonical.hostname;
  url.protocol = canonical.protocol;

  const ua = request.headers.get("user-agent") ?? "";
  if (isLinkPreviewBot(ua)) {
    return NextResponse.rewrite(url);
  }

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    "/",
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
