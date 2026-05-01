export default function Contact() {
  return (
    <main className="relative z-10 pt-40 pb-32 px-6 max-w-[1200px] mx-auto min-h-screen">
      {/* Decorative Stars */}
      <div className="fixed top-20 left-[10%] w-1 h-1 bg-primary-container rounded-full opacity-40 blur-[1px]"></div>
      <div className="fixed top-60 right-[15%] w-2 h-2 bg-primary-fixed-dim rounded-full opacity-20 blur-[2px]"></div>
      <div className="fixed bottom-40 left-[20%] w-1.5 h-1.5 bg-primary-container rounded-full opacity-30 blur-[1px]"></div>

      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low border border-outline-variant rounded-full mb-6">
          <span className="w-2 h-2 bg-primary-container rounded-full animate-pulse"></span>
          <span className="font-label-md text-label-md text-on-surface-variant">Available for new projects</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-white mb-3 max-w-3xl">
          Let's craft something <span className="text-primary">extraordinary</span>.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Currently seeking opportunities to collaborate on high-impact digital experiences and technical architectural challenges.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form Section */}
        <div className="lg:col-span-7 bg-surface-container/30 backdrop-blur-md rounded-lg border border-white/5 p-6 lg:p-12">
          <form action="#" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="name">Name</label>
                <input
                  className="w-full bg-surface-container-highest/20 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:ring-1 focus:ring-primary-container text-white placeholder:text-slate-600 transition-all"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">Email</label>
                <input
                  className="w-full bg-surface-container-highest/20 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:ring-1 focus:ring-primary-container text-white placeholder:text-slate-600 transition-all"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="message">Message</label>
              <textarea
                className="w-full bg-surface-container-highest/20 border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:ring-1 focus:ring-primary-container text-white placeholder:text-slate-600 transition-all resize-none"
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
              ></textarea>
            </div>

            <button
              className="w-full bg-white text-slate-950 font-bold font-label-md text-label-md py-4 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              type="submit"
            >
              Send Message
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        </div>

        {/* Sidebar Info Section */}
        <div className="lg:col-span-5 space-y-6">
          {/* Location Card */}
          <div className="bg-surface-container-low/50 backdrop-blur-sm border border-white/5 p-6 rounded-lg group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h3 className="font-headline-lg text-[20px] text-white">Location</h3>
                <p className="text-on-surface-variant">San Francisco, CA</p>
              </div>
            </div>
            <div className="w-full h-40 rounded-lg overflow-hidden grayscale opacity-50 group-hover:opacity-80 transition-opacity">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4nV6zzyW2XEKf3dCQjKZmrHH9qIyeMJnhZ22kw3WoBX8rQEqD6EDTG3nZJudUpqEcJCloYEnSX7WhfNCfVDyi2xEUjf16wUHAF7Ro56xQ0sR_bnDdXYh-LOuKj3jy5tshK4fhPkPACvnx3BtcFn3ohsG_sGpYAyTCKmxxIIGveisAdRHQ_ysMmsb4iCGu1cE0SR1RNk28pGbFDA6ff9DUi9gCVF_MPSbPiCbRkSdvQSpkDAppGVeeBTD9vue6t1I-2KOm_U69FOcG"
                alt="Map of San Francisco"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="https://github.com/mashayeakh" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-surface-container-highest/10 border border-white/5 rounded-lg hover:bg-white hover:text-slate-950 transition-all duration-300">
              <span className="material-symbols-outlined">code</span>
              <span className="font-label-md text-label-md font-bold">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/masayeakh-islam-8575b735a/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-surface-container-highest/10 border border-white/5 rounded-lg hover:bg-[#00c2ff] hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined">work</span>
              <span className="font-label-md text-label-md font-bold">LinkedIn</span>
            </a>
            <a href="https://x.com/MashTechie" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-surface-container-highest/10 border border-white/5 rounded-lg hover:bg-white hover:text-slate-950 transition-all duration-300">
              <span className="material-symbols-outlined">tag</span>
              <span className="font-label-md text-label-md font-bold">Twitter</span>
            </a>
          </div>

          {/* Direct Contact */}
          <div className="p-6 border border-white/5 rounded-lg bg-gradient-to-br from-primary-container/5 to-transparent">
            <h4 className="text-white font-bold mb-2">Direct Contact</h4>
            <p className="text-on-surface-variant mb-4">Feel free to reach out directly if you prefer email.</p>
            <a href="mailto:islammasayekh@gmail.com" className="text-[#00c2ff] font-bold hover:underline">
              islammasayekh@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
