"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { 
LayoutGrid, Sparkles, Cpu, Award, Globe, ShieldCheck, ArrowDown, 
User, Handshake, Mail, Headphones, Terminal, Brain, Code, Network, 
Layers, ShieldAlert, CheckCircle2 
} from "lucide-react";

export default function Home() {
const [activeFeature, setActiveFeature] = useState<string>("ai");

// Database Struktur Teks Penjelasan Lengkap Tanpa Disingkat (Slide 2)
const featureDetails: Record<string, { title: string; desc: string; icon: any; color: string }> = {
ai: { 
title: "Artificial Intelligence (AI)", 
desc: "Pengembangan sistem komputasi cerdas, teknologi otomasi berbasis agen pintar, algoritma pembelajaran mesin (Machine Learning), Large Language Models (LLM), dan pemrosesan bahasa alami (NLP) untuk kebutuhan industri modern.", 
icon: Brain, 
color: "text-purple-400"
},
robotics: { 
title: "Robotics Engineering", 
desc: "Integrasi perangkat keras mekanik lanjut dengan sistem kecerdasan buatan otonom, otomatisasi kontrol mikro, robotika industri, dan perancangan mekanisasi sistem kendali cerdas industri masa depan.", 
icon: Cpu, 
color: "text-pink-400"
},
webdev: { 
title: "Web Development", 
desc: "Rancang bangun aplikasi web modern berbasis ekosistem masa depan (Web3) dengan arsitektur tangguh, transisi animasi halus, performa tinggi, optimasi SEO maksimal, dan infrastruktur cloud serverless.", 
icon: Code, 
color: "text-blue-400"
},
iot: { 
title: "Internet of Things (IoT)", 
desc: "Konektivitas jaringan antar sensor pintar, transmisi nirkabel data real-time, integrasi modul mikro-kontroler, ekosistem smart home, otomatisasi lingkungan, dan kendali jarak jauh terenkripsi aman.", 
icon: Network, 
color: "text-amber-400"
},
software: { 
title: "Software Engineering", 
desc: "Rekayasa perangkat lunak skala enterprise, manajemen basis data berkinerja tinggi, pengujian kualitas kode terstruktur, implementasi sistem CI/CD DevOps, dan tata kelola komputasi awan terukur.", 
icon: Layers, 
color: "text-emerald-400"
},
cyber: { 
title: "Cybersecurity Division", 
desc: "Proteksi infrastruktur jaringan digital, pengujian penetrasi celah keamanan (Pentest), enkripsi data end-to-end, keamanan siber skala enterprise, penanganan insiden, dan penangkis ancaman siber eksternal.", 
icon: ShieldAlert, 
color: "text-red-400"
}
};

const ActiveIcon = featureDetails[activeFeature]?.icon || Brain;

return (
<main className="w-screen min-h-screen bg-black text-white relative overflow-x-hidden">
{/* ==================================================== */}
{/* SLIDE 1: INTRO (TEKS BERJALAN & KREDENSIAL LENGKAP) */}
{/* ==================================================== */}
<section className="w-full min-h-screen flex flex-col justify-between items-center py-8 relative bg-black overflow-hidden z-20 shadow-[0_20px_50px_rgba(0,0,0,1)]">
<div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
<video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
<source src="/hero-bg.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-black/40" />
</div>

<header className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between px-6">
<div className="text-2xl md:text-3xl font-black tracking-widest flex items-center gap-2 select-none">
<Sparkles className="text-purple-400 w-6 h-6 md:w-7 md:h-7" />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400">IMZ</span>
</div>
<div className="text-[10px] md:text-xs font-mono text-zinc-300 bg-black/40 px-3 py-1 rounded-full border border-zinc-700/40">[ INTRO ]</div>
</header>

<div className="relative z-10 w-full my-auto overflow-hidden whitespace-nowrap flex items-center py-12">
<div className="animate-text-marquee inline-block whitespace-nowrap">
{["welcome to imz", "welcome to imz", "welcome to imz"].map((text, idx) => (
<h1 key={idx} className="text-5xl md:text-9xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400 drop-shadow-[0_10px_40px_rgba(236,72,153,0.5)] select-none inline-block mx-4">{text}</h1>
))}
</div>
</div>

<div className="relative z-10 flex flex-col items-center gap-1.5 mb-6 select-none opacity-80 animate-bounce">
<span className="text-[9px] md:text-[10px] font-mono font-bold tracking-[0.25em] text-zinc-400 uppercase">Gulir Ke Bawah</span>
<ArrowDown className="w-4 h-4 text-purple-400" />
</div>

<footer className="relative z-10 w-full max-w-7xl mx-auto px-6 border-t border-zinc-800/40 pt-6 mt-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center text-[11px] md:text-xs font-bold text-zinc-200">
<div className="flex flex-col items-center"><Cpu className="text-purple-400 mb-1" /><span>ROBOTICS AI</span></div>
<div className="flex flex-col items-center"><Award className="text-pink-400 mb-1" /><span className="max-w-[160px] text-center leading-tight">NANYANG TECHNOLOGICAL UNIVERSITY</span></div>
<div className="flex flex-col items-center"><Globe className="text-amber-400 mb-1" /><span>GIVERY JAPAN</span></div>
<div className="flex flex-col items-center"><ShieldCheck className="text-emerald-400 mb-1" /><span>SINGAPURA DEVELOPED</span></div>
</div>
</footer>
</section>

{/* ==================================================== */}
{/* SLIDE 2: CORE DASHBOARD (MENU NAVIGASI & DISPLAY) */}
{/* ==================================================== */}
<section className="w-full min-h-screen flex flex-col justify-start py-6 relative bg-zinc-950 overflow-y-auto z-10">
<div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
<video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 md:opacity-100">
<source src="/robot-bg.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
</div>

<header className="relative z-30 w-full max-w-7xl mx-auto px-4 md:px-6">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 border border-zinc-800/80 bg-black/85 backdrop-blur-xl px-4 py-4 rounded-2xl w-full shadow-2xl relative text-xs font-semibold text-zinc-300">
<span className="text-sm font-black text-purple-400 font-mono tracking-wider">IMZ MULTIMEDIA</span>
{/* Scroll horizontal otomatis untuk menu navigasi di layar HP kecil */}
<div className="flex gap-2 w-full sm:w-auto overflow-x-auto no-scrollbar pb-1 sm:pb-0 justify-start sm:justify-end mask-gradient">
<Link href="/profil" passHref className="flex items-center gap-1 bg-zinc-900/60 px-3 py-1.5 rounded-lg border border-zinc-800/40 hover:text-white transition-all whitespace-nowrap"><User size={13} className="text-blue-400" /> Profil</Link>
<Link href="/project" passHref className="flex items-center gap-1 bg-zinc-900/60 px-3 py-1.5 rounded-lg border border-zinc-800/40 hover:text-white transition-all whitespace-nowrap"><LayoutGrid size={13} className="text-purple-400" /> Project</Link>
<Link href="/kerjasama" passHref className="flex items-center gap-1 bg-zinc-900/60 px-3 py-1.5 rounded-lg border border-zinc-800/40 hover:text-white transition-all whitespace-nowrap"><Handshake size={13} className="text-amber-400" /> Kerjasama</Link>
<Link href="/contact" passHref className="flex items-center gap-1 bg-zinc-900/60 px-3 py-1.5 rounded-lg border border-zinc-800/40 hover:text-white transition-all whitespace-nowrap"><Mail size={13} className="text-pink-400" /> Contact</Link>
<Link href="/cs" passHref className="flex items-center gap-1 bg-zinc-900/60 px-3 py-1.5 rounded-lg border border-zinc-800/40 hover:text-white transition-all whitespace-nowrap"><Headphones size={13} className="text-emerald-400" /> CS</Link>
</div>
</div>
</header>

{/* AREA PANEL INTERAKTIF DIVISI TEKNOLOGI */}
<div className="relative z-30 w-full max-w-7xl mx-auto px-4 md:px-6 mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
{/* Menu Tombol Divisi */}
<div className="md:col-span-5 lg:col-span-4 flex flex-col gap-2 w-full">
<div className="bg-black/80 border border-zinc-800/50 backdrop-blur-xl p-3 rounded-xl flex items-center gap-2">
<Terminal size={14} className="text-purple-400 animate-pulse" />
<span className="text-[10px] font-mono tracking-wider font-bold text-zinc-400 uppercase">Technology Division</span>
</div>
<div className="flex flex-col gap-2 max-h-[320px] md:max-h-none overflow-y-auto pr-1">
{Object.keys(featureDetails).map((key) => {
const IconComponent = featureDetails[key].icon;
return (
<button key={key} onClick={() => setActiveFeature(key)} className={`w-full flex items-center justify-between p-3.5 rounded-xl border font-mono text-xs tracking-wider font-bold text-left transition-all cursor-pointer ${activeFeature === key ? "bg-purple-600/20 border-purple-500 text-white shadow-lg" : "bg-black/75 border-zinc-800/60 text-zinc-400 hover:text-zinc-200"}`}>
<div className="flex items-center gap-3">
<IconComponent size={16} className={featureDetails[key].color} />
<span className="uppercase">{key}</span>
</div>
{activeFeature === key && <CheckCircle2 size={14} className="text-purple-400 animate-pulse" />}
</button>
);
})}
</div>
</div>

{/* Kotak Deskripsi Penjelasan */}
<div className="md:col-span-7 lg:col-span-8 w-full h-full min-h-[180px]">
{activeFeature && (
<div className="bg-black/85 border border-zinc-800/80 backdrop-blur-2xl p-5 md:p-6 rounded-2xl h-full flex flex-col justify-center animate-fade-in shadow-2xl">
<div className="flex items-center gap-3 border-b border-zinc-900 pb-3 mb-3">
<ActiveIcon size={22} className={featureDetails[activeFeature].color} />
<h3 className="text-sm font-black font-mono tracking-widest text-zinc-100 uppercase">{featureDetails[activeFeature].title}</h3>
</div>
<p className="text-zinc-300 text-xs font-sans leading-relaxed md:text-sm">{featureDetails[activeFeature].desc}</p>
</div>
)}
</div>
</div>
<div className="pb-12"></div>
</section>
</main>
);
}
