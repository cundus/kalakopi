import React from 'react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#362f2b] text-[#fbeee7] border-t border-[#81756b]/20">
      <div className="w-full px-6 sm:px-10 md:px-16 py-16 max-w-7xl mx-auto flex flex-col justify-between">
        {/* Top Row: Brand & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#81756b]/25">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3.5">
            <p className="font-serif text-[32px] sm:text-[36px] text-[#fbeee7] font-normal tracking-wide">
              KALA
            </p>
            <p className="font-serif text-sm text-[#d3c4b8] italic font-light">
              “Every Moment Has Its Own Story.”
            </p>
            <p className="font-sans text-[13px] text-[#d3c4b8] max-w-sm leading-relaxed font-light">
              Ruang temu, kopi bernyawa, dan perayaan waktu yang berjalan santai di Kebayoran Baru, Jakarta Selatan.
            </p>
          </div>

          {/* Site Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-sans text-[10px] tracking-widest uppercase text-[#81756b] block mb-2 font-semibold">
              Navigasi
            </span>
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-[12px] font-sans tracking-wider uppercase">
              <button
                onClick={() => scrollTo('beranda')}
                className="text-[#d3c4b8] hover:text-[#fbeee7] transition-colors cursor-pointer text-left"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollTo('cerita-kami')}
                className="text-[#d3c4b8] hover:text-[#fbeee7] transition-colors cursor-pointer text-left"
              >
                Cerita Kami
              </button>
              <button
                onClick={() => scrollTo('menu')}
                className="text-[#d3c4b8] hover:text-[#fbeee7] transition-colors cursor-pointer text-left"
              >
                Menu
              </button>
              <button
                onClick={() => scrollTo('galeri')}
                className="text-[#d3c4b8] hover:text-[#fbeee7] transition-colors cursor-pointer text-left"
              >
                Galeri
              </button>
              <button
                onClick={() => scrollTo('lokasi')}
                className="text-[#d3c4b8] hover:text-[#fbeee7] transition-colors cursor-pointer text-left"
              >
                Lokasi
              </button>
              <span className="text-[#81756b]">Privasi</span>
              <span className="text-[#81756b]">Syarat &amp; Ketentuan</span>
            </div>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-sans text-[10px] tracking-widest uppercase text-[#81756b] block mb-2 font-semibold">
              Kanal Cerita
            </span>
            <ul className="space-y-2 font-sans text-[13px]">
              <li>
                <a
                  className="text-[#d3c4b8] hover:text-[#fbeee7] transition-colors flex items-center gap-2"
                  href="https://instagram.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Instagram</span>
                  <span className="text-xs text-[#81756b]">@kalacoffee.space</span>
                </a>
              </li>
              <li>
                <a
                  className="text-[#d3c4b8] hover:text-[#fbeee7] transition-colors flex items-center gap-2"
                  href="https://spotify.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Spotify Playlist</span>
                  <span className="text-xs text-[#81756b]">KALA Ambient Vol. 1</span>
                </a>
              </li>
              <li>
                <a
                  className="text-[#d3c4b8] hover:text-[#fbeee7] transition-colors flex items-center gap-2"
                  href="https://tiktok.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>TikTok</span>
                  <span className="text-xs text-[#81756b]">@kala.space</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[#d3c4b8] text-xs gap-4 font-sans">
          <p>© 2025 KALA Coffee &amp; Space. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="font-light tracking-wide text-[#81756b]">Senopati • Jakarta Selatan</p>
        </div>
      </div>
    </footer>
  );
};
