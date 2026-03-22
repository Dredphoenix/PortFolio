"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import ProcessSection from "@/components/sections/ProcessSection";

import { useState } from "react";
import Navbar from "@/components/layouts/Navbar";

export default function Home() {
    const [wipeActive, setWipeActive] = useState(false);
  return (
      <main className="bg-black text-white overflow-x-hidden">

      <Navbar setWipeActive={setWipeActive} />

      {/* CONTENT WRAPPER */}
      <div
        className={`transition-transform duration-500 ${
          wipeActive ? "-translate-x-10 opacity-80" : "translate-x-0 opacity-100"
        }`}
      >
        <Hero />
        <ProcessSection/>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Services />
        <Contact />
      </div>

    </main>
  );
}
