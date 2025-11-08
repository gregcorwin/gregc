"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "bg-black/30 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
     {/*} <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-md bg-gradient-to-br from-blue-500 to-purple-600" />
          <Link href="/" className="font-semibold tracking-tight">
            QuickRoute
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <Link href="/features/publish" className="hover:text-white">Publish</Link>
          <Link href="/startups" className="hover:text-white">Startups</Link>
          <Link href="/academy" className="hover:text-white">Academy</Link>
          <Link href="/enterprise" className="hover:text-white">Enterprise</Link>
          <Link
            href="#get-started"
            className="inline-flex items-center rounded-md bg-white text-black px-3 py-1.5 text-sm hover:opacity-90"
          >
            Get started
          </Link>
        </div>
      </nav>*/}
    </motion.header>
  );
}


