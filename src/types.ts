export interface MenuItem {
  id: string;
  name: string;
  category: 'specialty' | 'signature' | 'manual-brew' | 'bakery' | 'brunch';
  price: number;
  formattedPrice: string;
  badge?: string;
  description: string;
  tastingNotes?: string;
  flavorBarPercent?: number;
  provenance?: string;
  temperature?: 'Hot' | 'Iced' | 'Both';
  image?: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  area: 'Indoor Glasshouse' | 'Garden Courtyard' | 'Quiet Co-working Corner';
  notes?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  imageUrl: string;
  description: string;
}
