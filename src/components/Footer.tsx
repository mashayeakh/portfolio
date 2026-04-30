"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const links = [
    { href: "/", icon: "home" },
    { href: "/work", icon: "work" },
    { href: "/about", icon: "person" },
    { href: "/contact", icon: "mail" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-auto rounded-full border border-white/5 bg-slate-950/90 backdrop-blur-lg px-2 py-2 shadow-2xl flex gap-4 items-center z-50">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center justify-center p-3 transition-colors active:scale-90 transition-transform ${
              isActive
                ? "bg-teal-400/20 text-teal-400 rounded-full ring-1 ring-teal-400/50"
                : "text-slate-500 hover:text-teal-300"
            }`}
          >
            <span className="material-symbols-outlined">{link.icon}</span>
          </Link>
        );
      })}
    </nav>
  );
}
