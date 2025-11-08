"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxBackdrop(): JSX.Element {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -120]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.05]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        aria-hidden
        style={{ y: y1, scale }}
        className="absolute -top-24 -left-32 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18)_0%,rgba(0,0,0,0)_70%)] blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ y: y2, scale }}
        className="absolute -top-10 -right-20 h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.16)_0%,rgba(0,0,0,0)_70%)] blur-[90px]"
      />
    </div>
  );
}


