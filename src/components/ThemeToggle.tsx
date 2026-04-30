"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsLightMode(true);
      document.documentElement.classList.add("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    if (!isLightMode) {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-8 right-8 md:top-12 md:right-12 z-[100] w-12 h-12 rounded-full bg-surface-container-high/50 border border-white/10 backdrop-blur-md flex items-center justify-center text-slate-300 hover:text-white hover:border-[#00c2ff]/50 transition-colors shadow-lg"
      aria-label="Toggle Theme"
    >
      <span className="material-symbols-outlined text-[24px]">
        {isLightMode ? "dark_mode" : "light_mode"}
      </span>
    </motion.button>
  );
}
