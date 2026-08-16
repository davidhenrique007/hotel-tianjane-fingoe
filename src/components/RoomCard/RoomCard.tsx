"use client";

import { motion } from 'framer-motion';
import { Check, Users } from 'lucide-react';
import type { Room } from '../../types';
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import { whatsappLink } from '../../data/site';

interface RoomCardProps {
  room: Room;
  index: number;
}

export default function RoomCard({ room, index }: RoomCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-card transition-all duration-500 sm:rounded-2xl hover:-translate-y-1.5 hover:shadow-elevated"
    >
      <span className="pointer-events-none absolute -right-8 -top-8 z-10 h-28 w-28 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/25" />
      <div className="overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-105">
          <ImagePlaceholder label={room.imageLabel} aspect="landscape" className="rounded-none" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-3 sm:gap-4 sm:p-5 md:p-7">
        <div>
          <span className="eyebrow">{room.tagline}</span>
          <h3 className="mt-1 text-lg font-medium leading-tight text-forest sm:text-xl md:text-2xl">{room.name}</h3>
        </div>

        <p className="text-xs leading-relaxed text-charcoal/70 sm:text-[15px]">{room.description}</p>

        <ul className="flex flex-col gap-2.5">
          {room.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5 text-sm text-charcoal/80">
              <Check size={16} className="mt-0.5 shrink-0 text-clay" strokeWidth={2.5} />
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-charcoal/10 pt-4">
          <span className="flex items-center gap-1.5 text-xs text-charcoal/60">
            <Users size={15} />
            {room.capacity}
          </span>
          <a
            href={whatsappLink(`OlÃ¡! Gostaria de consultar disponibilidade para o ${room.name} no Hotel Tianjane Fingoe.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors hover:text-clay"
          >
            Consultar disponibilidade
            <span className="transition-transform duration-300 group-hover/link:translate-x-1">â†’</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}


