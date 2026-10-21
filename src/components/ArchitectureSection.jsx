import React from 'react';
const domains = [
  ['Reliable backend services', 'Python / FastAPI and TypeScript / NestJS APIs, relational and document data models, asynchronous workers, caching and real-time messaging.'],
  ['Enterprise integrations', 'X12 EDI parsing and mapping, signed AS2 transport, ERP adapters, Xero payroll synchronization, idempotent ingestion and transaction audit trails.'],
  ['AI application engineering', 'Provider-independent generation adapters, queued workloads and callbacks, commerce integrations, and OpenCV image-processing pipelines.'],
  ['Product delivery', 'Independent Android and Chrome launches, clear API boundaries, containerized services and practical handover documentation.'],
];
export default function ArchitectureSection() {
  return <section id="architecture" className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
    <p className="text-xs font-mono text-purple-300 uppercase tracking-widest">02 / Engineering focus</p><h2 className="mt-4 text-4xl sm:text-6xl font-bold font-display">Practical technical depth.</h2>
    <div className="grid md:grid-cols-2 gap-8 mt-10">{domains.map(([title,body])=><article key={title} className="border-t border-white/15 pt-6"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-4 text-zinc-300 leading-relaxed">{body}</p></article>)}</div>
  </section>;
}
