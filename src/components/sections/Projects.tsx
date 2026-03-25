"use client";

import { useState } from "react";
import Container from "../layouts/Container";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
  id: 1,
  title: "StreamSpace OTT",
  tag: "Streaming",
  year: "2025",
  description:
    "Modern OTT-style web application built with React and Vite, featuring dynamic content browsing, video playback, and responsive UI. Designed with a component-driven architecture to deliver a smooth and engaging media streaming experience.",
  tech: ["React", "Vite", "Tailwind CSS"],
  links: { live: "#", github: "https://github.com/Dredphoenix/Stream-Space-OTT" },
  accent: "rgba(255,255,255,0.05)",
},
  {
    id: 2,
    title: "AI Resume Builder",
    tag: "Productivity",
    year: "2025",
    description:
      "AI-powered resume builder that generates tailored resumes based on user input, with an integrated skill gap analyzer and ATS score checker. Provides real-time feedback, keyword optimization, and structured formatting to improve job matching and interview chances.",
    tech: ["React", "Node.js", "PostgreSQL"],
    links: { live: "https://ai-resume-builder-sigma-neon.vercel.app/", github: "#" },
    accent: "rgba(255,255,255,0.05)",
  },
 {
  id: 3,
  title: "RBAC Authorization Server",
  tag: "Auth System",
  year: "2025",
  description:
    "Backend authorization system implementing Role-Based Access Control (RBAC) with secure APIs. Enables role and permission management, protecting routes and resources based on user roles with structured access control logic.",
  tech: ["Node.js", "Express", "JWT", "MongoDB"],
  links: { live: "#", github: "https://github.com/Dredphoenix/RBAC---server" },
  accent: "rgba(255,255,255,0.05)",
},
  {
    id: 4,
    title: "AI Automation Workflow System",
    tag: "Automation",
    year: "2025",
    description:
      "Automated workflow system built with n8n to streamline content generation and publishing using AI. Integrates multiple APIs to fetch data, process it with AI models, and automatically publish across platforms with minimal manual intervention.",
    tech: ["n8n", "Node.js", "APIs", "AI"],
    links: { live: "#", github: "https://github.com/Dredphoenix/n8n" },
    accent: "rgba(255,255,255,0.05)",
  },
  {
    id: 5,
    title: "ChatBot Application",
    tag: "AI / NLP",
    year: "2025",
    description:
      "Interactive chatbot application that processes user input and generates contextual responses using rule-based logic and basic NLP techniques. Designed to simulate conversational interactions with a clean UI and structured response handling.",
    tech: ["JavaScript", "Node.js", "NLP"],
    links: { live: "https://dredphoenix.github.io/ChatBot/", github: "https://github.com/Dredphoenix/ChatBot" },
    accent: "rgba(255,255,255,0.05)",
  },
  {
    id: 6,
    title: "PortfolioOS",
    tag: "Portfolio",
    year: "2026",
    description:
      "This very portfolio — built with Next.js, TypeScript, and Tailwind CSS. Cinematic dark theme, smooth animations.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    links: { live: "#", github: "https://github.com/Dredphoenix/PortFolio"},
    accent: "rgba(255,255,255,0.05)",
  },
];

const filters = [
  "All",
  "Streaming",
  "Productivity",
  "Automation",
  "AI / NLP",
  "Auth System",
  "Portfolio",
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <section id="Projects" className="relative bg-black py-32 overflow-hidden">
      {/* bg glow */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[500px] opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(255,255,255,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <Container>
        {/* header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-white/20" />
              <span className="text-xs tracking-[3px] uppercase text-white/40">
                Projects
              </span>
            </div>
            <h2 className="text-[42px] md:text-[54px] font-bold leading-[1.1] tracking-tight">
              Selected{" "}
              <span
                className="text-white/55 font-light"
                style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
              >
                Work
              </span>
            </h2>
          </div>

          {/* filter pills — scroll on mobile */}
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="px-4 py-1.5 rounded-full text-[12px] transition-all duration-200"
                style={{
                  background:
                    active === f
                      ? "rgba(255,255,255,0.12)"
                      : "rgba(255,255,255,0.04)",
                  border:
                    active === f
                      ? "1px solid rgba(255,255,255,0.2)"
                      : "1px solid rgba(255,255,255,0.07)",
                  color: active === f ? "#fff" : "rgba(255,255,255,0.45)",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* view all */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://github.com/Dredphoenix/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-full text-[13.5px] font-medium text-white/70 hover:text-white transition-all duration-200"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            View All on GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 cursor-pointer"
      style={{
        background: hovered
          ? "rgba(255,255,255,0.06)"
          : "rgba(255,255,255,0.03)",
        border: hovered
          ? "1px solid rgba(255,255,255,0.14)"
          : "1px solid rgba(255,255,255,0.07)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transitionDelay: `${index * 30}ms`,
        minHeight: "260px",
      }}
    >
      {/* top */}
      <div>
        <div className="flex items-start justify-between mb-4">
          <span
            className="text-[10px] uppercase tracking-[2px] px-3 py-1 rounded-full text-white/40"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {project.tag}
          </span>
          <span className="text-[11px] text-white/25">{project.year}</span>
        </div>

        <h3 className="text-[22px] font-bold text-white mb-3 tracking-tight">
          {project.title}
        </h3>
        <p className="text-[13.5px] text-neutral-500 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* tech chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-0.5 rounded-full text-white/35"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* bottom links */}
      <div className="flex items-center gap-4">
        <a
          href={project.links.live}
          className="flex items-center gap-1.5 text-[12.5px] text-white/60 hover:text-white transition-colors"
        >
          <ArrowUpRight size={12} />
          Live
        </a>
        <span className="h-3 w-px bg-white/10" />
        <a
          href={project.links.github}
          className="flex items-center gap-1.5 text-[12.5px] text-white/60 hover:text-white transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Code
        </a>
      </div>
    </div>
  );
}
