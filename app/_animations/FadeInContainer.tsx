"use client";
import { Easing, motion } from "framer-motion";

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
  className?: string
}

function FadeInContainer({
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
  className
}: Props) {
  const headerVariants = {
    hidden: {
      opacity,
      y,
      x,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };
  return (
    <motion.div
      variants={headerVariants}
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ type, stiffness, damping, delay, duration,ease }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInContainer;
