"use client";

import Link from "next/link";
import Typewriter from "../components/Typewriter";
import Hover3DCard from "../components/Hover3DCard";
import { motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const container = useRef<HTMLElement>(null);


  useGSAP(() => {
    // 1. Hero Entry Timeline
    const tl = gsap.timeline();

    tl.fromTo(".hero-element",
      { y: 50, opacity: 0, filter: "blur(8px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, stagger: 0.15, ease: "power4.out", delay: 0.2 }
    );

    tl.fromTo(".hero-image-wrapper",
      { scale: 0.85, opacity: 0, rotation: -3, y: 30 },
      { scale: 1, opacity: 1, rotation: 0, y: 0, duration: 1.5, ease: "elastic.out(1, 0.7)" },
      "-=0.8"
    );

    // 2. Hero Scrub/Parallax (Exit)
    gsap.to(".hero-content-wrapper", {
      y: -100,
      opacity: 0,
      scale: 0.95,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(".hero-image-wrapper", {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // 3. Atmosphere Parallax
    gsap.to(".atmosphere-bg", {
      y: 300,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    });

    // 4. Staggered Tech Stack Reveal
    gsap.fromTo(".tech-icon",
      { y: 40, opacity: 0, scale: 0.8 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.05, ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: "#tech-stack",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // 5. Staggered Projects Reveal
    gsap.fromTo(".project-card",
      { y: 80, opacity: 0, rotateX: 10, transformPerspective: 1000 },
      {
        y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.15, ease: "power3.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // 6. Premium Section Titles (Clip Path Reveal)
    const sectionTitles = gsap.utils.toArray<HTMLElement>('.section-title');
    sectionTitles.forEach((title) => {
      gsap.fromTo(title,
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 40 },
        {
          clipPath: "polygon(0 -20%, 100% -20%, 100% 120%, 0 120%)",
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // 7. General Section Reveals (excluding those with custom staggers)
    const sections = gsap.utils.toArray<HTMLElement>('.reveal-section');
    sections.forEach((section) => {
      if (['hero', 'tech-stack', 'projects'].includes(section.id)) return;

      gsap.fromTo(section,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <main ref={container} className="relative min-h-screen pt-20 pb-32 overflow-hidden bg-background">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none atmosphere-bg">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary-container/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary-container/10 blur-[120px]"></div>
      </div>

      {/* Decorative Star Icons */}
      <div className="absolute top-20 left-[10%] opacity-40 animate-pulse">
        <span className="material-symbols-outlined text-primary-container text-xs">grade</span>
      </div>
      <div className="absolute top-60 right-[15%] opacity-20">
        <span className="material-symbols-outlined text-primary-container text-lg">grade</span>
      </div>
      <div className="absolute bottom-40 left-[20%] opacity-30">
        <span className="material-symbols-outlined text-primary-container text-sm">grade</span>
      </div>

      {/* 1. Hero Section */}
      <section id="hero" className="relative w-full min-h-[75vh] flex flex-col lg:flex-row items-center justify-center pb-20 z-10 max-w-[1200px] mx-auto px-6 overflow-hidden reveal-section">
        {/* Left: Vertical Social Dock & Content */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 z-10 w-full lg:w-7/12 relative mt-8 lg:mt-0 hero-content-wrapper">

          {/* Vertical Social Dock (Desktop Only) */}
          <div className="hidden lg:flex flex-col items-center gap-4 py-4 px-2 rounded-full bg-surface-container-high/40 border border-white/5 backdrop-blur-md hero-element">
            <motion.a whileHover={{ scale: 1.1, x: -2 }} whileTap={{ scale: 0.9 }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition" title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1, x: -2 }} whileTap={{ scale: 0.9 }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1, x: -2 }} whileTap={{ scale: 0.9 }} href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition" title="Twitter / X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1, x: -2 }} whileTap={{ scale: 0.9 }} href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition" title="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </motion.a>
          </div>

          {/* Main Text Content */}
          <div className="flex flex-col items-start gap-6">
            <p className="text-slate-300 font-label-md text-sm md:text-sm uppercase tracking-[0.25em] font-bold hero-element">
              Welcome to my world
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.1] mt-2 hero-element">
              Hi, I'm <span className="text-[#ff014f] whitespace-nowrap">Masayeakh Islam</span><br />
              a <Typewriter words={["Professional Coder.", "Frontend Developer.", "Backend Developer.", "Full Stack Developer.", "Problem Solver."]} /><span className="text-[#ff014f] font-light animate-pulse">|</span>
            </h1>

            <p className="text-slate-400 text-body-lg font-body-lg max-w-2xl leading-relaxed mt-4 hero-element">
              I’m a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React,
              Node.js). I love turning ideas into real-world solutions with clean, efficient code. I’m always eager to
              learn new technologies and contribute to impactful projects. Whether it's front-end polish or back-end
              logic, I’m ready to dive in and grow with a forward-thinking team.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6 hero-element">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-slate-950 px-6 py-3 rounded-full flex items-center gap-3 text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              >
                Start a Project
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1TIGqHKGuk5iSoKzJ4pXvOQDeSN7YR4NE/view?usp=sharing"
                target="_blank"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-white/20 text-white px-6 py-3 rounded-full flex items-center gap-3 text-sm font-semibold hover:bg-white/5 transition-colors"
              >
                Download Resume
                <span className="material-symbols-outlined text-[16px]">download</span>
              </motion.a>

              {/* Horizontal Social Dock (Mobile Only) */}
              <div className="flex lg:hidden items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high/50 border border-white/10 backdrop-blur-md ml-0 sm:ml-2">
                <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition" title="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition" title="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition" title="Twitter / X">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition" title="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Architectural Image & Stats */}
        <div className="relative mt-24 lg:mt-0 z-10 w-full lg:w-5/12 flex justify-center lg:justify-end hero-image-wrapper">
          <Hover3DCard className="w-full max-w-[360px]">
            <div className="relative w-full aspect-[4/5] group">
              {/* Glowing gradient aura on hover */}
              <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-[#ff014f] via-[#00c2ff] to-[#08fdd8] opacity-0 group-hover:opacity-60 blur-xl transition-all duration-700 z-0"></div>

              {/* Outer border that changes color on hover */}
              <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/10 to-white/5 group-hover:from-[#ff014f] group-hover:via-[#00c2ff] group-hover:to-[#08fdd8] opacity-100 p-[2px] transition-all duration-700 z-10">
                {/* Inner container to hold image */}
                <div className="w-full h-full rounded-[1.6rem] overflow-hidden bg-surface-container-lowest relative shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00c2ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none"></div>
                  <img
                    src="/assets/me1.jpg"
                    alt="Masayeakh Islam"
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 object-top scale-105 group-hover:scale-100 z-10"
                  />
                </div>
              </div>
            </div>
          </Hover3DCard>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-slate-400 opacity-80 hover:opacity-100 transition-opacity"
        >
          <div className="w-5 h-8 rounded-full border-2 border-slate-400 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-1.5 bg-slate-400 rounded-full"
            />
          </div>
          {/* <span className="text-xs uppercase tracking-[0.2em] font-bold">Scroll Down</span> */}
          <span className="material-symbols-outlined text-[16px] animate-bounce"></span>
        </motion.div>
      </section>

      {/* 2. About Me Section */}
      <section id="about" className="max-w-[1200px] mx-auto px-6 mt-24 mb-32 reveal-section">
        <div className="bg-[#171a21]/50 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 md:p-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00c2ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-headline-lg mb-6 tracking-tight section-title pb-2">About Me</h2>
              <p className="text-slate-400 font-body-md text-lg leading-relaxed mb-6">
                I’m a passionate Full Stack Developer specializing in the MERN stack. I love turning complex ideas into scalable, real-world solutions with clean, efficient code.
              </p>
              <p className="text-slate-400 font-body-md text-lg leading-relaxed mb-8">
                Whether it's crafting an intuitive frontend interface or architecting a robust backend database, I thrive on building digital experiences that make an impact.
              </p>
              <a href="/about" className="inline-flex items-center gap-2 text-[#00c2ff] font-bold hover:text-white transition-colors border-b border-[#00c2ff] hover:border-white pb-1">
                Read Full Story <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest/50 border border-white/5 p-6 rounded-2xl hover:border-[#08fdd8]/30 transition-all hover:-translate-y-1">
                <span className="text-4xl font-bold text-[#08fdd8] block mb-2">2</span>
                <span className="text-slate-400 text-sm font-bold tracking-widest uppercase">Years Exp.</span>
              </div>
              <div className="bg-surface-container-lowest/50 border border-white/5 p-6 rounded-2xl hover:border-[#ff014f]/30 transition-all hover:-translate-y-1">
                <span className="text-4xl font-bold text-[#ff014f] block mb-2">20+</span>
                <span className="text-slate-400 text-sm font-bold tracking-widest uppercase">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Services Section */}
      <section id="services" className="max-w-[1200px] mx-auto px-6 mt-32 mb-16 reveal-section">
        <div className="text-center mb-16">
          <div className="inline-flex px-5 py-2 rounded-full border border-white/10 bg-surface-container-high/50 backdrop-blur-md text-slate-300 text-sm font-label-md items-center gap-3 mb-8 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-[#08fdd8] shadow-[0_0_10px_rgba(8,253,216,0.8)]"></span>
            What I Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-headline-lg mb-6 tracking-tight section-title pb-2">
            My Services
          </h2>
          <p className="text-slate-400 font-body-md max-w-2xl mx-auto text-lg leading-relaxed">
            I offer a full range of web development services to help you build, scale, and maintain your digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-surface-container-low/40 backdrop-blur-md hover:bg-surface-container-low transition-all duration-500 rounded-3xl p-8 border border-white/5 hover:border-[#00c2ff]/30 hover:-translate-y-2 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00c2ff]/10 rounded-full blur-3xl group-hover:bg-[#00c2ff]/20 transition-all duration-500"></div>
            <span className="material-symbols-outlined text-5xl text-[#00c2ff] mb-6 block relative z-10">code</span>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Frontend Dev</h3>
            <p className="text-slate-400 leading-relaxed mb-6 relative z-10">
              Building highly interactive, accessible, and performant user interfaces using React, Next.js, and modern CSS frameworks like Tailwind.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-surface-container-low/40 backdrop-blur-md hover:bg-surface-container-low transition-all duration-500 rounded-3xl p-8 border border-white/5 hover:border-[#08fdd8]/30 hover:-translate-y-2 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#08fdd8]/10 rounded-full blur-3xl group-hover:bg-[#08fdd8]/20 transition-all duration-500"></div>
            <span className="material-symbols-outlined text-5xl text-[#08fdd8] mb-6 block relative z-10">dns</span>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Backend Dev</h3>
            <p className="text-slate-400 leading-relaxed mb-6 relative z-10">
              Designing robust database architectures and writing secure, scalable RESTful APIs using Node.js, Express, NestJS, and MongoDB.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-surface-container-low/40 backdrop-blur-md hover:bg-surface-container-low transition-all duration-500 rounded-3xl p-8 border border-white/5 hover:border-[#ff014f]/30 hover:-translate-y-2 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff014f]/10 rounded-full blur-3xl group-hover:bg-[#ff014f]/20 transition-all duration-500"></div>
            <span className="material-symbols-outlined text-5xl text-[#ff014f] mb-6 block relative z-10">design_services</span>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">UI/UX Design</h3>
            <p className="text-slate-400 leading-relaxed mb-6 relative z-10">
              Creating beautiful, responsive web designs and engaging user experiences with a focus on modern aesthetics and usability.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Tech Stack Section */}
      <section id="tech-stack" className="max-w-[1200px] mx-auto px-6 mt-16 text-center reveal-section">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-headline-lg mb-2 tracking-tight section-title pb-2">Technologies</h2>
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
      <section id="skills" className="max-w-[1200px] mx-auto px-6 mt-32 reveal-section">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-headline-lg tracking-tight section-title pb-2">
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
      <section id="qualifications" className="max-w-[1200px] mx-auto px-6 mt-32 reveal-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Job Experience Column */}
          <div>
            <div className="mb-10">
              <span className="text-[#00c2ff] font-label-md tracking-widest text-sm uppercase font-bold">2024 - Present</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 font-headline-lg section-title pb-2">Job Experience</h2>
            </div>
            <div className="relative border-l-[4px] border-surface-container-high ml-4">
              {/* Timeline Item 1 */}
              <div className="relative pl-10 pb-12 group">
                <div className="absolute left-[-14px] top-12 w-6 h-6 rounded-full bg-surface-container-high border-4 border-[#0f1117] group-hover:bg-[#00c2ff] transition-colors duration-500"></div>
                <div className="absolute left-0 top-14 w-10 h-1 bg-surface-container-high"></div>
                <div className="bg-[#171a21]/50 backdrop-blur-sm hover:bg-[#171a21] transition-all duration-500 rounded-2xl p-8 border border-white/5 shadow-lg group-hover:shadow-[0_0_20px_rgba(0,194,255,0.15)] group-hover:border-[#00c2ff]/30 relative">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00c2ff] transition-colors duration-300">Full Stack Developer</h3>
                      <p className="text-slate-400 text-sm font-bold tracking-wide uppercase">IT Bangla LTD &bull; (2024 - 2025)</p>
                    </div>
                    <span className="px-4 py-2 rounded-lg bg-[#00c2ff]/10 text-[#00c2ff] border border-[#00c2ff]/20 text-sm font-bold tracking-widest self-start xl:self-center">BANGLADESH</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-300">
                    Spearheaded the development of complex MERN stack applications. Orchestrated seamless integrations between frontend interfaces and robust backend architectures, focusing on performance, scalability, and writing clean, efficient code.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-10 group">
                <div className="absolute left-[-14px] top-12 w-6 h-6 rounded-full bg-surface-container-high border-4 border-[#0f1117] group-hover:bg-[#08fdd8] transition-colors duration-500"></div>
                <div className="absolute left-0 top-14 w-10 h-1 bg-surface-container-high"></div>
                <div className="bg-[#171a21]/50 backdrop-blur-sm hover:bg-[#171a21] transition-all duration-500 rounded-2xl p-8 border border-white/5 shadow-lg group-hover:shadow-[0_0_20px_rgba(8,253,216,0.15)] group-hover:border-[#08fdd8]/30 relative">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#08fdd8] transition-colors duration-300">Backend Developer (Intern)</h3>
                      <p className="text-slate-400 text-sm font-bold tracking-wide uppercase">IT Bangla LTD &bull; (2024)</p>
                    </div>
                    <span className="px-4 py-2 rounded-lg bg-[#08fdd8]/10 text-[#08fdd8] border border-[#08fdd8]/20 text-sm font-bold tracking-widest self-start xl:self-center">BANGLADESH</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-300">
                    Engineered robust RESTful APIs and managed MongoDB databases to support dynamic frontend features. Optimized backend queries and ensured secure data transactions across the platform.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Quality Column */}
          <div>
            <div className="mb-10">
              <span className="text-[#ff014f] font-label-md tracking-widest text-sm uppercase font-bold">2014 - 2024</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 font-headline-lg section-title pb-2">Education Quality</h2>
            </div>
            <div className="relative border-l-[4px] border-surface-container-high ml-4">
              {/* Timeline Item 1 */}
              <div className="relative pl-10 pb-12 group">
                <div className="absolute left-[-14px] top-12 w-6 h-6 rounded-full bg-surface-container-high border-4 border-[#0f1117] group-hover:bg-[#ff014f] transition-colors duration-500"></div>
                <div className="absolute left-0 top-14 w-10 h-1 bg-surface-container-high"></div>
                <div className="bg-[#171a21]/50 backdrop-blur-sm hover:bg-[#171a21] transition-all duration-500 rounded-2xl p-8 border border-white/5 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,1,79,0.15)] group-hover:border-[#ff014f]/30 relative">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff014f] transition-colors duration-300 leading-tight">B.Sc. in Computer Science &amp; Engineering</h3>
                      <p className="text-slate-400 text-sm font-bold tracking-wide uppercase">AIUB &bull; (2019 - 2024)</p>
                    </div>
                    <span className="px-4 py-2 rounded-lg bg-[#ff014f]/10 text-[#ff014f] border border-[#ff014f]/20 text-sm font-bold tracking-widest self-start xl:self-center shrink-0">CGPA: 3.78/4</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-300">
                    Completed a comprehensive curriculum encompassing software engineering, system architecture, data management, and emerging technologies. Graduated with high honors.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-10 pb-12 group">
                <div className="absolute left-[-14px] top-12 w-6 h-6 rounded-full bg-surface-container-high border-4 border-[#0f1117] group-hover:bg-[#ff014f] transition-colors duration-500"></div>
                <div className="absolute left-0 top-14 w-10 h-1 bg-surface-container-high"></div>
                <div className="bg-[#171a21]/50 backdrop-blur-sm hover:bg-[#171a21] transition-all duration-500 rounded-2xl p-8 border border-white/5 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,1,79,0.15)] group-hover:border-[#ff014f]/30 relative">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff014f] transition-colors duration-300">Higher Secondary Education</h3>
                      <p className="text-slate-400 text-sm font-bold tracking-wide uppercase">Govt Tolaram College &bull; (2016 - 2018)</p>
                    </div>
                    <span className="px-4 py-2 rounded-lg bg-[#ff014f]/10 text-[#ff014f] border border-[#ff014f]/20 text-sm font-bold tracking-widest self-start xl:self-center shrink-0">GPA: 4.17/5</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-300">
                    Completed higher secondary education with a strong focus on science and mathematics, building the analytical and logical foundation essential for computer science.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative pl-10 group">
                <div className="absolute left-[-14px] top-12 w-6 h-6 rounded-full bg-surface-container-high border-4 border-[#0f1117] group-hover:bg-[#ff014f] transition-colors duration-500"></div>
                <div className="absolute left-0 top-14 w-10 h-1 bg-surface-container-high"></div>
                <div className="bg-[#171a21]/50 backdrop-blur-sm hover:bg-[#171a21] transition-all duration-500 rounded-2xl p-8 border border-white/5 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,1,79,0.15)] group-hover:border-[#ff014f]/30 relative">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff014f] transition-colors duration-300">Secondary School Education</h3>
                      <p className="text-slate-400 text-sm font-bold tracking-wide uppercase">Fatulla Pilot High School &bull; (2014 - 2016)</p>
                    </div>
                    <span className="px-4 py-2 rounded-lg bg-[#ff014f]/10 text-[#ff014f] border border-[#ff014f]/20 text-sm font-bold tracking-widest self-start xl:self-center shrink-0">GPA: 4.78/5</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-300">
                    Graduated with distinction, excelling in foundational science subjects and developing an early, keen interest in technology and computational logic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Projects & Portfolio Section */}
      <section id="projects" className="max-w-[1200px] mx-auto px-6 mt-32 reveal-section">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="px-5 py-2 rounded-full border border-white/10 bg-surface-container-high/50 backdrop-blur-md text-slate-300 text-sm font-label-md flex items-center gap-3 mb-8 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00c2ff] shadow-[0_0_10px_rgba(0,194,255,0.8)]"></span>
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-headline-lg mb-6 tracking-tight section-title pb-2">
            Projects &amp; Portfolio
          </h2>
          <p className="text-slate-400 font-body-md max-w-2xl text-lg leading-relaxed">
            A collection of projects showcasing my skills in building modern, scalable web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col rounded-2xl border border-white/5 bg-[#171a21]/50 backdrop-blur-sm overflow-hidden hover:border-white/10 transition-all duration-500 group shadow-xl project-card"
            >

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
                    <p className="text-slate-500 text-xs italic mt-4 pl-5 mb-6">
                      + {project.moreFeatures} more features
                    </p>
                  )}
                  <Link href={`/projects/${project.id}`} className="mt-6 w-full group/btn relative inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-[#00c2ff]/50 hover:bg-[#00c2ff]/10 text-white px-6 py-3 rounded-xl transition-all duration-300 font-bold font-label-md overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      View Details
                      <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </span>
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="max-w-[1200px] mx-auto px-6 mt-32 mb-16 text-center reveal-section">
        <div className="bg-surface-container-low/50 border border-white/10 rounded-3xl p-12 md:p-20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-headline-lg mb-6 tracking-tight relative z-10 section-title pb-2">
            Let's work together
          </h2>
          <p className="text-slate-400 font-body-md text-lg max-w-2xl mx-auto mb-10 relative z-10">
            I'm currently available for freelance work or full-time opportunities. If you have a project that needs some creative touch, I'd love to hear about it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 relative z-10">
            <div className="flex items-center gap-3 text-slate-300 bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-[#08fdd8]">mail</span>
              <a href="mailto:islammasayekh@gmail.com" className="hover:text-[#08fdd8] transition-colors font-bold">islammasayekh@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 text-slate-300 bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-[#00c2ff]">work</span>
              <a href="https://www.linkedin.com/in/masayeakh-islam-8575b735a/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00c2ff] transition-colors font-bold">LinkedIn</a>
            </div>
            <div className="flex items-center gap-3 text-slate-300 bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-white">code</span>
              <a href="https://github.com/mashayeakh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-bold">GitHub</a>
            </div>
          </div>

          <motion.a
            href="mailto:islammasayekh@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#ff014f] text-white px-8 py-4 rounded-full font-label-md font-bold shadow-[0_10px_20px_rgba(255,1,79,0.3)] relative z-10"
          >
            Say Hello
            <span className="material-symbols-outlined">send</span>
          </motion.a>
        </div>
      </section>
    </main>
  );
}
