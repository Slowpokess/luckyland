"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type LazyVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
  rootMargin?: string;
};

export function LazyVideo({
  src,
  className,
  rootMargin = "200px",
  preload,
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <video
      ref={videoRef}
      className={cn(className)}
      src={isVisible ? src : undefined}
      preload={isVisible ? preload ?? "metadata" : "none"}
      {...props}
    />
  );
}
