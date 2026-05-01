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
    <header className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl flex justify-center items-center z-50 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <nav className="flex items-center gap-4 sm:gap-8">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              title={link.label}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${isActive ? "text-[#00c2ff]" : "text-slate-400 hover:text-white"
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
              <span className="material-symbols-outlined relative z-10 text-[20px] transition-transform duration-300 hover:scale-110">
                {link.icon}
              </span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
