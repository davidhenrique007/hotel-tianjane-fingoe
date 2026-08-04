export const siteConfig = {
  hotelName: "Hotel Tianjane Fingoe",
  shortName: "Tianjane Fingoe",
  tagline: "Uma estadia confortável no coração de Fingoe",
  location: "Fingoe · Marávia · Tete",
  addressLine: "Fingoe, Marávia, Tete",
  whatsappNumber: "25884XXXXXXX",
  phoneDisplay: "+258 84 XXX XXX",
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

export function whatsappLink(message: string): string {
  const number = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
