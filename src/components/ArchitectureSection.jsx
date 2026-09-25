import React from 'react';
import { 
  ShieldCheck, 
  Workflow, 
  Cpu, 
  Database, 
  Lock, 
  Layers, 
  Zap, 
  FileCode,
  Radio,
  Server
} from 'lucide-react';

export default function ArchitectureSection() {
  const pillars = [
    {
      icon: <Lock className="w-6 h-6 text-indigo-400" />,
      title: "Enterprise Transports & Cryptography",
      tagline: "AS2 Protocols & Multi-Tenant X12 EDI",
      description: "Engineered production EDI transport layers connecting enterprise retail partners and warehouses to ERP backends. Implemented OpenSSL CMS cryptographic signing, AES-256 encryption, sync/async MDN verification, partner certificate stores, and custom X12 parsers (850, 945, 944, 810, 997, 855).",
      specs: [
        "OpenSSL CMS (AES-256, 3DES, SHA-256)",
        "X12 EDI Ingest & Acknowledgment Pipeline",
        "SFTP (asyncssh) & AWS S3/SQS (aiobotocore)",
        "Idempotent ISA/GS/ST Deduplication"
      ]
    },
    {
      icon: <Workflow className="w-6 h-6 text-cyan-400" />,
      title: "Asynchronous Message Queues & Event Loops",
      tagline: "High-Throughput Distributed Microservices",
      description: "Architected distributed worker clusters capable of processing heavy workloads asynchronously without blocking user threads. Utilized Redis 7, BullMQ, and ARQ workers for event streams, double-entry ledgers, automated invoice generation, and real-time Socket.IO chat gateways.",
      specs: [
        "Redis 7 Pub/Sub, Streams & Distributed Cache",
        "BullMQ & ARQ Asynchronous Job Queues",
        "Socket.IO Real-Time Clustering & Presence",
        "Append-Only Audit Logs & Transaction Stores"
      ]
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "Generative AI & Computer Vision Orchestration",
      tagline: "Provider-Independent AI Diffusion & Vector Engines",
      description: "Designed decoupled AI orchestration layers that route inference jobs dynamically across Google Cloud Vertex AI (Gemini), ComfyUI cloud workflows, and Decart/FASHN models. Engineered Python computer vision pipelines utilizing K-Means color quantization, edge extraction, and automated vector SVG generation.",
      specs: [
        "Provider-Agnostic Generative AI Adapters",
        "Google Cloud Vertex AI (Gemini) & ComfyUI",
        "OpenCV, K-Means Clustering & Vector SVG Generation",
        "Async GPU Job Queue with Webhook Callbacks"
      ]
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Enterprise Compliance & Financial Integrations",
      tagline: "Australian Gov PRODA/CCS, Xero & Stripe Connect",
      description: "Led technical delivery of mission-critical compliance systems interfacing with Australian Government Child Care Subsidy (CCS) via PRODA cryptographic device tokens. Built automated Xero payroll/accounting sync with AWS Secrets Manager and Stripe Connect Express escrow funding engines.",
      specs: [
        "Australian Gov CCS/ACCS via PRODA Token Auth",
        "Xero Accounting & Payroll Queued Sync",
        "Stripe Connect Express & AU BECS Direct Debit",
        "Automated OFAC Sanctions Compliance Audits"
      ]
    }
  ];

  return (
    <section id="architecture" className="py-24 bg-[#070b16] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-indigo-400 font-mono text-xs uppercase tracking-wider mb-2">
            <Server className="w-4 h-4" /> Systems Engineering &amp; Core Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Architectural Pillars <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              &amp; System Infrastructure.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            A comprehensive look at the backend protocols, asynchronous queues, cryptographic transports, and compliance architectures I design and operate.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-xl p-8 flex flex-col justify-between border-white/10 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    {p.icon}
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs font-mono text-indigo-400 mb-4">{p.tagline}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> Key Technical Capabilities:
                </p>
                <ul className="space-y-1.5">
                  {p.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="text-xs font-mono text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
