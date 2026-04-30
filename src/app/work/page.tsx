import Link from "next/link";
import { projects } from "../../data/projects";

export default function Work() {
  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);

  return (
    <main className="max-w-[1200px] mx-auto px-6 pt-32 pb-32">
      <header className="mb-12 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-white/5 mb-4 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#00c2ff] shadow-[0_0_10px_rgba(0,194,255,0.8)]"></span>
          <span className="font-label-md text-label-md text-slate-300 uppercase tracking-widest">Selected Projects</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-headline-lg">
          Crafted Experiences
        </h1>
        <p className="text-slate-400 max-w-2xl font-body-lg text-lg leading-relaxed">
          A collection of digital solutions focused on technical precision, robust architectures, and intuitive user interfaces.
        </p>
      </header>

      <div className="grid grid-cols-12 gap-8">
        {/* Featured Project */}
        {featuredProject && (
          <section className="col-span-12 group relative overflow-hidden rounded-2xl border border-white/5 bg-[#171a21]/50 backdrop-blur-sm transition-all duration-500 hover:border-white/10 shadow-xl">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="w-full lg:w-7/12 overflow-hidden bg-slate-900 border-b lg:border-b-0 lg:border-r border-white/5 relative">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171a21] via-transparent to-transparent opacity-80 lg:hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#171a21] opacity-80 hidden lg:block"></div>
              </div>
              <div className="w-full lg:w-5/12 p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex gap-2 mb-6">
                  <span className="px-3 py-1 rounded bg-[#08fdd8]/10 text-[#08fdd8] text-[10px] font-bold uppercase tracking-widest border border-[#08fdd8]/20">Featured</span>
                  <span className="px-3 py-1 rounded bg-white/5 text-slate-300 text-[10px] font-bold uppercase tracking-widest">{featuredProject.type}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-[#00c2ff] transition-colors">{featuredProject.title}</h2>
                <p className="text-slate-400 font-body-md text-base lg:text-lg mb-8 leading-relaxed">
                  {featuredProject.description}
                </p>
                <div className="flex items-center gap-6 mt-auto">
                  <Link href={`/projects/${featuredProject.id}`} className="flex items-center gap-2 text-white font-label-md font-bold group/link border-b border-[#00c2ff]/0 hover:border-[#00c2ff] pb-1 transition-all">
                    View Project Details
                    <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1 text-[#00c2ff]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Project Grid */}
        {remainingProjects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id} className="col-span-12 md:col-span-6 flex flex-col group rounded-2xl overflow-hidden border border-white/5 bg-[#171a21]/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/10 shadow-xl">
            <div className="aspect-[16/10] overflow-hidden bg-slate-900 border-b border-white/5 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171a21] via-transparent to-transparent opacity-80"></div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00c2ff] transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">{project.description}</p>
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{project.type}</span>
                <span className="material-symbols-outlined text-[#00c2ff] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">arrow_forward</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
