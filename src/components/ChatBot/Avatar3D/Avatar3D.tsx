"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Html } from '@react-three/drei';
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
    <group ref={headRef} position={[0, 0.1, 0]}>
      {/* Cabelo - feminino elegante */}
      <mesh position={[0, 0.62, 0.1]} castShadow>
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshStandardMaterial color="#2C1810" roughness={0.8} metalness={0.1} />
      </mesh>
      
      {/* Cabelo - volume lateral */}
      <mesh position={[-0.3, 0.55, 0]} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#2C1810" roughness={0.8} metalness={0.1} />
      </mesh>
      <mesh position={[0.3, 0.55, 0]} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#2C1810" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Cabeça */}
      <mesh castShadow>
        <sphereGeometry args={[0.35, 64, 64]} />
        <meshStandardMaterial 
          color="#F5D0B8" 
          roughness={0.4} 
          metalness={0.05}
        />
      </mesh>

      {/* Pescoço */}
      <mesh position={[0, -0.35, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.2, 0.15, 16]} />
        <meshStandardMaterial color="#F5D0B8" roughness={0.4} />
      </mesh>

      {/* Olhos */}
      <group position={[0, 0.15, 0.32]}>
        {/* Branco dos olhos */}
        <mesh position={[-0.12, 0, 0]} castShadow>
          <sphereGeometry args={[0.07, 32, 32]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.1} metalness={0.05} />
        </mesh>
        <mesh position={[0.12, 0, 0]} castShadow>
          <sphereGeometry args={[0.07, 32, 32]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.1} metalness={0.05} />
        </mesh>

        {/* Íris - olhos castanhos/escuros */}
        <mesh position={[-0.12, 0, 0.08]} castShadow>
          <sphereGeometry args={[0.045, 32, 32]} />
          <meshStandardMaterial color="#3D1F0A" roughness={0.2} metalness={0.1} />
        </mesh>
        <mesh position={[0.12, 0, 0.08]} castShadow>
          <sphereGeometry args={[0.045, 32, 32]} />
          <meshStandardMaterial color="#3D1F0A" roughness={0.2} metalness={0.1} />
        </mesh>

        {/* Brilho nos olhos */}
        <mesh position={[-0.1, 0.03, 0.1]} castShadow>
          <sphereGeometry args={[0.015, 16, 16]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0.14, 0.03, 0.1]} castShadow>
          <sphereGeometry args={[0.015, 16, 16]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} />
        </mesh>

        {/* Pálpebras para piscar */}
        <mesh 
          ref={eyeLidRef}
          position={[-0.12, 0, 0.08]}
          scale={[1, isBlinking ? 0.1 : 1, 1]}
        >
          <sphereGeometry args={[0.07, 32, 32]} />
          <meshStandardMaterial color="#F5D0B8" roughness={0.4} />
        </mesh>
        <mesh 
          position={[0.12, 0, 0.08]}
          scale={[1, isBlinking ? 0.1 : 1, 1]}
        >
          <sphereGeometry args={[0.07, 32, 32]} />
          <meshStandardMaterial color="#F5D0B8" roughness={0.4} />
        </mesh>
      </group>

      {/* Sobrancelhas */}
      <mesh position={[-0.12, 0.22, 0.32]} rotation={[-0.1, 0, 0.1]}>
        <boxGeometry args={[0.08, 0.015, 0.015]} />
        <meshStandardMaterial color="#2C1810" roughness={0.9} />
      </mesh>
      <mesh position={[0.12, 0.22, 0.32]} rotation={[-0.1, 0, -0.1]}>
        <boxGeometry args={[0.08, 0.015, 0.015]} />
        <meshStandardMaterial color="#2C1810" roughness={0.9} />
      </mesh>

      {/* Nariz */}
      <mesh position={[0, -0.02, 0.38]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#E8C4A8" roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.06, 0.4]} castShadow>
        <sphereGeometry args={[0.025, 16, 16]} />
        <meshStandardMaterial color="#E8C4A8" roughness={0.4} />
      </mesh>

      {/* Boca */}
      <mesh 
        ref={mouthRef}
        position={[0, -0.12, 0.36]} 
        scale={[1, isSmiling || isTalking ? 1.3 : 0.5, 1]}
      >
        <torusGeometry args={[0.05, 0.015, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#A66B5A" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Bochechas - blush */}
      <mesh position={[-0.18, -0.05, 0.28]} castShadow>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#E8A0A0" transparent opacity={0.3} roughness={0.5} />
      </mesh>
      <mesh position={[0.18, -0.05, 0.28]} castShadow>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#E8A0A0" transparent opacity={0.3} roughness={0.5} />
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
      <div className="relative h-28 w-28 overflow-hidden rounded-full bg-gradient-to-br from-blue-900/80 via-indigo-800/60 to-purple-900/80 shadow-2xl shadow-blue-500/30 ring-2 ring-blue-400/40">
        <Canvas camera={{ position: [0, 0.1, 1.2], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <directionalLight position={[-1, 1, -1]} intensity={0.3} color="#8888ff" />
          <pointLight position={[0, 0.5, 1]} intensity={0.5} color="#4488ff" />
          
          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.2}>
            <HumanHead 
              isBlinking={isBlinking} 
              isSmiling={isSmiling || isHovered}
              isTalking={isTalking}
            />
          </Float>
          
          <Environment preset="city" />
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