import React from 'react';
import { Calendar, Download, ExternalLink, MapPin } from 'lucide-react';

export default function ExperienceTimeline() {
  const experiences = [
    {
      period: '2022 — PRESENT',
      role: 'Lead Backend Engineer & Systems Architect',
      company: 'Enterprise Technology & Cloud Systems Partner',
      location: 'Mohali, Punjab, India (Remote / Hybrid)',
      summary:
        'Architecting distributed backend infrastructure, multi-tenant X12 EDI middleware, AS2 cryptographic engines, and generative AI pipelines for enterprise clients across North America and Europe.',
      achievements: [
        'Designed high-throughput ANSI X12 850/945/810 processing hub handling 10k+ msgs/min with sub-second ERP synchronization.',
        'Engineered an encrypted off-grid BLE mesh communication protocol for low-power sensor networks (TGA-Mesh on Google Play).',
        'Orchestrated serverless GPU inference clusters on RunPod deploying FLUX.1 and IDM-VTON virtual fitting room engines in <3.8s.',
        'Mentored engineering teams on async design patterns, connection pooling, and resilient PostgreSQL 16 architectures.',
      ],
    },
    {
      period: '2019 — 2022',
      role: 'Senior Backend Engineer & Tech Lead',
      company: 'Digital Solutions & Enterprise Software',
      location: 'India',
      summary:
        'Led backend development teams building high-traffic SaaS systems across travel logistics, automated booking pipelines, and financial settlement platforms.',
      achievements: [
        'Built deterministic state-machine workflow engine coordinating 40+ jurisdictional visa application pipelines (Globetrottr).',
        'Engineered distributed task queueing architecture with BullMQ and Redis, eliminating request timeouts and cutting job latency by 85%.',
        'Integrated international payment gateways, consular submission endpoints, and banking settlement interfaces.',
      ],
    },
    {
      period: '2016 — 2019',
      role: 'Software Engineer (Backend Focus)',
      company: 'Product Engineering & Systems Lab',
      location: 'India',
      summary:
        'Developed core API microservices, database schemas, and background cron workers in Python and Node.js.',
      achievements: [
        'Implemented relational schema design, query indexing, and caching layers in PostgreSQL and MySQL.',
        'Engineered secure JWT/OAuth2 authentication gateways and role-based access control (RBAC) subsystems.',
        'Collaborated with frontend and mobile engineers to establish strict OpenAPI/Swagger contracts.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
        <div>
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
            03 / EXPERIENCE &amp; HISTORY
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            8+ YEARS BUILDING.
          </h2>
        </div>

        <a
          href="./Raj_Kumar_Resume.pdf"
          download="Raj_Kumar_Resume.pdf"
          className="self-start md:self-auto flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-semibold tracking-tight transition-all duration-300 shadow-sm"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download ATS-Ready CV (PDF)</span>
        </a>
      </div>

      {/* Timeline Rows */}
      <div className="space-y-12">
        {experiences.map((exp) => (
          <div
            key={exp.role}
            className="editorial-card rounded-3xl p-6 sm:p-10 relative overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Period & Company */}
              <div className="lg:col-span-4 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300">
                  <Calendar className="w-3 h-3 text-zinc-400" />
                  <span>{exp.period}</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                  {exp.role}
                </h3>
                <div className="text-sm font-heading text-zinc-400">
                  {exp.company}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Right Column: Narrative & Key Achievements */}
              <div className="lg:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {exp.summary}
                </p>

                <div className="pt-2">
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    Key Architectural Impact:
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400">
                        <span className="text-white mt-0.5">•</span>
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
