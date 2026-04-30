"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl rounded-full border border-white/10 bg-slate-950/80 backdrop-blur-xl flex justify-between items-center px-6 py-2 z-50 shadow-[0_0_20px_rgba(45,212,191,0.1)]">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-primary/30">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSLSczqPF64bG6kfCcdLjRmBF6Cdngn1LRAqJTFVXxCtexaNekSqJtNoL2mh9WFA2pGYQp9Ncb4RGVGbfJOFyGHje2Q10i0VIxSy-e_aTzidtll7K55sTerqqbPPmOocI4qKaFbMCBLTcTa0FF_w5M_jzEa3pC76qWseZPhCSvi9NIZM2cqFmTZcA-By-QQFwa8cffd5PuoAs6kKugB6CSWDPEzB6Tihy3Pihk8McOimCJkXWEbFZeUshq1imM5vxr0mDqv5MXyHtT"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-lg font-bold text-white font-headline-lg tracking-tight" style={{ fontSize: '18px' }}>Portfolio</span>
      </Link>
      <nav className="hidden md:flex gap-6 items-center">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`font-nav-link text-nav-link transition-all active:scale-95 ${
                isActive
                  ? "bg-white text-slate-950 rounded-full px-4 py-1 active-nav-glow"
                  : "text-slate-400 hover:text-white hover:scale-105 duration-200"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <Link href="/contact" className="text-teal-400 font-label-md text-label-md px-4 py-1.5 rounded-full border border-teal-400/20 hover:bg-teal-400/10 transition-colors active:scale-95">
        Contact
      </Link>
    </header>
  );
}
