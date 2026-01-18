"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxVideoProps {
  src: string;
  className?: string;
  overlayClassName?: string;
}

export function ParallaxVideo({
  src,
  className,
  overlayClassName,
}: ParallaxVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      if (!containerRef.current || !videoRef.current) {
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 0;
      const progress =
        (windowHeight - rect.top) / (windowHeight + rect.height);
      const clamped = Math.min(Math.max(progress, 0), 1);
      const offset = (clamped - 0.5) * 30;

      videoRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(() => {
        update();
        rafId = 0;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 -z-10 overflow-hidden", className)}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/40",
          overlayClassName
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-background/80" />
    </div>
  );
}
