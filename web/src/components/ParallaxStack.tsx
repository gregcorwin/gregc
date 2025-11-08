"use client";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ReactNode } from "react";

type Layer = {
  children: ReactNode;
  speed: number; // negative: slower than scroll, positive: faster
};

type ParallaxStackProps = {
  layers: Layer[];
  className?: string;
};

type ParallaxLayerProps = Layer & {
  scrollY: MotionValue<number>;
};

function ParallaxLayer({ children, speed, scrollY }: ParallaxLayerProps) {
  const y = useTransform(scrollY, [0, 1000], [0, speed]);

  return (
    <motion.div style={{ y }} className="absolute inset-0">
      <div className="absolute inset-0">{children}</div>
    </motion.div>
  );
}

export function ParallaxStack({ layers, className }: ParallaxStackProps) {
  const { scrollY } = useScroll();

  return (
    <div className={"relative overflow-hidden " + (className ?? "")}>
      {layers.map((layer, index) => (
        <ParallaxLayer key={index} scrollY={scrollY} {...layer} />
      ))}
    </div>
  );
}
