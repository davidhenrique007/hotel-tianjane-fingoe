"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface ConciergeProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function Concierge({ onClick, isOpen }: ConciergeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [showMessage, setShowMessage] = useState<string | null>(null);

  // Piscar a cada 4 segundos
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Aceno a cada 15 segundos
  useEffect(() => {
    const waveInterval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 800);
    }, 15000);
    return () => clearInterval(waveInterval);
  }, []);

  // Mensagem de boas-vindas
  useEffect(() => {
    setTimeout(() => {
      setShowMessage("Olá! Posso ajudar? ✨");
      setTimeout(() => setShowMessage(null), 4000);
    }, 3000);
  }, []);

  // Detectar secção de quartos
  useEffect(() => {
    const handleScroll = () => {
      const rooms = document.getElementById('quartos');
      if (rooms) {
        const rect = rooms.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.top > 0) {
          setShowMessage("Conheça nossos quartos! 🏨");
          setTimeout(() => setShowMessage(null), 4000);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 cursor-pointer select-none"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow externo - estilo Cortana */}
      <motion.div
        className="absolute -inset-8 rounded-full bg-blue-400/20 blur-3xl"
        animate={{
          scale: isHovered ? 1.4 : 1,
          opacity: isHovered ? 0.9 : 0.5,
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Anel de luz pulsante - estilo Cortana */}
      <motion.div
        className="absolute -inset-4 rounded-full border-2 border-blue-400/30"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      {/* Avatar */}
      <motion.div
        className="relative h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 via-indigo-400 to-purple-400 shadow-xl shadow-blue-500/30 ring-2 ring-blue-300/50"
        animate={{
          y: isHovered ? -8 : 0,
          boxShadow: isHovered
            ? "0 20px 60px -10px rgba(59,130,246,0.6)"
            : "0 12px 34px -10px rgba(59,130,246,0.4)",
        }}
        transition={{ duration: 0.4, type: "spring" }}
      >
        {/* Brilho interno - estilo holográfico */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-white/10"
          animate={{
            opacity: isHovered ? [0.3, 0.7, 0.3] : [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Partículas flutuantes (Cortana style) */}
        <motion.div
          className="absolute -top-2 left-1/4 h-1 w-1 rounded-full bg-blue-300/60"
          animate={{ y: [0, -6, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-1/4 right-1 h-1 w-1 rounded-full bg-purple-300/60"
          animate={{ y: [0, -8, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-2 left-2 h-0.5 w-0.5 rounded-full bg-blue-200/60"
          animate={{ y: [0, -5, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
        />

        {/* Rosto minimalista */}
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Olhos (estilo Cortana - pontos de luz) */}
          <div className="flex gap-4">
            <motion.div
              className="relative h-3 w-3 rounded-full bg-white/90 shadow-lg shadow-blue-400/50"
              animate={{ scaleY: isBlinking ? 0.1 : 1 }}
              transition={{ duration: 0.1 }}
            >
              <div className="absolute inset-0 rounded-full bg-blue-300 blur-sm" />
            </motion.div>
            <motion.div
              className="relative h-3 w-3 rounded-full bg-white/90 shadow-lg shadow-blue-400/50"
              animate={{ scaleY: isBlinking ? 0.1 : 1 }}
              transition={{ duration: 0.1 }}
            >
              <div className="absolute inset-0 rounded-full bg-blue-300 blur-sm" />
            </motion.div>
          </div>

          {/* Sorriso sutil */}
          <motion.div
            className="absolute bottom-3 left-1/2 -translate-x-1/2"
            animate={{
              scaleY: isHovered ? 1.3 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <svg width="14" height="6" viewBox="0 0 14 6">
              <motion.path
                d="M2 1 C5 4, 9 4, 12 1"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={{ pathLength: isHovered ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              />
            </svg>
          </motion.div>
        </div>

        {/* Braço (aceno) */}
        <motion.div
          className="absolute -right-3 top-1/2 origin-bottom"
          animate={{
            rotate: isWaving || isHovered ? [0, -35, 0, -25, 0] : 0,
          }}
          transition={{
            duration: 0.9,
            repeat: isWaving || isHovered ? 1 : 0,
            ease: "easeInOut",
          }}
        >
          <div className="h-7 w-1.5 rounded-full bg-blue-300/60 ring-1 ring-blue-400/30" />
          <div className="mt-0.5 h-3 w-1.5 rounded-full bg-blue-300/60" />
        </motion.div>
      </motion.div>

      {/* Bolha de mensagem */}
      <AnimatePresence>
        {showMessage && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-white/90 px-4 py-2.5 text-sm font-medium text-gray-800 shadow-xl backdrop-blur-sm"
          >
            {showMessage}
            <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white/90" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Indicador online */}
      <motion.div
        className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-emerald-400 ring-2 ring-white"
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}
