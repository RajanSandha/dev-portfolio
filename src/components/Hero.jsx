import React, { Suspense, lazy } from 'react';
import { ArrowDown, ArrowUpRight, Download, Sparkles, Terminal } from 'lucide-react';

const HeroScene = lazy(() => import('./3d/HeroScene'));

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* 3D Background Canvas Layer (Subtle, Non-obtrusive) */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-[70vh] lg:h-full opacity-60 pointer-events-none z-0">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Main Editorial Content */}
      <div className="relative z-10 my-auto max-w-4xl">
        {/* Status Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-xs font-mono mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-wide">RAJ KUMAR // LEAD BACKEND &amp; SYSTEMS ARCHITECT</span>
        </div>

        {/* Oversized Editorial Display Headline */}
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[0.95] mb-8">
          ARCHITECTING <br />
          <span className="text-zinc-500 hover:text-white transition-colors duration-500">
            HIGH-THROUGHPUT
          </span> <br />
          DISTRIBUTED SYSTEMS.
        </h1>

        {/* Subhead Description */}
        <p className="text-zinc-400 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mb-10">
          8+ years engineering fault-tolerant backend infrastructures, multi-tenant X12 EDI middleware, AS2 cryptographic gateways, and distributed Generative AI inference pipelines.
        </p>

        {/* Interactive Action Triggers */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#works"
            className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 text-sm font-semibold tracking-tight transition-all duration-300 active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
          >
            <span>Explore Selected Work</span>
            <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </div>
          </a>

          <a
            href="./Raj_Kumar_Resume.pdf"
            download="Raj_Kumar_Resume.pdf"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 hover:text-white border border-white/[0.1] text-sm font-medium transition-all duration-300 active:scale-95"
          >
            <Download className="w-4 h-4 text-zinc-400" />
            <span>Download CV (ATS PDF)</span>
          </a>
        </div>
      </div>

      {/* Bottom Editorial Metrics & Scroll Down Indicator */}
      <div className="relative z-10 pt-16 border-t border-white/[0.06] mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div>
          <div className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">08+</div>
          <div className="text-xs font-mono text-zinc-500 mt-1 uppercase tracking-wider">Years Experience</div>
        </div>
        <div>
          <div className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">18+</div>
          <div className="text-xs font-mono text-zinc-500 mt-1 uppercase tracking-wider">Production Backends</div>
        </div>
        <div>
          <div className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">10k+</div>
          <div className="text-xs font-mono text-zinc-500 mt-1 uppercase tracking-wider">Msgs / Min Async EDI</div>
        </div>
        <div className="flex items-center justify-end">
          <a
            href="#works"
            className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
