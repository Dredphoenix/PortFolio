"use client";

type Props = {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  cardIndex: number;
  activeIndex: number;
  total: number;
};

export default function ProcessCard({ step, title, description, icon, cardIndex, activeIndex, total }: Props) {
  return (
    <div
      className="relative flex flex-col justify-between overflow-hidden"
      style={{
        background: "#0a0a0a",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        padding: "28px 28px 24px",
        height: 268,
        boxShadow: "rgba(255,255,255,0.05) 0 1px 0 inset, rgba(0,0,0,0.6) 0 8px 32px",
      }}
    >
      {/* top inset shine */}
      <div className="absolute inset-0 pointer-events-none" style={{
        borderRadius: 20,
        background: "radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 100%)",
      }} />

      <div>
        {/* Icon */}
        <div className="flex items-center justify-center mb-[18px]" style={{
          width: 44, height: 44, background: "#111",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 12,
          boxShadow: "rgba(255,255,255,0.07) 0 2px 0 inset",
        }}>
          <div className="opacity-65" style={{ width: 20, height: 20 }}>{icon}</div>
        </div>

        <h3 style={{ fontSize: 17, fontWeight: 500, color: "rgba(255,255,255,0.92)", letterSpacing: "-0.025em", lineHeight: 1.3, marginBottom: 10 }}>
          {title}
        </h3>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.65 }}>
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-[22px]">
        <span style={{
          fontSize: 11, color: "rgba(255,255,255,0.4)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 999, padding: "5px 13px",
          letterSpacing: "0.02em", background: "#000",
          boxShadow: "rgba(255,255,255,0.06) 0 1px 0 inset",
        }}>
          {step}
        </span>

        <div className="flex gap-[5px] items-center">
          {Array.from({ length: total }).map((_, j) => (
            <div key={j} style={{
              height: 5,
              width: j === cardIndex ? 18 : 5,
              borderRadius: 3,
              background: j === cardIndex ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.2)",
              transition: "width 0.35s ease, background 0.35s ease",
            }} />
          ))}
        </div>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        borderRadius: 20,
        background: "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 100%)",
        opacity: 0.8,
      }} />
    </div>
  );
}