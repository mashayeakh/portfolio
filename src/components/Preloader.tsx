"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while loading
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 1000); // 1-second animation

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#0f1117] flex flex-col items-center justify-center gap-6"
        >
          {/* Animated Orbs */}
          <div className="flex items-center gap-3">
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-4 h-4 rounded-full bg-[#ff014f] shadow-[0_0_15px_rgba(255,1,79,0.8)]"
            />
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="w-4 h-4 rounded-full bg-[#00c2ff] shadow-[0_0_15px_rgba(0,194,255,0.8)]"
            />
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="w-4 h-4 rounded-full bg-[#08fdd8] shadow-[0_0_15px_rgba(8,253,216,0.8)]"
            />
          </div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center gap-1"
          >
            <p className="text-white font-headline-md font-bold tracking-widest text-lg uppercase">
              Masayeakh
            </p>
            <p className="text-slate-400 font-label-md tracking-[0.3em] text-xs uppercase">
              Loading Portfolio
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
