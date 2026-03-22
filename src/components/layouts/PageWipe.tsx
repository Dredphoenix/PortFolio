"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function PageWipe({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[999]"
          style={{
            background:
              "linear-gradient(90deg, black 80%, rgba(0,0,0,0.6) 90%, transparent 100%)",
          }}
        />
      )}
    </AnimatePresence>
  );
}