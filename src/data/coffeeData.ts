import { MenuItem, GalleryItem } from '../types';

export const HERO_IMAGE = '/assets/aistudio/Image_1_5ae1fb62.jpeg';
export const TABLE_IMAGE = '/assets/aistudio/Image_2_1b2cadfa.jpeg';

export const CDN_HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVOP02Me0bs1DaNqUrUHT_HP5g0wnGDqMTYXYvHYPBuqAPij7PAOgT8MQUihMUwGLEaSEfloW5ucQNTItVml8CqXmwI1J31aJjMEYXwQ_UkGCpCvoliN9uPbpt94j52dYhiCWXbM_cWLrfP5N_taLUGDcAVJuG4ZolWNEFYX6Ccb7mrRRy8AXAP4bO_7-lJ2fC8gS74mE_YjnqaxQbchub8Im8-E3d4QrDO1W_A__noccr7fzFYmD98w';
export const CDN_TABLE_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjFzpls2MHEecVBYp8iF7R_sLftvDkxU4SmAcBYEcfUeVxwFJefc1mZl3jJPVogsv-CO4x7mB_W_M-3pyKSEsW8OYVxWR9-_PWQU5N8mnP_HeYBXjqcD99HKXYIIp5-9AaE49savW2a6RKZAVv1yT-vRoVsxcmcZs9r7EEoAjllPudUOfQ0wfFUyaT6WfvvWwVhDctFi2Ae0ypmlDJdY4OmhodWvjXbDZRaTzL9yQEXjCLj8fnjQkQMQ';

export const SIGNATURE_ITEMS: MenuItem[] = [
  {
    id: 'kala-signature-latte',
    name: 'KALA Signature Latte',
    category: 'signature',
    badge: 'House Specialty',
    price: 32000,
    formattedPrice: 'Rp 32.000',
    description: 'Double shot espresso house blend (Sumatra Gayo & Ciwidey), steamed velvety milk lembut, sentuhan raw brown sugar organik, dan esens vanila Madagaskar alami.',
    tastingNotes: 'Caramel • Hazelnut • Velvety',
    flavorBarPercent: 82,
    temperature: 'Both',
    provenance: 'Gayo Takengon & Gunung Tilu Ciwidey'
  },
  {
    id: 'aren-cold-brew',
    name: 'Aren Cold Brew',
    category: 'signature',
    badge: 'Slow Steeped',
    price: 35000,
    formattedPrice: 'Rp 35.000',
    description: 'Diseduh lambat selama 16 jam menggunakan air bersuhu rendah. Dipadukan dengan gula aren murni Lebak, susu segar, dan lapisan cold coconut cloud yang gurih.',
    tastingNotes: 'Brown Sugar • Dark Cacao • Refreshing',
    flavorBarPercent: 90,
    temperature: 'Iced',
    provenance: 'Flores Bajawa & Robusta Dampit'
  },
  {
    id: 'artisan-butter-croissant',
    name: 'Artisan Butter Croissant',
    category: 'bakery',
    badge: 'Fresh Baked',
    price: 28000,
    formattedPrice: 'Rp 28.000',
    description: 'Pastri klasik bergaya Prancis menggunakan mentega Normandy AOP berkualitas tinggi. Kulit keemasan renyah bertingkat dengan bagian dalam berongga sarang madu yang lembut.',
    tastingNotes: 'Flaky • Buttery • Golden Crispy',
    flavorBarPercent: 75,
    provenance: 'French Normandy Butter AOP'
  }
];

