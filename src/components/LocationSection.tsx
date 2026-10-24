import React, { useState } from 'react';
import { AMENITIES } from '../data/coffeeData';

interface LocationSectionProps {
  onOpenReservation: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenReservation }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan 12190');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-20 md:py-28 bg-[#fff8f5]" id="lokasi">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Information Panel (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#705032] font-semibold block mb-2">
                Kunjungi Kami
              </span>
              <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[38px] text-[#201a16] font-normal leading-snug">
                Cerita Berikutnya <br className="hidden sm:inline" />
                <span className="italic text-[#705032]">Dimulai di Sini.</span>
              </h2>
            </div>

            <div className="space-y-5 divide-y divide-[#d3c4b8]/35 text-[#201a16]">
              {/* Address */}
              <div className="pt-3 first:pt-0">
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#81756b] block mb-1 font-semibold">
                  Alamat Kami
                </span>
                <p className="font-sans text-[15px] sm:text-[16px] text-[#201a16] font-medium leading-relaxed">
                  Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan 12190
                </p>
                <p className="font-sans text-[13px] text-[#4f453c] font-light mt-0.5">
                  (Tersedia area parkir motor &amp; mobil luas dengan valet service)
                </p>
                <button
                  onClick={handleCopyAddress}
                  className="mt-2 text-[11px] font-sans text-[#705032] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">content_copy</span>
                  {copied ? 'Alamat Disalin!' : 'Salin Alamat Lengkap'}
                </button>
              </div>

              {/* Opening Hours */}
              <div className="pt-5">
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#81756b] block mb-1 font-semibold">
                  Jam Operasional
                </span>
                <div className="space-y-1">
                  <div className="flex justify-between font-sans text-[14px] text-[#201a16]">
                    <span>Senin – Jumat</span>
                    <span className="font-semibold">07:00 – 22:00 WIB</span>
                  </div>
                  <div className="flex justify-between font-sans text-[14px] text-[#201a16]">
                    <span>Sabtu – Minggu</span>
                    <span className="font-semibold">07:00 – 23:00 WIB</span>
                  </div>
                </div>
                <p className="font-sans text-[12px] text-[#81756b] font-light mt-2">
                  Dapur hot-brunch siap melayani hingga 21:00 WIB.
                </p>
              </div>

              {/* Communication */}
              <div className="pt-5">
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#81756b] block mb-1 font-semibold">
                  Reservasi &amp; Pertanyaan
                </span>
                <p className="font-sans text-[14px] text-[#201a16]">
                  WhatsApp:{' '}
                  <a
                    className="text-[#705032] font-medium underline hover:text-[#8b6848]"
                    href="https://wa.me/6281234567890?text=Halo%20KALA%20Coffee%20%26%20Space,%20saya%20ingin%20bertanya%20mengenai%20reservasi"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    +62 812-3456-7890
                  </a>
                </p>
                <p className="font-sans text-[13px] text-[#4f453c] mt-1">
                  Instagram:{' '}
                  <span className="text-[#705032] font-medium">@kalacoffee.space</span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#362f2b] text-[#fbeee7] font-sans text-[11px] font-semibold tracking-widest uppercase hover:bg-[#8b6848] transition-all duration-300 shadow-sm"
                href="https://maps.google.com/?q=Senopati+Jakarta+Selatan"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">navigation</span>
                <span>Dapatkan Petunjuk Arah</span>
              </a>

              <button
                onClick={onOpenReservation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#705032] text-[#705032] font-sans text-[11px] font-semibold tracking-widest uppercase hover:bg-[#705032] hover:text-[#fff8f5] transition-all duration-300 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">event_seat</span>
                <span>Reservasi Meja</span>
              </button>
            </div>
          </div>

          {/* Minimal Styled Interactive Map Card (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-[#f8ebe4] p-4 sm:p-6 border border-[#d3c4b8]/50 shadow-sm">
            <div className="relative w-full aspect-[4/3] bg-[#ede0d9] overflow-hidden border border-[#d3c4b8]/40 flex items-center justify-center">
              {/* Subtle Cartographic Pattern */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#81756b 1.2px, transparent 1.2px)',
                  backgroundSize: '24px 24px'
                }}
              ></div>

              {/* Geometric Map Street Lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-full h-[2.5px] bg-[#81756b] -rotate-12 absolute"></div>
                <div className="w-full h-[2.5px] bg-[#81756b] rotate-45 absolute"></div>
                <div className="h-full w-[2.5px] bg-[#81756b] left-1/3 absolute"></div>
                <div className="h-full w-[1.5px] bg-[#81756b] right-1/4 absolute"></div>
                {/* Street Label */}
                <span className="absolute top-1/4 left-8 text-[9px] font-sans uppercase tracking-[0.2em] text-[#4f453c]/70 -rotate-12 font-medium">
                  Jl. Senopati Raya
                </span>
                <span className="absolute bottom-1/4 right-8 text-[9px] font-sans uppercase tracking-[0.2em] text-[#4f453c]/70 rotate-45 font-medium">
                  Jl. Suryo
                </span>
              </div>

              {/* Map Center Marker */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#362f2b] text-[#fff8f5] flex items-center justify-center shadow-xl border-2 border-[#fff8f5] animate-bounce">
                  <span className="material-symbols-outlined text-2xl text-[#eabe99]">local_cafe</span>
                </div>
                <div className="mt-2.5 bg-[#fff8f5] px-4 py-2 border border-[#d3c4b8]/80 shadow-md text-center backdrop-blur-sm">
                  <p className="font-serif text-sm font-semibold text-[#201a16] tracking-wide">
                    KALA Coffee &amp; Space
                  </p>
                  <p className="font-sans text-[10px] uppercase text-[#81756b] tracking-wider font-medium">
                    Senopati, Jakarta Selatan
                  </p>
                </div>
              </div>

              {/* Map Interactive Floating Action */}
              <div className="absolute bottom-3 right-3 z-10">
                <a
                  className="bg-[#fff8f5]/90 hover:bg-[#fff8f5] text-[#201a16] px-3.5 py-1.5 text-[11px] font-sans font-medium tracking-wider uppercase border border-[#d3c4b8]/80 flex items-center gap-1.5 backdrop-blur-sm shadow-sm transition-colors"
                  href="https://maps.google.com/?q=Senopati+Jakarta+Selatan"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  Buka Google Maps
                </a>
              </div>
            </div>

            {/* Spatial Amenities Note */}
            <div className="mt-4 pt-3.5 border-t border-[#d3c4b8]/40 flex flex-wrap items-center justify-between text-xs text-[#81756b] font-sans uppercase tracking-wider gap-3">
              {AMENITIES.slice(0, 4).map((amenity, idx) => (
                <span key={idx} className="flex items-center gap-1.5 font-medium">
                  <span className="material-symbols-outlined text-base text-[#705032]">{amenity.icon}</span>
                  {amenity.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
