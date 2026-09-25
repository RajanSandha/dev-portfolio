import React from 'react';
import { Activity, ShieldCheck, Cpu, Database, Server } from 'lucide-react';

export default function TelemetryBanner() {
  const metrics = [
    {
      icon: <Server className="w-4 h-4 text-emerald-400" />,
      label: "Experience",
      value: "8+ Years Lead Backend",
    },
    {
      icon: <Cpu className="w-4 h-4 text-indigo-400" />,
      label: "Architecture",
      value: "Distributed Microservices",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-cyan-400" />,
      label: "Security & Protocols",
      value: "AS2 Cryptography & X12 EDI",
    },
    {
      icon: <Database className="w-4 h-4 text-purple-400" />,
      label: "Async Pipelines",
      value: "BullMQ & ARQ Queues",
    },
    {
      icon: <Activity className="w-4 h-4 text-amber-400" />,
      label: "System Status",
      value: "Production Clusters Healthy",
    },
  ];

  return (
    <div className="w-full border-y border-white/5 bg-[#070b14]/80 backdrop-blur-md py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          {metrics.map((m, i) => (
            <div key={i} className="flex items-center space-x-2 text-slate-300">
              <span className="p-1 rounded bg-white/5 border border-white/10">{m.icon}</span>
              <span className="text-slate-500 uppercase tracking-wider">{m.label}:</span>
              <span className="text-slate-200 font-semibold">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
