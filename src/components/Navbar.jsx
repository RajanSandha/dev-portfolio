import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Download } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Selected Works', href: '#works' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-4 sm:px-8">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-500 px-5 sm:px-6 py-2.5 flex items-center justify-between ${
          scrolled
            ? 'bg-[#0b0c12]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.5)]'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center justify-center text-xs font-mono font-bold text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
            RK
          </div>
          <div>
            <div className="font-display font-bold text-sm tracking-tight text-white flex items-center gap-2">
              RAJ KUMAR
              <span className="hidden md:inline-block text-[10px] font-mono text-zinc-500 font-normal">
                / LEAD ARCHITECT
              </span>
            </div>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.06]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Availability */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>AVAILABLE (MOHALI / REMOTE)</span>
          </div>

          <a
            href="./Raj_Kumar_Resume.pdf"
            download="Raj_Kumar_Resume.pdf"
            className="group flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-semibold tracking-tight transition-all duration-200 shadow-sm active:scale-95"
          >
            <span>Resume</span>
            <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="./Raj_Kumar_Resume.pdf"
            download="Raj_Kumar_Resume.pdf"
            className="p-2 rounded-full bg-white text-black"
            title="Download Resume"
          >
            <Download className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/[0.06] border border-white/[0.1] text-zinc-300 hover:text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-2 p-5 rounded-3xl bg-[#0b0c12]/95 border border-white/[0.08] backdrop-blur-2xl shadow-2xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.04]"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500" />
            </a>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between px-2 text-xs font-mono text-zinc-400">
            <span>Status: Available</span>
            <a
              href="./Raj_Kumar_Resume.pdf"
              download="Raj_Kumar_Resume.pdf"
              className="text-white underline underline-offset-4"
            >
              Download PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
