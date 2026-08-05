export const siteConfig = {
  hotelName: "Hotel Tianjane Fingoe",
  shortName: "Tianjane Fingoe",
  tagline: "Uma estadia confortável no coração de Fingoe",
  location: "Fingoe · Marávia · Tete",
  addressLine: "Fingoe, Marávia, Tete",
  whatsappNumber: "258872626343", 
  phoneDisplay: "+258 84 4626343", 
  email: "reservas@tianjanefingoe.co.mz", 
  socials: {
    facebook: "#",
    instagram: "#",
  },
  stats: [
    { label: "Quartos", value: "18" },
    { label: "Anos de experiência", value: "10+" },
    { label: "Hóspedes satisfeitos", value: "1500+" },
  ],
};

export const navLinks = [
  { label: "Início", href: "/" },
  { label: "Quartos", href: "#rooms" },
  { label: "Serviços", href: "#services" },
  { label: "Galeria", href: "#gallery" },
  { label: "Localização", href: "#location" },
  { label: "Contacto", href: "#contact" },
];

export function whatsappLink(message: string): string {
  const number = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}