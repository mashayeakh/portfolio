import Link from "next/link";

export default function About() {
  return (
    <main className="relative pt-32 pb-40 px-6 max-w-[1200px] mx-auto min-h-screen">
      {/* Cosmic Background Accents */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-[#00c2ff] rounded-full blur-[1px] opacity-40"></div>
        <div className="absolute top-[40%] right-[15%] w-2 h-2 bg-[#ff014f] rounded-full blur-[2px] opacity-20"></div>
        <div className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 bg-[#08fdd8] rounded-full blur-[1px] opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-glow"></div>
      </div>

      <section className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Portrait & Quick Stats */}
        <div className="lg:col-span-5 space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#00c2ff]/20 via-[#ff014f]/20 to-[#08fdd8]/20 rounded-[1.75rem] blur-xl opacity-25 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-border bg-surface-container-low">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXZLrqHO5je7lJILs8C_tWXZV1OM2qh6GLjjsntfaApNX1dPMR6q7SDHWPOz2-BkdXaGNy3QyKk1W-qitG2YUegR0mo_NM-s93Td-VgdohtK5kEDVtcAFxti9CXOr3RWoJU7R4LYqYY7eYJP0x605r6YSF2UHla8ZywcXk8mFSEqCjIY4uv15ByYfJiL1kqJtzUQzNPDKs4CHsOsvqqTwz12sE9OXhaoJ140-tmkTRz4RV8CGh4ZgLhoc_cfQR9QEhr0S68kPlMc9c"
                alt="Masayeakh Islam"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 object-top scale-105 group-hover:scale-100"
              />
              {/* Availability Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-slate-950/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#08fdd8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#08fdd8]"></span>
                </span>
                <span className="font-label-md text-label-md text-white uppercase tracking-wider">Available for hire</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl glass-border bg-surface-container-lowest text-center group hover:-translate-y-1 transition-transform">
              <span className="block text-3xl font-bold text-[#00c2ff] mb-1">3+</span>
              <span className="font-label-md text-[10px] text-slate-400 uppercase tracking-widest font-bold">Years Exp.</span>
            </div>
            <div className="p-6 rounded-2xl glass-border bg-surface-container-lowest text-center group hover:-translate-y-1 transition-transform">
              <span className="block text-3xl font-bold text-[#ff014f] mb-1">150+</span>
              <span className="font-label-md text-[10px] text-slate-400 uppercase tracking-widest font-bold">Projects</span>
            </div>
            <div className="p-6 rounded-2xl glass-border bg-surface-container-lowest text-center group hover:-translate-y-1 transition-transform">
              <span className="block text-3xl font-bold text-[#08fdd8] mb-1">120+</span>
              <span className="font-label-md text-[10px] text-slate-400 uppercase tracking-widest font-bold">Problems Solved</span>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Crafting digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#08fdd8]">excellence</span>.
            </h1>
            <p className="font-body-lg text-lg text-slate-300 max-w-2xl leading-relaxed">
              I’m a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I love turning ideas into real-world solutions with clean, efficient code. I’m always eager to learn new technologies and contribute to impactful projects. Whether it's front-end polish or back-end logic, I’m ready to dive in and grow with a forward-thinking team.
            </p>
          </div>

          {/* Experience Details / Bento Style */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10"></div>
              <h2 className="font-label-md text-sm text-[#08fdd8] uppercase tracking-[0.2em] font-bold">My Introduction</h2>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border border-white/5 bg-[#171a21]/50 backdrop-blur-sm space-y-4 hover:border-white/10 transition-colors">
                <span className="material-symbols-outlined text-[#00c2ff] text-3xl">code</span>
                <h3 className="text-2xl font-bold text-white">Full Stack Engineering</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Specialized in the MERN stack. I build robust full-stack architectures, turning complex ideas into clean, efficient, and scalable real-world solutions.
                </p>
              </div>
              <div className="p-8 rounded-2xl border border-white/5 bg-[#171a21]/50 backdrop-blur-sm space-y-4 hover:border-white/10 transition-colors">
                <span className="material-symbols-outlined text-[#ff014f] text-3xl">terminal</span>
                <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Proficient with MongoDB, Express.js, React, Node.js, Next.js, and Tailwind CSS. Focused on delivering seamless UI and powerful backend logic.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <a href="https://drive.google.com/file/d/1TIGqHKGuk5iSoKzJ4pXvOQDeSN7YR4NE/view?usp=sharing" target="_blank" rel="noreferrer" className="bg-white text-slate-950 px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Download Resume
              <span className="material-symbols-outlined text-[20px]">download</span>
            </a>
          </div>
        </div>
      </section>

      {/* Skill Pills Section */}
      <section className="mt-24 relative z-10">
        <div className="flex flex-wrap justify-center gap-3">
          {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'].map((skill) => (
            <span key={skill} className="px-5 py-2 rounded-full border border-white/10 bg-[#171a21]/80 text-slate-300 text-sm font-bold tracking-wide hover:border-[#00c2ff]/50 hover:text-white cursor-default transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
