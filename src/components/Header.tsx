"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: "home" },
    { href: "/work", label: "Work", icon: "business_center" },
    { href: "/about", label: "About", icon: "person" },
    { href: "/contact", label: "Contact", icon: "mail" },
  ];

  return (
    <header className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 px-4 py-3 rounded-full border border-white/10 bg-[#0f1117]/80 backdrop-blur-xl flex justify-center items-center z-50 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
      <nav className="flex items-center gap-2 sm:gap-4">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              title={link.label}
              className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 ${isActive ? "text-[#00c2ff]" : "text-slate-400 hover:text-white"
                }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-bg"
                  className="absolute inset-0 bg-[#00c2ff]/10 border border-[#00c2ff]/30 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="material-symbols-outlined relative z-10 text-[22px] transition-transform duration-300 hover:scale-110">
                {link.icon}
              </span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
