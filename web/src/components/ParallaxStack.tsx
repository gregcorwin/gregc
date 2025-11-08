"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

type Layer = {
  children: ReactNode;
  speed: number; // negative: slower than scroll, positive: faster
};

type ParallaxStackProps = {
  layers: Layer[];
  className?: string;
};

export function ParallaxStack({ layers, className }: ParallaxStackProps): JSX.Element {
  const { scrollY } = useScroll();

  return (
    <div className={"relative overflow-hidden " + (className ?? "")}> 
      {layers.map((layer, i) => {
        const y = useTransform(scrollY, [0, 1000], [0, layer.speed]);
        return (
          <motion.div key={i} style={{ y }} className="absolute inset-0">
            <div className="absolute inset-0">{layer.children}</div>
          </motion.div>
        );
      })}
    </div>
  );
}


