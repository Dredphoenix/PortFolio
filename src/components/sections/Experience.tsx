"use client";

import Container from "../layouts/Container";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "TechStartup (Remote)",
    period: "May 2024 – Jun 2024",
    type: "Internship",
    bullets: [
      "Worked on a React + TypeScript dashboard consuming internal REST APIs.",
      "Implemented reusable UI component library, reducing development time by 30%.",
      "Participated in daily stand-ups, code reviews, and sprint retrospectives.",
      "Optimized page load performance — improved Lighthouse score from 68 → 92.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "GitHub",
    period: "2025 – Present",
    type: "Open Source",
    bullets: [
      "Contributed bug fixes and feature PRs to 3+ open-source Node.js/React projects.",
      "Documented APIs and wrote unit tests using Jest and React Testing Library.",
      "Active in developer communities — Discord, reddit r/webdev, and Stack Overflow.",
    ],
  },
  {
    role: "MERN Stack Developer (Freelance)",
    company: "Self-Employed",
    period: "2026 – Present",
    type: "Freelance",
    bullets: [
      "Built and deployed 5+ full-stack web apps for clients across e-commerce, SaaS, and personal branding.",
      "Developed RESTful APIs, JWT authentication systems, and real-time features with Socket.io.",
      "Collaborated directly with clients to translate requirements into production-ready deliverables.",
      "Managed CI/CD pipelines using GitHub Actions and deployed on Vercel & Railway.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="Experience" className="relative bg-black py-32 overflow-hidden">
      {/* bg glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <Container>
        {/* header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-10 bg-white/20" />
          <span className="text-xs tracking-[3px] uppercase text-white/40">
            Experience
          </span>
        </div>
        <h2 className="text-[42px] md:text-[54px] font-bold leading-[1.1] tracking-tight mb-16">
          My{" "}
          <span
            className="text-white/55 font-light"
            style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            Journey
          </span>
        </h2>

        {/* timeline */}
        <div className="relative">
          {/* vertical line */}
          <div
            className="absolute left-[3px] top-3 bottom-0 w-px hidden md:block"
            style={{ background: "rgba(255,255,255,0.07)" }}
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-12">
                {/* dot */}
                <div
                  className="hidden md:block absolute left-0 top-3 w-[7px] h-[7px] rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.5)",
                    boxShadow: "0 0 10px 2px rgba(255,255,255,0.15)",
                  }}
                />

                <div
                  className="rounded-2xl p-7 transition-all duration-300 hover:border-white/14"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {/* top row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-[18px] font-semibold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-[13px] text-neutral-500">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className="text-[10px] uppercase tracking-[2px] px-3 py-1 rounded-full text-white/35"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}
                      >
                        {exp.type}
                      </span>
                      <span className="text-[12px] text-white/25">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* bullets */}
                  <ul className="flex flex-col gap-2.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span
                          className="mt-[7px] block w-[4px] h-[4px] rounded-full shrink-0"
                          style={{ background: "rgba(255,255,255,0.3)" }}
                        />
                        <span className="text-[13.5px] text-neutral-500 leading-relaxed">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
