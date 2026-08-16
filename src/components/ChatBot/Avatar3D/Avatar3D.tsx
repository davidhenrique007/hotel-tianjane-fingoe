"use client";

import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

// Componente do rosto 3D humano
function HumanHead({ isBlinking, isSmiling, isTalking }: { 
  isBlinking: boolean; 
  isSmiling: boolean;
  isTalking: boolean;
}) {
  const headRef = useRef<THREE.Group>(null);
  const eyeLidRef = useRef<THREE.Mesh>(null);
  const mouthRef = useRef<THREE.Mesh>(null);

  // Animação de respiração
  useEffect(() => {
    if (headRef.current) {
      const interval = setInterval(() => {
        headRef.current?.position.set(
          0,
          Math.sin(Date.now() / 2000) * 0.03 + 0.1,
          0
        );
      }, 50);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <group ref={headRef} position={[0, 0.08, 0]}>
      {/* Dois pequenos chifres/topos (estilizados) para coincidir com a 2ª imagem */}
      <mesh position={[-0.12, 0.42, 0.06]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#FFF7F2" roughness={0.4} metalness={0.02} />
      </mesh>
      <mesh position={[0.12, 0.42, 0.06]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#FFF7F2" roughness={0.4} metalness={0.02} />
      </mesh>

      {/* Cabeça: esfera maior, muito suave e clara */}
      <mesh castShadow>
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshStandardMaterial color="#FFF7F2" roughness={0.32} metalness={0.02} />
      </mesh>

      {/* Olhos simplificados: riscos horizontais */}
      <mesh position={[-0.09, 0.06, 0.45]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.14, 0.008, 0.02]} />
        <meshStandardMaterial color="#262626" roughness={0.25} />
      </mesh>
      <mesh position={[0.09, 0.06, 0.45]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.14, 0.008, 0.02]} />
        <meshStandardMaterial color="#262626" roughness={0.25} />
      </mesh>

      {/* Bochechas grandes e redondas */}
      <mesh position={[-0.18, -0.02, 0.36]} castShadow>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#F4A0A8" transparent opacity={0.6} roughness={0.45} />
      </mesh>
      <mesh position={[0.18, -0.02, 0.36]} castShadow>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#F4A0A8" transparent opacity={0.6} roughness={0.45} />
      </mesh>

      {/* Boca pequena */}
      <mesh position={[0, -0.12, 0.44]}> 
        <boxGeometry args={[0.06, 0.006, 0.02]} />
        <meshStandardMaterial color="#C17E72" roughness={0.3} />
      </mesh>
    </group>
  );
}

// Componente principal do Avatar 3D
export default function Avatar3D({ 
  onClick, 
  isOpen,
  isHovered 
}: { 
  onClick: () => void; 
  isOpen: boolean;
  isHovered: boolean;
}) {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isSmiling, setIsSmiling] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [showMessage, setShowMessage] = useState<string | null>(null);

  // Piscar
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Sorriso no hover
  useEffect(() => {
    setIsSmiling(isHovered);
  }, [isHovered]);

  // Fala simulada
  useEffect(() => {
    const talkInterval = setInterval(() => {
      setIsTalking(true);
      setTimeout(() => setIsTalking(false), 2000);
    }, 8000);
    return () => clearInterval(talkInterval);
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
      {/* Glow holográfico */}
      <motion.div
        className="absolute -inset-10 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.8 : 0.4,
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Anel de luz */}
      <motion.div
        className="absolute -inset-5 rounded-full border-2 border-blue-400/30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      {/* Canvas 3D */}
      <div className="relative h-28 w-28 overflow-hidden rounded-full bg-gradient-to-br from-purple-800/80 via-pink-700/40 to-indigo-900/60 shadow-2xl shadow-pink-400/25 ring-2 ring-pink-300/30">
        <Canvas camera={{ position: [0, 0.05, 1.0], fov: 50 }}>
          <ambientLight intensity={0.65} color="#fff1e8" />
          <directionalLight position={[2, 2, 2]} intensity={0.9} color="#ffd7b5" />
          <directionalLight position={[-1, 1, -1]} intensity={0.35} color="#e6c6ff" />
          <pointLight position={[0, 0.6, 1]} intensity={0.6} color="#ffb3a7" />
          
          <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.16}>
            <HumanHead 
              isBlinking={isBlinking} 
              isSmiling={isSmiling || isHovered}
              isTalking={isTalking}
            />
          </Float>
        </Canvas>

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
      </div>

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