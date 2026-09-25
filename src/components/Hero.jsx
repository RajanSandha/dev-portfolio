import React, { Suspense, lazy } from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUpRight, Download, ArrowDown } from 'lucide-react';

const DeveloperAvatarScene = lazy(() => import('./3d/DeveloperAvatarScene'));

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-between items-center bg-[#050508] overflow-hidden pt-20 pb-8 px-4 sm:px-8">
      {/* ========================================================= */}
      {/* 1. TOP VOLUMETRIC CONICAL SPOTLIGHT BEAM                  */}
      {/* ========================================================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[95vh] pointer-events-none z-0">
        {/* Top Light Source Apex Node */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-white/70 blur-md rounded-full" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 bg-white rounded-full shadow-[0_0_40px_20px_rgba(255,255,255,0.8)]" />

        {/* The Conical Light Beam (Apex down to floor) */}
        <div
          className="w-full h-full opacity-60 mix-blend-screen"
          style={{
            clipPath: 'polygon(46% 0%, 54% 0%, 95% 100%, 5% 100%)',
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(192,132,252,0.18) 40%, rgba(147,51,234,0.06) 70%, rgba(5,5,8,0) 100%)',
          }}
        />

        {/* Ambient Purple Floor Rim Light Reflection */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[550px] h-[160px] bg-purple-600/15 blur-[90px] rounded-full pointer-events-none" />
      </div>

      {/* ========================================================= */}
      {/* 2. GIANT BACKGROUND OUTLINE WATERMARK ("DEVELOPER")       */}
      {/* ========================================================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span
          className="font-display font-extrabold text-[15vw] tracking-tighter uppercase text-transparent leading-none opacity-20"
          style={{
            WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.22)',
          }}
        >
          DEVELOPER
        </span>
      </div>

      {/* ========================================================= */}
      {/* 3. LEFT FLOATING VERTICAL SOCIAL DOCK                     */}
      {/* ========================================================= */}
      <aside className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-5">
        <a
          href="https://github.com/RajanSandha"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.12] border border-white/[0.08] text-zinc-400 hover:text-white transition-all hover:scale-110"
          title="GitHub Profile"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com/in/rajansandha"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.12] border border-white/[0.08] text-zinc-400 hover:text-white transition-all hover:scale-110"
          title="LinkedIn Profile"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="mailto:rajatworkplace@gmail.com"
          className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.12] border border-white/[0.08] text-zinc-400 hover:text-white transition-all hover:scale-110"
          title="Send Direct Email"
        >
          <Mail className="w-4 h-4" />
        </a>
        <a
          href="tel:+919835004000"
          className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.12] border border-white/[0.08] text-zinc-400 hover:text-white transition-all hover:scale-110"
          title="Direct Phone"
        >
          <Phone className="w-4 h-4" />
        </a>
        {/* Vertical Rail Divider */}
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/[0.15] to-transparent mt-2" />
      </aside>

      {/* ========================================================= */}
      {/* 4. MAIN CENTER STAGE: 3D AVATAR + EDITORIAL TYPOGRAPHY    */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-6xl my-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-8">
        {/* Center 3D Avatar Canvas */}
        <div className="lg:col-span-6 h-[380px] sm:h-[480px] lg:h-[560px] w-full relative flex items-center justify-center">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-full text-xs font-mono text-zinc-500">
                LOADING 3D SCENE...
              </div>
            }
          >
            <DeveloperAvatarScene />
          </Suspense>

          {/* Interactive Mouse Hint Pill */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 border border-white/[0.08] text-[10px] font-mono text-zinc-400 backdrop-blur-md pointer-events-none">
            3D AVATAR TRACKS CURSOR
          </div>
        </div>

        {/* Right Headline & Meta */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>I AM RAJ KUMAR</span>
          </div>

          {/* Headline */}
          <div>
            <div className="font-heading text-sm sm:text-base font-semibold text-zinc-400 uppercase tracking-widest mb-1">
              LEAD ARCHITECT &amp;
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95]">
              DISTRIBUTED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-white">
                DEVELOPER
              </span>
            </h1>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
            8+ years architecting mission-critical backends, multi-tenant X12 EDI middleware, AS2 cryptographic protocols, and serverless GenAI inference pipelines.
          </p>

          {/* Action Triggers */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#works"
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-semibold tracking-tight transition-all duration-300 active:scale-95 shadow-[0_4px_25px_rgba(168,85,247,0.25)]"
            >
              <span>Explore Selected Works</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
            </a>

            <a
              href="./Raj_Kumar_Resume.pdf"
              download="Raj_Kumar_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 hover:text-white border border-white/[0.1] text-xs font-medium transition-all duration-300 active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-zinc-400" />
              <span>Download CV (ATS PDF)</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 5. BOTTOM SLIDER TRACK & DOWN INDICATOR (From Video)      */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-4xl pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500" />
          <span className="text-zinc-400 font-bold">8+ YRS</span>
          <span className="hidden sm:inline">• DISTRIBUTED SYSTEMS</span>
        </div>

        {/* Center Spotlight Slider Indicator (Matching Video Icon) */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-[1px] bg-white/[0.2]" />
          <div className="w-5 h-5 rounded-full border border-white/[0.25] flex items-center justify-center text-[10px] text-white">
            ✕
          </div>
          <div className="w-12 h-[1px] bg-white/[0.2]" />
        </div>

        <a
          href="#works"
          className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
        >
          <span>SCROLL</span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
