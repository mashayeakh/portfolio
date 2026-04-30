import Link from "next/link";

export default function About() {
  return (
    <main className="relative pt-32 pb-40 px-6 max-w-[1200px] mx-auto min-h-screen">
      {/* Cosmic Background Accents */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-primary rounded-full blur-[1px] opacity-40"></div>
        <div className="absolute top-[40%] right-[15%] w-2 h-2 bg-primary rounded-full blur-[2px] opacity-20"></div>
        <div className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 bg-primary rounded-full blur-[1px] opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-glow"></div>
      </div>

      <section className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Portrait & Quick Stats */}
        <div className="lg:col-span-5 space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden glass-border bg-surface-container-low">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfFOdqtD1j6mVCFkUxr6P1VzbuLSEIkqHMZK7g8FMOQE_0NQM-j7CMyuC4wRfK4Ql_Wqs6KsvpwP_FcKJvVnotNh3KdrGgw1WrYUyEvc0ObRqF5iiJMxBDcjgK9uuNrQes69NC_9DB7sqIfbOQ79mjjvZ8OBXCSF0E2MnDoCPNypABB2KqfwksxTs3ek6XA3aPeDeRZD9qT7NIA1Ahipxa_dvvgrYzI9PF33t_4klOlUmU9ewb1Vc9vXiOBLIYH_4jZG7ypVCMU34L"
                alt="Full profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Availability Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-slate-950/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="font-label-md text-label-md text-white uppercase tracking-wider">Available for hire</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-6 rounded-lg glass-border bg-surface-container-lowest text-center">
              <span className="block font-headline-lg text-primary mb-1">05+</span>
              <span className="font-label-md text-label-md text-on-surface-variant">Years Exp.</span>
            </div>
            <div className="p-6 rounded-lg glass-border bg-surface-container-lowest text-center">
              <span className="block font-headline-lg text-primary mb-1">42</span>
              <span className="font-label-md text-label-md text-on-surface-variant">Projects</span>
            </div>
            <div className="p-6 rounded-lg glass-border bg-surface-container-lowest text-center">
              <span className="block font-headline-lg text-primary mb-1">24/7</span>
              <span className="font-label-md text-label-md text-on-surface-variant">Support</span>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <h1 className="font-headline-xl text-headline-xl text-white">
              Crafting digital <br />
              <span className="text-primary">excellence</span>.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              I am a Senior Frontend Engineer with over 5 years of experience specializing in building high-performance, scalable web applications. My approach combines technical precision with an eye for editorial design.
            </p>
          </div>

          {/* Experience Details / Bento Style */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10"></div>
              <h2 className="font-label-md text-label-md text-primary uppercase tracking-[0.2em]">My Introduction</h2>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-lg glass-border bg-surface-container/50 space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl">code</span>
                <h3 className="font-headline-lg text-[24px] text-white">Engineering</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Expert in React and Next.js ecosystems. I build component-driven architectures that are resilient, performant, and maintainable.
                </p>
              </div>
              <div className="p-8 rounded-lg glass-border bg-surface-container/50 space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                <h3 className="font-headline-lg text-[24px] text-white">Stack</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Proficient with TypeScript, Tailwind CSS, Framer Motion, and GraphQL. Focused on delivering seamless user experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <button className="bg-white text-slate-950 px-10 py-4 rounded-full font-nav-link text-nav-link flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
              Download Resume
              <span className="material-symbols-outlined text-[20px]">download</span>
            </button>
            <Link href="/contact" className="border border-white/20 text-white px-10 py-4 rounded-full font-nav-link text-nav-link hover:bg-white/5 hover:scale-105 active:scale-95 transition-all">
              Let's Talk
            </Link>
          </div>
        </div>
      </section>

      {/* Skill Pills Section */}
      <section className="mt-24 relative z-10">
        <div className="flex flex-wrap justify-center gap-3">
          {['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'Framer Motion'].map((skill) => (
            <span key={skill} className="px-6 py-3 rounded-full glass-border bg-white/5 text-on-surface font-label-md text-label-md">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
