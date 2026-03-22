
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "../layouts/Container";
import { useWipe } from "../contexts/WipeContext";

// ─── Particle Canvas ──────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const paint = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 65; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = Math.random() * 1.2 + 0.2;
        const o = Math.random() * 0.3 + 0.05;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${o})`;
        ctx.fill();
      }
    };

    paint();
    window.addEventListener("resize", paint);
    return () => window.removeEventListener("resize", paint);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[5] pointer-events-none"
    />
  );
}

// ─── Spinning Arc Text ────────────────────────────────────────────────────────
function SpinningArc() {
  return (
    <div className="absolute -right-16 -top-13 w-[140px] h-[140px] z-20 pointer-events-none">
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full animate-[spin_18s_linear_infinite]"
      >
        <defs>
          <path
            id="arc"
            d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0"
          />
        </defs>
        <text
          fill="rgba(255,255,255,0.38)"
          fontSize="7.8"
          letterSpacing="3"
          fontFamily="ui-sans-serif,system-ui,sans-serif"
        >
          <textPath href="#arc">
            Your Trusted Design . Expert .  to
          </textPath>
        </text>
      </svg>
    </div>
  );
}

// ─── Star Rating Bar ──────────────────────────────────────────────────────────
function StarRating() {
  return (
    <div
      className="mt-[14px] flex items-center gap-[10px] px-4 py-[11px] rounded-xl"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div className="flex gap-[3px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill={i < 4 ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.28)"}
          >
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        ))}
      </div>
      <span className="text-[11.5px] text-neutral-400 tracking-wide">
        4.7/5 stars (Positive Clients)
      </span>
    </div>
  );
}

// ─── Social Row ───────────────────────────────────────────────────────────────
function SocialRow() {
  return (
    <div className="mt-11 flex items-center gap-[18px]">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/vishwa-rameshkumar/"
    aria-label="LinkedIn"
    className="text-neutral-500 hover:text-white transition-colors duration-200"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM.5 8h4v15h-4V8zm7.5 0h3.8v2.1h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V23h-4V8z"/>
    </svg>
  </a>


  {/* Instagram */}
  <a
    href="https://www.instagram.com/px.lyrics_/"
    aria-label="Instagram"
    className="text-neutral-500 hover:text-white transition-colors duration-200"
  >
    <svg
      width="18" 
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  </a>


  {/* Fiverr */}
  <a
    href="https://www.fiverr.com/s/WER8kBX"
    aria-label="Fiverr"
    className="text-neutral-500 hover:text-white transition-colors duration-200"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 7H7V5.5C7 4.12 8.12 3 9.5 3H21V0H9.5A5.5 5.5 0 0 0 4 5.5V7H2v3h2v14h3V10h10v14h3V10h2z"/>
    </svg>
  </a>
</div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const {triggerWipe} =useWipe()
  return (
    <>
      <style>{`
        @keyframes float-card {
          0%,100% { transform: translateY(0px);  }
          50%      { transform: translateY(-9px); }
        }
        @keyframes streak-breathe {
          0%,100% { opacity: 0.5; }
          50%      { opacity: 0.78; }
        }
        .float-card    { animation: float-card 6.5s ease-in-out infinite; }
        .streak-breath { animation: streak-breathe 5.5s ease-in-out infinite; }
      `}</style>

      <section id="Hero" className="relative min-h-screen bg-black overflow-hidden">

        {/* ── BACKGROUND LAYERS ──────────────────────────────────────── */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-inherit">

          {/* Source photo — very dark, almost invisible, adds subtle texture */}
          <Image
            src="/bg5.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-[0.45]"
          />

          {/* Solid darkener so bg reads as near-black */}
        {/* Directional Glass Overlay */}
<div className="absolute inset-0 z-10 pointer-events-none">

  {/* Left Soft Blur */}
  <div className="absolute inset-y-0 left-0 w-1/2 bg-black/30 backdrop-blur-sm" />

  {/* Top Soft Blur */}
  <div className="absolute inset-x-0 top-0 h-1/2 bg-black/25 backdrop-blur-sm" />

  {/* Bottom Fade (less blur, mostly darkening) */}
  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

  {/* Right Fade (no blur, only dark tone) */}
  <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/40 to-transparent" />

</div>

          {/* ── SIGNATURE WHITE SWIRL ORBS (key visual from reference) ── */}

          {/* Primary large arc — upper-left sweeping diagonally right */}
          <div
            className="streak-breath absolute"
            style={{
              top: "-5%",
              left: "-15%",
              width: "80%",
              height: "85%",
              background:
                "radial-gradient(ellipse 55% 38% at 58% 50%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.07) 38%, transparent 68%)",
              transform: "rotate(-22deg)",
              filter: "blur(38px)",
            }}
          />

          {/* Secondary inner streak — tighter, brighter core */}
          <div
            className="streak-breath absolute"
            style={{
              top: "18%",
              left: "2%",
              width: "60%",
              height: "45%",
              background:
                "radial-gradient(ellipse 48% 22% at 50% 50%, rgba(255,255,255,0.22) 0%, rgba(220,220,220,0.08) 50%, transparent 75%)",
              transform: "rotate(-17deg)",
              filter: "blur(20px)",
              animationDelay: "1.8s",
            }}
          />

          {/* Tertiary faint lower sweep */}
          <div
            className="streak-breath absolute"
            style={{
              top: "45%",
              left: "-5%",
              width: "65%",
              height: "40%",
              background:
                "radial-gradient(ellipse 60% 25% at 45% 50%, rgba(255,255,255,0.07) 0%, transparent 65%)",
              transform: "rotate(-12deg)",
              filter: "blur(50px)",
              animationDelay: "3s",
            }}
          />

          {/* Right dark vignette — keeps right edge very dark like reference */}
          <div
            className="absolute top-0 right-0 h-full w-[45%]"
            style={{
              background:
                "linear-gradient(to left, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
            }}
          />

          {/* Heavy vignette edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.92)_100%)]" />

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* ── PARTICLE DOTS ─────────────────────────────────────────── */}
        <ParticleCanvas />

        {/* ── CONTENT ───────────────────────────────────────────────── */}
        <Container>
          <div className="relative z-30 grid lg:grid-cols-2 gap-16 items-center pt-36 pb-28">

            {/* LEFT */}
            <div>

              {/* Availability badge */}
              <div className="flex items-center gap-[10px] text-[13px] text-neutral-400 mb-8 tracking-wide">
              <span className="relative flex h-[7px] w-[7px]">
  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-85  smooth-pulse"></span>
  <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-green-500"></span>
</span>
                Available for work
              </div>

              {/* Headline */}
             <h1 className="text-[50px] md:text-[72px] lg:text-[88px] leading-[1.05] tracking-[-2px] font-bold text-white">
  Building brands to drive{" "}
  <span
    className="font-light text-white/60"
    style={{
      fontFamily: "Georgia,'Times New Roman',serif",
      fontStyle: "italic",
      letterSpacing: "-1px",
    }}
  >
    Results
  </span>
</h1>

              {/* Subtext */}
              <p className="mt-7 text-[15px] leading-relaxed text-neutral-500 max-w-[420px]">
                I merge bold strategy, compelling storytelling, and modern
                development to craft high-impact digital experiences.
              </p>

              {/* CTA buttons */}
              <div className="mt-10 flex items-center gap-[14px]">
                {/* View Projects */}
                <button
                  type="button"
                  className="group flex items-center gap-[8px] px-6 py-[11px] rounded-full text-[13.5px] font-medium text-white transition-all duration-200 hover:brightness-125 active:scale-95"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    backdropFilter: "blur(12px)",
                  }}
                 onClick={() =>
  triggerWipe(() => {
    document.getElementById("Projects")?.scrollIntoView({ behavior: "auto" });
  })
}
                 >
                  {/* small grid icon */}
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                  View Projects
                </button>

                {/* Get Started */}
                <button
                  type="button"
                  className="flex items-center gap-[8px] px-6 py-[11px] rounded-full text-[13.5px] font-medium text-white transition-all duration-200 hover:brightness-125 active:scale-95"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    backdropFilter: "blur(12px)",
                  }}
                onClick={() =>
  triggerWipe(() => {
    document.getElementById("Contact")?.scrollIntoView({ behavior: "auto" });
  })
}
                >
                  <ArrowUpRight size={13} />
                  Get Started
                </button>
              </div>

              {/* Social links */}
              <SocialRow />
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center lg:justify-end items-start pt-2">

              {/* Spinning arc label */}
              <SpinningArc />

              {/* Floating card group */}
              <div className="float-card relative z-10 flex flex-col">

                {/* Portrait card */}
                <div
                  className="relative w-[308px] h-[385px] rounded-[18px] overflow-hidden"
                  style={{
                    background: "rgba(16,16,16,0.95)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow:
                      "0 30px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  <Image
                    src="/portfolio.png"
                    alt="Portfolio preview"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Rating row */}
                <StarRating />
              </div>

            </div>
          </div>
        </Container>

        {/* Scroll chevron */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

      </section>
    </>
  );
}