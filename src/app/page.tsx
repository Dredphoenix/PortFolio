"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import ProcessSection from "@/components/sections/ProcessSection";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Hero />
      <ProcessSection />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Services />
      <Contact />
    </main>
  );
}