"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Design",
    desc: "A true design canvas with modern layout, styling and typography.",
  },
  {
    title: "Animations",
    desc: "Make your designs move without complex code.",
  },
  {
    title: "Collaborate",
    desc: "Work together live on a single canvas.",
  },
  {
    title: "CMS",
    desc: "Flexible content management for teams.",
  },
  {
    title: "SEO & Performance",
    desc: "Built-in performance and SEO best practices.",
  },
  {
    title: "Publish",
    desc: "One click deploy to global edge.",
  },
];

export function Features(): JSX.Element {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-center text-white"
        >
          Powerful, yet simple
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/10 p-5 bg-white/[0.03] backdrop-blur"
            >
              <div className="text-base font-medium text-white">{f.title}</div>
              <div className="mt-2 text-sm text-white/70">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


