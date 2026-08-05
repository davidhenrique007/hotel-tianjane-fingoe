"use client";

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
      className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-forest/10 bg-white/70 p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-elevated"
    >
      <span className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/25" />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-forest to-forest-dark text-gold-light ring-1 ring-gold/20 transition-transform duration-300 group-hover:scale-105">
        <Icon size={22} strokeWidth={1.75} />
      </span>
      <h3 className="text-lg font-medium text-forest">{service.name}</h3>
      <p className="text-sm leading-relaxed text-charcoal/70">{service.description}</p>
    </motion.div>
  );
}

