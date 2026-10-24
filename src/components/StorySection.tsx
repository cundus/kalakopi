import React, { useState } from 'react';
import { TABLE_IMAGE, CDN_TABLE_IMAGE } from '../data/coffeeData';

interface StorySectionProps {
  onOpenGalleryItem: (id: string) => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onOpenGalleryItem }) => {
  const [imgSrc, setImgSrc] = useState(TABLE_IMAGE);

  return (
    <section className="py-20 md:py-28 bg-[#fff8f5]" id="cerita-kami">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[1.5px] bg-[#705032]"></span>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#705032] font-semibold">
                Tentang KALA
              </span>
            </div>

            <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[38px] text-[#201a16] font-normal leading-snug">
              Diracik dengan Hati.<br />
              <span className="italic text-[#705032] font-normal">Dinikmati Sepenuh Hati.</span>
            </h2>

            <div className="space-y-4 text-[#4f453c] font-sans text-[14px] sm:text-[15px] font-light leading-relaxed pt-1">
              <p>
                KALA lahir dari kerinduan akan sebuah jeda di tengah derap kota yang tergesa. Terinspirasi oleh kesederhanaan wabi-sabi dan keramahan tropis Nusantara, kami membangun ruang ini bukan sekadar sebagai kedai kopi, melainkan titik temu bagi jiwa-jiwa yang menghargai waktu.
              </p>
              <p>
                Setiap cangkir menyuarakan perjalanan panjang: dari kebun kopi dataran tinggi Gayo, lereng Ijen, hingga perbukitan Manggarai Flores. Kami memanggang dan mengekstraksi biji pilihan dengan presisi artisanal, menjaga kejujuran rasa yang dihadiahkan alam.
              </p>
            </div>

            {/* Quote Block */}
            <div className="border-l-2 border-[#705032]/50 pl-5 py-2 my-5 bg-[#fef1ea]/40">
              <p className="font-serif text-[17px] sm:text-[19px] italic text-[#201a16] font-light leading-relaxed">
                “Kopi terbaik adalah yang dinikmati perlahan, bersama obrolan yang tak ingin segera usai.”
              </p>
              <span className="block mt-2 font-sans text-[10px] tracking-widest uppercase text-[#81756b] font-semibold">
                — Filosofi Waktu KALA
              </span>
            </div>

            {/* Metrics / Provenance Mini-Trio */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-5 border-t border-[#d3c4b8]/40">
              <div>
                <p className="font-serif text-[26px] sm:text-[32px] text-[#705032] font-normal leading-tight">100%</p>
                <p className="font-sans text-[10px] sm:text-[11px] tracking-wider uppercase text-[#81756b] mt-1 font-semibold">
                  Single Origin Nusantara
                </p>
              </div>
              <div>
                <p className="font-serif text-[26px] sm:text-[32px] text-[#705032] font-normal leading-tight">84+</p>
                <p className="font-sans text-[10px] sm:text-[11px] tracking-wider uppercase text-[#81756b] mt-1 font-semibold">
                  SCA Cupping Score
                </p>
              </div>
              <div>
                <p className="font-serif text-[26px] sm:text-[32px] text-[#705032] font-normal leading-tight">350m²</p>
                <p className="font-sans text-[10px] sm:text-[11px] tracking-wider uppercase text-[#81756b] mt-1 font-semibold">
                  Area Hijau &amp; Terbuka
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Framed Image Right Column */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#f8ebe4] p-3 sm:p-5 border border-[#d3c4b8]/50 shadow-sm group">
              <div
                onClick={() => onOpenGalleryItem('meja-temu')}
                className="overflow-hidden aspect-[4/5] bg-[#ede0d9] cursor-pointer relative"
              >
                <img
                  alt="Sajian latte hangat, cold brew segar, dan butter croissant di atas meja batu travertin KALA"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  src={imgSrc}
                  onError={() => {
                    if (imgSrc !== CDN_TABLE_IMAGE) {
                      setImgSrc(CDN_TABLE_IMAGE);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 bg-[#201a16]/80 text-[#fbeee7] font-sans text-[10px] uppercase tracking-widest backdrop-blur-sm">
                    Perbesar Foto
                  </span>
                </div>
              </div>
              <div className="pt-3.5 flex justify-between items-baseline px-1">
                <p className="font-serif text-[15px] sm:text-[16px] text-[#201a16] font-normal italic">
                  Meja Temu, Sudut Favorit
                </p>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#81756b] font-semibold">
                  KALA Space — 09:30 WIB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
