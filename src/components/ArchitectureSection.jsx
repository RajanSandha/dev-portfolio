import React, { useState } from 'react';
import { ShieldCheck, Cpu, Server, Database, Layers, GitBranch, Terminal, Check } from 'lucide-react';

export default function ArchitectureSection() {
  const [activeTab, setActiveTab] = useState('edi');

  const pillars = [
    {
      id: 'edi',
      title: 'X12 EDI & AS2 Protocols',
      badge: 'B2B Enterprise',
      icon: ShieldCheck,
      headline: 'Multi-Tenant AS2 Gateway & Idempotent X12 Translation',
      description:
        'Architected high-throughput EDI middleware processing inbound 850 (PO), 944/945 (Warehouse Inbound/Outbound Advice), and 810 (Invoice) with automated 997 (Functional Ack) generation. Implements S/MIME encryption and signed MDN receipts using OpenSSL CMS.',
      specs: [
        'Transports: AS2 (HTTP/S), SFTP polling, S3/SQS event triggers',
        'Cryptography: OpenSSL CMS enveloped data (AES-256) & SHA-256 signing',
        'Validation: pyx12 schema parsing with automatic rejection rules',
        'ERP Sync: Icicle ERP REST adapters with idempotent transaction ledger',
      ],
      codeSnippet: `// Sample AS2 Inbound MDN Receipt Verification
async def process_inbound_as2_payload(raw_body: bytes, headers: dict) -> EDIReceipt:
    message_id = headers.get("message-id")
    verified_data = openssl_cms_verify(raw_body, cert_store=PARTNER_CERTS)
    x12_document = parse_x12_isa_envelope(verified_data)
    
    await redis_queue.enqueue("edi.persist", x12_document, dedupe_key=message_id)
    return generate_synchronous_mdn(status="processed", mic_digest=verified_data.mic)`,
    },
    {
      id: 'queues',
      title: 'Async Queues & Workers',
      badge: 'High Concurrency',
      icon: Server,
      headline: 'Resilient Event-Driven Processing & Backpressure Control',
      description:
        'Distributed task execution engines capable of absorbing peak traffic bursts (10k+ transactions/minute) without database exhaustion. Leverages Redis Streams, BullMQ, and Python ARQ with dead-letter queueing and exponential backoff retry algorithms.',
      specs: [
        'Queue Engines: BullMQ (TypeScript) and ARQ (Python AsyncIO)',
        'Resilience: Exponential backoff with jitter and automated DLQs',
        'Concurrency: Dynamic worker auto-scaling based on queue depth telemetry',
        'State Isolation: Tenant-level rate limiting and sliding window counters',
      ],
      codeSnippet: `// Worker Cluster Auto-Scale & Dead Letter Pipeline
const taskWorker = new Worker('high-throughput-tasks', async (job) => {
  const { tenantId, payload, correlationId } = job.data;
  const rateLimitOk = await slidingWindowLimiter.check(tenantId);
  if (!rateLimitOk) throw new RateLimitExceededError('Backpressure applied');
  
  return await executeDomainPipeline(payload, correlationId);
}, { concurrency: 25, limiter: { max: 1000, duration: 5000 } });`,
    },
    {
      id: 'genai',
      title: 'GenAI & GPU Orchestration',
      badge: 'AI Systems',
      icon: Cpu,
      headline: 'Low-Latency Serverless Diffusion & Computer Vision Workers',
      description:
        'Constructed custom image processing and neural model inference pipelines chaining FLUX.1 with IDM-VTON on RunPod serverless GPU instances. Delivers photorealistic virtual fittings and OpenCV thermal stencil extractions in sub-4 seconds with WebSocket progress streaming.',
      specs: [
        'Model Stacks: PyTorch, FLUX.1 inpainting, IDM-VTON garment warp',
        'Vision Engine: OpenCV dual-pass contour tracing for stencil machines',
        'GPU Cluster: RunPod serverless with warm-start worker container caching',
        'Streaming: Step-by-step progress broadcast via WebSockets to client UI',
      ],
      codeSnippet: `// Serverless GPU Dispatcher & WebSocket Progress
async def stream_inference_pipeline(user_image: bytes, garment_image: bytes, ws_client):
    mask = await run_garment_segmentation(user_image)
    await ws_client.send_progress(stage="masking_complete", pct=35)
    
    inference_result = await runpod_cluster.dispatch(
        model="flux1-vton-ensemble",
        inputs={"image": user_image, "mask": mask, "garment": garment_image}
    )
    return inference_result`,
    },
    {
      id: 'security',
      title: 'Consular & FinTech Vaults',
      badge: 'Compliance',
      icon: Database,
      headline: 'Encrypted PII Storage & Deterministic State Machines',
      description:
        'Engineered secure, audit-compliant backends for international visa processing (Globetrottr) and micro-investments (VillageVest). Enforces field-level AES encryption, automated OCR validation, and deterministic finite-state coordination.',
      specs: [
        'PII Security: Field-level envelope encryption with AWS KMS',
        'Compliance: Cross-border GDPR/SOC2 readiness and tamper logs',
        'State Machine: Deterministic stage transitions with strict rollback safety',
        'Payments: Stripe webhooks, Escrow disbursements, and Plaid ACH',
      ],
      codeSnippet: `// Deterministic State Machine Transition Guard
class VisaApplicationLifecycle:
    def transition_to(self, new_state: ApplicationState, actor: UserContext):
        if not self.is_valid_transition(self.current_state, new_state):
            raise InvalidStateTransitionError(f"{self.current_state} -> {new_state}")
            
        audit_trail.record(app_id=self.id, from_state=self.current_state, to_state=new_state, actor=actor)
        self.current_state = new_state
        return self.save()`,
    },
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section id="architecture" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
        <div>
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
            02 / CORE CAPABILITIES
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            SYSTEM ARCHITECTURE.
          </h2>
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md">
          Deep-dive into the architectural patterns, security primitives, and execution pipelines engineered across 8+ years of production experience.
        </p>
      </div>

      {/* Domain Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          const isActive = activeTab === pillar.id;
          return (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(pillar.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono transition-all duration-300 shrink-0 ${
                isActive
                  ? 'bg-white text-black font-bold shadow-[0_4px_20px_rgba(255,255,255,0.12)]'
                  : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{pillar.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Card */}
      <div className="editorial-card rounded-3xl p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300">
              {currentPillar.badge}
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              {currentPillar.headline}
            </h3>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {currentPillar.description}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Key Technical Specifications:
              </div>
              <ul className="space-y-2">
                {currentPillar.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Code Schematic */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-black/80 border border-white/[0.08] p-5 font-mono text-xs overflow-x-auto shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4 text-zinc-500 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="ml-2 font-mono text-zinc-400">architecture-spec.ts</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">PRODUCTION VERIFIED</span>
              </div>
              <pre className="text-zinc-300 leading-relaxed whitespace-pre-wrap font-mono">
                {currentPillar.codeSnippet}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
