"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function EnterprisePage() {
  return (
    <div>
      <Navbar />
      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Enterprise
          </motion.h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">Security, performance, and compliance for teams at scale.</p>
        </section>
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {['SLA & Support', 'SSO & SAML', 'Security & Compliance'].map((t, i) => (
            <motion.div key={t} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.4, delay:i*0.05}} className="rounded-xl border border-white/10 p-5 bg-white/[0.03]">
              <div className="font-medium text-white">{t}</div>
              <div className="mt-1 text-sm text-white/70">Enterprise features to meet your needs.</div>
            </motion.div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}


