"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { Send, ArrowLeft, MessageSquare } from "lucide-react";

const supabase = createClient(
  "https://supabase.co", 
  "sb_publishable_3S5uTekbJ_8v0AoVDQ3lwQ_iW-ehfIp"
);

export default function Contact() {
  const [pesan, setPesan] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const kirimPesan = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    const { error } = await supabase.from("pesan_masuk").insert([{ isi_pesan: pesan }]);
    setLoading(false);
    if (!error) { setStatus("Pesan berhasil dikirim!"); setPesan(""); }
    else { setStatus("Gagal mengirim pesan."); }
  };

  return (
    <div className="w-screen h-screen bg-zinc-950 text-white flex flex-col justify-center items-center p-6" suppressHydrationWarning>
      <div className="w-full max-w-md bg-black border border-zinc-800 p-8 rounded-2xl relative z-10 shadow-2xl" suppressHydrationWarning>
        <div className="flex flex-col items-center gap-2 mb-8 text-center">
          <Link href="/" className="absolute left-6 top-6 text-zinc-500 hover:text-white transition text-xs font-mono">
            <ArrowLeft size={14} className="inline mr-1" /> Back
          </Link>
          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mt-6">
            <MessageSquare size={24} />
          </div>
          <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 uppercase mt-2">Contact Us</h1>
        </div>
        <form onSubmit={kirimPesan} className="flex flex-col gap-4">
          <textarea 
            value={pesan} onChange={(e) => setPesan(e.target.value)}
            placeholder="Tulis keluhan, saran, atau pesan kerjasama Anda di sini..."
            className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl text-sm min-h-[140px] focus:outline-none focus:border-purple-500 transition-all resize-none" required disabled={loading}
          />
          <button type="submit" disabled={loading || !pesan.trim()} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 font-mono text-xs font-bold py-3.5 rounded-xl cursor-pointer flex items-center justify-center gap-2">
            {loading ? "MENGIRIM..." : "KIRIM SEKARANG"}
          </button>
          {status && <p className="text-xs font-mono text-center mt-2 text-emerald-400">{status}</p>}
        </form>
      </div>
    </div>
  );
}
