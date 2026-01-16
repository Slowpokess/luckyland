import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { SITE_CONFIG, NAVIGATION_CONFIG } from "@/lib/constants/site";
import { LEGAL_DISCLOSURES } from "@/lib/constants/legal";

export function Footer() {
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
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
            <p className="text-xs text-muted-foreground">
              Registered in {SITE_CONFIG.company.state}, {SITE_CONFIG.company.country}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${SITE_CONFIG.company.supportEmail}`}>
                  {SITE_CONFIG.company.supportEmail}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Wyoming, USA</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              {NAVIGATION_CONFIG.main.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              {NAVIGATION_CONFIG.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclosures */}
        <div className="mt-8 border-t pt-8">
          <p className="text-xs text-center text-muted-foreground">
            {LEGAL_DISCLOSURES.npn}
          </p>
          <p className="mt-2 text-xs text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
