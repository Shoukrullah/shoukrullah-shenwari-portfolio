"use client";

import { useInView, motion, Easing } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  opacity?: number;
  y?: string | number;
  stiffness?: number;
  damping?: number;
  x?: string | number;
  type?: "spring" | "tween";
  duration?: number;
  ease?: Easing | Easing[];
  isList?: boolean;
  className?: string;
  threshold?: number;
}

function ScrollFadeIn({
  children,
  delay = 0,
  opacity = 0,
  y = 20,
  damping = 10,
  stiffness = 130,
  x = 0,
  type = "spring",
  duration,
  ease,
  isList = false,
  className,
  threshold = 0,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: `0px 0px ${-threshold}% 0px`,
  });

  const variants = {
    hidden: { opacity, x, y },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const transition = { type, stiffness, damping, delay, duration, ease };

  const MotionTag = isList ? motion.li : motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={transition}
    >
      {children}
    </MotionTag>
  );
}

export default ScrollFadeIn;
