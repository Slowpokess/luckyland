"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin } from "lucide-react";
import { SITE_CONFIG, NAVIGATION_CONFIG } from "@/lib/constants/site";
import { LEGAL_DISCLOSURES } from "@/lib/constants/legal";
import { getTranslations } from "@/lib/i18n";
import { getLocaleFromPathname, withLocale } from "@/lib/locale";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getTranslations(locale);
  const registeredIn = t.footer.registeredIn
    .replace("{state}", SITE_CONFIG.company.state)
    .replace("{country}", SITE_CONFIG.company.country);
  const uniqueEmails = Array.from(
    new Set([SITE_CONFIG.company.businessEmail, SITE_CONFIG.company.supportEmail])
  );

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">LL</span>
              </div>
              <span className="font-bold text-lg">Lucky Link LLC</span>
            </div>
            <p className="text-sm text-muted-foreground">{t.footer.description}</p>
            <p className="text-xs text-muted-foreground">
              {registeredIn}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <div className="space-y-1">
                  {uniqueEmails.map((email) => (
                    <div key={email}>
                      <Link href={withLocale(locale, "/contact")}>{email}</Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Wyoming, USA</span>
              </div>
              {SITE_CONFIG.company.phoneNumbers.map((phone) => (
                <div key={phone.value} className="flex items-center space-x-2 text-muted-foreground">
                  <a href={`tel:${phone.value}`} className="hover:text-foreground">
                    {phone.value} {phone.label ? `(${phone.label})` : ""}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-semibold">{t.footer.company}</h3>
            <ul className="space-y-2 text-sm">
              {NAVIGATION_CONFIG.main.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={withLocale(locale, item.href)}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-semibold">{t.footer.legal}</h3>
            <ul className="space-y-2 text-sm">
              {NAVIGATION_CONFIG.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={withLocale(locale, item.href)}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t.common[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold">{t.footer.support}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={withLocale(locale, "/contact")}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.common.contactUs}
                </Link>
              </li>
              <li>
                <Link
                  href={withLocale(locale, "/blog")}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.nav.blog}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclosures */}
        <div className="mt-8 border-t pt-8">
          <p className="text-xs text-center text-muted-foreground">
            {LEGAL_DISCLOSURES[locale].npn}
          </p>
          <p className="mt-2 text-xs text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.company.name}. {t.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
