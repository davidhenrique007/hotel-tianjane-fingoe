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
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card"
    >
      <ImagePlaceholder label={room.imageLabel} aspect="landscape" className="rounded-none" />

      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <div>
          <span className="eyebrow">{room.tagline}</span>
          <h3 className="mt-1 text-2xl font-medium text-forest">{room.name}</h3>
        </div>

        <p className="text-charcoal/70 text-[15px] leading-relaxed">{room.description}</p>

        <ul className="flex flex-col gap-2.5">
          {room.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5 text-sm text-charcoal/80">
              <Check size={16} className="mt-0.5 shrink-0 text-clay" strokeWidth={2.5} />
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-charcoal/10">
          <span className="flex items-center gap-1.5 text-xs text-charcoal/60">
            <Users size={15} />
            {room.capacity}
          </span>
          <a
            href={whatsappLink(`Olá! Gostaria de consultar disponibilidade para o ${room.name} no Hotel Tianjane Fingoe.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-forest hover:text-clay transition-colors"
          >
            Consultar disponibilidade →
          </a>
        </div>
      </div>
    </motion.article>
  );
}
