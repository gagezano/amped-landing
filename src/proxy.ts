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

/**
 * Crawlers use the host the user typed (e.g. amped.org vs www). Redirect to the
 * canonical host from NEXT_PUBLIC_SITE_URL so HTML and OG tags always match.
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
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    "/",
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
