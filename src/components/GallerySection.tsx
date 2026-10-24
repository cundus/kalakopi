import React, { useState } from 'react';
import { HERO_IMAGE, TABLE_IMAGE, CDN_HERO_IMAGE, CDN_TABLE_IMAGE } from '../data/coffeeData';

interface GallerySectionProps {
  onOpenGalleryItem: (id: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenGalleryItem }) => {
  const [heroSrc, setHeroSrc] = useState(HERO_IMAGE);
  const [tableSrc, setTableSrc] = useState(TABLE_IMAGE);

  return (
    <section className="py-20 md:py-28 bg-[#fef1ea] border-t border-[#d3c4b8]/35" id="galeri">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#705032] font-semibold block mb-2">
              Lensa &amp; Suasana
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[38px] text-[#201a16] font-normal leading-tight">
              Momen di <span className="italic text-[#705032]">KALA</span>
            </h2>
          </div>
          <p className="font-sans text-[13px] sm:text-[14px] text-[#81756b] mt-3 md:mt-0 font-light max-w-md">
            Menangkap detik-detik hening, senyuman hangat, dan aroma kopi yang membekas.
          </p>
        </div>

        {/* Asymmetrical Editorial Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Large Feature Image (7 cols) */}
          <div
            onClick={() => onOpenGalleryItem('bar-kopi')}
            className="md:col-span-7 relative group overflow-hidden border border-[#d3c4b8]/50 bg-[#fff8f5] cursor-pointer shadow-sm"
          >
            <div className="aspect-[16/10] overflow-hidden bg-[#ede0d9]">
              <img
                alt="Interior kafe KALA dengan bar espresso dan jendela kaca besar yang menghadap taman rimbun"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src={heroSrc}
                onError={() => {
                  if (heroSrc !== CDN_HERO_IMAGE) setHeroSrc(CDN_HERO_IMAGE);
                }}
              />
            </div>
            <div className="p-4 bg-[#fff8f5] flex justify-between items-center text-xs text-[#81756b] font-sans uppercase tracking-wider">
              <span className="font-semibold text-[#201a16]">01 / Pagi di Espresso Bar</span>
              <span className="text-[#705032] flex items-center gap-1">
                Barista Craftsmanship
                <span className="material-symbols-outlined text-[16px]">visibility</span>
              </span>
            </div>
          </div>

          {/* Vertical Complement Image (5 cols) */}
          <div
            onClick={() => onOpenGalleryItem('meja-temu')}
            className="md:col-span-5 relative group overflow-hidden border border-[#d3c4b8]/50 bg-[#fff8f5] cursor-pointer shadow-sm"
          >
            <div className="aspect-[16/10] md:aspect-[4/5] overflow-hidden bg-[#ede0d9]">
              <img
                alt="Meja marmer travertin dengan sajian iced latte dingin, cappuccino berbusa halus, dan butter croissant hangat"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src={tableSrc}
                onError={() => {
                  if (tableSrc !== CDN_TABLE_IMAGE) setTableSrc(CDN_TABLE_IMAGE);
                }}
              />
            </div>
            <div className="p-4 bg-[#fff8f5] flex justify-between items-center text-xs text-[#81756b] font-sans uppercase tracking-wider">
              <span className="font-semibold text-[#201a16]">02 / Ritual Secangkir Pagi</span>
              <span className="text-[#705032] flex items-center gap-1">
                Slow Sip &amp; Pastry
                <span className="material-symbols-outlined text-[16px]">visibility</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
