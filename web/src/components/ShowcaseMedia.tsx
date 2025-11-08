"use client";
import { motion } from "framer-motion";

type ShowcaseMediaProps = {
  aspect?: string; // e.g. '16/9'
  label?: string;
};

export function ShowcaseMedia({ aspect = "16/9", label = "Media Placeholder" }: ShowcaseMediaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-xl border border-white/10 overflow-hidden bg-white/[0.03] backdrop-blur"
    >
      <div className={`w-full aspect-[${aspect}] grid place-items-center`}>
        <div className="text-white/60 text-sm">{label}</div>
      </div>
    </motion.div>
  );
}


