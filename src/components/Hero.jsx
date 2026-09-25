import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Download, ArrowRight, Shield, Layers, Cpu, Sparkles } from 'lucide-react';
import HeroScene from './3d/HeroScene';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-[#030712] via-[#070b16] to-[#030712]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Executive Introduction */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Live Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Senior / Lead Backend &amp; Architecture Roles</span>
            </div>

            {/* Main Headline */}
            <div>
              <p className="text-indigo-400 font-mono text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Systems Architect &amp; Lead Backend Engineer
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Engineering <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                  High-Throughput Backends
                </span> <br />
                &amp; Resilient Systems.
              </h1>
            </div>

            {/* Lead Narrative */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              With <strong className="text-white font-semibold">8+ years of engineering excellence</strong>, 
              I design and deploy mission-critical distributed architectures, asynchronous message pipelines, 
              and enterprise microservices. Specialized in <strong className="text-indigo-300">Python (FastAPI)</strong>, 
              <strong className="text-cyan-300"> NestJS (TypeScript)</strong>, multi-tenant 
              <strong className="text-purple-300"> X12 EDI / AS2 Cryptography</strong>, and provider-agnostic 
              <strong className="text-emerald-300"> Generative AI orchestration</strong>.
            </p>

            {/* Architecture Highlights Pill Row */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" /> Multi-Tenant X12 EDI / AS2
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Real-Time Socket.IO &amp; Queues
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Multi-Model AI Orchestration
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-amber-400" /> Australian Gov CCS / PRODA
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2 group"
              >
                <span>Explore Architecture &amp; Systems</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="./Raj_Kumar_Resume.pdf"
                download="Raj_Kumar_Resume.pdf"
                className="px-5 py-3.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-white font-medium text-sm transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download CV (PDF)</span>
              </a>

              <button
                onClick={onOpenResume}
                className="text-xs font-mono text-indigo-300 hover:text-white underline underline-offset-4 transition-colors"
              >
                [View Web Resume]
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D WebGL Canvas */}
          <motion.div
            className="lg:col-span-5 h-[420px] sm:h-[480px] lg:h-[540px] relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Interactive Three.js Scene */}
            <HeroScene />

            {/* Subtle Overlay Instruction Badge */}
            <div className="absolute bottom-2 right-4 px-2.5 py-1 rounded border border-white/10 bg-black/60 backdrop-blur text-[10px] font-mono text-slate-400 pointer-events-none">
              ✦ Interactive 3D WebGL Mesh (Drag to orbit)
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
