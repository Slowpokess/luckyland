"use client";

import { motion, useInView, Variants, Transition } from "framer-motion";
import { useRef } from "react";

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.4,
  className = "",
  once = true,
}: ScaleInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const transition: Transition = {
    duration,
    delay,
    ease: [0.25, 0.4, 0.25, 1],
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SlideInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "left" | "right" | "up" | "down";
  className?: string;
  once?: boolean;
}

export function SlideIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "left",
  className = "",
  once = true,
}: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const transition: Transition = {
    duration,
    delay,
    ease: [0.25, 0.4, 0.25, 1],
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...(direction === "left" && { x: -100 }),
      ...(direction === "right" && { x: 100 }),
      ...(direction === "up" && { y: 100 }),
      ...(direction === "down" && { y: -100 }),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
