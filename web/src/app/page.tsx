import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ParallaxBackdrop } from "@/components/ParallaxBackdrop";

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
