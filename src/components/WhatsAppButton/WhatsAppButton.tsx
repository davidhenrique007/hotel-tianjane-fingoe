"use client";

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../../data/site';

/**
 * Botão fixo de WhatsApp — visível em todas as páginas para reduzir a
 * distância entre "interesse" e "reserva". Aparece com atraso para não
 * competir com o Hero no primeiro segundo de carregamento.
 */
export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink('Olá! Gostaria de saber mais sobre disponibilidade no Hotel Tianjane Fingoe.')}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Falar pelo WhatsApp"
      className="group fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-forest px-5 py-4 text-cream shadow-soft transition-colors hover:bg-forest-light md:py-3.5"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-forest-light/60 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
      <MessageCircle size={22} strokeWidth={2} />
      <span className="hidden text-sm font-semibold md:inline">Fale connosco</span>
    </motion.a>
  );
}
