"use client";

// src/sections/Hero/Hero.tsx
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { siteConfig, whatsappLink } from '../../data/site';
import { RiverLineDivider } from '../../components/Motif/RiverLine';
import Button from '../../components/Button/Button';

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-forest-ink">

      {/* VÍDEO DE FUNDO */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover">
          <source src="/videos/hotel-hero.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY ESCURO PARA LEGIBILIDADE DO TEXTO */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-charcoal/55 via-charcoal/20 to-forest-ink/70 lg:bg-gradient-to-r lg:from-forest-ink/85 lg:via-charcoal/35 lg:to-transparent" />

        {/* LUZ AMBIENTE — dois brilhos suaves que respiram lentamente sobre o vídeo */}
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          <div className="animate-float-slow absolute -top-24 right-[8%] h-[26rem] w-[26rem] rounded-full bg-gold/20 blur-[110px] mix-blend-screen" />
          <div className="animate-float-slower absolute bottom-[-8rem] left-[12%] h-[22rem] w-[22rem] rounded-full bg-forest-light/25 blur-[100px] mix-blend-screen" />
        </div>

        {/* TEXTURA DE GRÃO SUTIL */}
        <div className="bg-grain pointer-events-none absolute inset-0 z-10 opacity-40" />

        {/* ASSINATURA — a linha do rio Zambeze desenhada ao ligar a página */}
        <svg
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMaxYMid slice"
          className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full opacity-[0.16] lg:block"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="riverGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6CA695" />
              <stop offset="100%" stopColor="#E4C765" />
            </linearGradient>
          </defs>
          <motion.path
            d="M120 60 C 420 160, 260 320, 560 380 S 980 420, 860 600 S 1040 760, 1160 740"
            fill="none"
            stroke="url(#riverGradientHero)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, ease: 'easeInOut', delay: 0.3 }}
          />
        </svg>
      </div>

      {/* CONTEÚDO SOBREPOSTO */}
      <div className="container-page relative z-20 py-28 md:py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-7"
          >
            <span className="glass-panel flex w-fit items-center gap-2 rounded-full py-2 pl-3 pr-4 text-xs uppercase tracking-widest2 text-gold-light">
              <MapPin size={14} />
              Fingoe · Marávia · Tete
            </span>

            <h1 className="text-4xl leading-[1.08] text-cream sm:text-5xl md:text-[3.4rem]">
              Uma estadia confortável no coração de <span className="text-gold italic">Fingoe</span>
            </h1>

            <p className="max-w-md text-base leading-relaxed text-cream/80 md:text-lg">
              Quartos cuidados, atendimento próximo e um ambiente tranquilo para descansar, trabalhar ou receber a sua família — no ponto certo de Marávia, Tete.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={whatsappLink('Olá! Gostaria de reservar um quarto no Hotel Tianjane Fingoe.')}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ArrowRight size={17} />}
              >
                Reserve o seu quarto
              </Button>
              <Button href="#quartos" variant="outline">
                Ver quartos e tarifas
              </Button>
            </div>

            <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-cream/10 pt-7 sm:gap-4">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="glass-panel flex flex-col gap-1 rounded-xl px-4 py-3">
                  <dt className="font-display text-2xl text-gold">{stat.value}</dt>
                  <dd className="text-xs leading-snug text-cream/65">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-widest2 text-cream/50">Explorar</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-gold-light/80 to-transparent"
        />
      </motion.div>

      <RiverLineDivider className="absolute bottom-0 left-0 z-20 h-16 w-full opacity-40" color="#C9A66B" />
    </section>
  );
}
