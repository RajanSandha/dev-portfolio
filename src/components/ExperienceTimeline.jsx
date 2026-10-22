import React from 'react';
import { Calendar, Download, ExternalLink, MapPin } from 'lucide-react';

export default function ExperienceTimeline() {
  const experiences = [
  {
    "period": "DEC 2020 — OCT 2026",
    "role": "Software Engineer",
    "company": "Luminoguru Pvt Ltd",
    "location": "Mohali, India",
    "summary": "Lead backend implementation for enterprise integrations, workforce software and AI application platforms.",
    "achievements": [
      "Built multi-tenant X12 EDI middleware with signed AS2 transport and ERP adapters.",
      "Developed TGA-Mesh workforce services with queued Xero payroll sync and real-time messaging.",
      "Designed provider-independent AI generation orchestration and image-processing services."
    ]
  },
  {
    "period": "2019 — 2020",
    "role": "Backend & Web Developer",
    "company": "Quadrish Innovations",
    "location": "Chandigarh, India",
    "summary": "Developed web backends, relational data models and service integrations.",
    "achievements": [
      "Built and maintained REST APIs using PHP frameworks and MySQL.",
      "Integrated Node.js and MongoDB modules for asynchronous data workflows."
    ]
  },
  {
    "period": "2017 — 2019",
    "role": "Software & Mobile Engineer (Trainee to Developer)",
    "company": "Tuespot Pvt Ltd",
    "location": "Mohali, India",
    "summary": "Worked on Android applications and web portal backends.",
    "achievements": [
      "Developed Java/XML Android features with SQLite storage and REST integration.",
      "Contributed PHP/SQL backend features and database schema design."
    ]
  }
];

  return (
    <section id="experience" className="py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 md:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16 pb-6 sm:pb-8 border-b border-white/[0.08]">
        <div>
          <div className="text-[11px] sm:text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 sm:mb-3">
            03 / EXPERIENCE &amp; HISTORY
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight break-words">
            8+ YEARS BUILDING.
          </h2>
        </div>

        <a
          href="./Raj_Kumar_Resume.pdf"
          download="Raj_Kumar_Resume.pdf"
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-semibold tracking-tight transition-all duration-300 shadow-sm active:scale-95"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download ATS-Ready CV (PDF)</span>
        </a>
      </div>

      {/* Timeline Rows */}
      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <div
            key={exp.role}
            className="editorial-card rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-10 relative overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Left Column: Period & Company */}
              <div className="lg:col-span-4 space-y-2 sm:space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] sm:text-xs font-mono text-zinc-300">
                  <Calendar className="w-3 h-3 text-purple-400" />
                  <span>{exp.period}</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight break-words">
                  {exp.role}
                </h3>
                <div className="text-xs sm:text-sm font-heading text-zinc-400">
                  {exp.company}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-zinc-500">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Right Column: Narrative & Key Achievements */}
              <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed">
                  {exp.summary}
                </p>

                <div className="pt-1 sm:pt-2">
                  <div className="text-[11px] sm:text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    Key Architectural Impact:
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        <span className="text-purple-400 mt-0.5 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
