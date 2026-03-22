"use client";

import { useEffect, useRef, useState } from "react";
import Container from "../layouts/Container";
import { useWipe } from "../contexts/WipeContext";

/* ─── data ─────────────────────────────────────────────────── */
const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend",  items: ["Node.js", "Express", "REST APIs", "WebSockets"] },
  { category: "Database", items: ["MongoDB", "Mongoose", "Redis", "PostgreSQL"] },
  { category: "Tooling",  items: ["Git", "Docker", "Vercel", "Figma"] },
];

const timeline = [
  {
    year: "2024",
    role: "Freelance Full-Stack Developer",
    place: "Remote",
    desc: "Delivered end-to-end MERN solutions for clients across SaaS, e-commerce, and portfolio domains.",
  },
  {
    year: "2023",
    role: "Junior Developer",
    place: "Startup",
    desc: "Built RESTful APIs, React SPAs, and MongoDB schemas shipped to 500+ active users.",
  },
  {
    year: "2022",
    role: "Self-Taught Journey",
    place: "Online",
    desc: "Dived deep into the MERN stack, open-source contributions, and shipping personal projects.",
  },
];

/* ─── helpers ───────────────────────────────────────────────── */
function useIntersection(ref: React.RefObject<HTMLElement | null>, threshold = 0.1) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

/* animated counter */
function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        let start = 0;
        const step = () => {
          start += 1;
          setCount(start);
          if (start < target) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}</span>;
}

/* ─── component ─────────────────────────────────────────────── */
export default function About() {

  const {triggerWipe}=useWipe();

  const sectionRef = useRef<HTMLElement>(null);
  useIntersection(sectionRef);

  return (
    <section
      id="About"
      ref={sectionRef}
      className="relative bg-black py-32 overflow-hidden fade-section"
    >
      {/* ── ambient glows ── */}
      <div
        className="pointer-events-none absolute top-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] opacity-8"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(255,255,255,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── faint grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <Container>
        {/* ── section label ── */}
        <div className="flex items-center gap-3 mb-16">
          <span className="h-px w-10 bg-white/20" />
          <span className="text-xs tracking-[3px] uppercase text-white/40">About Me</span>
        </div>

        {/* ══════════════════════════════════════════════
            ROW 1 — headline + bio card
        ══════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-start mb-14">
          {/* headline */}
          <div>
            <h2 className="text-[52px] md:text-[72px] font-bold leading-[1.0] tracking-tight text-white mb-8">
              The{" "}
              <span
                className="text-white/45 font-light"
                style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
              >
                Human
              </span>
              <br />
              Behind
              <br />
              the{" "}
              <span
                className="text-white/45 font-light"
                style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
              >
                Code
              </span>
            </h2>

            {/* decorative horizontal rule */}
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-white/30 to-transparent" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            </div>

            <p className="text-[15px] leading-[1.85] text-neutral-500 max-w-[520px] mb-5">
              I&apos;m{" "}
              <span className="text-white/85 font-semibold">Vishwa</span>, a
              MERN Stack developer who obsesses over clean architecture and
              interfaces that feel inevitable — not designed.
            </p>
            <p className="text-[15px] leading-[1.85] text-neutral-500 max-w-[520px]">
              I work across the full stack: crafting reactive UIs with{" "}
              <span className="text-white/60">React & Next.js</span>, building
              resilient APIs with{" "}
              <span className="text-white/60">Node & Express</span>, and
              modelling data with{" "}
              <span className="text-white/60">MongoDB</span>. Every line I
              write is in service of the product.
            </p>
          </div>

          {/* bio card */}
          <div
            className="relative rounded-2xl p-8 overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* card inner glow */}
            <div
              className="pointer-events-none absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
              }}
            />

            <p
              className="text-[13px] tracking-[2px] uppercase text-white/25 mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Quick Facts
            </p>

            {[
              { label: "Location",    value: "India 🇮🇳" },
              { label: "Focus",       value: "Full-Stack Web" },
              { label: "Availability",value: "Open to Work ✦" },
              { label: "Response",    value: "< 24 hours" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between py-3.5"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              >
                <span className="text-[12px] tracking-widest uppercase text-white/25">
                  {label}
                </span>
                <span className="text-[13.5px] text-white/70 font-medium">
                  {value}
                </span>
              </div>
            ))}

            {/* CTA */}
            <a
              className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[13px] font-medium text-white transition-all duration-300 hover:brightness-125 active:scale-[0.98]"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
              }}
              onClick={()=>{
                triggerWipe(()=>{
                  document.getElementById("Contact")?.scrollIntoView({behavior:"auto"})
                })
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Let&apos;s Talk
            </a>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            ROW 2 — stats strip
        ══════════════════════════════════════════════ */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-px mb-14 rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {[
            { value: 1,   suffix: "+", label: "Year Experience" },
            { value: 10,  suffix: "+", label: "Projects Built" },
            { value: 5,   suffix: "+", label: "Happy Clients" },
            { value: 3,   suffix: "",  label: "Tech Stacks" },
          ].map((s, i) => (
            <div
              key={s.label}
              className="relative flex flex-col items-center justify-center py-10 gap-1"
              style={{ background: "rgba(255,255,255,0.025)" }}
            >
              {/* divider line between cols */}
              {i > 0 && (
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
              )}
              <span className="text-[44px] font-bold text-white leading-none tabular-nums">
                <Counter target={s.value} />
                {s.suffix}
              </span>
              <span className="text-[11px] tracking-widest uppercase text-white/30 mt-1">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── bottom signature line ── */}
        <div className="mt-20 flex items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span
            className="text-[11px] tracking-[3px] uppercase text-white/15"
            style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            vishwa · mern developer
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </Container>
    </section>
  );
}