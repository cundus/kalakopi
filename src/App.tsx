/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { MenuSection } from './components/MenuSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { AmbientWidget } from './components/AmbientWidget';
import { MenuModal } from './components/MenuModal';
import { ReservationModal } from './components/ReservationModal';
import { GalleryModal } from './components/GalleryModal';
import { MenuItem } from './types';

export default function App() {
  const [viewMode, setViewMode] = useState<'responsive' | 'desktop' | 'mobile'>('responsive');
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [galleryModalItemId, setGalleryModalItemId] = useState<string | null>(null);

  const handleOpenMenu = () => {
    setSelectedMenuItem(null);
    setMenuModalOpen(true);
  };

  const handleSelectItem = (item: MenuItem) => {
    setSelectedMenuItem(item);
    setMenuModalOpen(true);
  };

  const handleOpenReservation = () => {
    setReservationModalOpen(true);
  };

  const handleOpenGalleryItem = (id: string) => {
    setGalleryModalItemId(id);
  };

  // Render content according to viewMode
  if (viewMode === 'mobile') {
    return (
      <div className="min-h-screen bg-[#ede0d9] py-4 sm:py-8 flex flex-col items-center justify-start">
        {/* Device Switcher Header */}
        <div className="w-full max-w-[430px] mb-3 px-2 flex justify-between items-center text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#705032]"></span>
            <span className="font-sans font-semibold text-[#201a16] text-[11px] uppercase tracking-wider">
              Pratinjau Layar Ponsel
            </span>
          </div>
          <button
            onClick={() => setViewMode('responsive')}
            className="px-3 py-1 bg-[#362f2b] text-[#fbeee7] text-[11px] font-sans uppercase tracking-widest hover:bg-[#705032] transition-colors"
          >
            Layar Penuh (Responsif)
          </button>
        </div>

        {/* Mobile Device Frame */}
        <div className="w-full max-w-[420px] bg-[#fff8f5] shadow-2xl border-4 border-[#362f2b] rounded-2xl overflow-hidden flex flex-col relative">
          <Header
            onOpenReservation={handleOpenReservation}
            onOpenMenu={handleOpenMenu}
            viewMode={viewMode}
            onChangeViewMode={setViewMode}
          />
          <main className="flex-grow">
            <HeroSection onOpenMenu={handleOpenMenu} isMobileFrame={true} />
            <StorySection onOpenGalleryItem={handleOpenGalleryItem} />
            <MenuSection onOpenMenu={handleOpenMenu} onSelectItem={handleSelectItem} />
            <ExperienceSection />
            <GallerySection onOpenGalleryItem={handleOpenGalleryItem} />
            <LocationSection onOpenReservation={handleOpenReservation} />
          </main>
          <Footer />
        </div>

        <MenuModal
          isOpen={menuModalOpen}
          onClose={() => setMenuModalOpen(false)}
          selectedItem={selectedMenuItem}
        />
        <ReservationModal
          isOpen={reservationModalOpen}
          onClose={() => setReservationModalOpen(false)}
        />
        <GalleryModal
          itemId={galleryModalItemId}
          onClose={() => setGalleryModalItemId(null)}
        />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-[#fff8f5] flex flex-col selection:bg-[#8b6848] selection:text-[#fff8f5] ${viewMode === 'desktop' ? 'max-w-[1440px] mx-auto shadow-2xl border-x border-[#d3c4b8]/40' : 'w-full'}`}>
      <Header
        onOpenReservation={handleOpenReservation}
        onOpenMenu={handleOpenMenu}
        viewMode={viewMode}
        onChangeViewMode={setViewMode}
      />

      <main className="flex-grow">
        <HeroSection onOpenMenu={handleOpenMenu} />
        <StorySection onOpenGalleryItem={handleOpenGalleryItem} />
        <MenuSection onOpenMenu={handleOpenMenu} onSelectItem={handleSelectItem} />
        <ExperienceSection />
        <GallerySection onOpenGalleryItem={handleOpenGalleryItem} />
        <LocationSection onOpenReservation={handleOpenReservation} />
      </main>

      <Footer />

      {/* Floating Ambient Atmosphere Player */}
      <AmbientWidget />

      {/* Interactive Modals */}
      <MenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
        selectedItem={selectedMenuItem}
      />

      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />

      <GalleryModal
        itemId={galleryModalItemId}
        onClose={() => setGalleryModalItemId(null)}
      />
    </div>
  );
}
