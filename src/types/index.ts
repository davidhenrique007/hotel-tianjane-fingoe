export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  capacity: string;
  priceHint: string;
  imageLabel: string;
  minGuests: number;  // ✅ NOVO
  maxGuests: number;  // ✅ NOVO
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: string;
  label: string;
  category: string;
}

export interface NavLink {
  label: string;
  href: string;
}