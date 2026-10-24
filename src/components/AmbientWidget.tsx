import React, { useState, useEffect } from 'react';
import { ambientSound } from '../services/ambientAudio';

export const AmbientWidget: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const unsub = ambientSound.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsub;
  }, []);

  const handleToggle = async () => {
    await ambientSound.toggle();
  };

  return (
    <aside className="fixed bottom-4 right-4 sm:right-6 z-40 bg-[#fff8f5]/95 border border-[#d3c4b8]/70 shadow-lg backdrop-blur-md px-4 py-2.5 max-w-xs sm:max-w-sm transition-all duration-300">
      <div className="flex items-center space-x-3">
        <div className="relative flex items-center justify-center">
          <div
            className={`w-2.5 h-2.5 rounded-full bg-[#705032] ${
              isPlaying ? 'animate-ping' : ''
            }`}
          ></div>
          <div className="absolute w-2 h-2 rounded-full bg-[#8b6848]"></div>
        </div>

        <div className="flex flex-col flex-1 min-w-0">
          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#81756b] font-semibold">
            KALA Atmosphere Playlist
          </span>
          <span className="font-sans text-xs font-medium text-[#201a16] truncate">
            {isPlaying ? 'Memutar: Afternoon Lo-Fi & Acoustic' : 'Afternoon Lo-Fi & Acoustic Drift'}
          </span>
        </div>

        <button
          onClick={handleToggle}
          title={isPlaying ? 'Hentikan Audio' : 'Dengarkan Suasana KALA'}
          aria-label={isPlaying ? 'Hentikan Audio Suasana' : 'Putar Audio Suasana'}
          className="text-[#705032] hover:text-[#8b6848] p-1.5 rounded-full hover:bg-[#ede0d9]/60 transition-colors flex items-center justify-center cursor-pointer"
        >
          <span
            className={`material-symbols-outlined text-[20px] ${
              isPlaying ? 'animate-pulse' : ''
            }`}
          >
            {isPlaying ? 'pause_circle' : 'graphic_eq'}
          </span>
        </button>
      </div>
    </aside>
  );
};
