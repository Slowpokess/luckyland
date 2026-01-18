"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { getTranslations } from "@/lib/i18n";
import { getLocaleFromPathname } from "@/lib/locale";

export function CookieBanner() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getTranslations(locale);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookie-consent");
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
    setIsClosed(true);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "false");
    setIsVisible(false);
    setIsClosed(true);
  };

  if (!isVisible || isClosed) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background p-4 shadow-lg">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex-1 text-sm">
          <p className="font-medium">{t.cookie.title}</p>
          <p className="text-muted-foreground">{t.cookie.description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            {t.cookie.decline}
          </Button>
          <Button size="sm" onClick={handleAccept}>
            {t.cookie.accept}
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
