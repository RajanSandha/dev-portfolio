import React, { useState } from 'react';
import { 
  Terminal, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Download, 
  ArrowUp, 
  MapPin, 
  Send,
  ShieldCheck,
  Cpu
} from 'lucide-react';

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-20 pb-12 bg-[#02050e] border-t border-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Contact Console */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl mb-16 shadow-2xl relative overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Console Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-xs text-slate-400">raj-systems-gateway:~ (ssh)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>COMMUNICATION PORT ACTIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Heading and Pitch */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
                <Cpu className="w-3.5 h-3.5" />
                <span>INITIATE CONTACT PROTOCOL</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Let&apos;s build resilient, high-throughput systems together.
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xl">
                Looking for a Lead Backend Engineer, Systems Architect, or technical leader who can design fault-tolerant microservices, EDI transaction pipelines, or production AI engines? Feel free to reach out directly.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="mailto:rajatworkplace@gmail.com"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>
                <a
                  href="./Raj_Kumar_Resume.pdf"
                  download="Raj_Kumar_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>

            {/* Right Column: Connection Endpoints */}
            <div className="lg:col-span-5 space-y-3 font-mono text-xs">
              {/* Email Endpoint */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 flex items-center justify-between group hover:border-indigo-500/40 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <div className="truncate">
                    <div className="text-[10px] text-slate-500 uppercase">Primary Inbound</div>
                    <span className="text-slate-200 truncate select-all">rajatworkplace@gmail.com</span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('rajatworkplace@gmail.com', 'email')}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone Endpoint */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 flex items-center justify-between group hover:border-indigo-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">Direct Mobile</div>
                    <span className="text-slate-200 select-all">+91 98350 04000</span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('+919835004000', 'phone')}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location Endpoint */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">Base Location</div>
                  <span className="text-slate-200">Mohali, Punjab, India (Open to Remote / Relocation)</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="https://linkedin.com/in/rajansandha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2 hover:border-indigo-500/40 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-indigo-400" />
                  <span className="truncate">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/RajanSandha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2 hover:border-indigo-500/40 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span className="truncate">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Nav & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-900 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="text-indigo-400 font-bold">&copy; 2026 Raj Kumar</span>
            <span className="text-slate-700">|</span>
            <span>Lead Backend Engineer &amp; Systems Architect</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>TLS 1.3 // AS2 Encrypted</span>
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
              title="Return to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
