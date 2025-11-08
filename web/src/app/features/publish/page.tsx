"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ShowcaseMedia } from "@/components/ShowcaseMedia";
import { TiltCard } from "@/components/TiltCard";

export default function PublishPage(): JSX.Element {
  return (
    <div>
      <Navbar />
      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="text-4xl sm:text-5xl font-semibold tracking-tight text-center text-white">
            From design to live in seconds
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.15}} className="mt-4 text-center text-white/70 max-w-2xl mx-auto">
            Focus on what it looks like, we’ll do the rest.
          </motion.p>
          <ShowcaseMedia label="Publishing UI Demo" />
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Publish fast, secure, and maintenance-free</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Built-in Analytics",
              "Proven Uptime",
              "Automatic SSL",
              "Server-Side Rendering",
              "Automated SEO",
              "Custom Domains",
            ].map((t) => (
              <TiltCard key={t} className="rounded-xl border border-white/10 p-5 bg-white/[0.03]">
                <div className="text-white font-medium">{t}</div>
                <div className="mt-1 text-sm text-white/70">Production-grade by default.</div>
              </TiltCard>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


