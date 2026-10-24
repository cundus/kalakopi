import React, { useState } from 'react';
import { ALL_MENU_ITEMS } from '../data/coffeeData';
import { MenuItem } from '../types';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem?: MenuItem | null;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  selectedItem: initialItem
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'signature' | 'manual-brew' | 'specialty' | 'bakery' | 'brunch'>('all');
  const [activeItem, setActiveItem] = useState<MenuItem | null>(initialItem || null);

  // Customization state
  const [tempChoice, setTempChoice] = useState<'Iced' | 'Hot'>('Iced');
  const [milkChoice, setMilkChoice] = useState<'Fresh Milk' | 'Oat Milk' | 'Almond Milk'>('Fresh Milk');
  const [sweetnessChoice, setSweetnessChoice] = useState<'Normal 100%' | 'Less Sugar 70%' | 'No Sugar'>('Normal 100%');
  const [orderBag, setOrderBag] = useState<Array<{ item: MenuItem; notes: string; quantity: number }>>([]);
  const [showBag, setShowBag] = useState(false);

  React.useEffect(() => {
    if (initialItem) {
      setActiveItem(initialItem);
      if (initialItem.temperature === 'Hot') {
        setTempChoice('Hot');
      } else {
        setTempChoice('Iced');
      }
    }
  }, [initialItem]);

  if (!isOpen) return null;

  const filteredItems = ALL_MENU_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const handleAddToBag = (item: MenuItem) => {
    const notes = `${tempChoice} • ${milkChoice} • ${sweetnessChoice}`;
    setOrderBag((prev) => {
      const existing = prev.find((p) => p.item.id === item.id && p.notes === notes);
      if (existing) {
        return prev.map((p) =>
          p.item.id === item.id && p.notes === notes
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      return [...prev, { item, notes, quantity: 1 }];
    });
    setShowBag(true);
  };

  const bagTotal = orderBag.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    const lines = orderBag.map(
      (b) => `• ${b.item.name} (${b.quantity}x) - ${b.notes} = Rp ${(b.item.price * b.quantity).toLocaleString('id-ID')}`
    );
    const text = encodeURIComponent(
      `Halo KALA Coffee & Space, saya ingin memesan meja / takeaway:\n\n${lines.join(
        '\n'
      )}\n\nTotal: Rp ${bagTotal.toLocaleString('id-ID')}\nMohon konfirmasi ketersediaan.`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#fff8f5] w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col border border-[#d3c4b8] shadow-2xl relative">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-[#d3c4b8]/50 flex items-center justify-between bg-[#f8ebe4]">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl sm:text-2xl text-[#201a16] font-normal">
              Buku Menu KALA
            </span>
            <span className="text-[10px] uppercase font-sans tracking-widest px-2 py-0.5 border border-[#8b6848] text-[#8b6848] font-semibold">
              Artisanal Curation
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowBag(!showBag)}
              className="relative px-3 py-1.5 bg-[#362f2b] text-[#fbeee7] text-xs font-sans uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#8b6848] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
              <span>Keranjang ({orderBag.reduce((a, b) => a + b.quantity, 0)})</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Tutup Menu"
              className="p-1.5 text-[#201a16] hover:text-[#705032] hover:bg-[#ede0d9] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main List Section */}
          <div className={`${activeItem || showBag ? 'md:col-span-7' : 'md:col-span-12'} space-y-5`}>
            {/* Category Filter Pills (Functional Buttons) */}
            <div className="flex flex-wrap gap-1.5 pb-2 border-b border-[#d3c4b8]/40">
              {[
                { id: 'all', label: 'Semua Sajian' },
                { id: 'signature', label: 'House Signature' },
                { id: 'manual-brew', label: 'Manual Pour Over' },
                { id: 'specialty', label: 'Espresso Bar' },
                { id: 'bakery', label: 'Pastry & Bakery' },
                { id: 'brunch', label: 'Warm Brunch' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-3 py-1.5 text-[11px] font-sans uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#705032] text-white shadow-sm'
                      : 'bg-[#f8ebe4] text-[#4f453c] hover:bg-[#ede0d9]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Item List */}
            <div className="space-y-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`p-4 border transition-all cursor-pointer ${
                    activeItem?.id === item.id
                      ? 'border-[#705032] bg-[#f8ebe4]/80 shadow-sm'
                      : 'border-[#d3c4b8]/50 bg-white hover:border-[#705032]/60 hover:bg-[#fef1ea]/30'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-[17px] text-[#201a16] font-medium">
                          {item.name}
                        </h4>
                        {item.badge && (
                          <span className="text-[9px] uppercase font-sans tracking-widest px-1.5 py-0.5 bg-[#ede0d9] text-[#705032]">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-sans text-[12px] text-[#4f453c] font-light mt-1 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-sans text-sm font-semibold text-[#705032] ml-4 shrink-0">
                      {item.formattedPrice}
                    </span>
                  </div>

                  {item.tastingNotes && (
                    <div className="mt-2.5 pt-2 border-t border-[#d3c4b8]/30 flex items-center justify-between text-[11px] font-sans text-[#81756b]">
                      <span>Catatan Rasa: {item.tastingNotes}</span>
                      <span className="text-[#705032] font-medium text-[10px] uppercase">
                        Detail &amp; Pesan →
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Customization or Cart */}
          {(activeItem || showBag) && (
            <div className="md:col-span-5 bg-[#f8ebe4] border border-[#d3c4b8]/60 p-5 space-y-5 h-fit">
              {showBag ? (
                /* Cart Drawer */
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-[#d3c4b8]/50">
                    <h3 className="font-serif text-lg text-[#201a16]">Pesanan Anda</h3>
                    <button
                      onClick={() => setShowBag(false)}
                      className="text-xs text-[#81756b] hover:text-[#201a16] underline"
                    >
                      Kembali ke Kustomisasi
                    </button>
                  </div>

                  {orderBag.length === 0 ? (
                    <p className="text-xs text-[#81756b] italic py-6 text-center">
                      Keranjang masih kosong. Pilih sajian untuk ditambahkan.
                    </p>
                  ) : (
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                      {orderBag.map((entry, index) => (
                        <div key={index} className="p-2.5 bg-white border border-[#d3c4b8]/50 text-xs">
                          <div className="flex justify-between font-medium text-[#201a16]">
                            <span>
                              {entry.quantity}x {entry.item.name}
                            </span>
                            <span>Rp {(entry.item.price * entry.quantity).toLocaleString('id-ID')}</span>
                          </div>
                          <p className="text-[10px] text-[#81756b] mt-0.5">{entry.notes}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {orderBag.length > 0 && (
                    <div className="pt-3 border-t border-[#d3c4b8]/50 space-y-3">
                      <div className="flex justify-between font-serif text-base text-[#201a16]">
                        <span>Total Pembayaran:</span>
                        <span className="font-semibold text-[#705032]">
                          Rp {bagTotal.toLocaleString('id-ID')}
                        </span>
                      </div>
                      <button
                        onClick={handleCheckoutWhatsApp}
                        className="w-full py-3 bg-[#362f2b] text-[#fbeee7] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#705032] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">chat</span>
                        <span>Kirim Pesanan ke WhatsApp</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : activeItem ? (
                /* Item Detail & Customization */
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-widest text-[#81756b] font-semibold">
                      {activeItem.category}
                    </span>
                    <h3 className="font-serif text-xl text-[#201a16] mt-0.5">
                      {activeItem.name}
                    </h3>
                    <p className="text-lg font-sans font-semibold text-[#705032] mt-1">
                      {activeItem.formattedPrice}
                    </p>
                    <p className="font-sans text-xs text-[#4f453c] mt-2 font-light leading-relaxed">
                      {activeItem.description}
                    </p>
                  </div>

                  {activeItem.provenance && (
                    <div className="p-2.5 bg-white border border-[#d3c4b8]/40 text-xs">
                      <span className="text-[9px] uppercase tracking-wider text-[#81756b] block font-semibold">
                        Asal Biji &amp; Proses
                      </span>
                      <p className="text-[#201a16] font-medium mt-0.5">{activeItem.provenance}</p>
                    </div>
                  )}

                  {/* Temperature selector */}
                  {activeItem.temperature === 'Both' && (
                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-sans tracking-widest text-[#81756b] font-semibold block">
                        Penyajian
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {(['Iced', 'Hot'] as const).map((t) => (
                          <button
                            key={t}
                            onClick={() => setTempChoice(t)}
                            className={`py-1.5 text-xs font-sans uppercase tracking-wider font-medium border transition-colors cursor-pointer ${
                              tempChoice === t
                                ? 'border-[#705032] bg-[#705032] text-white'
                                : 'border-[#d3c4b8] bg-white text-[#201a16]'
                            }`}
                          >
                            {t === 'Iced' ? '❄️ Dingin (Es)' : '☕ Panas (Hot)'}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Milk Options if coffee */}
                  {activeItem.category === 'specialty' || activeItem.category === 'signature' ? (
                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-sans tracking-widest text-[#81756b] font-semibold block">
                        Pilihan Susu
                      </span>
                      <div className="grid grid-cols-3 gap-1.5">
                        {(['Fresh Milk', 'Oat Milk', 'Almond Milk'] as const).map((m) => (
                          <button
                            key={m}
                            onClick={() => setMilkChoice(m)}
                            className={`py-1 text-[11px] font-sans border transition-colors cursor-pointer ${
                              milkChoice === m
                                ? 'border-[#705032] bg-[#705032] text-white font-medium'
                                : 'border-[#d3c4b8] bg-white text-[#4f453c]'
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {/* Sweetness */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase font-sans tracking-widest text-[#81756b] font-semibold block">
                      Tingkat Manis
                    </span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {(['Normal 100%', 'Less Sugar 70%', 'No Sugar'] as const).map((s) => (
                        <button
                          key={s}
                          onClick={() => setSweetnessChoice(s)}
                          className={`py-1 text-[11px] font-sans border transition-colors cursor-pointer ${
                            sweetnessChoice === s
                              ? 'border-[#705032] bg-[#705032] text-white font-medium'
                              : 'border-[#d3c4b8] bg-white text-[#4f453c]'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddToBag(activeItem)}
                    className="w-full py-3 bg-[#705032] text-white text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#8b6848] transition-colors cursor-pointer shadow-sm"
                  >
                    + Tambah ke Keranjang Pesanan
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
