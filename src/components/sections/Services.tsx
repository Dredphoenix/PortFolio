"use client";

import Container from "../layouts/Container";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    description:
      "End-to-end MERN stack web apps — from database design and API architecture to pixel-perfect React frontends. Delivered fast, scalable, and maintainable.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
  },
  {
    number: "02",
    title: "REST API & Backend Engineering",
    description:
      "Robust backend systems with Express.js, JWT authentication, role-based access control, input validation, and clean architecture patterns.",
    tags: ["Express.js", "JWT", "RBAC", "Mongoose"],
  },
  {
    number: "03",
    title: "Next.js & SSR Applications",
    description:
      "SEO-optimised, blazing-fast websites using Next.js with server-side rendering, static generation, and TypeScript for type safety at scale.",
    tags: ["Next.js", "TypeScript", "SSR / SSG", "SEO"],
  },
  {
    number: "04",
    title: "Real-time Features",
    description:
      "Live chat, notifications, dashboards, and collaborative tools powered by Socket.io, webhooks, and event-driven backend architecture.",
    tags: ["Socket.io", "WebSockets", "Events"],
  },
  {
    number: "05",
    title: "UI / UX Implementation",
    description:
      "Translating Figma designs into production-ready React components with TailwindCSS. Smooth animations, responsive layouts, and rich micro-interactions.",
    tags: ["Figma", "TailwindCSS", "Framer Motion"],
  },
  {
    number: "06",
    title: "Code Review & Consulting",
    description:
      "Architecture reviews, code audits, performance profiling, and tech stack consulting for startups and solo projects looking to level up.",
    tags: ["Architecture", "Performance", "Consulting"],
  },
];

export default function Services() {
  return (
    <section id="Services" className="relative bg-black py-32 overflow-hidden">
      {/* bg glow */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[700px] h-[500px] opacity-12"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(255,255,255,0.1) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <Container>
        {/* header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-10 bg-white/20" />
          <span className="text-xs tracking-[3px] uppercase text-white/40">
            Services
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-[42px] md:text-[54px] font-bold leading-[1.1] tracking-tight">
            What I{" "}
            <span
              className="text-white/55 font-light"
              style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
              Offer
            </span>
          </h2>
          <p className="text-[14px] text-neutral-500 max-w-[300px] leading-relaxed">
            From concept to deployment — I build what you need.
          </p>
        </div>

        {/* service grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="mt-16 rounded-2xl p-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div>
            <h3 className="text-[24px] font-bold text-white mb-2">
              Have a project in mind?
            </h3>
            <p className="text-[14px] text-neutral-500">
              Let&apos;s discuss it and turn your idea into reality.
            </p>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3 rounded-full text-[13.5px] font-medium text-white shrink-0 transition-all duration-200 hover:brightness-125"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.16)",
              backdropFilter: "blur(12px)",
            }}
          >
            Start a Conversation
            <ArrowUpRight size={14} />
          </a>
        </div>
      </Container>
    </section>
  );
}

function ServiceCard({
  number,
  title,
  description,
  tags,
}: {
  number: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div
      className="group flex flex-col gap-5 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.border =
          "1px solid rgba(255,255,255,0.13)";
        (e.currentTarget as HTMLDivElement).style.background =
          "rgba(255,255,255,0.045)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.border =
          "1px solid rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLDivElement).style.background =
          "rgba(255,255,255,0.025)";
      }}
    >
      <div className="flex items-start justify-between">
        <span
          className="text-[11px] font-mono text-white/20"
        >
          {number}
        </span>
        <ArrowUpRight
          size={14}
          className="text-white/20 group-hover:text-white/50 transition-colors duration-200"
        />
      </div>

      <div>
        <h3 className="text-[17px] font-semibold text-white mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-[13px] text-neutral-500 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((t) => (
          <span
            key={t}
            className="text-[10.5px] px-2.5 py-0.5 rounded-full text-white/30"
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
  );
}
