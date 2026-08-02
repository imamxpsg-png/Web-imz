"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { ArrowLeft, Handshake, Mail } from "lucide-react";

// Mengambil nilai variabel lingkungan dari Next.js / Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Proteksi inisialisasi agar proses build di Vercel tidak error statis
const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

export default function KerjasamaPage() {
  const [namaMitra, setNamaMitra] = useState("");
  const [proposal, setProposal] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const kirimKemitraan = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // Validasi jika token API Supabase belum terbaca di sisi client
    if (!supabase) {
      setStatus("Gagal mengirim: Konfigurasi API database di server Vercel belum lengkap.");
      setLoading(false);
      return;
    }

    const teksGabungan = `[MITRA: ${namaMitra}] - ${proposal}`;

    try {
      const { error } = await supabase
        .from("pesan_masuk")
        .insert([{ isi_pesan: teksGabungan, tipe: "kerjasama" }]);
      
      if (!error) {
        setStatus("Pengajuan kerjasama berhasil dikirim ke sistem IMZ!");
        setNamaMitra("");
        setProposal("");
      } else {
        console.error("Supabase Error:", error.message);
        setStatus(`Gagal mengirim pengajuan: ${error.message}`);
      }
    } catch (err: any) {
      console.error("Network Error:", err);
      setStatus("Gagal mengirim karena kendala jaringan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen min-h-screen bg-zinc-950 text-white flex flex-col justify-center items-center p-4 sm:p-6" suppressHydrationWarning>
      {/* Container tombol kembali disesuaikan agar responsif di HP */}
      <div className="w-full max-w-xl mb-4 sm:absolute sm:top-8 sm:left-8 flex justify-start">
        <Link href="/" className="flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md px-4 py-2 rounded-xl transition-all cursor-pointer">
          <ArrowLeft size={14} /> KEMBALI KE BERANDA
        </Link>
      </div>

      <div className="w-full max-w-xl bg-black border border-zinc-900 p-6 sm:p-8 rounded-3xl shadow-2xl relative z-10 flex flex-col gap-6 animate-fade-in" suppressHydrationWarning>
        <div className="border-b border-zinc-900 pb-4 flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Handshake size={24} />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 uppercase">Kemitraan</h1>
            <p className="text-zinc-500 text-[10px] sm:text-xs font-mono tracking-widest uppercase mt-0.5">Partnership Portal</p>
          </div>
        </div>

        <form onSubmit={kirimKemitraan} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">Nama Perusahaan / Institusi</label>
            <input 
              type="text" 
              value={namaMitra} 
              onChange={(e) => setNamaMitra(e.target.value)} 
              placeholder="Contoh: PT. Teknologi Maju" 
              className="w-full p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all text-zinc-200" 
              required 
              disabled={loading} 
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">Detail Rencana Kolaborasi</label>
            <textarea 
              value={proposal} 
              onChange={(e) => setProposal(e.target.value)} 
              placeholder="Tuliskan poin atau ringkasan ide kerjasama Anda di sini..." 
              className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl text-sm min-h-[120px] focus:outline-none focus:border-amber-500 transition-all text-zinc-200 resize-none" 
              required 
              disabled={loading} 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 font-mono text-xs font-bold py-3.5 rounded-xl cursor-pointer flex items-center justify-center gap-2 hover:opacity-90 transition-all"
          >
            {loading ? "MENGIRIM..." : <><Mail size={12} /> PROPOSE PARTNERSHIP</>}
          </button>

          {status && <p className="text-xs font-mono text-center mt-2 text-amber-400 px-2 leading-relaxed">{status}</p>}
        </form>
      </div>
    </div>
  );
}
