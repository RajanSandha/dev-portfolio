import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Server, 
  Database, 
  ChevronDown, 
  ChevronUp, 
  Smartphone, 
  Terminal,
  Activity,
  Workflow
} from 'lucide-react';

export default function ProjectsShowcase() {
  const [expandedAll, setExpandedAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const flagshipProjects = [
    {
      id: 'tga-mesh',
      index: '01',
      title: 'TGA-Mesh',
      tagline: 'Encrypted Multi-Hop Bluetooth LE Mesh Network & Sensor Hub',
      category: 'IoT & Cryptography',
      role: 'Lead Architect & Systems Engineer',
      description:
        'Engineered an off-grid, internet-independent Bluetooth Low Energy mesh protocol. Features decentralized gossip relay routing across 50+ concurrent nodes with hardware-backed AES-256-GCM cryptographic packet envelopes.',
      metrics: [
        { label: 'Latency', value: '<200ms' },
        { label: 'Relay Nodes', value: '50+ Mesh' },
        { label: 'Security', value: 'AES-256-GCM' },
        { label: 'Platform', value: 'Google Play Store' },
      ],
      highlights: [
        'Decentralized off-grid BLE gossip protocol operating without cellular or internet connectivity.',
        'Cryptographic packet envelopes with dynamic ephemeral session keys and anti-replay counters.',
        'Production Android app on Google Play with local SQLite sync queue and background telemetry streaming.',
      ],
      stack: ['Python', 'FastAPI', 'BLE GATT', 'AES-256', 'PostgreSQL', 'Android/Kotlin'],
      link: 'https://play.google.com/store/apps/details?id=com.tgameh.app',
      linkText: 'Google Play Store',
      visualBadge: 'BLE Mesh Topology & Keystore',
    },
    {
      id: 'edi-middleware',
      index: '02',
      title: 'EDI Middleware & B2B Hub',
      tagline: 'Multi-Tenant X12 EDI Gateway & AS2 Engine for Enterprise ERP',
      category: 'Enterprise Middleware',
      role: 'Principal Backend Architect',
      description:
        'Architected end-to-end B2B data translation pipeline processing inbound X12 850, 944, 945, 810 documents and synthesizing outbound 997, 855, 940 payloads. Implemented OpenSSL CMS AS2 cryptographic transport and asynchronous Redis/ARQ workers connected to Icicle Foods ERP.',
      metrics: [
        { label: 'Throughput', value: '10k+ msgs/min' },
        { label: 'Standards', value: 'X12 / AS2 / MDN' },
        { label: 'Integration', value: 'Icicle ERP' },
        { label: 'Audit', value: '100% Idempotent' },
      ],
      highlights: [
        'Automated X12 validation, envelope parsing (ISA/GS/ST), and data mapping to ERP JSON schemas.',
        'AS2 encrypted gateway with OpenSSL CMS S/MIME signatures and sync/async MDN receipts.',
        'Distributed Redis + ARQ queue workers ensuring zero message loss during peak warehouse transactions.',
      ],
      stack: ['Python 3.12', 'FastAPI', 'Pyx12', 'OpenSSL CMS', 'PostgreSQL 16', 'ARQ/Redis', 'Icicle ERP'],
      link: '#',
      linkText: 'Enterprise Core System',
      visualBadge: 'AS2 / X12 Transaction Pipeline',
    },
    {
      id: 'fashion-try-on',
      index: '03',
      title: 'FashionTryOn AI Engine',
      tagline: 'Distributed Serverless GenAI Pipeline for High-Fidelity Garment Fitting',
      category: 'Generative AI & Vision',
      role: 'Lead AI Backend Engineer',
      description:
        'Orchestrated a low-latency serverless GPU worker pool on RunPod executing garment segmentation and pose transfer. Chains FLUX.1 base model inpainting with IDM-VTON neural garment alignment to generate photorealistic virtual fittings in sub-4 seconds.',
      metrics: [
        { label: 'Inference', value: '<3.8s / fit' },
        { label: 'GPU Cluster', value: 'RunPod Serverless' },
        { label: 'Models', value: 'FLUX.1 + IDM-VTON' },
        { label: 'Streaming', value: 'WebSocket Progress' },
      ],
      highlights: [
        'Two-stage neural synthesis combining dense clothing mask extraction with high-res texture warping.',
        'Asynchronous job queue orchestrator with automatic GPU worker auto-scaling and warm-pool cache.',
        'Real-time WebSocket client notifications for step-by-step diffusion progress streaming.',
      ],
      stack: ['Python', 'FastAPI', 'PyTorch', 'FLUX.1', 'IDM-VTON', 'RunPod GPU', 'PostgreSQL', 'S3'],
      link: '#',
      linkText: 'Active Commercial Deployment',
      visualBadge: 'Dual-Stage Diffusion Pipeline',
    },
    {
      id: 'stengen',
      index: '04',
      title: 'StenGen (Tattoo Stencil AI)',
      tagline: 'Commercial Computer Vision SaaS Converting Artwork to Thermal Stencils',
      category: 'Computer Vision & SaaS',
      role: 'Founding Engineer & Architect',
      description:
        'Engineered custom dual-pass contour extraction and edge thresholding algorithms specifically tuned for Brother and S8 thermal stencil printers. Powers over 50,000+ stencil conversions for tattoo studios worldwide with Stripe billing automation.',
      metrics: [
        { label: 'Processed', value: '50,000+ Arts' },
        { label: 'Latency', value: '<800ms' },
        { label: 'Live Site', value: 'stengen.com' },
        { label: 'Monetization', value: 'Stripe SaaS' },
      ],
      highlights: [
        'Custom edge-tracing and tonal separation algorithm optimized for physical thermal carbon paper.',
        'High-concurrency FastAPI microservice with automated S3 pre-signed upload URLs and image cleaning.',
        'Metered subscription billing with Stripe webhooks and automated usage limit enforcement.',
      ],
      stack: ['Python', 'FastAPI', 'OpenCV', 'PIL', 'Stripe Billing', 'PostgreSQL', 'Docker'],
      link: 'https://stengen.com',
      linkText: 'stengen.com (Live Product)',
      visualBadge: 'Dual-Pass Contour Engine',
    },
    {
      id: 'globetrottr',
      index: '05',
      title: 'Globetrottr Visa Platform',
      tagline: 'Automated Global Visa Logistics & Consular Compliance Engine',
      category: 'Logistics & Compliance',
      role: 'Senior Backend Engineer',
      description:
        'Engineered a deterministic state-machine workflow orchestrating multi-country visa application pipelines across 40+ jurisdictional rules. Includes automated PDF OCR verification, BullMQ async queues, and an encrypted PII vault.',
      metrics: [
        { label: 'Countries', value: '40+ Jurisdictions' },
        { label: 'Queues', value: 'BullMQ / Redis' },
        { label: 'API Specs', value: 'OpenAPI / Swagger' },
        { label: 'Data Vault', value: 'Field-level AES' },
      ],
      highlights: [
        'Deterministic state machine coordinating document validation, payment escrow, and embassy submissions.',
        'OCR pipeline parsing international passports, travel history, and bank statements with schema validation.',
        'Secure PII storage adhering to cross-border data protection standards with field-level encryption.',
      ],
      stack: ['TypeScript', 'NestJS', 'PostgreSQL', 'TypeORM', 'BullMQ', 'Redis', 'Gov API Integrations'],
      link: 'https://api.globetrottr.com/docs',
      linkText: 'Swagger API Docs',
      visualBadge: 'State Machine & Consular Gateway',
    },
  ];

  const secondarySystems = [
    {
      title: 'Givicle',
      tagline: 'Social Impact Marketplace & Micro-Donations Engine',
      category: 'FinTech',
      stack: ['Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      metric: '50k+ Transactions',
      description: 'Engineered multi-party ledger and payment settlement engine allocating charitable donations across verified non-profits.',
    },
    {
      title: 'BarChase',
      tagline: 'Real-Time Nightlife Discovery & Capacity Engine',
      category: 'Real-Time Geospatial',
      stack: ['FastAPI', 'PostGIS', 'WebSockets', 'Redis'],
      metric: 'Sub-50ms Geospatial Search',
      description: 'High-throughput spatial indexing backend tracking live venue foot-traffic, wait-times, and table reservations.',
    },
    {
      title: 'The Crove Academy',
      tagline: 'Multi-Tenant EdTech & Video Stream Delivery Backend',
      category: 'EdTech Streaming',
      stack: ['NestJS', 'PostgreSQL', 'AWS S3/CloudFront', 'BullMQ'],
      metric: '100k+ Video Hours Served',
      description: 'Scalable course delivery infrastructure with adaptive bitrate HLS packaging, progress tracking, and secure certificate generation.',
    },
    {
      title: 'VillageVest',
      tagline: 'Community Capital & Micro-Investment Syndication Platform',
      category: 'FinTech Syndication',
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'Plaid / ACH'],
      metric: 'FinTech Compliant',
      description: 'Syndicate investment platform managing KYC/AML verification, investor onboarding, and automated escrow distributions.',
    },
    {
      title: 'Automated Logistics Dispatcher',
      tagline: 'Dynamic Fleet Routing & Driver Telemetry Engine',
      category: 'Logistics',
      stack: ['Go', 'PostgreSQL', 'RabbitMQ', 'Docker'],
      metric: 'Real-Time Fleet Sync',
      description: 'Distributed dispatch backend calculating optimal routes and assignment matrices for commercial delivery fleets.',
    },
    {
      title: 'Decentralized Vault Sentinel',
      tagline: 'Cryptographic Key Escrow & Audit Protocol',
      category: 'Security',
      stack: ['Python', 'Cryptography', 'PostgreSQL', 'HSM'],
      metric: 'FIPS-140 Compliant',
      description: 'Zero-knowledge key management service with Shamir secret sharing and tamper-evident audit logging.',
    },
  ];

  return (
    <section id="works" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
        <div>
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
            01 / SELECTED WORK
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            FLAGSHIP SYSTEMS.
          </h2>
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md">
          A curated selection of mission-critical backend architectures, distributed protocols, and AI inference engines built for production scale.
        </p>
      </div>

      {/* Flagship Projects Stack */}
      <div className="space-y-12">
        {flagshipProjects.map((project) => (
          <div
            key={project.id}
            className="editorial-card rounded-3xl p-6 sm:p-10 relative overflow-hidden group"
          >
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.015] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.03] transition-colors duration-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              {/* Left Column: Metadata & Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-500 font-bold">
                    {project.index} //
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {project.role}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-heading text-zinc-400 mt-1 font-medium">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Architectural Highlights */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    Core Technical Decisions:
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-400">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-white mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/[0.06] text-xs font-mono text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Architectural Metrics & Live CTA */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 bg-black/30 p-6 sm:p-8 rounded-2xl border border-white/[0.05]">
                {/* Visual Architecture Badge */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <Workflow className="w-3.5 h-3.5 text-white" />
                    <span>{project.visualBadge}</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 py-2">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        {m.label}
                      </div>
                      <div className="font-display font-bold text-base sm:text-lg text-white mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* External Action Button */}
                <div className="pt-2">
                  {project.link !== '#' ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-semibold tracking-tight transition-all duration-200 active:scale-95 shadow-md"
                    >
                      <span>{project.linkText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="w-full text-center px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-zinc-400">
                      {project.linkText}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expandable Section: 13+ Additional Production Systems */}
      <div className="mt-16 pt-12 border-t border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">
              ARCHIVE &amp; EXTENDED PORTFOLIO
            </div>
            <h3 className="font-display font-bold text-2xl text-white">
              13+ Additional Production Systems
            </h3>
          </div>

          <button
            onClick={() => setExpandedAll(!expandedAll)}
            className="self-start sm:self-auto flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.09] text-zinc-300 hover:text-white border border-white/[0.08] text-xs font-mono transition-all"
          >
            <span>{expandedAll ? 'Collapse Archive' : 'Expand Extended Systems'}</span>
            {expandedAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {expandedAll && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
            {secondarySystems.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#0b0c12]/70 border border-white/[0.06] hover:border-white/[0.15] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">
                      {item.metric}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs font-heading text-zinc-400 mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.04]">
                  {item.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-black/40 text-[10px] font-mono text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
