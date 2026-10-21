import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import projects from '../data/featured-projects.json';
export default function ProjectsShowcase() {
  return <section id="works" className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
    <p className="text-xs font-mono uppercase tracking-widest text-purple-300">01 / Selected engineering projects</p>
    <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tight mt-4">Systems behind the product.</h2>
    <p className="mt-5 mb-10 max-w-2xl text-zinc-300 leading-relaxed">Client and professional engineering experience across enterprise integrations, workforce software and AI applications. Project status and my contribution are described individually.</p>
    <div className="space-y-8">{projects.map(project => <article key={project.id} className="editorial-card rounded-2xl p-6 sm:p-10">
      <p className="text-xs text-purple-300">{project.category} · {project.role}</p>
      <h3 className="mt-4 text-3xl font-display font-bold">{project.title}</h3><p className="mt-2 text-zinc-300">{project.tagline}</p>
      <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr]"><div><p className="text-zinc-300 leading-relaxed">{project.description}</p><ul className="mt-5 space-y-3 text-sm text-zinc-300 list-disc pl-5">{project.highlights.map(point=><li key={point}>{point}</li>)}</ul></div>
      <div className="grid grid-cols-2 gap-3">{project.metrics.map(metric=><div key={metric.label} className="bg-white/[.03] rounded-xl p-4 border border-white/10"><p className="text-xs text-zinc-400">{metric.label}</p><p className="mt-2 font-semibold">{metric.value}</p></div>)}</div></div>
      <div className="mt-6 flex flex-wrap gap-2">{project.stack.map(tech=><span key={tech} className="text-xs rounded-full border border-white/15 px-3 py-2 text-zinc-300">{tech}</span>)}</div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex gap-2 items-center min-h-11 text-purple-200 text-sm font-semibold">{project.linkText}<ArrowUpRight size={16}/></a>
    </article>)}</div>
  </section>;
}
