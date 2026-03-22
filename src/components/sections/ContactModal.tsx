"use client";

import { useEffect } from "react";
import { ArrowUpRight, X, Mail, Phone, Linkedin } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ContactItem {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const contacts: ContactItem[] = [
    {
      icon: Mail,
      label: "Email",
      value: "vishwabalak98@email.com",
      href: "mailto:vishwabalak98@email.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6380440108",
      href: "tel:+91 6380440108",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/Vishwa",
      href: "https://www.linkedin.com/in/vishwa-rameshkumar/",
      external: true,
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
        <div
          className="w-full max-w-[400px] rounded-[20px] overflow-hidden"
          style={{
            background: "rgba(8,8,8,0.98)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.04), 0 50px 100px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-6 pt-6 pb-5 flex justify-between items-start">
            <div>
              <p className="text-[11px] uppercase text-white/30 mb-2">
                Open to opportunities
              </p>
              <h2 className="text-white text-xl font-bold">
                Let&apos;s work <span className="italic text-white/60">together</span>
              </h2>
            </div>

            <button onClick={onClose}>
              <X size={18} className="text-white/50" />
            </button>
          </div>

          {/* Contact items */}
          <div className="p-5 flex flex-col gap-3">
            {contacts.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <Icon size={16} className="text-white/60" />
                <div className="flex-1">
                  <p className="text-[11px] text-white/40">{label}</p>
                  <p className="text-sm text-white">{value}</p>
                </div>
                <ArrowUpRight size={14} className="text-white/40" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}