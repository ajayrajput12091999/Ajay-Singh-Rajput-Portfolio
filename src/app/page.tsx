"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <main className="relative pt-4">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,_rgba(14,165,233,0.16),_transparent_48%),radial-gradient(circle_at_85%_10%,_rgba(20,184,166,0.15),_transparent_40%),radial-gradient(circle_at_55%_100%,_rgba(34,197,94,0.14),_transparent_45%)] opacity-80 dark:opacity-70" />
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
