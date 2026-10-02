"use client";
import { useState } from "react";

export default function GiftPage() {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  const photos = [
    { src: "/puncak1.png", desc: "Happy Birthday, Abang! 🎉" },
    { src: "/reza.jpeg", desc: "Semoga panjang umur, sehat selalu, rejeki makin lancar, segala urusan dimudahin, makin sukses" },
    { src: "/puncak2.png", desc: "Makasih ya bang udah ngajarin banyak hal, selalu ngasih nasehat juga, ditunggu undangan nikahnya ya bang hehehe!" },
  ];

  return (
    <div className="min-h-screen bg-[#0d1020] flex items-center justify-center p-0">
      <div className="w-[400px] min-h-screen bg-[#0d1020] flex flex-col relative shadow-2xl">

        <div className="flex justify-between items-center p-5 bg-[#0a0c1a]">
          <h1 className="text-white font-black text-xl tracking-widest">ROBLOX</h1>
          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs">🔔</div>
        </div>

        {!open? (
          <>
            <div className="flex-1 flex flex-col justify-center items-center py-4">
              <img src="/giftbox.jpg" className="w-[90%] object-contain drop-shadow-[0_0_30px_rgba(42,107,255,0.3)] rounded-[20px]" alt="gift" />
            </div>

            <div className="px-6 pb-8 text-center">
              <h2 className="text-white font-black text-[22px]">Gift Buat Abang</h2>

              <button onClick={()=>setOpen(true)} className="mt-6 w-full bg-[#2a6bff] text-white font-black py-4 rounded-full text-[16px] active:scale-95 shadow-[0_4px_20px_rgba(42,107,255,0.4)]">
                OPEN THE GIFT BOX
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 px-5 py-4 flex flex-col">
            <div className="relative rounded-[20px] overflow-hidden bg-black border-2 border-white/10 aspect-[4/5]">
              <img src={photos[slide].src} alt="foto" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 p-4 text-left w-full">
                <p className="text-white/70 text-xs mt-1">{photos[slide].desc}</p>
              </div>
              <button onClick={()=>setSlide(s=>s>0?s-1:2)} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur rounded-full text-white">‹</button>
              <button onClick={()=>setSlide(s=>s<2?s+1:0)} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur rounded-full text-white">›</button>
            </div>

            <div className="flex justify-center gap-1.5 mt-3">
              {[0,1,2].map(i=>(
                <div key={i} onClick={()=>setSlide(i)} className={`h-1.5 rounded-full transition-all cursor-pointer ${slide===i?'w-6 bg-yellow-400':'w-1.5 bg-white/20'}`} />
              ))}
            </div>

            <div className="flex gap-3 mt-4 bg-white/10 rounded-2xl p-3 items-center">
              <img src="/yeen.png" className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400" alt="reza"/>
              <div className="text-left">
                <p className="text-white text-xs font-bold">Kado dari YEEN</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-6">
              <button onClick={()=>setOpen(false)} className="bg-white/10 text-white font-bold py-3 rounded-full text-sm">TUTUP 📦</button>
              <button onClick={()=>setSlide(s=>s<2?s+1:0)} className="bg-yellow-400 text-black font-black py-3 rounded-full text-sm">NEXT FOTO ➡️</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}