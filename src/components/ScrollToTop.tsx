"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#08fdd8]/50 hover:bg-[#08fdd8]/10 text-white hover:text-[#08fdd8] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-50 transition-colors"
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined text-[24px]">
            arrow_upward
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
