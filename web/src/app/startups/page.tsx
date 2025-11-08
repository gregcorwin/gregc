"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ParallaxBackdrop } from "@/components/ParallaxBackdrop";
import { Marquee } from "@/components/Marquee";
import { TiltCard } from "@/components/TiltCard";
import { ShowcaseMedia } from "@/components/ShowcaseMedia";
import { Testimonials } from "@/components/Testimonials";

export default function StartupsPage(): JSX.Element {
  return (
    <div>
      <ParallaxBackdrop />
      <Navbar />
      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="text-4xl sm:text-5xl font-semibold tracking-tight text-center text-white">
            Startups move faster
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.15}} className="mt-4 text-center text-white/70 max-w-2xl mx-auto">
            Go live today, no setup needed. Update with one-click publish.
          </motion.p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <TiltCard className="rounded-xl border border-white/10 p-6 bg-white/[0.03]">
              <div className="text-white font-medium mb-2">Build in hours</div>
              <div className="text-white/70 text-sm">Design, build, and publish with total control.</div>
            </TiltCard>
            <ShowcaseMedia label="Startups Hero Video" />
          </div>
        </section>
        <Marquee />
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { t: 'No devs required', d: 'Design, build, and publish in hours.' },
            { t: 'Stay in control', d: 'Update content anytime with built-in CMS.' },
            { t: 'Built to scale', d: 'Analytics and localization included.' },
          ].map((f, i) => (
            <TiltCard key={f.t} className="rounded-xl border border-white/10 p-5 bg-white/[0.03]">
              <div className="font-medium text-white">{f.t}</div>
              <div className="mt-1 text-sm text-white/70">{f.d}</div>
            </TiltCard>
          ))}
        </section>

        <Testimonials />

        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Apply today</h2>
          <p className="mt-2 text-white/70">Get QuickRoute Launch free for your first year.</p>
          <div className="mt-6">
            <a className="inline-flex items-center rounded-md bg-white text-black px-5 py-2.5 hover:opacity-90" href="#">Join the program</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


