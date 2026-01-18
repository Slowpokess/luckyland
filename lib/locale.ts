export type Locale = "en" | "uk";

export const DEFAULT_LOCALE: Locale = "en";
export const UK_LOCALE_PREFIX = "/uk";

export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === UK_LOCALE_PREFIX || pathname.startsWith(`${UK_LOCALE_PREFIX}/`)) {
    return "uk";
  }
  return "en";
}

export function stripLocale(pathname: string): string {
  if (pathname === UK_LOCALE_PREFIX) {
    return "/";
  }
  if (pathname.startsWith(`${UK_LOCALE_PREFIX}/`)) {
    return pathname.slice(UK_LOCALE_PREFIX.length) || "/";
  }
  return pathname || "/";
}

export function withLocale(locale: Locale, href: string): string {
  if (!href.startsWith("/")) {
    return href;
  }
  if (locale === "uk") {
    return `${UK_LOCALE_PREFIX}${href === "/" ? "" : href}`;
  }
  return href;
}
