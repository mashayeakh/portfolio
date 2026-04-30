import Link from "next/link";

export default function Work() {
  const projects = [
    {
      title: "Crypto Pulse Mobile",
      description: "Next-generation mobile trading experience with instant swap capabilities and portfolio health metrics.",
      category: "UX Design / Flutter",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlgyw4F63mLzndFBkiuNALv0h_xoVpnMZypw5k9kWdOcIznI7SXCE_RcyKL1CTN-B1A1CUppMHSVwNdPzx0Nt403PEL7nm14f87QZkHKf1tS-LcvT-P_sARizPLqDj59gS7p_JjEwF2Ne7oPB3hyvvWU1G2xhOzxQNBOQNVfsgTc3wqbwtzbkXLHYZGastTqJdRZAcuxHMriKDj34v3mhFxR4tE4swNbh_5iX71vPm6W1Shc_y_4Cx4BPGVzrRQqciXN4qeAJMMmMf",
      span: "col-span-12 md:col-span-6",
      aspect: "aspect-video"
    },
    {
      title: "Nebula Cloud UI",
      description: "Infrastructure monitoring at scale. Real-time node tracking with predictive failure analysis algorithms.",
      category: "Fullstack / React",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBRnatgHbn5pXKVBKqAz702cjc0aZimCtZQwcoLCgldghDrEGNCESL7qJT9LhdCthk2HUlWZ6iVWZcNuE7c166Ww8IavYEPWzdQWL1CAGzWYSDCRB1F5qcK4-c-jNAoJtLzT3Ikr5LylM6FH9M9ZWRhG0okI24R9cAVVTKmzVUd_6e38hNotZCsIcJaJX8XR8djcSFFUSwFoa3DOmJ-GOGfftw_uT8YVuJCyevyQeGQJZK2dB2IsVHkEQDlkCLVixPNkvSlS13ySjP",
      span: "col-span-12 md:col-span-6",
      aspect: "aspect-video"
    },
    {
      title: "Aura Studio Site",
      description: "Portfolio for an award-winning architecture firm.",
      category: "Branding / Webflow",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW51hIzKg_dRS7ig6mA7ECTpKVR3PzVlguogq4yGj7WDYu2DeBe15QX6nJRkA9g0XZYsOotz1dZrKZ3uUHlD5ttH1xq8KdmWXZj8BPL68dammOuuqkuH1kFJkY9-nlTuuBsPZuM46dOofLlIbQuA4PwkIT8wlqfB0cXmW5Lc8FvjiIA_e0SqS6fl9n1qhm14ZW05R8KjBsxpZMdWYsVh4P5sE-QitTqQD16D_p7tfg87q-8lDwR3gpjzIYG0g6YeU30lHVTHH3KjEj",
      span: "col-span-12 md:col-span-4",
      aspect: "aspect-[4/5]"
    },
    {
      title: "Vitals Core App",
      description: "Biometric tracking with AI health insights.",
      category: "Mobile / AI",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMNgSJNb2ub8Vp3X91GiPs8I-iwarN42EpaTlie91i_zC999duw4VeT3RZm1ikTe39BqbZ1xiEea3UJYennczNxK_7_t7ogHj_fzBG7P5ml1rcGQYbSTxI9AX-cw005XL4YFi8sBTfT6Z7jXMIKbqSryj3ld_cXO9UA9woam3Po9bT2fWVjLzc3hPMLuLlsLM22JnkPrcNZGtEB_-aNWCDCJHsLyOhuP5hDx6v_g-s0x1tPiRv8IbcT9GUwnxg9hMOc-sNj4Y3guUj",
      span: "col-span-12 md:col-span-4",
      aspect: "aspect-[4/5]"
    },
    {
      title: "Synapse Task Engine",
      description: "Collaborative tool for distributed dev teams.",
      category: "SaaS / Electron",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTGhTRL1Jp5n3sc1vwPllVBcwBfukFCscYFLCNAhbSYsSZJlN009e0SrrtDjhL0pdmJMyWpTrclopIUzuta8Y7QTUCHRcStEln-ZC1G3ZydrABeeymoTtfNMvjzXxt34KiKwbbUkTkOZa6BCq4kP1aKwktQIXTXf9dH9Gwn5puZH-X10pxH57Rx-b_MT6fiOHUD8_qoI2k352M4fAQHejfQZLbzHnGp_nIjUEWRXRFmhpJvOMuRKxXaA3EWyNt0-TL0_m9psQGrUEN",
      span: "col-span-12 md:col-span-4",
      aspect: "aspect-[4/5]"
    },
    {
      title: "Quantum E-Commerce",
      description: "A high-performance headless commerce platform with real-time inventory synchronization.",
      category: "Fullstack / Next.js",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      span: "col-span-12 md:col-span-4",
      aspect: "aspect-[4/5]"
    },
    {
      title: "Horizon AI Interface",
      description: "An intuitive dashboard for managing and deploying machine learning models at scale.",
      category: "UX Design / React",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      span: "col-span-12 md:col-span-4",
      aspect: "aspect-[4/5]"
    },
    {
      title: "EcoTrack Sustainability",
      description: "Carbon footprint monitoring app utilizing IoT sensor data and beautiful visual reporting.",
      category: "Mobile / React Native",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      span: "col-span-12 md:col-span-4",
      aspect: "aspect-[4/5]"
    }
  ];

  return (
    <main className="max-w-[1200px] mx-auto px-6 pt-32 pb-32">
      <header className="mb-12 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-white/5 mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-label-md text-label-md text-primary uppercase">Selected Projects</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-white mb-4">Crafted Experiences</h1>
        <p className="text-on-surface-variant max-w-xl font-body-lg text-body-lg">
          A collection of digital solutions focused on technical precision and intuitive user interfaces.
        </p>
      </header>

      <div className="grid grid-cols-12 gap-6">
        {/* Featured Project */}
        <section className="col-span-12 group relative overflow-hidden rounded-xl glass-card transition-all duration-500 hover:border-teal-400/40">
          <div className="flex flex-col lg:flex-row h-full">
            <div className="w-full lg:w-1/2 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpUrLTcshixh0X56aOXnIrwlBrDLKvS3nfqb3gZ_dw82tYXBOD0ybri7OZnPJ4yIcA_ev8FIawQoPjrlF0fxT1MEFOE4gcJhzMtFMyahR3JVI7o1YouhPzPrh91QwGwI0VEXBe4YRSnA01q-ghDKCRF3v1qAgdjZu0SPZ51k2UvChM8D-2MKCOiOvNXkmC9wFdAxwB4DcZ3t0EK0BJGKfHvoLcuXc3O8rE5He27QCrT9gl10Uv9pQIGK_cXfBMVF8iCE6is9h91QAO"
                alt="Lumina Analytics Dashboard"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 p-12 flex flex-col justify-center">
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-0.5 rounded bg-teal-400/10 text-teal-400 text-[10px] font-bold uppercase tracking-widest border border-teal-400/20">Featured</span>
                <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400 text-[10px] font-bold uppercase tracking-widest">SaaS</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-white mb-4 leading-tight">Lumina Analytics Dashboard</h2>
              <p className="text-on-surface-variant font-body-lg text-body-lg mb-8 leading-relaxed">
                An enterprise-level data visualization platform designed for real-time market tracking. Focused on high-performance rendering and seamless user interaction patterns.
              </p>
              <div className="flex items-center gap-6">
                <Link href="#" className="flex items-center gap-2 text-white font-nav-link text-nav-link group/link">
                  View Project
                  <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Project Grid */}
        {projects.map((project, index) => (
          <div key={index} className={`${project.span} group glass-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px]`}>
            <div className={`${project.aspect} overflow-hidden`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="font-epilogue text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-on-surface-variant mb-6 line-clamp-2">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{project.category}</span>
                <span className="material-symbols-outlined text-teal-400">north_east</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-white text-slate-950 px-8 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          Load More Work
        </button>
      </div>
    </main>
  );
}
