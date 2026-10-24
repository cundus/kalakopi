import React, { useState, useEffect } from 'react';
import { HERO_IMAGE, CDN_HERO_IMAGE } from '../data/coffeeData';
import { ambientSound } from '../services/ambientAudio';

interface HeroSectionProps {
  onOpenMenu: () => void;
  isMobileFrame?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenMenu, isMobileFrame }) => {
  const [imgSrc, setImgSrc] = useState(HERO_IMAGE);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const unsub = ambientSound.subscribe((playing) => {
      setIsPlayingAudio(playing);
    });
    return unsub;
  }, []);

  const handleAudioToggle = async () => {
    await ambientSound.toggle();
  };

  const scrollToCerita = () => {
    const el = document.getElementById('cerita-kami');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="beranda"
      className={`relative ${
        isMobileFrame ? 'min-h-[600px]' : 'min-h-[92vh]'
      } flex items-center justify-center overflow-hidden bg-[#201a16]`}
    >
      {/* Background Image with Editorial Warm Grading Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Suasana interior KALA Coffee & Space yang hangat dan tenang"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 brightness-95"
          src={imgSrc}
          onError={() => {
            if (imgSrc !== CDN_HERO_IMAGE) {
              setImgSrc(CDN_HERO_IMAGE);
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#201a16]/95 via-[#362f2b]/60 to-[#362f2b]/40"></div>
        <div className="absolute inset-0 bg-[#705032]/25 mix-blend-multiply"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 md:px-16 text-center text-[#fbeee7] pt-14 pb-20 w-full flex flex-col items-center">
        {/* Overhead Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 font-sans text-[10px] sm:text-[11px] tracking-[0.24em] text-[#eabe99] uppercase px-3.5 py-1 border border-[#d3c4b8]/30 backdrop-blur-md bg-[#201a16]/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#eabe99] animate-pulse"></span>
            Senopati, Jakarta Selatan
          </span>
          <span className="font-sans text-[10px] tracking-[0.16em] text-[#d3c4b8] uppercase px-3 py-1 bg-[#201a16]/30 backdrop-blur-sm border border-[#d3c4b8]/20 hidden sm:inline-block">
            Buka Hari Ini • 07:00 – 22:00 WIB
          </span>
        </div>

        <h1 className="font-serif text-[38px] sm:text-[52px] md:text-[64px] text-[#fbeee7] font-normal tracking-tight mb-5 max-w-4xl mx-auto leading-[1.12]">
          Setiap Momen, <br className="hidden sm:inline" />
          <span className="italic font-normal font-serif text-[#eabe99]">Punya Cerita.</span>
        </h1>

        <p className="font-sans text-[14px] sm:text-[16px] md:text-[18px] text-[#d3c4b8] max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Lebih dari sekadar kopi. Sebuah ruang teduh untuk menikmati jeda, merajut percakapan hangat, dan menemukan inspirasi di tengah riuh kota.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6 w-full max-w-md sm:max-w-none">
          <button
            onClick={scrollToCerita}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#fff8f5] text-[#201a16] font-sans text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase hover:bg-[#8b6848] hover:text-[#fff8f5] transition-all duration-300 text-center cursor-pointer shadow-md"
          >
            Jelajahi KALA
          </button>
          <button
            onClick={onOpenMenu}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 border border-[#d3c4b8]/80 text-[#fbeee7] font-sans text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase hover:bg-[#362f2b]/70 hover:border-[#fbeee7] transition-all duration-300 text-center backdrop-blur-sm cursor-pointer"
          >
            Lihat Menu
          </button>
        </div>

        {/* Micro Atmosphere Player Widget for Mobile / Compact presentation */}
        <div className="mt-8 w-full max-w-sm bg-[#fff8f5]/15 backdrop-blur-md border border-[#fff8f5]/25 p-3 flex items-center justify-between text-left transition-all hover:bg-[#fff8f5]/20">
          <div className="flex items-center space-x-3 overflow-hidden">
            <span
              className={`material-symbols-outlined text-[#eabe99] text-[22px] ${
                isPlayingAudio ? 'animate-bounce' : ''
              }`}
            >
              graphic_eq
            </span>
            <div className="truncate">
              <p className="text-[#fbeee7] font-sans text-[10px] font-semibold uppercase tracking-wider truncate">
                KALA Atmosphere Radio
              </p>
              <p className="text-[#d3c4b8] text-[11px] truncate font-light">
                {isPlayingAudio ? 'Memutar: Afternoon Lo-Fi & Acoustic' : 'Klik untuk mendengarkan suasana'}
              </p>
            </div>
          </div>
          <button
            onClick={handleAudioToggle}
            aria-label={isPlayingAudio ? 'Hentikan Audio' : 'Putar Audio'}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#fff8f5] text-[#201a16] hover:bg-[#eabe99] transition-colors ml-2 shrink-0 cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isPlayingAudio ? 'pause' : 'play_arrow'}
            </span>
          </button>
        </div>
      </div>

      {/* Minimal Breathing Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-breathing pointer-events-none">
        <span className="font-sans text-[9px] uppercase tracking-[0.24em] text-[#d3c4b8] mb-1.5 font-semibold">
          Gulir
        </span>
        <div className="w-[1px] h-7 bg-gradient-to-b from-[#d3c4b8] to-transparent"></div>
      </div>
    </section>
  );
};
