import React from 'react';
import { SIGNATURE_ITEMS } from '../data/coffeeData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onOpenMenu: () => void;
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenMenu, onSelectItem }) => {
  return (
    <section className="py-20 md:py-28 bg-[#fef1ea] border-y border-[#d3c4b8]/35" id="menu">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#705032] font-semibold block mb-2">
            Menu Pilihan
          </span>
          <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[38px] text-[#201a16] font-normal mb-3 leading-tight">
            Dibuat dengan <span className="italic text-[#705032]">Sepenuh Hati</span>
          </h2>
          <p className="font-sans text-[14px] sm:text-[15px] text-[#4f453c] font-light leading-relaxed">
            Kurasi biji kopi artisan pilihan Nusantara, racikan susu plant-based lembut, serta pastri hangat yang dipanggang segar setiap pagi.
          </p>
        </div>

        {/* Bento / Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SIGNATURE_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="bg-[#fff8f5] border border-[#d3c4b8]/50 p-6 sm:p-8 flex flex-col justify-between hover:border-[#705032]/80 transition-all duration-300 hover:shadow-md cursor-pointer group"
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <span className="px-2.5 py-1 text-[10px] font-sans uppercase tracking-widest border border-[#d3c4b8] text-[#705032] font-medium bg-[#f8ebe4]/40">
                    {item.badge}
                  </span>
                  <span className="font-sans text-[16px] text-[#705032] font-semibold tracking-tight">
                    {item.formattedPrice}
                  </span>
                </div>

                <h3 className="font-serif text-[20px] sm:text-[22px] text-[#201a16] mb-2.5 font-normal group-hover:text-[#705032] transition-colors">
                  {item.name}
                </h3>

                <p className="font-sans text-[13px] text-[#4f453c] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Sensory Flavor Bar */}
              <div className="pt-5 border-t border-[#d3c4b8]/40 space-y-2">
                <div className="flex justify-between text-[11px] font-sans text-[#81756b] uppercase tracking-wider font-medium">
                  <span>{item.category === 'bakery' ? 'Karakter' : 'Rasa / Tasting Notes'}</span>
                  <span className="text-[#201a16] font-normal truncate max-w-[150px] text-right">
                    {item.tastingNotes}
                  </span>
                </div>
                <div className="w-full bg-[#ede0d9] h-1.5 overflow-hidden flex rounded-full">
                  <div
                    className="bg-[#705032] h-full transition-all duration-700 ease-out"
                    style={{ width: `${item.flavorBarPercent || 80}%` }}
                  ></div>
                </div>
                <div className="pt-2 flex justify-between items-center text-[10px] uppercase tracking-widest text-[#81756b] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Pesan / Sesuaikan</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Footer CTA */}
        <div className="mt-12 md:mt-14 text-center">
          <button
            onClick={onOpenMenu}
            className="inline-flex items-center gap-2.5 text-[#201a16] font-sans text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.16em] pb-1 border-b border-[#705032] hover:text-[#705032] transition-all duration-300 cursor-pointer"
          >
            <span>Lihat Seluruh Sajian KALA (Manual Brew, Mocktails &amp; Warm Brunch)</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};
