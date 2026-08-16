"use client";

import { motion } from "framer-motion";
import { Car, MapPin, Navigation, Phone } from "lucide-react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Button from "../../components/Button/Button";
import { siteConfig, whatsappLink } from "../../data/site";

const nearby = [
  "Centro de Marávia (5 min)",
  "Posto Administrativo de Fingoe",
  "Margem do Rio Zambeze",
  "Mercado local",
];

export default function Location() {
  return (
    <section id="localizacao" className="bg-cream-soft pt-8 pb-12 md:pt-8 md:pb-12">
      <div className="container-page flex flex-col gap-8 md:gap-14">
        <SectionHeading
          eyebrow="Onde estamos"
          title="Fingoe · Marávia · Tete"
          description="Uma localização que combina tranquilidade com acesso fácil à vila e ao que a região tem de melhor."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-3 lg:flex lg:flex-col lg:gap-5">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/8 text-clay ring-1 ring-forest/10">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest">Endereço</p>
                  <p className="text-sm text-charcoal/70">{siteConfig.location}</p>
                </div>
              </div>

              <div className="col-span-2 flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/8 text-clay ring-1 ring-forest/10">
                  <Navigation size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest">Pontos próximos</p>
                  <ul className="mt-1 grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-charcoal/70 sm:text-sm">
                    {nearby.map((place) => (
                      <li key={place}>• {place}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/8 text-clay ring-1 ring-forest/10">
                  <Car size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest">Como chegar</p>
                  <p className="text-sm text-charcoal/70">
                    Fácil acesso pela estrada principal. Estacionamento disponível no local.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-charcoal/10 pt-4 sm:flex sm:flex-row sm:pt-6">
              <Button
                href={whatsappLink("Olá! Preciso de indicações para chegar ao Hotel Tianjane Fingoe.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir indicações
              </Button>
              <Button href={`tel:+${siteConfig.whatsappNumber}`} variant="outline-light" icon={<Phone size={16} />}>
                Ligar agora
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl shadow-elevated ring-1 ring-forest/10"
          >
            <iframe
              title="Localização do Hotel Tianjane Fingoe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61229.49772248081!2d33.05745977552753!3d-16.165818737042836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x193b0f85a8e7b7b5%3A0x8f8b0b8b8b8b8b8b!2sMar%C3%A1via%2C%20Tete%2C%20Mozambique!5e0!3m2!1sen!2s!4v1699999999999"
              width="100%"
              height="100%"
              style={{ minHeight: "320px" }}
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}





