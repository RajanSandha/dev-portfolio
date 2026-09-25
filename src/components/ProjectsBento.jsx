import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Play, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Database, 
  Server, 
  Smartphone, 
  Workflow, 
  ShoppingBag,
  Layers
} from 'lucide-react';

export default function ProjectsBento() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Systems (18)' },
    { id: 'flagship', label: '★ 5 Flagship Systems' },
    { id: 'middleware', label: 'Enterprise & Middleware' },
    { id: 'ai', label: 'AI & Computer Vision' },
    { id: 'realtime', label: 'Mobile & Real-Time' },
  ];

  const projects = [
    // 1. TGA-Mesh (Flagship)
    {
      id: 'tga-mesh',
      title: 'TGA-Mesh: Workforce Operations & Real-Time Mobile Platform',
      category: ['flagship', 'realtime', 'middleware'],
      status: 'Published App',
      statusColor: 'emerald',
      isFlagship: true,
      role: 'Full Stack & Mobile Backend Architect',
      playStoreLink: 'https://play.google.com/store/apps/details?id=mesh.tga.edu.au&hl=en',
      summary: 'Workforce management backend (~371 TS files, 30 controllers, 29 schemas) for childcare centres. Features automated Xero accounting/payroll sync with AWS Secrets Manager, Socket.IO messaging, and GPS attendance.',
      tags: ['NestJS 11', 'MongoDB', 'Redis', 'BullMQ', 'Socket.IO', 'Xero API', 'React Native', 'AWS S3'],
      metrics: '371+ TS Files · 30 Controllers · Live Google Play App',
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />
    },
    // 2. EDI Middleware (Flagship)
    {
      id: 'edi-middleware',
      title: 'EDI Middleware: Standalone Multi-Tenant X12 & AS2 Platform',
      category: ['flagship', 'middleware'],
      status: 'Production System',
      statusColor: 'indigo',
      isFlagship: true,
      role: 'Lead Backend & Systems Architect',
      summary: 'Async multi-tenant X12 pipeline in Python 3.12/FastAPI: transport → parse → validate → map → ERP → ack. Production AS2 transport with OpenSSL CMS AES-256 encryption/signing, partner certificate store, sync/async MDN, and swappable Icicle Foods ERP adapter.',
      tags: ['Python 3.12', 'FastAPI', 'PostgreSQL 16', 'SQLAlchemy 2.0', 'Redis 7', 'ARQ Workers', 'AS2 Crypto', 'X12 EDI'],
      metrics: '850/945/944/810 Inbound · 997/855/940 Outbound · Solvira Live Partner',
      icon: <Server className="w-5 h-5 text-indigo-400" />
    },
    // 3. FashionTryOn (Flagship)
    {
      id: 'fashion-try-on',
      title: 'FashionTryOn: AI Virtual Fitting Room Engine & Shopify Plugin',
      category: ['flagship', 'ai'],
      status: 'AI Model Orchestration',
      statusColor: 'purple',
      isFlagship: true,
      role: 'Principal AI & Systems Architect',
      summary: 'Provider-independent generative AI fitting room orchestration layer. Dynamically routes customer try-on requests across Google Cloud Vertex AI (Gemini), ComfyUI cloud workflows, and Decart/FASHN models with asynchronous GPU queueing.',
      tags: ['Python', 'FastAPI', 'Node.js', 'Gemini Vertex AI', 'ComfyUI', 'Decart/FASHN', 'Shopify App Bridge', 'Redis Queues'],
      metrics: 'Provider-Agnostic · Multi-Model Failover · Async GPU Pipeline',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />
    },
    // 4. StenGen (Flagship)
    {
      id: 'stengen',
      title: 'StenGen (TattooStencils): AI Image-to-Stencil Vector Engine',
      category: ['flagship', 'ai'],
      status: 'Live Platform',
      statusColor: 'cyan',
      isFlagship: true,
      role: 'Lead Backend & Computer Vision Engineer',
      siteLink: 'https://stengen.com/',
      summary: 'Multi-stage computer vision vectorization engine for tattoo artists. Features a custom Python pipeline (luminance thresholding, K-Means segmentation, bilateral filtering) bridged to NestJS for instant vector SVG and thermal stencil output.',
      tags: ['Python 3.11', 'OpenCV', 'K-Means Clustering', 'Vector SVG Engine', 'NestJS', 'AWS S3', 'Docker'],
      metrics: 'Sub-second Vectorization · High-DPI Stencil Exports · Microservices',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />
    },
    // 5. Globetrottr (Flagship)
    {
      id: 'globetrottr',
      title: 'Globetrottr: Travel Social Network & Real-Time Messaging Gateway',
      category: ['flagship', 'realtime'],
      status: 'Live API',
      statusColor: 'blue',
      isFlagship: true,
      role: 'Senior Backend Engineer',
      siteLink: 'https://globetrottrapi.lusites.xyz/swagger',
      summary: 'Large-scale social backend (~338 TS files, 29 controllers, 60 services). Real-time Socket.IO messaging cluster with typing indicators and presence, Mapbox GL dynamic passport tracking, Tiqets event discovery, and Stripe subscriptions.',
      tags: ['TypeScript', 'NestJS 11', 'MongoDB', 'Socket.IO', 'Mapbox GL', 'Redis', 'BullMQ', 'Elasticsearch', 'Stripe'],
      metrics: '338+ TS Files · Real-Time Chat Cluster · Google Cloud Translation',
      icon: <Workflow className="w-5 h-5 text-blue-400" />
    },
    // 6. TGA Grove Academy
    {
      id: 'tga-grove',
      title: 'TGA Grove Academy: Childcare Compliance & Stripe BECS Billing',
      category: ['middleware'],
      status: 'Enterprise Live',
      statusColor: 'emerald',
      siteLink: 'https://tga.edu.au/',
      summary: 'Full-stack childcare platform (505 TS files, 34 controllers, 56 entities). Australian government ACCS/CCS subsidy claiming via PRODA cryptographic tokens and automated recurring billing with Stripe AU BECS Direct Debit.',
      tags: ['NestJS 11', 'PostgreSQL', 'TypeORM', 'React 18', 'PRODA/CCS', 'Stripe BECS', 'Puppeteer', 'Tailwind'],
      metrics: '56 Entities · Australian Gov Accredited · Kiosk PIN Mode',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
    },
    // 7. Talent Bridge
    {
      id: 'talent-bridge',
      title: 'Talent Bridge: AI-Powered Recruitment & Resume-Job Matcher',
      category: ['ai', 'middleware'],
      status: 'Full-Stack Monorepo',
      statusColor: 'purple',
      summary: 'AI recruitment platform with automated resume parsing (PDF/DOCX), OpenAI-powered scoring, and asynchronous candidate-job matching via BullMQ queues with a 3-portal React SPA.',
      tags: ['NestJS 11', 'OpenAI SDK', 'PostgreSQL', 'Drizzle ORM', 'Redis', 'BullMQ', 'React 18', 'Stripe'],
      metrics: '237+ TS Files · OpenAI Scoring · BullMQ Queue Engine',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />
    },
    // 8. Givicle
    {
      id: 'givicle',
      title: 'Givicle: CSR Employee-Giving & Double-Entry Ledger System',
      category: ['middleware'],
      status: 'Enterprise Monorepo',
      statusColor: 'cyan',
      summary: 'CSR giving platform with double-entry contribution ledger, payroll-deduction flows, brand voucher marketplace, TOTP 2FA, PDF/Excel statement exports, and 3-portal SPA.',
      tags: ['AdonisJS v6', 'Node 22', 'React 18', 'MySQL', 'Redis', 'BullMQ', 'Azure Blob', 'AWS S3', 'Tailwind'],
      metrics: 'Double-Entry Ledger · TOTP 2FA · Statement Engine',
      icon: <Database className="w-5 h-5 text-cyan-400" />
    },
    // 9. BarChase API
    {
      id: 'barchase',
      title: 'BarChase API: Geo-Aware Nightlife Discovery & Crowd Status',
      category: ['realtime'],
      status: 'Live API',
      statusColor: 'amber',
      summary: 'Modular REST API powering bar discovery: Mapbox geo-filtering, live crowd status submissions, user check-ins, multi-provider social auth, and Stripe sponsorships.',
      tags: ['NestJS 11', 'TypeScript', 'MySQL', 'TypeORM', 'Mapbox', 'Stripe', 'Firebase Push', 'Swagger'],
      metrics: '18 Controllers · Mapbox Distance Sorting · Stripe Billing',
      icon: <Workflow className="w-5 h-5 text-amber-400" />
    },
    // 10. Village Vest
    {
      id: 'village-vest',
      title: 'Village Vest: Group-Funding Escrow with Stripe Connect',
      category: ['middleware'],
      status: 'FinTech Live',
      statusColor: 'emerald',
      siteLink: 'https://villagevest.com/',
      summary: 'Community group-funding escrow platform. Features Stripe Connect Express onboarding, transfer payouts, interactive polls with quorum calculation, and automated OFAC sanctions screening.',
      tags: ['React 18', 'NestJS 11', 'Stripe Connect Express', 'PostgreSQL', 'Twilio SMS', 'OFAC Screening'],
      metrics: 'Stripe Connect Escrow · OFAC Sanctions Compliance · SMS OTP',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
    },
    // 11. Boldify
    {
      id: 'boldify',
      title: 'Boldify: High-Volume Shopify Storefront & Liquid Architecture',
      category: ['middleware'],
      status: 'E-Commerce Live',
      statusColor: 'indigo',
      siteLink: 'https://getboldify.com/',
      summary: 'Engineered high-converting Shopify brand storefront with modular Liquid snippet architecture, custom section schemas, third-party merchant integrations, and speed tuning.',
      tags: ['Shopify Liquid', 'Theme Architecture', 'Custom Apps', 'Storefront API', 'Performance Tuning'],
      metrics: 'High-Volume DTC · Custom Snippet Engine · Checkout Integrations',
      icon: <ShoppingBag className="w-5 h-5 text-indigo-400" />
    },
    // 12. ContentCreationAI
    {
      id: 'content-creation-ai',
      title: 'ContentCreationAI: Multilingual Voice Cloning & Video Pipeline',
      category: ['ai'],
      status: 'Active Lab',
      statusColor: 'purple',
      summary: 'Generative AI audio/video localization engine. Orchestrates speaker voice cloning, Portuguese-to-Hebrew translation with terminology dictionaries, automated subtitle generation, and text-to-video.',
      tags: ['Python', 'Generative AI', 'Voice Cloning', 'NLP', 'Speech-to-Text', 'Text-to-Video'],
      metrics: 'Speaker Voice Cloning · Domain Terminology Tuning',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />
    },
    // 13. ChessRoyal Game
    {
      id: 'chess-royal',
      title: 'ChessRoyal Game: Native Android Strategic Chess Game',
      category: ['realtime'],
      status: 'Play Store Live',
      statusColor: 'emerald',
      playStoreLink: 'http://play.google.com/store/apps/details?id=in.compilecraft.chessroyal&hl=en',
      summary: 'Strategic mobile chess application published on Google Play. Features chess move validation, responsive board UI animations, offline AI bot play, and lightweight performance.',
      tags: ['Android Native', 'Java', 'Game Engine', 'UI Animations', 'Google Play'],
      metrics: 'Google Play Published · Pure Native Performance',
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />
    },
    // 14. WishStory
    {
      id: 'wish-story',
      title: 'WishStory: Interactive Celebration & Milestone Stories',
      category: ['realtime'],
      status: 'Live Web App',
      statusColor: 'cyan',
      siteLink: 'https://wishme.compilecraft.in/',
      summary: 'Dynamic multimedia greetings and interactive story platform. Allows users to craft and share customized celebration cards with animated UI components.',
      tags: ['React', 'JavaScript', 'CSS Animations', 'CompileCraft', 'Multimedia'],
      metrics: 'CompileCraft Ecosystem · Dynamic Milestone Stories',
      icon: <Layers className="w-5 h-5 text-cyan-400" />
    },
    // 15. CompileCraftCode
    {
      id: 'compile-craft-code',
      title: 'CompileCraftCode: Full-Stack Developer Tooling & Boilerplates',
      category: ['middleware'],
      status: 'Open Source',
      statusColor: 'indigo',
      githubLink: 'https://github.com/RajanSandha/compilecraftcode',
      summary: 'Open-source repository of reusable developer utilities, backend architectural boilerplates, and modular TypeScript code snippets.',
      tags: ['TypeScript', 'Node.js', 'Open Source', 'Developer Tooling', 'Boilerplates'],
      metrics: 'Open Source Tooling · Architectural Boilerplates',
      icon: <Github className="w-5 h-5 text-indigo-400" />
    },
    // 16. NanoNomad
    {
      id: 'nano-nomad',
      title: 'NanoNomad: Remote Engineering & Nomad Workspace Utility',
      category: ['middleware'],
      status: 'Open Source',
      statusColor: 'indigo',
      githubLink: 'https://github.com/RajanSandha/nanonomad',
      summary: 'Open-source lightweight workspace utility tailored for digital nomads and remote engineers to organize project essentials, assets, and portable workflows.',
      tags: ['Full Stack', 'JavaScript', 'Open Source', 'Productivity', 'Utility'],
      metrics: 'Open Source · Remote Workspace Utility',
      icon: <Github className="w-5 h-5 text-indigo-400" />
    }
  ];

  const filteredProjects = projects.filter(p => {
    if (activeFilter === 'all') return true;
    return p.category.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-20 bg-[#030712] relative overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-indigo-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4" /> Systems Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Production Architectures <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                &amp; Engineered Systems.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0 font-sans">
            Enterprise middleware, real-time message clusters, and Generative AI pipelines deployed in production.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/5">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeFilter === cat.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`glass-panel glass-panel-hover rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group ${
                  p.isFlagship ? 'border-indigo-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/90' : ''
                }`}
              >
                {/* Top Badge & Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                        {p.icon}
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        {p.role}
                      </span>
                    </div>

                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border font-semibold ${
                      p.statusColor === 'emerald' ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' :
                      p.statusColor === 'purple' ? 'border-purple-500/40 bg-purple-500/10 text-purple-300' :
                      p.statusColor === 'cyan' ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300' :
                      p.statusColor === 'blue' ? 'border-blue-500/40 bg-blue-500/10 text-blue-300' :
                      'border-indigo-500/40 bg-indigo-500/10 text-indigo-300'
                    }`}>
                      {p.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {p.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {p.summary}
                  </p>
                </div>

                {/* Bottom Tags, Metrics & Links */}
                <div>
                  {/* Architectural Metrics */}
                  {p.metrics && (
                    <div className="mb-3 px-3 py-1.5 rounded bg-black/40 border border-white/5 text-[11px] font-mono text-indigo-300 flex items-center gap-2">
                      <span className="text-slate-500">✦</span>
                      <span>{p.metrics}</span>
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                    {p.playStoreLink && (
                      <a
                        href={p.playStoreLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Google Play</span>
                      </a>
                    )}

                    {p.siteLink && (
                      <a
                        href={p.siteLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Platform</span>
                      </a>
                    )}

                    {p.githubLink && (
                      <a
                        href={p.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub Repo</span>
                      </a>
                    )}

                    {!p.siteLink && !p.playStoreLink && !p.githubLink && (
                      <span className="text-[11px] font-mono text-slate-500 italic">
                        Enterprise Internal Architecture
                      </span>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
