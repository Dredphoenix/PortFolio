"use client";

import { useEffect, useRef } from "react";
import Container from "../layouts/Container";
import { ArrowUpRight } from "lucide-react";
import { useWipe } from "../contexts/WipeContext";

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

interface Dot {
  r: number;
  a: number;
  alpha: number;
  size: number;
}

function RadarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0,
      cx = 0,
      cy = 0;
    let angle = 0;
    let raf: number;

    const dots: Dot[] = Array.from({ length: 26 }, () => ({
      r: 0,
      a: Math.random() * Math.PI * 2,
      alpha: 0,
      size: Math.random() * 1.8 + 0.6,
    }));

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.scale(dpr, dpr);
      cx = W / 2;
      cy = H * 1.95; // responsive center within bounds

      const maxR = Math.min(W * 0.55, H * 0.85);
      const mobileMultiplier = W < 400 ? 0.65 : 1;
      dots.forEach((d) => {
        d.r = (Math.random() * maxR * 0.75 + maxR * 0.1) * mobileMultiplier;
      });
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      const maxR = Math.min(W * 0.55, H * 0.85) * 2.28;

      // rings — only the upper half visible
      [0.2, 0.4, 0.6, 0.8, 1.0].forEach((f) => {
        ctx.beginPath();
        ctx.arc(cx, cy, maxR * f, Math.PI, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.12)";
        ctx.lineWidth = 0.9;
        ctx.stroke();
      });

      // spokes
      const spokeCount = 14;
      for (let i = 0; i <= spokeCount; i++) {
        const a = Math.PI + i * (Math.PI / spokeCount);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * maxR, cy + Math.sin(a) * maxR);
        ctx.strokeStyle = "rgba(255,255,255,0.03)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // sweep cone
      const sweepSpan = Math.PI * 0.6;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, maxR, angle, angle + sweepSpan);
      ctx.closePath();
      const gx1 = cx + Math.cos(angle) * maxR * 0.5;
      const gy1 = cy + Math.sin(angle) * maxR * 0.5;
      const gx2 = cx + Math.cos(angle + sweepSpan) * maxR * 0.5;
      const gy2 = cy + Math.sin(angle + sweepSpan) * maxR * 0.5;
      const sg = ctx.createLinearGradient(gx1, gy1, gx2, gy2);
      sg.addColorStop(0, "rgba(255,255,255,0.12)");
      sg.addColorStop(0.6, "rgba(255,255,255,0.04)");
      sg.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = sg;
      ctx.fill();
      ctx.restore();

      // sweep line
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * maxR, cy + Math.sin(angle) * maxR);
      ctx.strokeStyle = "rgba(255,255,255,0.5)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // blip dots
      dots.forEach((d) => {
        const diff =
          (((d.a - angle) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        if (diff < 0.07) d.alpha = 1;
        d.alpha *= 0.984;
        if (d.alpha > 0.03) {
          const dx = cx + Math.cos(d.a) * d.r;
          const dy = cy + Math.sin(d.a) * d.r;
          // clip to visible canvas
          if (dy < 0 || dy > H || dx < 0 || dx > W) return;
          ctx.beginPath();
          ctx.arc(dx, dy, d.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${d.alpha * 0.88})`;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(dx, dy, d.size * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${d.alpha * 0.07})`;
          ctx.fill();
        }
      });

      angle = (angle + 0.014) % (Math.PI * 2);
      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", () => {
      cancelAnimationFrame(raf);
      resize();
      draw();
    });
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}

export default function Services() {
  const { triggerWipe } = useWipe();
  return (
    <section id="Services" className="relative bg-black py-32 overflow-hidden">
      {/* ── radar header with border container ─────────────────── */}
      <div className="px-4 md:px-8 lg:px-16 mb-16">
        <div
          className="relative overflow-hidden h-[260px] sm:h-[280px] md:h-[300px] lg:h-[340px] rounded-2xl"
          style={{
            border: "1px solid rgba(255,255,255,0.10)",
            background: "#000",
          }}
        >
          <div className="hidden lg:block">
            <RadarCanvas />
          </div>

          {/* inner content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-0">
            {/* pill */}
            <div className="flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04]">
              <span className="w-[7px] h-[7px] rounded-full border bg-green-500 border-white/40 flex items-center justify-center"></span>
              <span className="text-[13px] text-white/50 tracking-wide">
                Services
              </span>
            </div>

            <h2 className="text-[44px] md:text-[56px] font-medium tracking-tight text-white/90 text-center leading-[1.1]">
              What I{" "}
              <span
                className="text-white/40 font-normal"
                style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
              >
                Offer
              </span>
            </h2>

            <p className="mt-3 text-[14px] text-white/25 tracking-wide">
              From concept to deployment — I build what you need.
            </p>
          </div>
        </div>
      </div>

      {/* ── service grid ────────────────────────────────────────── */}
      <Container>
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
            <h3 className="text-[24px] font-semibold text-white mb-2">
              Have a project in mind?
            </h3>
            <p className="text-[14px] text-neutral-500">
              Let&apos;s discuss it and turn your idea into reality.
            </p>
          </div>
          <a
            className="flex items-center gap-2 px-7 py-3 rounded-full text-[13.5px] font-medium text-white shrink-0 transition-all duration-200 hover:brightness-125 cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.16)",
              backdropFilter: "blur(12px)",
            }}
            onClick={() => {
              triggerWipe(() => {
                document
                  .getElementById("Contact")
                  ?.scrollIntoView({ behavior: "auto" });
              });
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
        <span className="text-[11px] font-mono text-white/20">{number}</span>
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
