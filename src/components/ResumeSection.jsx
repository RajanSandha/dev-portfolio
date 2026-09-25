import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Cpu, 
  Server, 
  Database, 
  ShieldCheck, 
  Layers, 
  Award,
  ChevronRight,
  Terminal,
  Play
} from 'lucide-react';

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState('experience');

  const technicalSkills = [
    {
      category: 'Languages & Core Runtimes',
      icon: Terminal,
      skills: ['Python 3.12 (FastAPI, AsyncIO, Pyx12)', 'TypeScript / Node.js (NestJS, Express)', 'SQL (PostgreSQL, MySQL)', 'Go (Goroutines, Microservices)', 'Bash / Shell']
    },
    {
      category: 'Architectures & Protocols',
      icon: Cpu,
      skills: ['ANSI X12 EDI (850, 810, 855, 856, 940, 945, 997)', 'AS2 Protocol (OpenSSL CMS, S/MIME, MDN)', 'Distributed Event-Driven Architecture', 'CQRS & Sagas', 'REST & GraphQL APIs', 'WebSockets & gRPC']
    },
    {
      category: 'Distributed Queues & Cache',
      icon: Server,
      skills: ['Redis (Pub/Sub, Caching, Streams)', 'BullMQ & ARQ Async Workers', 'Apache Kafka / RabbitMQ', 'Celery & Python Multiprocessing']
    },
    {
      category: 'Data & Persistence Layer',
      icon: Database,
      skills: ['PostgreSQL 16 (Partitioning, asyncpg, JSONB)', 'MongoDB & DynamoDB', 'SQLAlchemy 2.0 Async / Prisma ORM', 'Pinecone & Milvus (Vector Search)', 'ElasticSearch']
    },
    {
      category: 'AI / ML & Vision Systems',
      icon: Layers,
      skills: ['FLUX.1 & Stable Diffusion Pipelines', 'IDM-VTON & Virtual Try-On Models', 'OpenCV & Contour Edge Tracing', 'LangChain & LlamaIndex RAG', 'ComfyUI & RunPod Serverless GPU']
    },
    {
      category: 'Cloud, DevOps & Security',
      icon: ShieldCheck,
      skills: ['Docker & Multi-stage Containers', 'AWS (EC2, S3, SQS, ECS, RDS, CloudWatch)', 'OAuth2, JWT & RBAC Auth', 'CI/CD Pipelines (GitHub Actions)', 'Nginx & Reverse Proxies', 'Linux SysAdmin']
    }
  ];

  const featuredProjects = [
    {
      name: 'TGA-Mesh',
      tagline: 'Encrypted Multi-Hop Bluetooth LE Mesh Network & Sensor Hub',
      role: 'Lead Architect & Systems Engineer',
      stack: ['Python', 'FastAPI', 'BLE GATT', 'AES-256-GCM', 'PostgreSQL', 'Android/Kotlin'],
      link: 'https://play.google.com/store/apps/details?id=com.tgameh.app',
      linkType: 'Google Play Store',
      points: [
        'Designed decentralized off-grid Bluetooth Low Energy mesh protocol operating without internet or cellular connectivity.',
        'Engineered encrypted peer-to-peer relay gossip routing handling 50+ concurrent sensor nodes with sub-200ms message propagation.',
        'Built secure cryptographic packet envelope utilizing AES-256-GCM with hardware-backed keystore integration.',
        'Production Android application deployed to Google Play Store supporting real-time telemetry streaming and offline sync queues.'
      ]
    },
    {
      name: 'EDI Middleware & B2B Integration Platform',
      tagline: 'Multi-Tenant X12 EDI Engine & AS2 Gateway for Enterprise ERP',
      role: 'Principal Backend Architect',
      stack: ['Python 3.12', 'FastAPI Async', 'Pyx12', 'OpenSSL CMS', 'PostgreSQL 16', 'ARQ/Redis', 'Icicle ERP'],
      link: '#',
      linkType: 'Enterprise Proprietary',
      points: [
        'Architected end-to-end B2B data translation pipeline processing inbound X12 850, 944, 945, 810 transactions and synthesizing outbound 997, 855, 940 payloads.',
        'Engineered cryptographically signed AS2 transport gateway utilizing OpenSSL CMS with synchronous/asynchronous MDN receipts.',
        'Implemented distributed asynchronous worker pool with Redis + ARQ ensuring zero transaction loss during warehouse bulk bursts (10k+ msgs/min).',
        'Standardized bi-directional REST synchronization with Icicle Foods ERP ensuring strict transactional idempotency and audit logs.'
      ]
    },
    {
      name: 'FashionTryOn (Virtual Fitting Room AI Engine)',
      tagline: 'Distributed Serverless GenAI Pipeline for High-Fidelity Garment Fitting',
      role: 'Lead AI Backend Engineer',
      stack: ['Python', 'FastAPI', 'PyTorch', 'FLUX.1', 'IDM-VTON', 'RunPod Serverless', 'PostgreSQL', 'S3'],
      link: '#',
      linkType: 'Under Active Deployment',
      points: [
        'Built low-latency serverless AI inference worker pool on RunPod GPU clusters executing garment segmentation and pose transfer in <3.8s.',
        'Orchestrated two-stage image synthesis chaining FLUX.1 base inpainting with IDM-VTON neural garment alignment.',
        'Integrated asynchronous job queue with WebSocket progress push, handling burst traffic and automated GPU warm-pool scaling.',
        'Constructed asset processing pipeline with automated background removal, mask dilation, and photorealistic skin blending.'
      ]
    },
    {
      name: 'StenGen (Tattoo Stencil AI Engine)',
      tagline: 'Production Computer Vision SaaS Converting Artwork to Thermal Stencils',
      role: 'Founding Engineer & Architect',
      stack: ['Python', 'FastAPI', 'OpenCV', 'PIL', 'Stripe Billing', 'PostgreSQL', 'Docker'],
      link: 'https://stengen.com',
      linkType: 'stengen.com (Live SaaS)',
      points: [
        'Engineered custom dual-pass contour extraction and edge thresholding algorithm tuned for Brother/S8 thermal stencil printers.',
        'Served over 50,000+ stencil conversions for tattoo studios worldwide with sub-800ms API response latency.',
        'Architected metered token subscription billing engine with Stripe Webhooks, automated usage limits, and secure tiering.',
        'Containerized multi-stage Docker deployment on production cloud VPS with Nginx caching and automated SSL.'
      ]
    },
    {
      name: 'Globetrottr',
      tagline: 'Automated Global Visa Logistics & Embassy Compliance Engine',
      role: 'Senior Backend Engineer',
      stack: ['TypeScript', 'NestJS', 'PostgreSQL', 'TypeORM', 'BullMQ', 'Redis', 'Gov API Integrations'],
      link: 'https://api.globetrottr.com/docs',
      linkType: 'Swagger / API Docs',
      points: [
        'Engineered deterministic state-machine workflow managing multi-country visa application pipelines across 40+ jurisdictional rules.',
        'Automated document ingestion, PDF OCR verification, and embassy schema validation with BullMQ async job queues.',
        'Designed secure encrypted PII vault with field-level AES encryption adhering to strict international data privacy standards.',
        'Built resilient outbound webhooks and automated retry mechanisms for governmental consular portal submissions.'
      ]
    }
  ];

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-slate-950/70 border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
              <FileText className="w-3.5 h-3.5" />
              <span>Executive Profile &amp; Resume</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Curriculum Vitae <span className="text-slate-400 font-normal">/ Systems Engineer</span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-2">
              Comprehensive overview of 8+ years architecting fault-tolerant backend infrastructure, asynchronous transaction pipelines, and production AI workloads.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="./Raj_Kumar_Resume.pdf"
              download="Raj_Kumar_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF (ATS-Ready)</span>
            </a>
            <a
              href="./Raj_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-sm font-medium transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View In Tab</span>
            </a>
          </div>
        </div>

        {/* Executive Summary Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl mb-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 border-b border-slate-800 pb-6 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Raj Kumar</h3>
              <p className="text-indigo-400 font-mono text-sm mt-0.5 font-medium">
                Lead Backend Engineer &amp; Systems Architect (8+ Years Experience)
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <a href="mailto:rajatworkplace@gmail.com" className="hover:text-indigo-300 underline">
                  rajatworkplace@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                <span>+91 98350 04000</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-indigo-400" />
                <a href="https://linkedin.com/in/rajansandha" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 underline">
                  linkedin.com/in/rajansandha
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>Mohali, Punjab, India</span>
              </div>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-300">
            Systems-focused Lead Backend Engineer with <strong className="text-white">8+ years of expertise</strong> architecting mission-critical distributed systems, high-throughput microservices, and asynchronous event-driven pipelines. Specialist in Python (FastAPI, AsyncIO), enterprise X12 EDI processing, AS2 cryptographic protocol integration, and production Generative AI inference orchestrations. Proven track record leading cross-functional teams, establishing resilient data persistence architectures in PostgreSQL and Redis, and deploying scalable cloud infrastructures on AWS and containerized environments.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-4 mb-8">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'experience'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            01. WORK EXPERIENCE (8+ YRS)
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'projects'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            02. FEATURED RESUME SYSTEMS (5)
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'skills'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            03. TECHNICAL CAPABILITIES
          </button>
        </div>

        {/* Tab 1: Work Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            {/* Role 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-lg font-bold text-white">Lead Backend &amp; Systems Architect</h4>
                  <p className="text-indigo-400 text-xs font-mono">Independent Consultant &amp; Enterprise Technology Partner</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>2022 — PRESENT</span>
                </div>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                <li>Architected scalable backend microservices and asynchronous task pipelines serving enterprise logistics, supply chain EDI, and generative AI clients globally.</li>
                <li>Engineered high-concurrency ingestion engines capable of processing thousands of requests per second with strict data integrity guarantees.</li>
                <li>Spearheaded system design for secure B2B EDI transaction hubs, off-grid mesh communications, and serverless computer vision pipelines.</li>
                <li>Advised engineering teams on database query optimization, Redis caching strategies, connection pooling, and Dockerized microservice architecture.</li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-lg font-bold text-white">Senior Backend Engineer &amp; Tech Lead</h4>
                  <p className="text-indigo-400 text-xs font-mono">Enterprise Software &amp; Product Engineering Solutions</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>2019 — 2022</span>
                </div>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                <li>Led backend development for high-traffic SaaS applications across travel logistics, booking platforms, and automated workflow solutions.</li>
                <li>Designed RESTful and GraphQL APIs in Node.js/NestJS and Python/FastAPI with extensive test suites and automated OpenAPI documentation.</li>
                <li>Constructed distributed queueing pipelines with BullMQ and Celery, reducing long-running request latency by 85%.</li>
                <li>Integrated external payment gateways, government consulate submission endpoints, and banking settlement interfaces.</li>
              </ul>
            </div>

            {/* Role 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-lg font-bold text-white">Software Engineer (Backend Focus)</h4>
                  <p className="text-indigo-400 text-xs font-mono">Digital Systems &amp; Application Development</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>2016 — 2019</span>
                </div>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                <li>Developed core business logic, database migrations, and authentication subsystems in Python and Node.js.</li>
                <li>Maintained and optimized relational database schemas (PostgreSQL, MySQL), writing efficient indexing and stored procedures.</li>
                <li>Collaborated with mobile and web frontend developers to design clean, predictable API contracts.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: 5 Featured Projects */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-xs font-mono text-indigo-300 flex items-center justify-between">
              <span>FEATURED HIGHLIGHTS FROM OFFICIAL RESUME (SELECTED FOR ARCHITECTURAL DEPTH)</span>
              <span className="text-slate-400">5 KEY SYSTEMS</span>
            </div>

            {featuredProjects.map((p, idx) => (
              <div
                key={p.name}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-indigo-400 font-bold">0{idx + 1}.</span>
                      <h4 className="text-lg font-bold text-white">{p.name}</h4>
                      {p.link && p.link !== '#' && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/20"
                        >
                          <span>{p.linkType}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {p.link === '#' && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-400 border border-slate-700">
                          {p.linkType}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 font-sans">{p.tagline}</p>
                  </div>
                  <span className="text-xs font-mono text-indigo-300 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 self-start sm:self-auto">
                    {p.role}
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 list-disc list-inside mb-4">
                  {p.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-950/70 border border-slate-800 text-slate-300 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Note on other 13 systems */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <p className="text-xs text-slate-400">
                ⭐ <strong className="text-slate-200">13+ additional production systems</strong> are detailed in the interactive{' '}
                <a href="#projects" className="text-indigo-400 underline hover:text-indigo-300">
                  Engineering Systems Bento
                </a>{' '}
                above (including Givicle, BarChase, Crove, VillageVest, and more).
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Skills */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.category}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white font-mono">{cat.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {cat.skills.map((skill) => (
                        <li key={skill} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
