"use client";

import Logo from "../ui/Logo";
import { ArrowUpRight, X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import ContactModal from "../sections/ContactModal";
import { useWipe } from "../contexts/WipeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
 const {triggerWipe}=useWipe();

  useEffect(() => {
    if (isContactOpen) setOpen(false);
  }, [isContactOpen]);

const handleNavClick = (id: string) => {
  setOpen(false);

  triggerWipe(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "auto" });
  });
};

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="h-16 flex items-center justify-between px-16 bg-black/40 backdrop-blur border-b border-white/10">

        <Logo />

        {/* Desktop */}
        <div className="hidden md:flex gap-6 text-white/60">
          {["About","Projects","Skills","Experience","Services","Contact"].map((id) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="hover:text-white transition"
            >
              {id}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => setIsContactOpen(true)}
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full"
        >
          Hire me <ArrowUpRight size={14} />
        </button>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur text-white flex flex-col items-center gap-5 py-6">
          {["About","Projects","Skills","Experience","Services","Contact"].map((id) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
            >
              {id}
            </button>
          ))}

          <button
            onClick={() => {
              setOpen(false);
              setIsContactOpen(true);
            }}
            className="flex items-center gap-2 px-5 py-2 bg-white/10 rounded-full"
          >
            Hire me <ArrowUpRight size={14} />
          </button>
        </div>
      )}

      {/* Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
     
    </nav>
  );
}