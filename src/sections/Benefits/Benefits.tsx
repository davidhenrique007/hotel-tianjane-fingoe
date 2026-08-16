"use client";

import { motion } from 'framer-motion';
import { BedDouble, Clock3, HandHeart, ShieldCheck, Smile } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { RiverLineMark, FireflyField } from '../../components/Motif/RiverLine';

const benefits = [
  { icon: ShieldCheck, text: 'Durma tranquilo, num ambiente seguro dia e noite' },
  { icon: HandHeart, text: 'Tenha um atendimento prÃ³ximo e verdadeiramente personalizado' },
  { icon: BedDouble, text: 'Aproveite o conforto que a sua viagem merece' },
  { icon: Clock3, text: 'Economize tempo: reserva simples, direto pelo WhatsApp' },
  { icon: Smile, text: 'Viva uma experiÃªncia acolhedora do inÃ­cio ao fim' },
];

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest via-forest to-forest-dark py-14 md:py-24">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-50" />
      <div className="animate-float-slower pointer-events-none absolute -top-32 left-1/4 h-[24rem] w-[24rem] rounded-full bg-gold/10 blur-[120px]" />
      <FireflyField className="opacity-70" />
      <div className="container-page relative flex flex-col gap-8 md:gap-12">
        <SectionHeading
          eyebrow="Por que escolher o Tianjane Fingoe"
          title="O que muda na sua estadia"
          align="center"
          light
        />

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-10 sm:gap-y-8 lg:grid-cols-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group flex flex-col items-center gap-3 text-center sm:gap-4"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10 sm:h-14 sm:w-14">
                <benefit.icon size={21} strokeWidth={1.5} />
              </span>
              <p className="text-xs leading-relaxed text-cream/85 sm:text-sm">{benefit.text}</p>
            </motion.div>
          ))}
        </div>

        <RiverLineMark className="mx-auto mt-4 h-8 w-40 opacity-60" color="#E8D5A8" />
      </div>
    </section>
  );
}


