"use client";
import { motion } from "framer-motion";

const quotes = [
  {
    quote:
      "QuickRoute gives us everything we need to move fast. We don’t wait on dev. We don’t compromise on design.",
    name: "Head of Design",
    company: "Perplexity",
  },
  {
    quote:
      "Launching was seamless. Live in no time, no friction.",
    name: "Co-founder",
    company: "Visual Electric",
  },
  {
    quote:
      "Switching was incredibly smooth. Publish instantly and maintain standards.",
    name: "CEO",
    company: "Loops",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white text-center">
          Founders feel it. Designers know it.
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 p-6 bg-white/[0.03]"
            >
              <p className="text-white/90">“{q.quote}”</p>
              <footer className="mt-4 text-sm text-white/60">
                {q.name} · {q.company}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}


