import { motion } from 'framer-motion';
import {
  Wifi,
  ConciergeBell,
  Car,
  Utensils,
  Bell,
  ShieldCheck,
  CalendarHeart,
  CarFront,
  type LucideIcon,
} from 'lucide-react';
import type { Service } from '../../types';

const iconMap: Record<string, LucideIcon> = {
  wifi: Wifi,
  'concierge-bell': ConciergeBell,
  car: Car,
  utensils: Utensils,
  bell: Bell,
  'shield-check': ShieldCheck,
  'calendar-heart': CalendarHeart,
  'car-front': CarFront,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Bell;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      className="flex flex-col gap-4 rounded-2xl border border-forest/10 bg-white/60 p-6 transition-colors hover:bg-white hover:border-gold/40"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-gold-light">
        <Icon size={22} strokeWidth={1.75} />
      </span>
      <h3 className="text-lg font-medium text-forest">{service.name}</h3>
      <p className="text-sm leading-relaxed text-charcoal/70">{service.description}</p>
    </motion.div>
  );
}
