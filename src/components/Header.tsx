import React, { useState } from 'react';

interface HeaderProps {
  onOpenReservation: () => void;
  onOpenMenu: () => void;
  viewMode: 'responsive' | 'desktop' | 'mobile';
  onChangeViewMode: (mode: 'responsive' | 'desktop' | 'mobile') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenReservation,
  onOpenMenu,
  viewMode,
  onChangeViewMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Device Switcher Bar for AI Studio Preview */}
      <div className="bg-[#201a16] text-[#fbeee7] py-1.5 px-4 text-xs flex justify-between items-center border-b border-[#362f2b] z-50">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#eabe99]"></span>
          <span className="font-sans text-[11px] tracking-wider uppercase text-[#d3c4b8]">KALA Coffee & Space — Jakarta Selatan</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] uppercase text-[#81756b] mr-1 hidden sm:inline">Tampilan Layar:</span>
          <button
            onClick={() => onChangeViewMode('responsive')}
            className={`px-2.5 py-0.5 text-[11px] transition-colors ${
              viewMode === 'responsive'
                ? 'bg-[#8b6848] text-white font-medium'
                : 'text-[#d3c4b8] hover:text-white'
            }`}
          >
            Responsif
          </button>
          <button
            onClick={() => onChangeViewMode('desktop')}
            className={`px-2.5 py-0.5 text-[11px] transition-colors ${
              viewMode === 'desktop'
                ? 'bg-[#8b6848] text-white font-medium'
                : 'text-[#d3c4b8] hover:text-white'
            }`}
          >
            Desktop (Lookbook)
          </button>
          <button
            onClick={() => onChangeViewMode('mobile')}
            className={`px-2.5 py-0.5 text-[11px] transition-colors ${
              viewMode === 'mobile'
                ? 'bg-[#8b6848] text-white font-medium'
                : 'text-[#d3c4b8] hover:text-white'
            }`}
          >
            Mobile (Ponsel)
          </button>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-[#fff8f5]/95 backdrop-blur-md border-b border-[#d3c4b8]/40 transition-all duration-300">
        <div className="flex justify-between items-center w-full px-4 sm:px-8 md:px-16 max-w-7xl mx-auto h-20">
          {/* Brand Logo */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('beranda');
            }}
            className="flex flex-col group focus:outline-none"
          >
            <span className="font-serif text-[28px] leading-tight tracking-tight text-[#201a16] font-normal group-hover:text-[#705032] transition-colors duration-300">
              KALA
            </span>
            <span className="font-sans text-[10px] tracking-[0.24em] text-[#81756b] uppercase -mt-0.5 font-semibold">
              COFFEE &amp; SPACE
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollTo('beranda')}
              className="font-sans text-[12px] font-semibold tracking-widest uppercase border-b border-[#705032] text-[#705032] pb-1 cursor-pointer"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollTo('cerita-kami')}
              className="font-sans text-[12px] font-semibold tracking-widest uppercase text-[#4f453c] pb-1 transition-colors duration-300 hover:text-[#705032] cursor-pointer"
            >
              Cerita Kami
            </button>
            <button
              onClick={() => {
                scrollTo('menu');
              }}
              className="font-sans text-[12px] font-semibold tracking-widest uppercase text-[#4f453c] pb-1 transition-colors duration-300 hover:text-[#705032] cursor-pointer"
            >
              Menu
            </button>
            <button
              onClick={() => scrollTo('galeri')}
              className="font-sans text-[12px] font-semibold tracking-widest uppercase text-[#4f453c] pb-1 transition-colors duration-300 hover:text-[#705032] cursor-pointer"
            >
              Galeri
            </button>
            <button
              onClick={() => scrollTo('lokasi')}
              className="font-sans text-[12px] font-semibold tracking-widest uppercase text-[#4f453c] pb-1 transition-colors duration-300 hover:text-[#705032] cursor-pointer"
            >
              Lokasi
            </button>
          </nav>

          {/* Trailing Action */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 bg-[#362f2b] text-[#fbeee7] font-sans text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase rounded-none hover:bg-[#8b6848] transition-all duration-300 ease-out cursor-pointer shadow-sm"
            >
              Kunjungi Kami
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              aria-label="Buka Menu Navigasi"
              className="md:hidden text-[#201a16] p-1.5 focus:outline-none hover:text-[#705032] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer / Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f8ebe4] border-b border-[#d3c4b8]/50 px-6 py-6 flex flex-col space-y-4 animate-in fade-in duration-200">
            <button
              onClick={() => scrollTo('beranda')}
              className="text-left font-sans text-[12px] uppercase tracking-widest text-[#705032] font-semibold py-1"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollTo('cerita-kami')}
              className="text-left font-sans text-[12px] uppercase tracking-widest text-[#4f453c] hover:text-[#705032] font-semibold py-1"
            >
              Cerita Kami
            </button>
            <button
              onClick={() => scrollTo('menu')}
              className="text-left font-sans text-[12px] uppercase tracking-widest text-[#4f453c] hover:text-[#705032] font-semibold py-1"
            >
              Menu Pilihan
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMenu();
              }}
              className="text-left font-sans text-[12px] uppercase tracking-widest text-[#705032] hover:underline font-semibold py-1 flex items-center justify-between"
            >
              <span>Daftar Menu Lengkap</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button
              onClick={() => scrollTo('galeri')}
              className="text-left font-sans text-[12px] uppercase tracking-widest text-[#4f453c] hover:text-[#705032] font-semibold py-1"
            >
              Galeri &amp; Suasana
            </button>
            <button
              onClick={() => scrollTo('lokasi')}
              className="text-left font-sans text-[12px] uppercase tracking-widest text-[#4f453c] hover:text-[#705032] font-semibold py-1"
            >
              Lokasi &amp; Jam Operasional
            </button>
            <div className="pt-3 border-t border-[#d3c4b8]/40 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 bg-[#705032] text-white text-[11px] font-semibold tracking-widest uppercase text-center"
              >
                Reservasi Meja
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
