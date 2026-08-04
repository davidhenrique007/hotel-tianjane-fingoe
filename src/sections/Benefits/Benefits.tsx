"use client";

import { motion } from 'framer-motion';
import { BedDouble, Clock3, HandHeart, ShieldCheck, Smile } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { RiverLineMark } from '../../components/Motif/RiverLine';

const benefits = [
  { icon: ShieldCheck, text: 'Durma tranquilo, num ambiente seguro dia e noite' },
  { icon: HandHeart, text: 'Tenha um atendimento próximo e verdadeiramente personalizado' },
  { icon: BedDouble, text: 'Aproveite o conforto que a sua viagem merece' },
  { icon: Clock3, text: 'Economize tempo: reserva simples, direto pelo WhatsApp' },
  { icon: Smile, text: 'Viva uma experiência acolhedora do início ao fim' },
];

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-forest py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-50" />
      <div className="container-page relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Por que escolher o Tianjane Fingoe"
          title="O que muda na sua estadia"
          align="center"
          light
        />

        <div className="mx-auto grid max-w-5xl gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="flex flex-col items-center gap-4 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold">
                <benefit.icon size={24} strokeWidth={1.5} />
              </span>
              <p className="text-sm leading-relaxed text-cream/85">{benefit.text}</p>
            </motion.div>
          ))}
        </div>

        <RiverLineMark className="mx-auto mt-4 h-8 w-40 opacity-60" color="#E8D5A8" />
      </div>
    </section>
  );
}
