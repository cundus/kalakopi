import React from 'react';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#fff8f5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-16 pb-8 border-b border-[#d3c4b8]/35">
          <div>
            <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#705032] font-semibold block mb-2">
              Ruang &amp; Rasa
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[38px] text-[#201a16] font-normal leading-tight">
              Sebuah Pengalaman Menyeluruh
            </h2>
          </div>
          <p className="font-sans text-[13px] sm:text-[14px] text-[#81756b] max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Setiap jengkal KALA dirancang dengan intensi: menjaga ketenangan indra dan mengembalikan kehangatan hubungan antar-manusia.
          </p>
        </div>

        {/* Asymmetric 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {/* Pillar 1 */}
          <div className="space-y-3.5 bg-[#fef1ea]/30 p-6 md:p-0 border md:border-none border-[#d3c4b8]/30">
            <span className="font-serif text-[32px] sm:text-[36px] text-[#d3c4b8] font-light block leading-none">
              01
            </span>
            <h3 className="font-serif text-[20px] sm:text-[22px] text-[#201a16] font-normal">
              Biji Pilihan &amp; Presisi Ekstraksi
            </h3>
            <p className="font-sans text-[14px] text-[#4f453c] font-light leading-relaxed">
              Kami bekerjasama langsung dengan kelompok tani lokal, memastikan proses panen ceri merah matang sempurna dan uji cita rasa cupping berstandar specialty internasional.
            </p>
            <div className="pt-2 text-[#705032] font-sans font-medium uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">nest_eco_leaf</span>
              Ethically Sourced Beans
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="space-y-3.5 bg-[#fef1ea]/30 p-6 md:p-0 border md:border-none border-[#d3c4b8]/30">
            <span className="font-serif text-[32px] sm:text-[36px] text-[#d3c4b8] font-light block leading-none">
              02
            </span>
            <h3 className="font-serif text-[20px] sm:text-[22px] text-[#201a16] font-normal">
              Arsitektur Hangat &amp; Cahaya Alami
            </h3>
            <p className="font-sans text-[14px] text-[#4f453c] font-light leading-relaxed">
              Paduan semen ekspos bertekstur, kayu jati reclaimed, jendela kaca berukuran besar, dan dedaunan monstera rindang mengundang sinar mentari masuk mengisi ruang dengan kelembutan.
            </p>
            <div className="pt-2 text-[#705032] font-sans font-medium uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">wb_sunny</span>
              Natural Light Sanctuary
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="space-y-3.5 bg-[#fef1ea]/30 p-6 md:p-0 border md:border-none border-[#d3c4b8]/30">
            <span className="font-serif text-[32px] sm:text-[36px] text-[#d3c4b8] font-light block leading-none">
              03
            </span>
            <h3 className="font-serif text-[20px] sm:text-[22px] text-[#201a16] font-normal">
              Momen Bertemu &amp; Bekerja Tenang
            </h3>
            <p className="font-sans text-[14px] text-[#4f453c] font-light leading-relaxed">
              Dilengkapi koneksi Wi-Fi berkecepatan stabil, stopkontak terintegrasi rapi di setiap sudut meja, serta pilihan playlist lo-fi akustik yang menenangkan untuk fokus dan kreativitas Anda.
            </p>
            <div className="pt-2 text-[#705032] font-sans font-medium uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">wifi</span>
              Quiet Co-working Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
