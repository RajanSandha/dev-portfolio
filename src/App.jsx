import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TelemetryBanner from './components/TelemetryBanner.jsx';
import ArchitectureSection from './components/ArchitectureSection.jsx';
import ProjectsBento from './components/ProjectsBento.jsx';
import ResumeSection from './components/ResumeSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Fixed Navigation */}
      <Navbar />

      <main>
        {/* 3D Interactive Hero Section */}
        <Hero />

        {/* Real-Time Telemetry Bar */}
        <TelemetryBanner />

        {/* Architectural Pillars (AS2/EDI, Distributed Queues, AI Pipelines, Gov Protocols) */}
        <ArchitectureSection />

        {/* Interactive Engineering Systems Bento (5 Flagship + 13 Production Systems) */}
        <ProjectsBento />

        {/* Executive Profile & Resume (8+ Years Experience, 5 Featured Highlights, ATS PDF) */}
        <ResumeSection />
      </main>

      {/* Terminal Contact Footer */}
      <Footer />
    </div>
  );
}
