"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
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
          <p className="font-medium">We use cookies</p>
          <p className="text-muted-foreground">
            We use cookies to improve your experience and analyze site usage. By
            continuing to browse, you accept our use of cookies.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            Decline
          </Button>
          <Button size="sm" onClick={handleAccept}>
            Accept
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
