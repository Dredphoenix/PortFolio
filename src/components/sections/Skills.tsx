"use client";

import Container from "../layouts/Container";
import {motion} from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "TailwindCSS", level: 90 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "JWT / Auth", level: 80 },
      { name: "Socket.io", level: 70 },
    ],
  },
  {
    category: "Database & DevOps",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Mongoose", level: 83 },
      { name: "PostgreSQL", level: 65 },
      { name: "Git / GitHub", level: 90 },
      { name: "Vercel / Railway", level: 78 },
    ],
  },
];

const techBadges = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "MongoDB", "Mongoose","Redux", "TailwindCSS", "Socket.io",
  "JWT", "REST API", "Git", "GitHub", "Vercel", "Postman",
  "VS Code", "Figma", "Linux","SEO","SMO","PostgreSQL",
];

export default function Skills() {
  return (
    <section id="Skills" className="relative bg-black py-32 overflow-hidden">
      {/* bg glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[400px] opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(255,255,255,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <Container>
        {/* header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-10 bg-white/20" />
          <span className="text-xs tracking-[3px] uppercase text-white/40">
            Skills
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2 className="text-[42px] md:text-[54px] font-bold leading-[1.1] tracking-tight">
            Technical{" "}
            <span
              className="text-white/55 font-light"
              style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
              Arsenal
            </span>
          </h2>
          <p className="text-[14px] text-neutral-500 max-w-[320px] leading-relaxed">
            Technologies I use daily to build production-grade MERN applications.
          </p>
        </div>

        {/* skill groups */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl p-7"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3 className="text-[13px] uppercase tracking-[2.5px] text-white/35 mb-6">
                {group.category}
              </h3>
              <div className="flex flex-col gap-5">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* tech badge cloud */}
      <div
  className="rounded-2xl p-8 overflow-hidden"
  style={{
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
  }}
>
  <p className="text-[12px] uppercase tracking-[2.5px] text-white/30 mb-6">
    All Technologies
  </p>

 <div className="relative overflow-hidden">
  <motion.div
    className="flex gap-3 w-max"
    animate={{ x: [0, -1000] }} // use px, NOT %
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
      ease: "linear",
    }}
  >
    {[...techBadges, ...techBadges].map((badge, i) => (
      <span
        key={i}
        className="px-5 py-2 rounded-full text-[13px] text-white/70 whitespace-nowrap"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {badge}
      </span>
    ))}
  </motion.div>
</div>
</div>
      </Container>
    </section>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-[13.5px] text-white/75">{name}</span>
        <span className="text-[11px] text-white/30">{level}%</span>
      </div>
      <div
        className="h-[3px] w-full rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${level}%`,
            background:
              "linear-gradient(to right, rgba(255,255,255,0.35), rgba(255,255,255,0.7))",
          }}
        />
      </div>
    </div>
  );
}
