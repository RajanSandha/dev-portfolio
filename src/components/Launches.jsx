import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const launches = [
  { name: 'Creditora', category: 'Android · Personal finance', image: 'creditora-feature.png', description: 'Khata records, repayments, EMI tracking and shared expenses in one everyday finance app.', href: 'https://play.google.com/store/apps/details?id=in.compilecraft.creditora', label: 'View on Google Play' },
  { name: 'HandBrowse', category: 'Chrome · Camera gestures', image: 'handbrowse-feature.webp', description: 'Camera-based hand gestures for scrolling, zoom and pointer control, with on-device camera processing.', href: 'https://handbrowse.compilecraft.in', label: 'Explore HandBrowse' },
  { name: 'Chess Royal', category: 'Android · Chess', image: 'chessroyal-feature.png', description: 'Play an interactive AI coach, challenge the computer or share a board with a friend.', href: 'https://play.google.com/store/apps/details?id=in.compilecraft.chessroyal', label: 'View on Google Play' },
  { name: 'Face Dodge', category: 'Android · Camera-controlled game', image: 'facedodge-game.png', description: 'A survival arcade game controlled by face movement, with automatic eye shots and visual challenges.', href: 'https://play.google.com/store/apps/details?id=in.compilecraft.facedodge', label: 'View on Google Play' },
];

export default function Launches() {
  return <section id="products" className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
    <p className="text-xs font-mono tracking-widest text-purple-300 uppercase">Independent product launches · CompileCraft</p>
    <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight mt-4">Built. Shipped. Available.</h2>
    <p className="mt-5 max-w-2xl text-zinc-300 leading-relaxed">My recent CompileCraft products bring together everyday utilities, camera interaction and mobile games. Separate from the client engineering projects below.</p>
    <div className="mt-10 grid gap-8 md:grid-cols-2">
      {launches.map(product => <article key={product.name} className="editorial-card rounded-2xl overflow-hidden">
        <img src={`${import.meta.env.BASE_URL}products/${product.image}`} alt={`${product.name} product artwork`} width="1024" height="576" loading="lazy" className="w-full aspect-video object-cover" />
        <div className="p-6 sm:p-8"><p className="text-xs text-purple-300">{product.category}</p><h3 className="text-2xl font-semibold mt-3">{product.name}</h3><p className="mt-3 text-zinc-300 leading-relaxed">{product.description}</p><a href={product.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 min-h-11 text-sm font-semibold text-purple-200 hover:text-white">{product.label}<ArrowUpRight size={16}/></a></div>
      </article>)}
    </div>
  </section>;
}
