"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAVIGATION_CONFIG, LOCALES } from "@/lib/constants/site";
import { getTranslations } from "@/lib/i18n";
import { getLocaleFromPathname, stripLocale, withLocale } from "@/lib/locale";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = getLocaleFromPathname(pathname);
  const t = getTranslations(locale);

  const handleLocaleChange = (nextLocale: "en" | "uk") => {
    const normalizedPath = stripLocale(pathname);
    const nextPath = withLocale(nextLocale, normalizedPath);
    router.push(nextPath);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={withLocale(locale, "/")} className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">LL</span>
            </div>
            <span className="font-bold text-lg">Lucky Link LLC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {NAVIGATION_CONFIG.main.map((item) => (
              <Link
                key={item.href}
                href={withLocale(locale, item.href)}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <select
                value={locale}
                onChange={(e) => handleLocaleChange(e.target.value as "en" | "uk")}
                className="flex items-center space-x-1 rounded-md border bg-background px-3 py-1.5 text-sm"
              >
                <option value="en">{LOCALES.en}</option>
                <option value="uk">{LOCALES.uk}</option>
              </select>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {NAVIGATION_CONFIG.main.map((item) => (
                <Link
                  key={item.href}
                  href={withLocale(locale, item.href)}
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav[item.key]}
                </Link>
              ))}
              <div className="border-t pt-4">
                <select
                  value={locale}
                  onChange={(e) => handleLocaleChange(e.target.value as "en" | "uk")}
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                >
                  <option value="en">{LOCALES.en}</option>
                  <option value="uk">{LOCALES.uk}</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
