"use client";

import Link from "next/link";
import { ArrowLeft, User, Calendar, ShieldCheck, Mail, MapPin, Award, Layers } from "lucide-react";

export default function ProfilPage() {
  return (
    <div className="w-screen min-h-screen bg-zinc-950 text-white flex flex-col justify-center items-center p-6 relative overflow-x-hidden select-none" suppressHydrationWarning>
      
      {/* Efek Cahaya Neon Latar Belakang */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Tombol Kembali ke Beranda */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md px-4 py-2 rounded-xl transition-all cursor-pointer shadow-lg"
      >
        <ArrowLeft size={14} /> KEMBALI KE BERANDA
      </Link>

      {/* KARTU PROFIL UTAMA */}
      <div className="w-full max-w-4xl bg-black/60 border border-zinc-900 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl shadow-purple-500/5 relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start animate-fade-in" suppressHydrationWarning>
        
        {/* SISI KIRI: Tempat Foto Profil dengan Efek Glow */}
        <div className="flex flex-col items-center gap-4 shrink-0">
          <div className="w-48 h-48 rounded-2xl bg-zinc-900 border-2 border-purple-500/30 hover:border-purple-500 flex items-center justify-center relative overflow-hidden shadow-xl shadow-purple-500/5 group transition-all duration-300">
            {/* Box Foto Kosong: Nanti Anda tinggal mengganti tag <User> ini dengan tag <img src="/foto-anda.jpg" /> */}
            <User size={64} className="text-zinc-700 group-hover:text-purple-400 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(168,85,247,0)] group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
            <div className="absolute bottom-0 inset-x-0 bg-black/60 border-t border-zinc-800/50 py-1.5 text-[9px] font-mono text-center tracking-widest text-zinc-500 uppercase">
              PHOTO FRAME
            </div>
          </div>
          
          <div className="text-center">
            <span className="text-[10px] font-mono tracking-[0.25em] text-purple-400 uppercase font-black bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
              CORE DEVELOPER
            </span>
          </div>
        </div>

        {/* SISI KANAN: Informasi Biodata Lengkap */}
        <div className="flex-1 w-full flex flex-col gap-6">
          
          {/* Header Nama */}
          <div className="border-b border-zinc-900 pb-4 text-center md:text-left">
            <h1 className="text-3xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400 uppercase">
              Imam Lukman Nurhakim
            </h1>
            <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase mt-1">IMZ MULTIMEDIA FOUNDER & ENGINEER</p>
          </div>

          {/* Grid Informasi Biodata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* 1. Umur */}
            <div className="flex items-center gap-3.5 bg-zinc-900/40 border border-zinc-900 p-3.5 rounded-xl">
              <Calendar className="w-4 h-4 text-purple-400" />
              <div>
                <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">Usia / Umur</p>
                <p className="text-xs font-bold text-zinc-200">17 Tahun</p>
              </div>
            </div>

            {/* 2. Kewarganegaraan */}
            <div className="flex items-center gap-3.5 bg-zinc-900/40 border border-zinc-900 p-3.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-pink-400" />
              <div>
                <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">Kewarganegaraan</p>
                <p className="text-xs font-bold text-zinc-200">Warga Negara Indonesia (WNI)</p>
              </div>
            </div>

            {/* 3. Domisili / Lokasi */}
            <div className="flex items-center gap-3.5 bg-zinc-900/40 border border-zinc-900 p-3.5 rounded-xl">
              <MapPin className="w-4 h-4 text-blue-400" />
              <div>
                <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">Lokasi / Domisili</p>
                <p className="text-xs font-bold text-zinc-200">Jawa Tengah, Indonesia</p>
              </div>
            </div>

            {/* 4. Kontak Email */}
            <div className="flex items-center gap-3.5 bg-zinc-900/40 border border-zinc-900 p-3.5 rounded-xl">
              <Mail className="w-4 h-4 text-amber-400" />
              <div>
                <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">Email Bisnis</p>
                <p className="text-xs font-bold text-zinc-200">imam@imzmultimedia.id</p>
              </div>
            </div>

          </div>

          {/* Bagian Fokus Keahlian & Spesialisasi */}
          <div className="flex flex-col gap-2.5">
            <h2 className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-black flex items-center gap-1.5">
              <Layers size={12} className="text-purple-400" /> Spesialisasi Teknologi
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Artificial Intelligence", "Robotics AI", "Web Development", "Internet of Things", "Cybersecurity"].map((tech) => (
                <span key={tech} className="text-[10px] font-mono font-bold bg-zinc-900 border border-zinc-800/80 px-3 py-1.5 rounded-lg text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Deskripsi Singkat Visi / Tentang Saya */}
          <div className="flex flex-col gap-2 bg-purple-500/5 border border-purple-500/10 p-4 rounded-xl">
            <h2 className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-black flex items-center gap-1.5">
              <Award size={12} /> Profesional Visi
            </h2>
            <p className="text-zinc-400 text-xs leading-relaxed font-sans">
              Seorang pengembang teknologi muda yang berfokus pada integrasi multimedia interaktif, rekayasa kecerdasan buatan (AI), dan sistem kontrol robotika otonom untuk membangun infrastruktur ekosistem digital masa depan yang efisien dan aman.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
