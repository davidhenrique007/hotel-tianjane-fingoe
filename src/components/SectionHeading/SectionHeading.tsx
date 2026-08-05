"use client";

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

/**
 * Cabeçalho de secção padronizado: rótulo (eyebrow) + título + descrição opcional.
 * `light` inverte as cores para uso sobre fundos escuros (ex. floresta).
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}
    >
      <span className={`eyebrow flex items-center gap-2.5 ${light ? 'text-gold-light' : ''} ${align === 'center' ? 'justify-center' : ''}`}>
        <span className={`h-px w-6 ${light ? 'bg-gold-light/60' : 'bg-clay/50'}`} aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className={`text-3xl md:text-[2.6rem] leading-[1.1] font-medium ${light ? 'text-cream' : 'text-forest'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${light ? 'text-cream/80' : 'text-charcoal/70'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
