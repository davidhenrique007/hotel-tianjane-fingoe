"use client";

import { motion } from 'framer-motion';
import { Car, MapPin, Navigation, Phone } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { siteConfig, whatsappLink } from '../../data/site';

const nearby = [
  'Centro de Fingoe — poucos minutos de distância',
  'Principais vias de acesso à Marávia',
  'Rota para outras localidades da Província de Tete',
];

export default function Location() {
  return (
    <section id="localizacao" className="bg-cream py-24 md:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Localização"
            title="Localização estratégica em Fingoe"
            description="Fácil de encontrar, fácil de chegar. Estamos posicionados para servir quem viaja por Fingoe e por toda a região de Marávia."
          />

          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/8 text-clay ring-1 ring-forest/10">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-forest">Endereço</p>
                <p className="text-sm text-charcoal/70">{siteConfig.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/8 text-clay ring-1 ring-forest/10">
                <Navigation size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-forest">Pontos próximos</p>
                <ul className="mt-1 flex flex-col gap-1 text-sm text-charcoal/70">
                  {nearby.map((point) => (
                    <li key={point}>{point}</li>
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
                  Envie-nos a sua localização de partida pelo WhatsApp e ajudamos a planear o melhor
                  trajeto até ao hotel.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-charcoal/10 pt-6 sm:flex-row">
            <a
              href={whatsappLink('Olá! Preciso de indicações para chegar ao Hotel Tianjane Fingoe.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-forest"
            >
              Pedir indicações
            </a>
            <a href={`tel:+${siteConfig.whatsappNumber}`} className="btn-outline !text-forest !border-forest/30 hover:!bg-forest/5">
              <Phone size={16} />
              Ligar agora
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-2xl shadow-elevated ring-1 ring-forest/10"
        >
          <iframe
            title="Localização do Hotel Tianjane Fingoe"
            src="https://www.google.com/maps?q=Fingoe,+Marávia,+Tete,+Moçambique&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
