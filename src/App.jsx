import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsShowcase from './components/ProjectsShowcase';
import ArchitectureSection from './components/ArchitectureSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import Footer from './components/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#050508] text-zinc-100 font-sans selection:bg-white/20 selection:text-white relative">
        {/* Subtle Interactive Ambient Glow */}
        <CursorGlow />

        {/* Floating Minimalist Header */}
        <Navbar />

        <main>
          {/* Editorial Display Hero */}
          <Hero />

          {/* Cinematic Flagship Projects (5 Key Systems + 13 Archive Systems) */}
          <ProjectsShowcase />

          {/* Technical Domains & Architecture Pillars */}
          <ArchitectureSection />

          {/* 8+ Years Experience Timeline */}
          <ExperienceTimeline />
        </main>

        {/* High-Impact Editorial Contact Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
