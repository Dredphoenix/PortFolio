"use client";

import { createContext, useContext, useState } from "react";
import PageWipe from "../layouts/PageWipe";

type WipeContextType = {
  triggerWipe: (callback?: () => void) => void;
};

const WipeContext = createContext<WipeContextType | null>(null);

export function WipeProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);

  const triggerWipe = (callback?: () => void) => {
    setShow(true);

    setTimeout(() => {
      callback?.(); // scroll or action
    }, 200);

    setTimeout(() => {
      setShow(false);
    }, 800);
  };

  return (
    <WipeContext.Provider value={{ triggerWipe }}>
      {children}

      {/* GLOBAL WIPE */}
      <PageWipe show={show} />
    </WipeContext.Provider>
  );
}

export function useWipe() {
  const ctx = useContext(WipeContext);
  if (!ctx) throw new Error("useWipe must be used inside WipeProvider");
  return ctx;
}