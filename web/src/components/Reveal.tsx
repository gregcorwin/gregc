"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  staggerChildrenMs?: number;
};

export function Reveal({
  children,
  delay = 0,
  y = 16,
  duration = 0.6,
  className,
  once = true,
  staggerChildrenMs = 60,
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        when: "beforeChildren",
        staggerChildren: staggerChildrenMs / 1000,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
    >
      <motion.div variants={childVariants}>{children}</motion.div>
    </motion.div>
  );
}


