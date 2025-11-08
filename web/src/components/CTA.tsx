"use client";
import { motion } from "framer-motion";

export function CTA(): JSX.Element {
  return (
    <section id="get-started" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 p-8 text-center bg-white/[0.03]"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-white">Start publishing today</h3>
          <p className="mt-2 text-white/70">No credit card required. Ship in minutes.</p>
          <div className="mt-6">
            <a className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 hover:opacity-90" href="#">
              Start for free
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


