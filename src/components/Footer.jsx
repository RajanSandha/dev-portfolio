import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Copy, Check, Mail, Phone, Linkedin, Github, Download, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
    <footer id="contact" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08] relative z-10">
      {/* Editorial Contact Banner */}
      <div className="space-y-8 mb-20">
        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
          04 / INITIATE CONVERSATION
        </div>

        <h2 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95] max-w-4xl">
          HAVE A SYSTEM TO SCALE? <br />
          <span className="text-zinc-500 hover:text-white transition-colors duration-500">
            LET&apos;S TALK.
          </span>
        </h2>

        <p className="text-zinc-400 text-base sm:text-xl max-w-2xl leading-relaxed">
          Open for Lead Backend Engineer, Systems Architect, or Principal Engineering roles. Available for remote engagement worldwide or on-site discussions in Mohali / Chandigarh.
        </p>
      </div>

      {/* Interactive Communication Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {/* Email Card */}
        <div className="editorial-card rounded-2xl p-6 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Primary Inbound
            </span>
            <button
              onClick={() => copyToClipboard('rajatworkplace@gmail.com', 'email')}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
          <div>
            <a
              href="mailto:rajatworkplace@gmail.com"
              className="font-display font-bold text-xl text-white hover:text-zinc-300 transition-colors block truncate"
            >
              rajatworkplace@gmail.com
            </a>
            <p className="text-xs text-zinc-500 mt-1">Direct inquiries &amp; interview scheduling</p>
          </div>
        </div>

        {/* Phone Card */}
        <div className="editorial-card rounded-2xl p-6 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Direct Phone / WhatsApp
            </span>
            <button
              onClick={() => copyToClipboard('+919835004000', 'phone')}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
          <div>
            <a
              href="tel:+919835004000"
              className="font-display font-bold text-xl text-white hover:text-zinc-300 transition-colors block"
            >
              +91 98350 04000
            </a>
            <p className="text-xs text-zinc-500 mt-1">Mobile &amp; WhatsApp communication</p>
          </div>
        </div>

        {/* Social / Professional Profiles Card */}
        <div className="editorial-card rounded-2xl p-6 flex flex-col justify-between space-y-4">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
            Verified Profiles
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/rajansandha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-between p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-zinc-200 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
            <a
              href="https://github.com/RajanSandha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-between p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-zinc-200 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry & Navigation */}
      <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold">&copy; 2026 Raj Kumar</span>
          <span>•</span>
          <span>Lead Systems Architect</span>
          <span>•</span>
          <span className="text-zinc-400">{time ? `${time} IST (Mohali)` : 'Mohali, India'}</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="./Raj_Kumar_Resume.pdf"
            download="Raj_Kumar_Resume.pdf"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Download ATS Resume (PDF)
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
