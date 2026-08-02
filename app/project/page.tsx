"use client";

import Link from "next/link";
import { ArrowLeft, LayoutGrid, Cpu, Code, ShieldCheck, ExternalLink, Calendar } from "lucide-react";

export default function ProjectPage() {
  // Data contoh daftar proyek teknologi IMZ
  const projects = [
    {
      title: "IMZ Virtual Assistant Robot AI",
      desc: "Pengembangan sistem visualisasi robot interaktif menggunakan integrasi grafis modern dan kecerdasan buatan untuk pusat kendali informasi.",
      tech: ["Next.js", "Tailwind CSS", "AI Engine"],
      icon: Cpu,
      color: "text-purple-400"
    },
    {
      title: "Secure Database Gateway System",
      desc: "Arsitektur penampung data formulir dan enkripsi lalu lintas data real-time berbasis serverless dengan tingkat keamanan tinggi.",
      tech: ["Supabase", "PostgreSQL", "Next.js Router"],
      icon: ShieldCheck,
      color: "text-emerald-400"
    },
    {
      title: "Web3 Multimedia Platform",
      desc: "Rancang bangun purwarupa web interaktif masa depan dengan transisi animasi halus berkecepatan tinggi dan tata letak responsif.",
      tech: ["TypeScript", "Turbopack", "Lucide Icons"],
      icon: Code,
      color: "text-blue-400"
    }
  ];

  return (
    <div className="w-screen min-h-screen bg-zinc-950 text-white flex flex-col justify-start items-center p-6 relative overflow-x-hidden select-none" suppressHydrationWarning>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Navigasi Kembali */}
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md px-4 py-2 rounded-xl transition-all cursor-pointer shadow-lg">
        <ArrowLeft size={14} /> KEMBALI KE BERANDA
      </Link>

      <div className="w-full max-w-5xl mt-24 flex flex-col gap-8 relative z-10 animate-fade-in" suppressHydrationWarning>
        {/* Header Halaman */}
        <div className="border-b border-zinc-900 pb-4 flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <LayoutGrid size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 uppercase">IMZ Projects</h1>
            <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase mt-0.5">Showcase & Tech Stack Registry</p>
          </div>
        </div>

        {/* Grid Daftar Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, i) => {
            const IconComponent = proj.icon;
            return (
              <div key={i} className="bg-black/60 border border-zinc-900 backdrop-blur-xl p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 group shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-zinc-900/60 pb-3">
                    <IconComponent size={20} className={proj.color} />
                    <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest flex items-center gap-1"><Calendar size={10} /> 2026</span>
                  </div>
                  <h2 className="text-base font-bold text-zinc-100 uppercase tracking-wide group-hover:text-purple-400 transition-colors">{proj.title}</h2>
                  <p className="text-zinc-400 text-xs leading-relaxed mt-2.5 font-sans">{proj.desc}</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-zinc-900/60 flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-[9px] font-mono font-bold bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-zinc-500">{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
