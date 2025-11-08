import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ParallaxBackdrop } from "@/components/ParallaxBackdrop";
import { TiltCard } from "@/components/TiltCard";
import { ShowcaseMedia } from "@/components/ShowcaseMedia";
import { Reveal } from "@/components/Reveal";
import { ParallaxStack } from "@/components/ParallaxStack";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ParallaxBackdrop />
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
