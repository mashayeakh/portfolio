import Link from "next/link";
import Typewriter from "../components/Typewriter";


export default function Home() {
  const projects = [
    {
      title: "FoodHub",
      type: "Full Stack",
      description: "A comprehensive food ordering ecosystem featuring a Next.js-powered storefront and a robust Node.js/Express server. The platform serves three distinct user roles—Customers, Providers, and Admins—with...",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop",
      technologies: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Shadcn UI", "TanStack Query", "React Context API", "Node.js", "Express.js (v5)", "Prisma ORM", "PostgreSQL", "Zod", "Better Auth", "Nodemailer"],
      features: ["Three-Way Role Ecosystem", "Smart Cart Logic", "Automated Image Pipeline"],
      moreFeatures: 2,
      badgeColor: "bg-[#00c2ff]"
    },
    {
      title: "Startup Base",
      type: "Full Stack",
      description: "The first comprehensive digital databank and 'Yellow Pages' for the Bangladesh startup ecosystem. Designed to foster a healthy startup culture, it connects startups with investors, accelerators, and service...",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1470&auto=format&fit=crop",
      technologies: ["React.js", "React Router", "Tailwind CSS", "DaisyUI", "React Hook Form", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
      features: ["Multi-Tiered User Roles", "Business Claim System", "Advanced Filtering & Search"],
      moreFeatures: 2,
      badgeColor: "bg-[#00c2ff]"
    },
    {
      title: "Smart School Bus Web App",
      type: "Frontend",
      description: "A comprehensive solution for tracking and managing school bus routes, ensuring student safety, and providing real-time updates to parents and school administrators.",
      image: "https://images.unsplash.com/photo-1557223562-6c77ef1607bf?q=80&w=1371&auto=format&fit=crop",
      technologies: ["React.js", "Tailwind CSS", "Redux", "Google Maps API", "Firebase"],
      features: ["Real-time GPS Tracking", "Parent Notifications", "Route Optimization"],
      moreFeatures: 3,
      badgeColor: "bg-[#a855f7]"
    },
    {
      title: "Alumni Connect",
      type: "Frontend",
      description: "Connect, collaborate, and build a thriving community that fosters lifelong learning and growth. A platform dedicated to bringing alumni together.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
      features: ["User Directory", "Event Management", "Mentorship Program"],
      moreFeatures: 1,
      badgeColor: "bg-[#a855f7]"
    }
  ];

  return (
    <main className="relative min-h-screen pt-24 pb-32 overflow-hidden bg-background">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary-container/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary-container/10 blur-[120px]"></div>
      </div>

      {/* Decorative Star Icons */}
      <div className="absolute top-40 left-[10%] opacity-40 animate-pulse">
        <span className="material-symbols-outlined text-primary-container text-xs">grade</span>
      </div>
      <div className="absolute top-80 right-[15%] opacity-20">
        <span className="material-symbols-outlined text-primary-container text-lg">grade</span>
      </div>
      <div className="absolute bottom-40 left-[20%] opacity-30">
        <span className="material-symbols-outlined text-primary-container text-sm">grade</span>
      </div>

      {/* 1. Hero Section */}
      <section id="hero" className="relative w-full min-h-[85vh] flex flex-col lg:flex-row items-center justify-center pt-8 pb-20 z-10 max-w-[1200px] mx-auto px-6 overflow-hidden">
        {/* Left: Content */}
        <div className="flex flex-col items-start gap-6 z-10 w-full lg:w-7/12 relative mt-12 lg:mt-0">
          <p className="text-slate-300 font-label-md text-sm md:text-sm uppercase tracking-[0.25em] font-bold">
            Welcome to my world
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-[1.2] mt-4">
            Hi, I'm <span className="text-[#ff014f]">Masayeakh Islam</span><br />
            a <Typewriter words={["Professional Coder.", "Frontend Developer.", "Backend Developer.", "Full Stack Developer.", "Problem Solver."]} /><span className="text-[#ff014f] font-light animate-pulse">|</span>
          </h1>

          <p className="text-slate-400 text-body-lg font-body-lg max-w-2xl leading-relaxed mt-6">
            I love to develop websites by using Laravel and Vue.js, also interested to use React.js and Express.js. I worked with Ecommerce, Restaurant Management, Krishi Farming, Hotel Booking also POS & ERP. To learn more about me visit my LinkedIn Profile.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-6">
            <a href="#contact" className="bg-white text-slate-950 px-8 py-4 rounded-full flex items-center gap-3 transition-transform hover:scale-105 font-label-md font-bold shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Start a Project
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>

            {/* Horizontal Social Dock */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high/50 border border-white/10 backdrop-blur-md">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition">
                <span className="font-bold text-sm">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition">
                <span className="font-bold text-sm">X</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Architectural Image & Stats */}
        <div className="relative mt-24 lg:mt-0 z-10 w-full lg:w-5/12 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl border border-white/10 bg-surface-container-lowest p-3 shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl z-10 pointer-events-none"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXZLrqHO5je7lJILs8C_tWXZV1OM2qh6GLjjsntfaApNX1dPMR6q7SDHWPOz2-BkdXaGNy3QyKk1W-qitG2YUegR0mo_NM-s93Td-VgdohtK5kEDVtcAFxti9CXOr3RWoJU7R4LYqYY7eYJP0x605r6YSF2UHla8ZywcXk8mFSEqCjIY4uv15ByYfJiL1kqJtzUQzNPDKs4CHsOsvqqTwz12sE9OXhaoJ140-tmkTRz4RV8CGh4ZgLhoc_cfQR9QEhr0S68kPlMc9c"
              alt="Nur Adnan"
              className="w-full h-full object-cover rounded-[16px] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 object-top"
            />
            <div className="absolute -bottom-8 -left-4 md:-left-16 bg-surface-container-high/95 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col gap-5 z-20 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="flex items-center gap-4 border-b border-white/5 pb-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">lightbulb</span>
                </div>
                <div>
                  <p className="text-white font-headline-lg text-3xl leading-none tracking-tight">120+</p>
                  <p className="text-slate-400 text-[10px] mt-1.5 uppercase tracking-widest font-bold">Problems Solved</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <p className="text-white font-headline-lg text-3xl leading-none tracking-tight">150</p>
                  <p className="text-slate-400 text-[10px] mt-1.5 uppercase tracking-widest font-bold">Projects Delivered</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-surface-container-high to-surface-container-highest border border-white/10 px-5 py-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 animate-bounce" style={{ animationDuration: '4s' }}>
              <span className="text-primary font-headline-xl text-4xl leading-none">3</span>
              <p className="text-slate-300 text-[10px] leading-tight font-bold uppercase tracking-widest">Years<br />Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Me Section */}
      <section id="about" className="max-w-[1200px] mx-auto px-6 mt-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#08fdd8] mb-8 relative z-10 tracking-tight">
            About Me
          </h2>
          <div className="text-slate-300 font-body-md leading-relaxed space-y-6 relative z-10 text-lg">
            <p>
              My main area of expertise is front-end development, focusing on creating clean, intuitive, and highly interactive user interfaces.
            </p>
            <p>
              With a strong foundation in <span className="text-[#08fdd8] font-bold">JavaScript and TypeScript</span>, I specialize in building scalable web applications using <span className="text-[#08fdd8] font-bold">React and Next.js</span>. I have extensive experience in crafting custom features, complex animations, and fully responsive layouts.
            </p>
            <p>
              Beyond the front-end, I also bring robust full-stack capabilities to the table. I'm proficient in designing secure backend architectures and RESTful APIs using <span className="text-[#08fdd8] font-bold">Node.js, Express, and Laravel</span>, backed by modern databases like PostgreSQL and MongoDB.
            </p>
            <p>
              Visit my <a href="#" className="text-[#08fdd8] hover:underline font-bold">LinkedIn</a> profile for more details or just <a href="#contact" className="text-[#08fdd8] hover:underline font-bold">contact</a> me.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Tech Stack Section */}
      <section id="tech-stack" className="max-w-[1200px] mx-auto px-6 mt-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-headline-lg mb-2 tracking-tight">Technologies</h2>
        <p className="text-slate-400 font-label-md mb-16 tracking-widest text-sm">My Tech Stack</p>
        
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12">
          {[
            { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
            { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
            { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
            { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invert: true },
            { name: "NestJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
            { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
          ].map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-4 group w-16 md:w-20">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#111318] shadow-[0_0_20px_rgba(255,255,255,0.02)] border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:bg-[#1a1c23]">
                <img 
                  src={tech.src} 
                  alt={tech.name} 
                  className={`w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-110 ${tech.invert ? 'invert brightness-200' : ''}`}
                />
              </div>
              <span className="text-slate-400 text-xs font-label-md font-medium group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
          {[
            { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
            { name: "Prisma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", invert: true },
            { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
            { name: "Kubernetes", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
            { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
            { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
          ].map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-4 group w-16 md:w-20">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#111318] shadow-[0_0_20px_rgba(255,255,255,0.02)] border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:bg-[#1a1c23]">
                <img 
                  src={tech.src} 
                  alt={tech.name} 
                  className={`w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-110 ${tech.invert ? 'invert brightness-200' : ''}`}
                />
              </div>
              <span className="text-slate-400 text-xs font-label-md font-medium group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Skills Section */}
      <section id="skills" className="max-w-[1200px] mx-auto px-6 mt-32">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-headline-lg tracking-tight">
            Professional Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="bg-surface-container-lowest/40 border border-white/5 rounded-2xl p-8 backdrop-blur-md hover:border-[#08fdd8]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(8,253,216,0.15)] group">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 justify-center md:justify-start">
              <span className="w-2.5 h-2.5 rounded-full bg-[#08fdd8] shadow-[0_0_10px_rgba(8,253,216,0.8)]"></span> Frontend
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular", "Vue.js", "Redux"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full bg-[#08fdd8]/10 text-[#08fdd8] border border-[#08fdd8]/20 text-sm font-medium hover:bg-[#08fdd8] hover:text-slate-900 transition-colors duration-300 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & DB */}
          <div className="bg-surface-container-lowest/40 border border-white/5 rounded-2xl p-8 backdrop-blur-md hover:border-[#08fdd8]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(8,253,216,0.15)]">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 justify-center md:justify-start">
              <span className="w-2.5 h-2.5 rounded-full bg-[#08fdd8] shadow-[0_0_10px_rgba(8,253,216,0.8)]"></span> Backend &amp; Database
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["Node.js", "Express.js", "Laravel", "PostgreSQL", "MongoDB", "MySQL", "Prisma"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/5 text-slate-300 border border-white/10 text-sm font-medium hover:bg-white hover:text-slate-900 transition-colors duration-300 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Architecture */}
          <div className="bg-surface-container-lowest/40 border border-white/5 rounded-2xl p-8 backdrop-blur-md hover:border-[#08fdd8]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(8,253,216,0.15)]">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 justify-center md:justify-start">
              <span className="w-2.5 h-2.5 rounded-full bg-[#08fdd8] shadow-[0_0_10px_rgba(8,253,216,0.8)]"></span> Tools &amp; Architecture
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["Git", "Docker", "AWS", "REST APIs", "Cypress", "Figma"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/5 text-slate-300 border border-white/10 text-sm font-medium hover:bg-white hover:text-slate-900 transition-colors duration-300 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Resume / Experience Section */}
      <section id="qualifications" className="max-w-[1200px] mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Job Experience Column */}
          <div>
            <div className="mb-10">
              <span className="text-[#ff014f] font-label-md tracking-widest text-sm uppercase">2010 - 2022</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 font-headline-lg">Job Experience</h2>
            </div>
            <div className="relative border-l-[4px] border-surface-container-high ml-4">
              {/* Timeline Item 1 */}
              <div className="relative pl-10 pb-12 group">
                <div className="absolute left-[-14px] top-12 w-6 h-6 rounded-full bg-surface-container-high border-4 border-background group-hover:bg-[#ff014f] transition-colors duration-500"></div>
                <div className="absolute left-0 top-14 w-10 h-1 bg-surface-container-high"></div>
                <div className="bg-surface-container-low hover:bg-surface-container transition-all duration-500 rounded-2xl p-8 border border-white/5 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,1,79,0.1)] relative">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">Frontend Developer</h3>
                      <p className="text-slate-400 text-sm font-label-md">Shift Asia Team - (2022 - 2023)</p>
                    </div>
                    <span className="px-4 py-2 rounded-lg bg-background text-[#ff014f] shadow-inner text-sm font-bold tracking-wide self-start xl:self-center">VIETNAM</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-body-md group-hover:text-slate-300 transition-colors duration-300">
                    A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Vietnam isn't easy.
                  </p>
                </div>
              </div>
              {/* Timeline Item 2 */}
              <div className="relative pl-10 pb-12 group">
                <div className="absolute left-[-14px] top-12 w-6 h-6 rounded-full bg-surface-container-high border-4 border-background group-hover:bg-[#ff014f] transition-colors duration-500"></div>
                <div className="absolute left-0 top-14 w-10 h-1 bg-surface-container-high"></div>
                <div className="bg-surface-container-low hover:bg-surface-container transition-all duration-500 rounded-2xl p-8 border border-white/5 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,1,79,0.1)] relative">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">Laravel Developer</h3>
                      <p className="text-slate-400 text-sm font-label-md">Netigian IT - (2024 - 2025)</p>
                    </div>
                    <span className="px-4 py-2 rounded-lg bg-background text-[#ff014f] shadow-inner text-sm font-bold tracking-wide self-start xl:self-center">BANGLADESH</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-body-md group-hover:text-slate-300 transition-colors duration-300">
                    Netigian's hiring process is an important part of our culture. Netigian's care deeply about their teams and the people who make them up.
                  </p>
                </div>
              </div>
              {/* Timeline Item 3 */}
              <div className="relative pl-10 group">
                <div className="absolute left-[-14px] top-12 w-6 h-6 rounded-full bg-surface-container-high border-4 border-background group-hover:bg-[#ff014f] transition-colors duration-500"></div>
                <div className="absolute left-0 top-14 w-10 h-1 bg-surface-container-high"></div>
                <div className="bg-surface-container-low hover:bg-surface-container transition-all duration-500 rounded-2xl p-8 border border-white/5 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,1,79,0.1)] relative">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">Frontend Developer</h3>
                      <p className="text-slate-400 text-sm font-label-md">Synergy Tech - (2021 - 2022)</p>
                    </div>
                    <span className="px-4 py-2 rounded-lg bg-background text-[#ff014f] shadow-inner text-sm font-bold tracking-wide self-start xl:self-center">BANGLADESH</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-body-md group-hover:text-slate-300 transition-colors duration-300">
                    The Bangladesh economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Quality Column */}
          <div>
            <div className="mb-10">
              <span className="text-[#ff014f] font-label-md tracking-widest text-sm uppercase">1998 - 2010</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 font-headline-lg">Education Quality</h2>
            </div>
            <div className="relative border-l-[4px] border-surface-container-high ml-4">
              {/* Timeline Item 1 */}
              <div className="relative pl-10 pb-12 group">
                <div className="absolute left-[-14px] top-12 w-6 h-6 rounded-full bg-surface-container-high border-4 border-background group-hover:bg-[#ff014f] transition-colors duration-500"></div>
                <div className="absolute left-0 top-14 w-10 h-1 bg-surface-container-high"></div>
                <div className="bg-surface-container-low hover:bg-surface-container transition-all duration-500 rounded-2xl p-8 border border-white/5 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,1,79,0.1)] relative">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">Bachelor of Social Science</h3>
                      <p className="text-slate-400 text-sm font-label-md">AKM Rahmatullah University (2018 - 2023)</p>
                    </div>
                    <span className="px-4 py-2 rounded-lg bg-background text-[#ff014f] shadow-inner text-sm font-bold tracking-wide self-start xl:self-center">3.50/4</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-body-md group-hover:text-slate-300 transition-colors duration-300">
                    The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.
                  </p>
                </div>
              </div>
              {/* Timeline Item 2 */}
              <div className="relative pl-10 pb-12 group">
                <div className="absolute left-[-14px] top-12 w-6 h-6 rounded-full bg-surface-container-high border-4 border-background group-hover:bg-[#ff014f] transition-colors duration-500"></div>
                <div className="absolute left-0 top-14 w-10 h-1 bg-surface-container-high"></div>
                <div className="bg-surface-container-low hover:bg-surface-container transition-all duration-500 rounded-2xl p-8 border border-white/5 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,1,79,0.1)] relative">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">Higher Secondary Education</h3>
                      <p className="text-slate-400 text-sm font-label-md">Shaheed Abdussalam College (2016 - 2018)</p>
                    </div>
                    <span className="px-4 py-2 rounded-lg bg-background text-[#ff014f] shadow-inner text-sm font-bold tracking-wide self-start xl:self-center">4.30/5</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-body-md group-hover:text-slate-300 transition-colors duration-300">
                    Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.
                  </p>
                </div>
              </div>
              {/* Timeline Item 3 */}
              <div className="relative pl-10 group">
                <div className="absolute left-[-14px] top-12 w-6 h-6 rounded-full bg-surface-container-high border-4 border-background group-hover:bg-[#ff014f] transition-colors duration-500"></div>
                <div className="absolute left-0 top-14 w-10 h-1 bg-surface-container-high"></div>
                <div className="bg-surface-container-low hover:bg-surface-container transition-all duration-500 rounded-2xl p-8 border border-white/5 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,1,79,0.1)] relative">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">Secondary School Education</h3>
                      <p className="text-slate-400 text-sm font-label-md">Kalia Pilot High School (2014 - 2016)</p>
                    </div>
                    <span className="px-4 py-2 rounded-lg bg-background text-[#ff014f] shadow-inner text-sm font-bold tracking-wide self-start xl:self-center">4.00/5</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-body-md group-hover:text-slate-300 transition-colors duration-300">
                    Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Projects & Portfolio Section */}
      <section id="projects" className="max-w-[1200px] mx-auto px-6 mt-32">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="px-5 py-2 rounded-full border border-white/10 bg-surface-container-high/50 backdrop-blur-md text-slate-300 text-sm font-label-md flex items-center gap-3 mb-8 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00c2ff] shadow-[0_0_10px_rgba(0,194,255,0.8)]"></span>
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-headline-lg mb-6 tracking-tight">
            Projects &amp; Portfolio
          </h2>
          <p className="text-slate-400 font-body-md max-w-2xl text-lg leading-relaxed">
            A collection of projects showcasing my skills in building modern, scalable web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col rounded-2xl border border-white/5 bg-[#171a21]/50 backdrop-blur-sm overflow-hidden hover:border-white/10 transition-all duration-500 group shadow-xl">
              
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900 border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171a21] via-transparent to-transparent opacity-80"></div>
                
                {/* Badge */}
                <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-wide shadow-lg flex items-center gap-2 ${project.badgeColor}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  {project.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00c2ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-body-md">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-4 font-label-md">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-xs font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mt-auto">
                  <h4 className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-4 font-label-md">
                    Key Features
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-slate-300 text-sm">
                        <span className="text-[#00c2ff] mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {project.moreFeatures > 0 && (
                    <p className="text-slate-500 text-xs italic mt-4 pl-5">
                      + {project.moreFeatures} more features
                    </p>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="max-w-[1200px] mx-auto px-6 mt-32 mb-16 text-center">
        <div className="bg-surface-container-low/50 border border-white/10 rounded-3xl p-12 md:p-20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-headline-lg mb-6 tracking-tight relative z-10">
            Let's work together
          </h2>
          <p className="text-slate-400 font-body-md text-lg max-w-2xl mx-auto mb-10 relative z-10">
            I'm currently available for freelance work or full-time opportunities. If you have a project that needs some creative touch, I'd love to hear about it.
          </p>
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-3 bg-[#ff014f] text-white px-8 py-4 rounded-full font-label-md font-bold transition-transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,1,79,0.3)] relative z-10">
            Say Hello
            <span className="material-symbols-outlined">send</span>
          </a>
        </div>
      </section>
    </main>
  );
}
