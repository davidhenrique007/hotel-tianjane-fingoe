"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface AvatarProps {
  onClick: () => void;
  isOpen: boolean;
  isHovered: boolean;
}

export default function Avatar3D({ onClick, isOpen, isHovered }: AvatarProps) {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [showMessage, setShowMessage] = useState<string | null>(null);

  // Piscar
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Aceno
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
      setShowMessage("Olá! Sou sua assistente virtual ✨");
      setTimeout(() => setShowMessage(null), 4000);
    }, 2500);
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 cursor-pointer select-none"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow externo - estilo Cortana */}
      <motion.div
        className="absolute -inset-8 rounded-full bg-blue-500/20 blur-3xl"
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

      {/* Avatar - Rosto humano premium */}
      <motion.div
        className="relative h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 via-indigo-400 to-purple-400 shadow-xl shadow-blue-500/30 ring-2 ring-blue-300/50"
        animate={{
          y: isHovered ? -8 : 0,
          boxShadow: isHovered
            ? "0 20px 60px -10px rgba(59,130,246,0.6)"
            : "0 12px 34px -10px rgba(59,130,246,0.4)",
        }}
        transition={{ duration: 0.4, type: "spring" }}
      >
        {/* Fundo holográfico */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/20" />

        {/* Partículas flutuantes */}
        <motion.div
          className="absolute -top-2 left-1/4 h-1 w-1 rounded-full bg-blue-300/60"
          animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-1/4 right-2 h-1 w-1 rounded-full bg-purple-300/60"
          animate={{ y: [0, -12, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-3 left-3 h-0.5 w-0.5 rounded-full bg-blue-200/60"
          animate={{ y: [0, -8, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
        />

        {/* Rosto humano estilizado */}
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Forma da cabeça */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-b from-[#F5D0B8] to-[#E8C4A8] shadow-inner" />

          {/* Cabelo - feminino elegante */}
          <div className="absolute -top-1 left-1/2 h-10 w-16 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#2C1810] to-[#1A0E08]" />
          <div className="absolute -left-1 top-3 h-8 w-6 rounded-full bg-[#2C1810]" />
          <div className="absolute -right-1 top-3 h-8 w-6 rounded-full bg-[#2C1810]" />

          {/* Olhos */}
          <div className="absolute left-1/2 top-1/3 flex -translate-x-1/2 gap-4">
            {/* Olho esquerdo */}
            <motion.div
              className="relative h-3.5 w-3.5 rounded-full bg-white shadow-lg"
              animate={{ scaleY: isBlinking ? 0.1 : 1 }}
              transition={{ duration: 0.1 }}
            >
              <div className="absolute inset-0.5 rounded-full bg-[#3D1F0A]" />
              <div className="absolute -top-0.5 left-1 h-1.5 w-1.5 rounded-full bg-white/80" />
            </motion.div>
            {/* Olho direito */}
            <motion.div
              className="relative h-3.5 w-3.5 rounded-full bg-white shadow-lg"
              animate={{ scaleY: isBlinking ? 0.1 : 1 }}
              transition={{ duration: 0.1 }}
            >
              <div className="absolute inset-0.5 rounded-full bg-[#3D1F0A]" />
              <div className="absolute -top-0.5 left-1 h-1.5 w-1.5 rounded-full bg-white/80" />
            </motion.div>
          </div>

          {/* Sobrancelhas */}
          <div className="absolute left-[34px] top-[18px] h-0.5 w-4 rounded-full bg-[#2C1810] rotate-[-8deg]" />
          <div className="absolute right-[34px] top-[18px] h-0.5 w-4 rounded-full bg-[#2C1810] rotate-[8deg]" />

          {/* Nariz */}
          <div className="absolute left-1/2 top-[42%] h-3 w-2 -translate-x-1/2 rounded-full bg-[#E8C4A8]" />
          <div className="absolute left-1/2 top-[45%] h-2 w-3 -translate-x-1/2 rounded-full bg-[#E8C4A8]" />

          {/* Boca */}
          <motion.div
            className="absolute bottom-[26%] left-1/2 -translate-x-1/2"
            animate={{
              scaleY: isHovered ? 1.3 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <svg width="16" height="8" viewBox="0 0 16 8">
              <motion.path
                d="M2 2 C5 6, 11 6, 14 2"
                fill="none"
                stroke="#A66B5A"
                strokeWidth="1.8"
                strokeLinecap="round"
                animate={{ pathLength: isHovered ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              />
            </svg>
          </motion.div>

          {/* Bochechas */}
          <div className="absolute bottom-[30%] left-[6px] h-3 w-3 rounded-full bg-pink-300/30 blur-[2px]" />
          <div className="absolute bottom-[30%] right-[6px] h-3 w-3 rounded-full bg-pink-300/30 blur-[2px]" />
        </div>

        {/* Braço (aceno) */}
        <motion.div
          className="absolute -right-2 top-1/2 origin-bottom"
          animate={{
            rotate: isWaving || isHovered ? [0, -35, 0, -25, 0] : 0,
          }}
          transition={{
            duration: 0.9,
            repeat: isWaving || isHovered ? 1 : 0,
            ease: "easeInOut",
          }}
        >
          <div className="h-8 w-1.5 rounded-full bg-[#F5D0B8] ring-1 ring-blue-400/20" />
          <div className="mt-0.5 h-3 w-1.5 rounded-full bg-[#F5D0B8]" />
        </motion.div>

        {/* Brilho holográfico */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-white/10"
          animate={{
            opacity: isHovered ? [0.3, 0.7, 0.3] : [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Bolha de mensagem */}
      <AnimatePresence>
        {showMessage && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-white/95 px-4 py-2.5 text-sm font-medium text-gray-800 shadow-xl backdrop-blur-sm"
          >
            {showMessage}
            <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white/95" />
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