export const ALL_MENU_ITEMS: MenuItem[] = [
  ...SIGNATURE_ITEMS,
  {
    id: 'manual-v60-gayo',
    name: 'Single Origin V60 — Aceh Gayo Wine',
    category: 'manual-brew',
    badge: 'Pour Over',
    price: 38000,
    formattedPrice: 'Rp 38.000',
    description: 'Ekstraksi manual pour over dengan filter paper abaca jepang. Menghadirkan karakter buah fermentasi yang bersih dan aroma floral yang semerbak.',
    tastingNotes: 'Jackfruit • Red Wine • Jasmine Floral',
    flavorBarPercent: 88,
    provenance: 'Takengon, 1,500m ASL, Natural Anaerobic'
  },
  {
    id: 'manual-flores-bajawa',
    name: 'Single Origin Kalita — Flores Bajawa',
    category: 'manual-brew',
    badge: 'Slow Drip',
    price: 36000,
    formattedPrice: 'Rp 36.000',
    description: 'Diseduh dengan flat-bed dripper untuk ekstraksi sweetness maksimal dengan aftertaste karamel dan cokelat rempah yang panjang.',
    tastingNotes: 'Sweet Tobacco • Milk Chocolate • Citrus',
    flavorBarPercent: 84,
    provenance: 'Bajawa, 1,400m ASL, Fully Washed'
  },
  {
    id: 'flat-white',
    name: 'Artisanal Flat White',
    category: 'specialty',
    badge: 'Espresso Bar',
    price: 30000,
    formattedPrice: 'Rp 30.000',
    description: 'Ristretto ganda dengan microfoam susu yang sangat halus, menonjolkan kepekatan rasa kopi dengan sentuhan susu manis seimbang.',
    tastingNotes: 'Roasted Almond • Molasses • Silk',
    flavorBarPercent: 80,
    temperature: 'Hot',
    provenance: 'House Blend 70% Arabica / 30% Fine Robusta'
  },
  {
    id: 'pandan-coconut-cloud',
    name: 'Pandan Coconut Espresso',
    category: 'signature',
    badge: 'Botanical',
    price: 36000,
    formattedPrice: 'Rp 36.000',
    description: 'Espresso terkonsentrasi di atas sari daun pandan Suji segar, air kelapa muda, dan foam kelapa gurih.',
    tastingNotes: 'Fragrant Pandan • Coconut Sweetness • Clean Espresso',
    flavorBarPercent: 86,
    temperature: 'Iced'
  },
  {
    id: 'almond-pain-chocolat',
    name: 'Pain au Chocolat Amande',
    category: 'bakery',
    badge: 'Fresh Baked',
    price: 34000,
    formattedPrice: 'Rp 34.000',
    description: 'Croissant cokelat dengan isian batangan cokelat Belgia 54%, krim almond frangipane, dan taburan kacang almond panggang renyah.',
    tastingNotes: 'Valrhona Chocolate • Roasted Almond • Sweet Cream',
    flavorBarPercent: 85
  },
  {
    id: 'sourdough-avocado-tartine',
    name: 'Sourdough Avocado & Poached Egg',
    category: 'brunch',
    badge: 'Warm Brunch',
    price: 52000,
    formattedPrice: 'Rp 52.000',
    description: 'Roti sourdough artisan bakar, tumbukan alpukat mentega segar, telur omega poached lembut, taburan dukkah rempah dan minyak zaitun extra virgin.',
    tastingNotes: 'Creamy Avocado • Nutty Dukkah • Tangy Sourdough',
    flavorBarPercent: 92
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'bar-kopi',
    title: '01 / Pagi di Espresso Bar',
    subtitle: 'Barista Craftsmanship',
    time: '08:15 WIB',
    imageUrl: HERO_IMAGE,
    description: 'Suasana fajar di counter bar KALA. Sinar mentari timur menembus jendela kaca tinggi membingkai barista yang sedang mengkalibrasi rasio ekstraksi espresso pagi.'
  },
  {
    id: 'meja-temu',
    title: '02 / Ritual Secangkir Pagi',
    subtitle: 'Slow Sip & Pastry',
    time: '09:30 WIB',
    imageUrl: TABLE_IMAGE,
    description: 'Di atas meja batu travertin alami, secangkir KALA Signature Latte berpadu harmonis dengan Aren Cold Brew dingin dan croissant mentega Normandy yang baru keluar dari oven.'
  }
];

export const AMENITIES = [
  { icon: 'local_parking', label: 'Parkir Luas & Valet' },
  { icon: 'park', label: 'Area Outdoor Taman' },
  { icon: 'power', label: 'Colokan Setiap Meja' },
  { icon: 'pets', label: 'Pet-Friendly Courtyard' },
  { icon: 'wifi', label: 'Wi-Fi 150 Mbps Stabil' },
  { icon: 'volume_mute', label: 'Zona Hening Fokus' }
];
