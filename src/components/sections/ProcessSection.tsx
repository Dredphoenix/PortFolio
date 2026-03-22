"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import ProcessCard from "../layouts/ProcessCards";

const INTERVAL = 3500;
const CIRC = 113.1;

const steps = [
  {
    step: "Step 1",
    title: "Discover your brand",
    description: "We'll dive into your vision, audience, and goals to align design with purpose and clarity.",
    icon: (
      <svg viewBox="0 0 256 256" fill="white" className="w-5 h-5">
        <path d="M229.66,218.34l-50.07-50.07a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.31ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
      </svg>
    ),
  },
  {
    step: "Step 2",
    title: "Design with clarity and impact",
    description: "We translate strategy into visuals—crafted to be clean, consistent, memorable, and always on-brand.",
    icon: (
      <svg viewBox="0 0 256 256" fill="white" className="w-5 h-5">
        <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z" />
      </svg>
    ),
  },
  {
    step: "Step 3",
    title: "Deliver and refine with care",
    description: "Final designs are shared for review, with feedback shaping the perfect result every time.",
    icon: (
      <svg viewBox="0 0 256 256" fill="white" className="w-5 h-5">
        <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const elapsed = useRef(0);
  const lastTs = useRef<number | null>(null);
  const raf = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const goTo = useCallback((i: number) => {
    setActive(i);
    elapsed.current = 0;
    setProgress(0);
  }, []);

  // Auto-advance loop
  useEffect(() => {
    const tick = (ts: number) => {
      if (!lastTs.current) lastTs.current = ts;
      if (!paused) {
        elapsed.current += ts - lastTs.current;
        const pct = Math.min(elapsed.current / INTERVAL, 1);
        setProgress(pct);
        if (elapsed.current >= INTERVAL) {
          elapsed.current = 0;
          setActive((a) => (a + 1) % steps.length);
        }
      }
      lastTs.current = ts;
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [paused]);

  const getPos = (i: number) => {
    const raw = i - active;
    return raw > steps.length / 2
      ? raw - steps.length
      : raw < -steps.length / 2
      ? raw + steps.length
      : raw;
  };

  // Responsive slot styles
  const slotStyle = (pos: number) => {
    if (isMobile) {
      // On mobile: only show active card, others hidden
      if (pos === 0) return { x: 0, scale: 1, opacity: 1, blur: 0, z: 10 };
      return { x: pos * 20, scale: 0.92, opacity: 0, blur: 0, z: 1 };
    }
    // Desktop: full 3-card depth
    if (pos === 0) return { x: 0, scale: 1, opacity: 1, blur: 0, z: 10 };
    if (Math.abs(pos) === 1)
      return { x: pos * 368, scale: 0.84, opacity: 0.4, blur: 4, z: 5 };
    return { x: pos * 368, scale: 0.7, opacity: 0, blur: 8, z: 1 };
  };

  // Touch swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(
        delta < 0
          ? (active + 1) % steps.length
          : (active - 1 + steps.length) % steps.length
      );
    }
    touchStartX.current = null;
  };

  // Card width: full-width on mobile with padding, fixed on desktop
  const cardWidth = isMobile ? "calc(100vw - 48px)" : "360px";

  return (
    <section
      className="overflow-hidden py-14 md:py-20"
      style={{ background: "#050505" }}
    >
      {/* ── Header ── */}
      <div className="text-center mb-10 md:mb-14 px-6">
        <div
          className="inline-flex items-center gap-2 mb-4 md:mb-5 px-3.5 py-1.5 rounded-full"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "#31ee33",
              boxShadow: "0 0 8px rgba(49,238,51,0.6)",
            }}
          />
          <span
            className="text-[11px] tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            From Idea to Launch
          </span>
        </div>

        <h2
          className="text-3xl md:text-4xl font-medium mb-3"
          style={{ color: "rgba(255,255,255,0.92)", letterSpacing: "-0.03em" }}
        >
          Process is{" "}
          <em className="font-normal not-italic" style={{ color: "rgba(255,255,255,0.4)" }}>
            Result
          </em>
        </h2>

        <p
          className="text-sm md:text-[15px] mx-auto max-w-xs"
          style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}
        >
          Thoughtful, intentional design is what makes brands stand out.
        </p>
      </div>

      {/* ── Carousel ── */}
      <div
        className="relative flex items-center justify-center"
        style={{ height: isMobile ? 290 : 310 }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {steps.map((item, i) => {
          const pos = getPos(i);
          const st = slotStyle(pos);
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: cardWidth,
                zIndex: st.z,
                cursor: pos !== 0 && !isMobile ? "pointer" : "default",
              }}
              animate={{
                x: st.x,
                scale: st.scale,
                opacity: st.opacity,
                filter: `blur(${st.blur}px)`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={() => !isMobile && pos !== 0 && goTo(i)}
            >
              <ProcessCard
                {...item}
                cardIndex={i}
                activeIndex={active}
                total={steps.length}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}