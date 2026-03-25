"use client";

import { useState } from "react";
import Container from "../layouts/Container";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={16} />,
    label: "Email",
    value: "vishwabalak98@gmail.com",
    href: "mailto:vishwabalak98@gmail.com",
  },
  {
    icon: <Phone size={16} />,
    label: "Phone",
    value: "+91 6380440108",
    href: "tel:+916380440108",
  },
  {
    icon: <MapPin size={16} />,
    label: "Location",
    value: "India · Remote Worldwide",
    href: "https://www.google.com/maps/place/India/@21.3352665,72.4752158,1731294m/data=!3m1!1e3!4m6!3m5!1s0x30635ff06b92b791:0xd78c4fa1854213a6!8m2!3d20.593684!4d78.96288!16zL20vMDNyazA?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("https://formspree.io/f/meepjpvg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
    }

    setSending(false);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="Contact" className="relative bg-black py-32 overflow-hidden">
      {/* bg glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(255,255,255,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <Container>
        {/* header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-10 bg-white/20" />
          <span className="text-xs tracking-[3px] uppercase text-white/40">
            Contact
          </span>
        </div>
        <h2 className="text-[42px] md:text-[54px] font-bold leading-[1.1] tracking-tight mb-16">
          Let&apos;s Build{" "}
          <span
            className="text-white/55 font-light"
            style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            Together
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT — form */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <h3 className="text-[17px] font-semibold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <FormField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] uppercase tracking-[1.5px] text-white/35">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl px-4 py-3 text-[13.5px] text-white placeholder-white/20 resize-none outline-none transition-all duration-200 focus:border-white/20"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) =>
                    (e.target.style.border = "1px solid rgba(255,255,255,0.2)")
                  }
                  onBlur={(e) =>
                    (e.target.style.border = "1px solid rgba(255,255,255,0.08)")
                  }
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-medium text-white transition-all duration-200 hover:brightness-125 disabled:opacity-50"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {sending ? (
                  <>
                    <svg
                      className="animate-spin"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending...
                  </>
                ) : sent ? (
                  "Message Sent ✓"
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight size={14} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT — info */}
          <div className="flex flex-col justify-between gap-10">
            {/* availability */}
            <div
              className="rounded-2xl p-7"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_2px_rgba(34,197,94,0.5)]" />
                <span className="text-[13px] text-white/70">
                  Available for new projects
                </span>
              </div>
              <p className="text-[14px] text-neutral-500 leading-relaxed">
                I&apos;m actively taking on new clients and freelance projects.
                Whether you need a full-stack MVP, an API, or a complete MERN
                application — I&apos;d love to hear from you.
              </p>
            </div>

            {/* contact info */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-200 hover:border-white/14 group"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span className="text-white/30 group-hover:text-white/60 transition-colors">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[1.5px] text-white/30 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-[13.5px] text-white/75">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* social */}
            <div className="flex items-center gap-5">
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/Dredphoenix",
                  path: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z",
                  fill: true,
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/vishwa-rameshkumar/",
                  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                  fill: true,
                },
                {
                  label: "Fiverr",
                  href: "https://www.fiverr.com/s/WER8kBX", 
                  path: "M3 3h18v4H7v3h12v4H7v7H3V3zm4 4h10v2H7V7zm0 6h10v2H7v-2z",
                  fill: true,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white/35 hover:text-white transition-all duration-200 hover:border-white/20"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill={s.fill ? "currentColor" : "none"}
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* footer */}
       <div className="mt-24 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/20">
  <span>© {new Date().getFullYear()} Vishwa. All rights reserved.</span>
  <span>Built with Next.js · TypeScript · TailwindCSS</span>
</div>
      </Container>
    </section>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] uppercase tracking-[1.5px] text-white/35">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl px-4 py-3 text-[13.5px] text-white placeholder-white/20 outline-none transition-all duration-200"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
        onFocus={(e) =>
          (e.target.style.border = "1px solid rgba(255,255,255,0.2)")
        }
        onBlur={(e) =>
          (e.target.style.border = "1px solid rgba(255,255,255,0.08)")
        }
      />
    </div>
  );
}
