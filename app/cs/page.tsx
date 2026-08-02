"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { ArrowLeft, Headphones, Send } from "lucide-react";

const supabase = createClient(
  "https://supabase.co", 
  "sb_publishable_3S5uTekbJ_8v0AoVDQ3lwQ_iW-ehfIp"
);

export default function CustomerServicePage() {
  const [tiket, setTiket] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const kirimTiketCS = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const { error } = await supabase
      .from("pesan_masuk")
      .insert([{ isi_pesan: tiket, tipe: "cs" }]);
    
    setLoading(false);
    if (!error) {
      setStatus("Tiket bantuan Anda telah diajukan ke Support Center!");
      setTiket("");
    } else {
      setStatus("Gagal mengajukan tiket.");
    }
  };

  return (
    <div className="w-screen min-h-screen bg-zinc-950 text-white flex flex-col justify-center items-center p-6" suppressHydrationWarning>
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md px-4 py-2 rounded-xl transition-all cursor-pointer">
        <ArrowLeft size={14} /> KEMBALI KE BERANDA
      </Link>

      <div className="w-full max-w-xl bg-black border border-zinc-900 p-8 rounded-3xl shadow-2xl relative z-10 flex flex-col gap-6 animate-fade-in" suppressHydrationWarning>
        <div className="border-b border-zinc-900 pb-4 flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"><Headphones size={24} /></div>
          <div>
            <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 uppercase">Support Center</h1>
            <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase mt-0.5">Helpdesk Portal</p>
          </div>
        </div>

        <form onSubmit={kirimTiketCS} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">Deskripsi Masalah / Pertanyaan</label>
            <textarea value={tiket} onChange={(e) => setTiket(e.target.value)} placeholder="Tuliskan kendala teknis atau pertanyaan yang ingin Anda konsultasikan dengan CS IMZ..." className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl text-sm min-h-[140px] focus:outline-none focus:border-emerald-500 transition-all text-zinc-200 resize-none" required disabled={loading} />
          </div>

          <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 font-mono text-xs font-bold py-3.5 rounded-xl cursor-pointer flex items-center justify-center gap-2">
            {loading ? "MENGAJUKAN..." : <><Send size={12} /> AJUKAN TIKET BANTUAN</>}
          </button>

          {status && <p className="text-xs font-mono text-center mt-2 text-emerald-400">{status}</p>}
        </form>
      </div>
    </div>
  );
}
