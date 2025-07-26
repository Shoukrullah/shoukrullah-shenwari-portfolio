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
  duration?: number | undefined;
  ease?: Easing | Easing[] | undefined;
  isList?: boolean;
  className?: string;
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
  duration = undefined,
  ease = undefined,
  isList = false,
  className,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const boxVariants = {
    hidden: {
      opacity,
      y,
      x,
    },
    visible: isInView ? { opacity: 1, x: 0, y: 0 } : {},
  };
  if (!isList)
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        transition={{ type, stiffness, damping, delay, duration, ease }}
      >
        {children}
      </motion.div>
    );
  else
    return (
      <motion.li
        ref={ref}
        className={className}
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        transition={{ type, stiffness, damping, delay, duration, ease }}
      >
        {children}
      </motion.li>
    );
}

export default ScrollFadeIn;
