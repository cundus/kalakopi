import React, { useState } from 'react';
import { ReservationData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<ReservationData>({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '14:00',
    guests: 2,
    area: 'Indoor Glasshouse',
    notes: ''
  });

  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo KALA Coffee & Space Senopati,\nSaya ingin melakukan reservasi meja:\n\nNama: ${form.name}\nWhatsApp: ${form.phone}\nTanggal: ${form.date}\nJam: ${form.time} WIB\nJumlah Tamu: ${form.guests} orang\nArea: ${form.area}\nCatatan: ${form.notes || '-'}\n\nMohon konfirmasi ketersediaan meja. Terima kasih!`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#fff8f5] w-full max-w-lg overflow-hidden border border-[#d3c4b8] shadow-2xl relative">
        {/* Header */}
        <div className="px-6 py-4 bg-[#f8ebe4] border-b border-[#d3c4b8]/50 flex justify-between items-center">
          <div>
            <h3 className="font-serif text-xl text-[#201a16] font-medium">Reservasi Meja KALA</h3>
            <p className="font-sans text-[11px] text-[#81756b] uppercase tracking-wider">
              Senopati • Jakarta Selatan
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="p-1 text-[#201a16] hover:text-[#705032] cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {confirmed ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-[#d8e3d2] text-[#576154] rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-2xl">check</span>
              </div>
              <h4 className="font-serif text-2xl text-[#201a16]">Reservasi Tercatat</h4>
              <p className="font-sans text-xs text-[#4f453c] max-w-xs mx-auto leading-relaxed">
                Terima kasih, <strong>{form.name}</strong>. Meja untuk {form.guests} orang di{' '}
                <strong>{form.area}</strong> pada {form.date} pukul {form.time} WIB telah kami siapkan.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full py-3 bg-[#362f2b] text-[#fbeee7] font-sans text-xs font-semibold uppercase tracking-widest hover:bg-[#705032] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Kirim Konfirmasi ke WhatsApp KALA</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#81756b] font-semibold mb-1">
                  Nama Pemesan
                </label>
                <input
                  required
                  type="text"
                  placeholder="Contoh: Rian Pratama"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#d3c4b8] text-sm text-[#201a16] focus:outline-none focus:border-[#705032]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#81756b] font-semibold mb-1">
                  Nomor WhatsApp
                </label>
                <input
                  required
                  type="tel"
                  placeholder="0812xxxxxxx"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#d3c4b8] text-sm text-[#201a16] focus:outline-none focus:border-[#705032]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#81756b] font-semibold mb-1">
                    Tanggal
                  </label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#d3c4b8] text-sm text-[#201a16] focus:outline-none focus:border-[#705032]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#81756b] font-semibold mb-1">
                    Waktu / Jam
                  </label>
                  <input
                    type="time"
                    required
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#d3c4b8] text-sm text-[#201a16] focus:outline-none focus:border-[#705032]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#81756b] font-semibold mb-1">
                    Jumlah Tamu
                  </label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-white border border-[#d3c4b8] text-sm text-[#201a16] focus:outline-none focus:border-[#705032]"
                  >
                    {[1, 2, 3, 4, 5, 6, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} Orang
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#81756b] font-semibold mb-1">
                    Pilihan Area
                  </label>
                  <select
                    value={form.area}
                    onChange={(e) =>
                      setForm({ ...form, area: e.target.value as ReservationData['area'] })
                    }
                    className="w-full px-3 py-2 bg-white border border-[#d3c4b8] text-sm text-[#201a16] focus:outline-none focus:border-[#705032]"
                  >
                    <option value="Indoor Glasshouse">Indoor Glasshouse</option>
                    <option value="Garden Courtyard">Garden Courtyard (Taman)</option>
                    <option value="Quiet Co-working Corner">Quiet Co-working Corner</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#81756b] font-semibold mb-1">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Misal: Meja dekat jendela dengan colokan listrik..."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#d3c4b8] text-sm text-[#201a16] focus:outline-none focus:border-[#705032]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#705032] text-white font-sans text-xs font-semibold uppercase tracking-widest hover:bg-[#8b6848] transition-colors cursor-pointer shadow-sm"
              >
                Konfirmasi Reservasi
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
