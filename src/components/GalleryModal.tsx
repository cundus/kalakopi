import React, { useState } from 'react';
import { GALLERY_ITEMS, CDN_HERO_IMAGE, CDN_TABLE_IMAGE } from '../data/coffeeData';

interface GalleryModalProps {
  itemId: string | null;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ itemId, onClose }) => {
  const item = GALLERY_ITEMS.find((g) => g.id === itemId);
  const [imgSrc, setImgSrc] = useState(item?.imageUrl || '');

  React.useEffect(() => {
    if (item) {
      setImgSrc(item.imageUrl);
    }
  }, [item]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#fff8f5] w-full max-w-3xl overflow-hidden border border-[#d3c4b8] shadow-2xl relative flex flex-col">
        {/* Top bar */}
        <div className="px-5 py-3.5 bg-[#f8ebe4] border-b border-[#d3c4b8]/50 flex justify-between items-center">
          <div>
            <span className="text-[10px] uppercase font-sans tracking-widest text-[#81756b] font-semibold">
              KALA Space Journal • {item.time}
            </span>
            <h3 className="font-serif text-lg text-[#201a16]">{item.title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="p-1 text-[#201a16] hover:text-[#705032] cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Media Frame */}
        <div className="aspect-[16/10] bg-[#ede0d9] overflow-hidden relative">
          <img
            src={imgSrc}
            alt={item.title}
            className="w-full h-full object-cover"
            onError={() => {
              if (item.id === 'bar-kopi') setImgSrc(CDN_HERO_IMAGE);
              if (item.id === 'meja-temu') setImgSrc(CDN_TABLE_IMAGE);
            }}
          />
        </div>

        {/* Caption story */}
        <div className="p-5 bg-[#fff8f5] flex justify-between items-center text-xs text-[#4f453c] font-sans">
          <p className="max-w-xl font-light leading-relaxed">{item.description}</p>
          <span className="px-3 py-1 bg-[#f8ebe4] text-[#705032] font-semibold uppercase tracking-wider text-[10px] shrink-0 ml-4">
            {item.subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};
