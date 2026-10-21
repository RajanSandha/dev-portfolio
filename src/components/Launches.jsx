import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const launches = [
  {"name":"NanoNomad","category":"npm · Free digital pet ecosystem","image":"nanonomad-art.webp","description":"One connected library ecosystem: @nanonomad/core provides movement, behaviour and rendering; @nanonomad/characters supplies Cat and Doggo SVG packs. @nanonomad/web and @nanonomad/react combine them for JavaScript and React / Next.js apps. Includes dragging, form feedback and reduced-motion support.","href":"https://www.npmjs.com/package/@nanonomad/react","label":"Explore NanoNomad on npm","install":"npm install @nanonomad/react","license":"GPL-2.0-or-later","packages":["core","characters","web","react"]},
  {"name":"CompileCraftCode","category":"npm · Free AI developer CLI","image":"compilecraftcode-art.webp","description":"An AI-assisted SDLC workflow with bootstrap, verification, interview, planning, coding, review and finalization stages. Adds editor adapters and compact Markdown project memory. Use ccc init, then /ccc in a supported editor. Requires Node.js 18+ and your own coding assistant.","href":"https://www.npmjs.com/package/compilecraftcode","label":"Explore CompileCraftCode on npm","install":"npm install -g compilecraftcode","license":"MIT"},
  { name: 'Creditora', category: 'Android · Personal finance', image: 'creditora-feature.png', description: 'Khata records, repayments, EMI tracking and shared expenses in one everyday finance app.', href: 'https://play.google.com/store/apps/details?id=in.compilecraft.creditora', label: 'View on Google Play' },
  { name: 'HandBrowse', category: 'Chrome · Camera gestures', image: 'handbrowse-feature.webp', description: 'Camera-based hand gestures for scrolling, zoom and pointer control, with on-device camera processing.', href: 'https://handbrowse.compilecraft.in', label: 'Explore HandBrowse' },
  { name: 'Chess Royal', category: 'Android · Chess', image: 'chessroyal-feature.png', description: 'Play an interactive AI coach, challenge the computer or share a board with a friend.', href: 'https://play.google.com/store/apps/details?id=in.compilecraft.chessroyal', label: 'View on Google Play' },
  { name: 'Face Dodge', category: 'Android · Camera-controlled game', image: 'facedodge-game.png', description: 'A survival arcade game controlled by face movement, with automatic eye shots and visual challenges.', href: 'https://play.google.com/store/apps/details?id=in.compilecraft.facedodge', label: 'View on Google Play' },
];

export default function Launches() {
  return <section id="products" className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
    <p className="text-xs font-mono tracking-widest text-purple-300 uppercase">Independent product launches · CompileCraft</p>
    <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight mt-4">Built. Shipped. Available.</h2>
    <p className="mt-5 max-w-2xl text-zinc-300 leading-relaxed">Free npm developer tools, AI orchestration, everyday apps and camera-based interaction. Independent CompileCraft products, separate from the client engineering projects below.</p>
    <div className="mt-10 grid gap-8 md:grid-cols-2">
      {launches.map(product => <article key={product.name} className="editorial-card rounded-2xl overflow-hidden">
        <img src={`${import.meta.env.BASE_URL}products/${product.image}`} alt={`${product.name} product artwork`} width="1024" height="576" loading="lazy" className="w-full aspect-video object-cover" />
        <div className="p-6 sm:p-8"><p className="text-xs text-purple-300">{product.category}</p><h3 className="text-2xl font-semibold mt-3">{product.name}</h3><p className="mt-3 text-zinc-300 leading-relaxed">{product.description}</p>
          {product.install && <div className="mt-5 rounded-lg bg-white/5 border border-white/10 p-4"><p className="text-xs text-zinc-300">Free to install · {product.license}</p><code className="block mt-2 text-sm break-all">{product.install}</code><p className="mt-2 text-xs text-zinc-400">Concept artwork shown above.</p></div>}
          {product.packages && <ul className="mt-4 grid sm:grid-cols-2 gap-2">{product.packages.map(name=><li key={name}><a className="text-sm text-purple-200 underline-offset-4 hover:underline" href={`https://www.npmjs.com/package/@nanonomad/${name}`} target="_blank" rel="noopener noreferrer">@nanonomad/{name} ↗</a></li>)}</ul>}
          <a href={product.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 min-h-11 text-sm font-semibold text-purple-200 hover:text-white">{product.label}<ArrowUpRight size={16}/></a></div>
      </article>)}
    </div>
  </section>;
}
