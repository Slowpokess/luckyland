import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const UK_LOCALE_PREFIX = "/uk";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml")
  ) {
    return NextResponse.next();
  }

  const locale =
    pathname === UK_LOCALE_PREFIX || pathname.startsWith(`${UK_LOCALE_PREFIX}/`)
      ? "uk"
      : "en";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.cookies.set("NEXT_LOCALE", locale, { path: "/" });

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|assets|.*\\..*).*)"],
};
