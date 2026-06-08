import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <SmoothScroll>
      <MusicPlayer />
      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
