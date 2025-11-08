"use client";
import { useCallback, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleOpenVideo = useCallback(() => {
    setIsVideoOpen(true);
  }, []);

  const handleCloseVideo = useCallback(() => {
    setIsVideoOpen(false);
  }, []);

  return (
    <section className="pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-left"
          >
            <h1 className="text-4xl sm:text-4xl font-regular tracking-tight text-white">
              Bob's moved in!
            </h1>
            <p className="text-white/70 text-lg">Mt. Carmel will never the the same.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 gap-6 lg:grid-cols-[0.62fr_0.38fr]"
          >
            <figure className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <Image
                src="/bob-1.jpg"
                alt="Bob settling into his new home"
                priority
                fill
                sizes="(min-width: 1024px) 55vw, 90vw"
                className="h-full w-full object-cover"
              />
            </figure>
            <motion.button
              type="button"
              onClick={handleOpenVideo}
              className="group relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl border border-violet-400/40 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-indigo-500/20 text-left shadow-lg shadow-violet-500/20 transition hover:border-violet-300/60 hover:shadow-xl hover:shadow-violet-500/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent)] opacity-70 transition group-hover:opacity-90" />
              <div className="relative flex flex-col items-center gap-4 px-6 text-center text-white">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-white/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-10 w-10"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 6.75 16.5 12l-9 5.25V6.75Z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-medium">Watch the move-in</p>
                  <p className="text-sm text-white/75">
                    Tap for a tour and  Bob&apos;s first moments in Mt. Carmel.
                  </p>
                </div>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseVideo}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="relative w-[90vw] max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-black shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleCloseVideo}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:border-white/40 hover:bg-black/80"
                aria-label="Close video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6 18 18M18 6 6 18" />
                </svg>
              </button>
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src="https://player.vimeo.com/video/1134924249?h=aa379b15e7&autoplay=1"
                  title="Bob's move-in highlight"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


